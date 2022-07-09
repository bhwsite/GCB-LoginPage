import { useState } from "react";
import { useRouter } from "next/router";
import ls from "localstorage-slim";
import { toast } from "react-toastify";
import { checkPasswordValidation } from "../../utils/passwordValidator";

import { Form } from "../Form";
import { Input } from "../Input";
import { CheckBox } from "../CheckBox";
import { Button } from "../Button";

import theme from "../../styles/theme";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const router = useRouter();

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    const usersList = JSON.parse(
      ls.get("usersList", { decrypt: true }) || "[]"
    );
    const user = {
      username: name,
      user_email: email,
      user_password: password,
    };

    const isFilledField =
      name === "" || email === "" || password === "" || !checkbox;
    if (isFilledField) {
      return toast.error("Preencha todos os campos!");
    }

    if (!EMAIL_REGEX.test(String(email).toLowerCase())) {
      return toast.error("Coloque um email válido");
    }

    const isValidPassword = checkPasswordValidation(user.user_password);
    if (!isValidPassword.result) {
      return alert(isValidPassword.errors);
    }

    ls.set("usersList", JSON.stringify([...usersList, user]), {
      encrypt: true,
    });
    toast.success("Usuário cadastrado com sucesso");
    router.push("/login");
  }

  return (
    <Form onSubmit={handleRegister}>
      <Input
        name="name"
        type="text"
        value={name}
        placeholder="Nome"
        autoComplete="off"
        onChange={(e) => setName(e.target.value)}
        htmlFor="name"
        label="Nome"
      />
      <Input
        name="email"
        type="text"
        value={email}
        placeholder="Email"
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
        htmlFor="email"
        label="Email"
      />
      <Input
        name="password"
        type="password"
        value={password}
        placeholder="Senha"
        autoComplete="off"
        onChange={(e) => setPassword(e.target.value)}
        htmlFor="password"
        label="Senha"
      />
      <div className="containerForwardRef">
        <CheckBox
          name="terms"
          type="checkbox"
          onChange={(e) => setCheckbox(e.target.checked)}
        />
      </div>
      <Button type="submit" color={theme.button} bgColor={theme.primaryColor}>
        Cadastrar
      </Button>
    </Form>
  );
};
