"use client";

import type { NavbarProps } from "@nextui-org/react";
import {
  cn,
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Divider,
  link as linkStyles,
} from "@nextui-org/react";
import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import ThemeSwitch from "@/components/shared/navbar/ThemeSwitch";
import { MenuLinks } from "@/constants/menus";

import { DiscordIcon, TwitterIcon } from "../Icons";

const menuItems = [
  "About",
  "Blog",
  "Customers",
  "Pricing",
  "Enterprise",
  "Changelog",
  "Documentation",
  "Contact Us",
];

const Navbar = (props: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const pathname = usePathname();

  return (
    <NextNavbar
      {...props}
      classNames={{
        base: cn("border-default-100", {
          "bg-default-200/50 dark:bg-default-100/50": isMenuOpen,
        }),
        wrapper: "w-full justify-center",
        item: "hidden md:flex",
      }}
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left Content */}
      <NavbarBrand>
        <div className="rounded-full bg-foreground text-background">
          {/* <Image
            src="/assets/icons/kaf-jiro.png"
            alt="kaf-jiro"
            width={34}
            height={34}
          /> */}
          <h1 className="h2-bold size-8 text-center">花</h1>
        </div>
        <span className="ml-2 text-small font-medium">KAFJisho</span>
      </NavbarBrand>

      {/* Center Content */}
      <NavbarContent justify="center">
        {MenuLinks.map((item) => (
          <NavbarItem key={item.route} isActive={pathname === item.route}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:font-medium data-[active=true]:text-primary"
              )}
              color="foreground"
              href={item.route}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Content */}
      <NavbarContent className="flex" justify="end">
        <NavbarItem className="ml-2 !flex gap-2">
          <Link isExternal aria-label="Twitter" href="#">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href="#">
            <DiscordIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle className="text-default-400 md:hidden" />

      <NavbarMenu
        className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 py-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: {
            ease: "easeInOut",
            duration: 0.2,
          },
        }}
      >
        <NavbarMenuItem>
          <Button fullWidth as={Link} href="/#" variant="faded">
            Sign In
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-4">
          <Button
            fullWidth
            as={Link}
            className="bg-foreground text-background"
            href="/#"
          >
            Get Started
          </Button>
        </NavbarMenuItem>
        {MenuLinks.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            isActive={pathname === item.route}
          >
            <Link
              className="mb-2 w-full text-default-500"
              href={item.route}
              size="md"
            >
              {item.label}
            </Link>
            {index < menuItems.length - 1 && <Divider className="opacity-50" />}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextNavbar>
  );
};

export default Navbar;
