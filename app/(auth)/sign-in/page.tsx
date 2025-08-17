import Image from "next/image";
import AuthForm from "../_component/authForm";
import signIn from "@/public/sign-in.png";
export default async function SignIn() {
  return (
    <div className="flex flex-col md:flex-row justify-center max-md:items-center md:justify-between md:pt-[35px] pt-[20px] px-5 gap-10 ">
      <div className="flex flex-col items-start md:pr-[68px] pt-[120px] md:pt-[50px] gap-5 order-1">
        <h1 className="font-sirwan-regular text-[26px] md:font-sirwan-medium md:text-4xl">
          بەخێربێیت بۆ پەڕەی چونەژورەوە 👋
        </h1>
        <p className="font-sirwan-regular md:text-[20px] text-[14px]">
          چوونەژوورەوە بۆ دەستپێکردنی بەڕێوەبردنی پڕۆژەکانت.
        </p>
        <AuthForm />

        <p className="font-sirwan-light text-[10px] px-[75px] mt-[40px]">
          @٢٠٢٥ مافی ئەم بەرهەمە پارێزراوە بۆ تیمی گوڵێ سۆفت
        </p>
      </div>
      <div className="md:order-2">
        <Image
          className="w-[400px] h-[180px] md:h-[650px] lg:w-[768px] object-cover rounded-[24px]"
          src={signIn}
          alt="Khoshnaw Company"
          width={530}
          height={500}
          priority
        />
      </div>
    </div>
  );
}
