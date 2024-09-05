import React from "react";
import Masonry from "@mui/lab/Masonry";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";

const base_path = "/assets/logos/";
const extension = ".png";
const logos = [
  "pyg",
  "docker",
  "bash",
  "archlinux",
  "galaxy",
  "badge_ice",
  "podman",
  "kubernetes",
  "ocaml",
  "rust_",
  "neovim_",
  "typescript",
  "c",
  "sage",
  "typst_",
  "tensorflow",
  "react",
  "badge_forest",
  "javascript",
  "lua",
  "pandas",
  "pytorch",
  "quiskit",
];
const logo_paths = logos.map((name) => `${base_path}${name}${extension}`);

const Skills: React.FC = () => {
  return (
    <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
      {logo_paths.map((logo, index) => (
        <ImageListItem
          key={index}
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Image
            src={logo}
            alt={`Logo ${index}`}
            width={100}
            height={100}
            style={{
              width: "auto",
              height: "auto",
              maxHeight: "100px",
              objectFit: "contain",
            }}
          />
        </ImageListItem>
      ))}
    </Masonry>
  );
};

export default Skills;
