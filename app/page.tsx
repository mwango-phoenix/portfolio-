import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>My Portfolio</h1>
      <Image
        src="/profile.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </main>
  );
}
