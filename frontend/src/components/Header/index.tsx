"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "./style";
import { NavItemInterface } from "../Navitem";
import NavItems from "../NavItems";
import { useState } from "react";

const Navbar = () => {
  const items: NavItemInterface[] = [
    {
      url: "#",
      label: "Quem somos",
    },
    {
      url: "#",
      label: "Soluções",
    },
    {
      url: "#",
      label: "Carreira",
    },
    {
      url: "#",
      label: "Contato",
    },
    {
      url: "#",
      label: "Suporte",
    },
  ];

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <>
      <Header>
        <Link href={"/"} className="logo">
          <Image
            src={"logo-smartmoney.svg"}
            width={131}
            height={19}
            alt="Logo da Smart Money"
          ></Image>
        </Link>

        <button
          className="btnMobile"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <Image
            src={`${openMenu ? "x.svg" : "menu.svg"}`}
            width={32}
            height={20}
            alt="Ícone de menu feito de três linhas uma abaixo da outra"
          ></Image>
        </button>

        <NavItems arrItems={items} classe={"desktop"} />
        <NavItems arrItems={items} classe={`${openMenu ? "mobile" : ""}`} />
      </Header>
    </>
  );
};

export default Navbar;
