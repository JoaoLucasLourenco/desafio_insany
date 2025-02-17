"use client";

import Image from "next/image";
import { StyledFooter } from "./style";
import { useState } from "react";

const Footer = () => {
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const handleEmailSent = () => {
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 1000);
    setEmail("");
  };
  const [email, setEmail] = useState<string>();
  return (
    <>
      <StyledFooter>
        <span className="cta">
          <Image
            src={"mailFast.svg"}
            width={31}
            height={28}
            alt="Ícone de carta"
          />
          <span className="texts">
            <h1>Fique por dentro das novidades</h1>
            <p>Cadastre seu e-mail para receber conteúdo</p>
          </span>
          <div className="mailForm">
            <input
              style={{
                backgroundColor: emailSent ? "#35D9A8" : "#ffffff",
                color: emailSent ? "#757385" : "#000000",
              }}
              type="email"
              placeholder={
                emailSent
                  ? "Email enviado com sucesso"
                  : "Insira seu melhor email aqui"
              }
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button onClick={handleEmailSent}>Receber Novidades</button>
          </div>
        </span>
      </StyledFooter>
    </>
  );
};

export default Footer;
