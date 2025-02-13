import Image from "next/image";
import { Article } from "./style";

const HeroText = () => {
  return (
    <Article>
      <span className="tag">
        <Image
          src={"heroTag.svg"}
          height={16}
          width={16}
          alt="Ícone de uma luz brilhante"
        />
        Tecnologia disruptiva
      </span>
      <h1>Conta digital que não é só uma conta digital.</h1>
      <p>Pellentesque rutrum turpis non est turpis pretium morbi urna.</p>
      <Image
        src={"divider.svg"}
        className="divider"
        height={16}
        width={32}
        alt="Ícone de uma luz brilhante"
      />
      <span className="infoSpan">
        <span>
          <p className="number">120</p>
          <p className="info">Projeto realizado 2021</p>
        </span>
        <span>
          <p className="number">12</p>
          <p className="info">Escritórios no Brasil</p>
        </span>
        <span>
          <p className="number">15mi</p>
          <p className="info">Faturamento 2021</p>
        </span>
      </span>
    </Article>
  );
};

export default HeroText;
