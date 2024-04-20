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
      <Button
        appearance="primary"
        arrow="down"
        className="flex gap-2 items-center flex-row p-5"
      >
        Кнопка 1
      </Button>
    </main>
  );
}
