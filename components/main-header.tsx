"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MainHeader() {
  const [login, setLogin] = useState(false);

  const loginFunction = () => {
    setLogin(!login);
  };

  return (
    <header class="flex justify-between items-center p-4 ">
      <Link href={"/"}>
        <Image src={`/logo.png`} width={100} height={100} />
      </Link>
      <div class="text-xl font-bold">
        <Link href={`/starbuks`} class="p-4">
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
