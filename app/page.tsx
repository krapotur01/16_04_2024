"use client";

import {
  Paragraph,
  Button,
  Heading,
  Rating,
  Logo_section,
  HeroSection,
  Content,
} from "./components";
import { useState } from "react";

export default function Home() {
  const [rating, setRating] = useState<number>(4);

  return (
    <main className="w-full grow flex flex-col items-center">
      <Logo_section />
      <HeroSection />
      <Content />
      <Rating rating={rating} isEditable setRating={setRating} />
      <Paragraph size="l">Это новый элемент</Paragraph>
      <Heading tag="h1">Это новый элемент</Heading>
      <Heading tag="h2">Это новый элемент</Heading>
      <Heading tag="h3">Это новый элемент</Heading>
      <Button
        appearance="primary"
        arrow="down"
        className="flex gap-2 items-center flex-row p-5"
      >
        Кнопка 1
      </Button>

      <Button
        appearance="primary"
        arrow="right"
        className="flex gap-2 items-center flex-row p-5"
      >
        Кнопка 2
      </Button>
      <Button
        appearance="primary"
        className="flex gap-2 items-center flex-row p-5"
      >
        Кнопка 3
      </Button>
    </main>
  );
}
