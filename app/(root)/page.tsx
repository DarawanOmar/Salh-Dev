import Image from "next/image";
import logo from "@/public/logo.png";
export default function Home() {
  return (
    <div className="h-[80vh] grid place-items-center ">
      <div className="flex flex-col items-center gap-5 sm:gap-10">
        <div className="relative w-52">
          <Image src={logo} alt="Logo" className="object-cover mx-auto" />
        </div>
        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold text-center text-primary">
          بـــەخـــێــــربــێــن بـــۆ خـــۆشـــــنـــاوگــــروپ
        </h1>
      </div>
    </div>
  );
}
