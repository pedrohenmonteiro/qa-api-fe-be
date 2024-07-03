import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import React from "react";

const Base = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="mt-10">
        <Container size="smaller">{children}</Container>
      </div>
    </>
  );
};

export default Base;
