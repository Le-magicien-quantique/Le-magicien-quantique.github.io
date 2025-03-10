"use client";
import React from "react";
import {
  IconButton,
  Button,
  Typography,
  Card,
  CardHeader,
} from "@material-tailwind/react";
import { InfoCard, color } from "@/components/info-card";
import { Navbar, Footer } from "@/components";
import { useTranslations } from "next-intl";
import Skills from "@/components/skills";
import "../../../components/styles.css";
import { marked } from "marked";

interface T {
  base: string;
  label: string;
}

function T({ base, label }: T) {
  const t = useTranslations(base);
  return <span dangerouslySetInnerHTML={{ __html: marked(t(label)) }} />;
}

function T_({ label }: { label: string }) {
  return <T base="About" label={label} />;
}
function Connect() {
  const class_name = `rounded-md inline-block p-4 shadow-none bg-${color.Grad1}`;
  return (
    <div className="mt-5">
      <Card className={class_name}>
        <Typography className="text-blue-gray-900 font-medium uppercase">
          <T_ label="connect" />
        </Typography>
        <div className="gap-2 lg:flex">
          <a href="https://github.com/Sckathach">
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </a>
          <a href="https://discordapp.com/users/245269795539255296">
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-discord text-lg" />
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/thomas-winninger/">
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-linkedin text-lg" />
            </IconButton>
          </a>
          <a href="https://x.com/sckathach">
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
          </a>
        </div>
      </Card>
    </div>
  );
}

function Whoami() {
  const t = useTranslations("About");
  return (
    <>
      <section className="relative w-full">
        <div className="grid place-items-center min-h-[20vh] px-8">
          <div className="container mx-auto place-items-start mb-16">
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <div className="mb-5">
                  <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
                    <T_ label="title" />
                  </Typography>
                  <T_ label="subtitle" />
                </div>
                <div className="mb-5">
                  <T_ label="background" />
                </div>
                <div className="mb-5">
                  <T_ label="interests" />
                </div>
                <div className="mb-5">
                  <T_ label="paper" />
                </div>
                <Connect />
                <a href={t("cv")} className="inline-block" download>
                    <Button variant="text" className="flex items-center gap-2">
                      <T_ label="download_cv" />
                    </Button>
                  </a>
              </div>
              <div className="flex justify-center  lg:justify-end">
                <Card className="shadow-none rounded-md bg-transparent">
                  <CardHeader
                    floated={false}
                    className="rounded-md p-0 m-0 shadow-none"
                  >
                    <img src="/assets/bgs_.jpg" className="w-auto lg:max-h-96" />
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InformationSection() {
  const t = useTranslations("About");
  const TRAD_EDUCATION = [
    {
      title: t("master"),
      date: "2024-2026",
      children: t("master_desc"),
      link: t("master_link"),
    },
    {
      title: t("engineering_school"),
      date: "2022-2026",
      children: t("engineering_school_desc"),
      link: t("engineering_school_link"),
      bgcolor: color.Grad2,
    },
  ];

  const EXPERIENCE = [
    {
      title: t("inria"),
      date: "Mar - May 2025",
      children: t("inria_desc"),
      link: t("inria_link"),
      bgcolor: color.Grad1,
    },
    {
      title: t("thales"),
      date: "Jul - Dec 2024",
      children: t("thales_desc"),
      link: t("thales_link"),
      bgcolor: color.Grad3,
    },
    {
      title: t("hackademint"),
      date: "2022-2024",
      children: t("hackademint_desc"),
      link: t("hackademint_link"),
      bgcolor: color.Grad2
    }
  ];

  return (
    <section className="pb-28 px-8">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              {t("trad_edu")}
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {TRAD_EDUCATION.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              {t("experience")}
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {EXPERIENCE.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              {t("projects")}
            </Typography>
            <Typography className="font-normal !text-gray-700">
              <T_ label="projects_desc" />
            </Typography>
          </div>
        </div>
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              {t("skills")}
            </Typography>
            <Typography className="font-normal !text-gray-700">
              <T_ label="skills_desc" />
            </Typography>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <Navbar />
      <Whoami />
      <InformationSection />
      <Footer />
    </>
  );
}
