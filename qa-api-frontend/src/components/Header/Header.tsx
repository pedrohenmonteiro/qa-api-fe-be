import Button from "../Button/Button";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className="bg-white w-full py-2 shadow-md">
      <Container>
        <div className="flex justify-between">
          <h1 className="text-4xl">Q&A</h1>
          <div>
            <Button>Criar pergunta</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
