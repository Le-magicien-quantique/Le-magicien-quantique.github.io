"use client";
import React from "react";
import {
  IconButton,
  Button,
  Typography,
  Card,
  CardHeader,
} from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import { InfoCard, color } from "@/components/info-card";
import { Navbar, Footer } from "@/components";
import { useTranslations } from "next-intl";
import Skills from "@/components/skills";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
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
  return (
    <>
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
          <Connect />
          <a href="/assets/cv.pdf" className="inline-block" download>
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
    </>
  );
}

function Accordions() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open == value ? 0 : value);

  // const ACCORDIONS = [
  //   {
  //     header: <T_ label="interpretation_label" />,
  //     body: <T_ label="interpretation_desc" />,
  //   },
  // ];

  return (
    <section className="relative w-full">
      <div className="grid place-items-center min-h-[20vh] px-8">
        <div className="container mx-auto place-items-start mb-16">
          <Whoami />
        </div>
      </div>
    </section>
  );
}
// {ACCORDIONS.map((value, index) => (
//            <Accordion open={open == index + 1} key={index}>
//              <AccordionHeader onClick={() => handleOpen(index + 1)}>
//                <Typography
//                  color="blue-gray"
//                  className="mb-0 text-xl font-bold"
//                >
//                  {value.header}
//                </Typography>
//              </AccordionHeader>
//              <AccordionBody>
//                <Typography className="font-normal !text-gray-700">
//                  {value.body}
//                </Typography>
//              </AccordionBody>
//            </Accordion>
//          ))}
//
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
    {
      title: t("prepa"),
      date: "2019-2022",
      children: t("prepa_desc"),
      link: t("prepa_link"),
    },
  ];

  const PERSO_EDUCATION = [
    {
      title: t("aisf"),
      date: "2024",
      children: t("aisf_desc"),
      link: t("aisf_link"),
    },
    {
      title: t("arena"),
      date: "2024 - PRESENT",
      children: t("arena_desc"),
      link: t("arena_link"),
      bgcolor: color.Grad2,
    },
    {
      title: t("agents_berkeley"),
      date: "2024 - PRESENT",
      children: t("agents_berkeley_desc"),
      link: t("agents_berkeley_link"),
      bgcolor: color.Grad3,
    },
    {
      title: t("coursera"),
      date: "2023",
      children: t("coursera_desc"),
      link: t("coursera_link"),
    },
    {
      title: t("ibm"),
      date: "2023 - PRESENT",
      children: t("ibm_desc"),
      link: t("ibm_link"),
      bgcolor: color.Grad3,
    },
    {
      title: t("udemy"),
      date: "2023",
      children: t("udemy_desc"),
      link: t("udemy_link"),
      bgcolor: color.Grad2,
    },
    {
      title: t("pyg"),
      date: "2024 - PRESENT",
      children: t("pyg_desc"),
      link: t("pyg_link"),
    },
  ];

  const EXPERIENCE = [
    {
      title: t("thales"),
      date: "2024 - PRESENT",
      children: t("thales_desc"),
      link: t("thales_link"),
      bgcolor: color.Grad3,
    },
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
              {t("perso_edu")}
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {PERSO_EDUCATION.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
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
//
// <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
export default function About() {
  return (
    <>
      <Navbar />
      <Accordions />
      <InformationSection />
      <Footer />
    </>
  );
}
