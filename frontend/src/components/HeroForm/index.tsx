import { useState } from "react";
import { FormWrapper } from "./style";
import Link from "next/link";
import Image from "next/image";

const HeroForm = () => {
  const [isEmpresa, setIsEmpresa] = useState(false);

  const handleTipoChange = (event: { target: { value: string } }) => {
    setIsEmpresa(event.target.value === "empresa");
  };

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    cnpj: "",
  });

  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    celular: "",
    cnpj: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const validateCNPJ = (cnpj: string) => {
    const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/; // Formato XX.XXX.XXX/XXXX-XX
    return regex.test(cnpj);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: any = {};

    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Por favor, insira um e-mail válido.";
    }

    if (!formData.celular) {
      newErrors.celular = "Por favor, insira um número de celular válido!";
    }

    if (isEmpresa && (!formData.cnpj || !validateCNPJ(formData.cnpj))) {
      newErrors.cnpj = "Por favor, insira um CNPJ válido.";
    }

    if (!isEmpresa && !formData.nome) {
      newErrors.nome = "Por favor, insira seu nome.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Formulário enviado", formData);
    }
  };

  return (
    <FormWrapper>
      <span className="cta">
        <p>Faça parte da revolução digital!</p>
        <h1>Cadastre-se e faça parte do lançamento oficial</h1>
      </span>
      <span className="isEmpresa">
        <label>
          <input
            type="radio"
            name="tipo"
            value="pessoa"
            checked={!isEmpresa}
            onChange={handleTipoChange}
          />
          Para você
        </label>

        <label>
          <input
            type="radio"
            name="tipo"
            value="empresa"
            checked={isEmpresa}
            onChange={handleTipoChange}
          />
          Para sua empresa
        </label>
      </span>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        {isEmpresa ? (
          <>
            <input
              type="text"
              name="cnpj"
              placeholder="CNPJ"
              value={formData.cnpj}
              onChange={handleChange}
            />
            {errors.cnpj && (
              <p className="text-red-500 text-sm">{errors.cnpj}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <input
              type="text"
              name="celular"
              placeholder="Celular"
              value={formData.celular}
              onChange={handleChange}
            />
            {errors.celular && (
              <p className="text-red-500 text-sm">{errors.celular}</p>
            )}

            <button type="submit">Quero para minha empresa</button>
          </>
        ) : (
          <>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
            />
            {errors.nome && (
              <p className="text-red-500 text-sm">{errors.nome}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <input
              type="text"
              name="celular"
              placeholder="Celular"
              value={formData.celular}
              onChange={handleChange}
            />
            {errors.celular && (
              <p className="text-red-500 text-sm">{errors.celular}</p>
            )}

            <button type="submit">Quero ser cliente</button>
          </>
        )}
      </form>
      <span className="privacy">
        <p>
          Ao enviar seus dados, você autoriza que o SmartMoney entre em contato
          e declara estar ciente da{" "}
          <Link href={"#"} className="link">
            Política de Privacidade
          </Link>
        </p>
      </span>
      <img
        className="divider"
        src={"formDivider.svg"}
        alt="Linha horizontal divisória"
      />
      <span className="safety">
        <Image src={"safety.svg"} height={24} width={22} alt="" />
        <p>Seus dados estão seguros</p>
      </span>
    </FormWrapper>
  );
};

export default HeroForm;
