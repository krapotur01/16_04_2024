'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <h2>ошибка в корневом каталоге- {error.message}</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}