import type { CoffeeItem } from "@/app/[franchise]/page";
import Image from "next/image";

export default function CoffeeItem({ props }: { props: CoffeeItem }) {
  return (
    <div className="flex flex-col w-[300px] h-100 p-4 cursor-pointer bg-[#ffffff] gap-3 rounded-2xl">
      <div>
        <Image
          src={`${props.imageUrl}`}
          alt="mango-refresher"
          width={300}
          height={80}
        />
      </div>
      <div>{props.name}</div>
      <div>{props.calory}kcal</div>
    </div>
  );
}
