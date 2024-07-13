import Link from "next/link";
import Button from "../Button/Button";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className="bg-white w-full py-2 shadow-md">
      <Container>
        <div className="flex justify-between">
          <Link href="/">
            <h1 className="text-4xl">Q&A</h1>
          </Link>
          <Link href="http://localhost:8081/question">
            <Button>Criar pergunta</Button>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
