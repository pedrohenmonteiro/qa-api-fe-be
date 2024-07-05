"use client";

import { useState } from "react";

import TextField from "../TextField/TextField";
import Button from "../Button/Button";

const FormQuestion = () => {
  const [values, setValues] = useState({ question: "", description: "" });

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <TextField
          name="question"
          placeholder="Pergunta"
          onInputChange={(v) => handleInput("email", v)}
        />
        <TextField
          as="textarea"
          name="description"
          placeholder="Descrição (Opcional)"
          onInputChange={(v) => handleInput("password", v)}
        />

        <Button type="submit">
          <span>Publicar pergunta</span>
        </Button>
      </form>
    </div>
  );
};

export default FormQuestion;
