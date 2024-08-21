import {Heading, Paragraph} from "@/app/components";

export default function About()  {
  return (
    <div className="flex-1 flex flex-col w-full items-center mt-5">
      <Heading tag={"h2"}>О нас</Heading>
        <div className="flex flex-col w-[80%] mt-5 justify-center items-start">
            <p>Кто кроме нас? Мы умеем, поэтому и делаем!</p>
            <Paragraph size='l'>Мы стараемся улучшить свой сервис и добиться идеальной коноверсии `клиент - мы - клиент`.</Paragraph>
        </div>
    </div>
  );
}
