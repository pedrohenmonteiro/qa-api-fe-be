import Button from "@/components/Button";
import Container from "@/components/Container";
import Header from "@/components/Header";
import QuestionCard from "@/components/QuestionCard";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Button>Teste</Button>
        <Container size="smaller">
          <QuestionCard title="Uma peSArgunta teste"></QuestionCard>
        </Container>
      </main>
    </>
  );
}
