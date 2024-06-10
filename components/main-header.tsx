"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MainHeader() {
  const [login, setLogin] = useState(false);
  const router = useRouter();
  console.log(router);
  const loginFunction = () => {
    setLogin(!login);
  };

  return (
    <header class="flex justify-between items-center p-4 ">
      <Link href={"/"}>
        <Image src={`/coffeeJip.png`} width={200} height={100} />
      </Link>
      <div class="text-xl font-bold">
        <Link href={`/starbucks`} class="p-4">
          STARBUCKS
        </Link>
        <Link href={`/megacoffee`} class="p-4">
          MEGA COFFEE
        </Link>
        <Link href={`/twosomeplace`} class="p-4">
          TWOSOME PLACE
        </Link>
      </div>
      <div class="w-28">
        <button onClick={loginFunction} class="p-4 font-bold">
          {login ? "login" : "logout"}
        </button>
      </div>
    </header>
  );
}
