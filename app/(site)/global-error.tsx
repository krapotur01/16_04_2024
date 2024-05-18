"use client";

import {
  Header,
  Footer,
  Logo_section,
  MenuSection,
} from "./layout/index";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="../favicon/site.webmanifest" />
      </head>
      <body>
        <Header />
        <Logo_section />
        <MenuSection />
        <div>
          <h2>{error.message}</h2>
          <button onClick={() => reset()}>Try again</button>
        </div>

        <Footer />
      </body>
    </html>
  );
}
