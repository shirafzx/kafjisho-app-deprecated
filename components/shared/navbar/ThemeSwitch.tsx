import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunFilledIcon, MoonFilledIcon } from "@/components/shared/Icons";
import { Spinner } from "@nextui-org/react";
import { flushSync } from "react-dom";
import { useIsSSR } from "@react-aria/ssr";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return <Spinner size="sm" color="default" className="size-auto" />;

  const onChange = async () => {
    await document.startViewTransition(() => {
      flushSync(() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      });
    }).ready;
    document.documentElement.animate({
      easing: "ease-in-out",
      pseudoElement: "::view-transition-new(root)",
    });
  };

  return (
    <>
      <button
        onClick={onChange}
        className="flex size-auto cursor-pointer items-center justify-center bg-transparent px-0 text-default-500 transition-opacity hover:opacity-80"
        aria-label={`Switch to ${
          theme === "light" || isSSR ? "dark" : "light"
        } mode`}
      >
        {theme === "dark" ? (
          <SunFilledIcon size={22} />
        ) : (
          <MoonFilledIcon size={22} />
        )}
      </button>
    </>
  );
};

export default ThemeSwitch;
