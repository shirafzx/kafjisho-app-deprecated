FROM node:20.17.0-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN pnpm run build

# Production image, copy all the files and run next
FROM node:20.17.0-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy built assets from the base image
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Install only production dependencies
RUN corepack enable && pnpm install --prod

# Copy the standalone output
COPY --from=base /app/.next/standalone ./

EXPOSE 3000

# Set the command to run the standalone server
CMD ["node", "server.js"]