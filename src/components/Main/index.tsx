import * as sc from "./styles";

const Main = ({
  title = "React Avançado",
  description = "TypeScript, ReactJS, NextJS e StyledComponents",
}) => {
  return (
    <sc.Wrapper>
      <sc.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <sc.Title>{title}</sc.Title>
      <sc.Description>{description}</sc.Description>
      <sc.Illustration
        src="/img/hero-illustration.svg"
        alt="Desenvolvedor de frrente para uma tela com código."
      />
    </sc.Wrapper>
  );
};
<h1>React Avançado</h1>;

export default Main;
