"use client";
import React from "react";
import { useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useTranslations, useLocale } from "next-intl";
import LocaleSwitcher from "@/components/locale-switcher";
import "./styles.css";

interface NavItemProps {
  label: string;
  link?: string;
  blank?: boolean;
}

function NavItem({ label, link, blank }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={link || "/"}
        target={blank ? "_blank" : undefined}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {label}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const locale = useLocale();
  const [currentLocale, _] = useState(locale);

  function handleOpen() {
    setOpen((cur) => !cur);
  }
  const t = useTranslations("Footer");
  const NAV_MENU = [
    { label: t("home") },
    { label: t("about"), link: `/${currentLocale}/about` },
    { label: t("docs"), link: `https://sckathach.github.io`, blank: true },
  ];

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  return (
    <MTNavbar
      fullWidth
      color="transparent"
      blurred={false}
      shadow={false}
      className="sticky top-0 z-50 border-0 bg-base"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          color="blue-gray"
          className="text-lg font-bold"
        >
          Thomas Winninger
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
        <LocaleSwitcher />
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
