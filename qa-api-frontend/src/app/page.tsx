import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import questionMock from "@/components/QuestionCard/mock";
import Base from "@/templates/Base";

export default function Home() {
  return (
    <Base>
      {questionMock.map((question) => (
        <QuestionCard title={question.title} key={question.title} />
      ))}
    </Base>
  );
}
