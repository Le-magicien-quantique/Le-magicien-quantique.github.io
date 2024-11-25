"use client";
import { Typography, Button } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

export function Footer() {
  const locale = useLocale();
  const [currentLocale, _] = useState(locale);

  const t = useTranslations("Footer");
  const NAV_MENU = [
    { label: t("home") },
    { label: t("about"), link: `/${currentLocale}/about` },
    { label: t("docs"), link: `https://sckathach.github.io`, blank: true },
    { label: t("pgp"), link: "/lemagicienquantique.asc", blank: true }
  ];
  const signature = "/lemagicienquantique.asc";
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="font-normal text-gray-700 hover:text-gray-900 transition-colors">
            <a href={signature} className="inline-block" download>
              {t("pgp")}
            </a>
          </Typography>

          <ul className="flex gap-8 items-center">
            {NAV_MENU.map((item) => (
              <li key={item.link}>
                <Typography
                  as="a"
                  href={item.link}
                  target={item.blank ? "_blank" : undefined}
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
