"use client";

import { Icon } from "@iconify/react";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import React from "react";

export default function About() {
  const faqs = [
    {
      title: "What is Acme?",
      content:
        "Acme is a design system for building performant, accessible and beautiful web experiences.",
    },
    {
      title: "How can I apply to the Open Source Discount?",
      content:
        "The Open Source Discount is available for everyone who is building an open source project. You can apply to the discount by sending an email to support@acme.com",
    },
    {
      title: "Can I use Acme for my freelance projects?",
      content:
        "Yes, you can use Acme for your freelance projects. You can purchase the Freelancer License from our website.",
    },
    {
      title: "What is your refund policy?",
      content:
        "We do not provide refunds. However, we can help you with any issues you may have.",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:py-32 md:px-6 lg:px-8 lg:py-40">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8">
        <h2 className="w-full max-w-3xl bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text px-2 text-center text-3xl font-bold leading-7 tracking-tight text-transparent md:text-5xl">
          <span className="inline-block md:hidden">Acme&apos;s FAQs</span>
          <span className="hidden md:inline-block">
            Acme&apos;s Frequently asked questions
          </span>
        </h2>
        <div>
          <Button
            disableAnimation
            className="bg-gradient-to-br from-foreground to-foreground-600 font-medium text-background"
            endContent={<Icon icon="lucide:chevron-right" width={24} />}
            size="lg"
            variant="shadow"
          >
            Contact Us
          </Button>
        </div>
        <Accordion
          fullWidth
          keepContentMounted
          itemClasses={{
            base: "px-0 md:px-2 md:px-6",
            title: "font-medium",
            trigger: "py-6 flex-row-reverse",
            content: "pt-0 pb-6 text-base text-default-500",
            indicator: "rotate-0 data-[open=true]:-rotate-45",
          }}
          items={faqs}
          selectionMode="multiple"
        >
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              indicator={
                <Icon
                  className="text-secondary"
                  icon="lucide:plus"
                  width={24}
                />
              }
              title={item.title}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
