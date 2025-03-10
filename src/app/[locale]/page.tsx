"use client";
import { Navbar, Footer } from "@/components";
import CodeBlock from "@/components/code";
import { useTranslations } from "next-intl";
import { Typography } from "@material-tailwind/react";
import { Kard } from "@/components/kard";
import ScrollDownArrow from "@/components/arrow";
import React, { useState } from "react";
import "../globals.css";

function Kards() {
  const t = useTranslations("Kards");
  const KARDS = [
    {
      header: { image_path: "/assets/kards/ssr_schema_screenshot.png" },
      body: {
        label: t("ssr_label"),
        title: t("ssr_title"),
        content: t("ssr_content"),
        link: "https://sckathach.github.io/mech-interp/subspace-rerouting/",
      },
      header_left: false,
    },
    {
      header: { image_path: "/assets/kards/migcg.png" },
      body: {
        label: t("migcg_label"),
        title: t("migcg_title"),
        content: t("migcg_content"),
        link: "https://sckathach.github.io/mech-interp/exploring-adversarial-mi/",
      },
    },
    {
      header: { image_path: "/assets/kards/logo404_2024.png" },
      body: {
        label: t("404_label"),
        title: t("404_title"),
        content: t("404_content"),
        link: "https://sckathach.github.io/404ctf/",
      },
      header_left: false,
    },
    {
      header: { image_path: "/assets/logos/geopolitix.png" },
      body: {
        label: t("riyad_label"),
        title: t("riyad_title"),
        content: t("riyad_content"),
        link: "/assets/articles/riyad.pdf",
        signature: "/assets/articles/riyad.pdf.asc",
        pdf: true,
      },
    },
  ];
  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
        {KARDS.map((props, idx) => (
          <Kard key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const t = useTranslations("Hero");
  const [showMessage, setShowMessage] = useState(true);
  return (
    <div className="relative w-full">
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto grid place-items-start h-max">
          <Typography variant="h1" color="blue-gray">
            <div
              onMouseEnter={() => {
                setShowMessage(false);
              }}
              onMouseLeave={() => {
                setShowMessage(true);
              }}
            >
              {showMessage ? (
                <div className="potra">Le magicien quantique</div>
              ) : (
                <div className="potra">{t("title")}</div>
              )}
            </div>
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl"
          >
            <i>{t("subtitle")}</i>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollDownArrow />
      <Kards />
      <Footer />
    </>
  );
}
