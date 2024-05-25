import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex gap-5 flex-col grow w-full justify-center items-center">
      <h2>Страницы не существует, либо в разработке.</h2>
      <Link href="/">
        <p>
          Вернуться на{" "}
          <span className="px-2 py-1 rounded-md bg-[var(--primary)] text-[var(--white)] font-semibold">
            Главную
          </span>
        </p>
      </Link>
    </div>
  );
}
