import Image from "next/image";

export default async function Home() {
  const response = await fetch(`http://localhost:8080/news`);

  const news = await response.json();
  // console.log(news);

  return (
    <main>
      <div>
        {news.map((value: any) => {
          return <div>{value.title}</div>;
        })}
      </div>
    </main>
  );
}
