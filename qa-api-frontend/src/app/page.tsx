"use client";

import QuestionCard from "@/components/QuestionCard/QuestionCard";
import Base from "@/templates/Base";
import { useEffect, useState } from "react";
import AuthService from "@/auth/auth-services";

export default function Home() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const resourceUrl = "http://localhost:8082/questions";
        const response = await AuthService.getResource(resourceUrl);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setQuestions(data);
        } else {
          console.error("Erro ao buscar perguntas:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao buscar perguntas:", error);
      }
    }

    if (AuthService.checkCredentials()) {
      fetchQuestions();
    } else {
      console.error("Credenciais inválidas. Faça login novamente.");
    }
  }, []);

  return (
    <Base>
      {questions.map((question: any) => (
        <QuestionCard title={question.title} key={question.id} />
      ))}
    </Base>
  );
}
