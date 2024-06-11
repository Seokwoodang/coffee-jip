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
    <header className="flex justify-between height items-center p-4 bg-[#FFE7C3] h-136">
      <Link href={"/"}>
        <Image
          src={`/coffeeJip.png`}
          width={200}
          height={100}
          alt="homepage logo"
        />
      </Link>
      <div className="text-xl font-bold">
        <Link href={`/starbucks`} className="p-4">
          STARBUCKS
        </Link>
        <Link href={`/megacoffee`} className="p-4">
          MEGA COFFEE
        </Link>
        <Link href={`/twosomeplace`} className="p-4">
          TWOSOME PLACE
        </Link>
      </div>
      <div className="w-28">
        <button onClick={loginFunction} className="p-4 font-bold">
          {login ? "login" : "logout"}
        </button>
      </div>
    </header>
  );
}
