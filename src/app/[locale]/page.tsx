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
      header: { image_path: "/assets/kards/logo404_2024.png" },
      body: {
        label: t("404_label"),
        title: t("404_title"),
        content: t("404_content"),
        link: "https://sckathach.github.io/404ctf/",
      },
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
      header_left: false,
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
function PGP() {
  const pgpKey = `
      mDMEZt9WuRYJKwYBBAHaRw8BAQdAhXvRbMovCT3Fsd4A1ExMCc3gtCUEL8rwq7aM
      i3kBy/20NUxlIG1hZ2ljaWVuIHF1YW50aXF1ZSA8bGVtYWdpY2llbnF1YW50aXF1
      ZUBnbWFpbC5jb20+iI4EExYKADYCGwMCF4AWIQQTi49X3zuMg5mwmiY3njq1Hu/1
      KQUCZt9XvgQLCQgHBRUKCQgLBBYCAwECHgUACgkQN546tR7v9SlC2gEAj5bj/Ciy
      uAM2aMvuJt89mW2WTuhMEuskNs5nSdO/cbcA/1F9JVo8S+vNeAbfIyS0kjcxxRDR
      xJqhlLp2kmlQvxoJuDgEZt9WuRIKKwYBBAGXVQEFAQEHQD7EfNBllzbbWCF4+XFP
      Y8wXHO+qSIefag4fHPN5f4s8AwEIB4h4BBgWCgAgFiEEE4uPV987jIOZsJomN546
      tR7v9SkFAmbfVrkCGwwACgkQN546tR7v9SlbrgEApfF3rjPoJAGjfMbIhE4zESa0
      26ykeFw8fEa8ZPXLvu0A/jhGA8vIQO89VL7uo5Q6xCgOzW95QC97XpzL/Za3l1EE 
      =TQuu
    `;

  return (
    <div>
      <h2>PGP</h2>
      <CodeBlock code={pgpKey} language="text" />
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
