import Image from "next/image";
import AuthForm from "../_component/authForm";
import signIn from "@/public/sign-in.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
export default async function SignIn() {
  return (
    <main className="w-full flex flex-col-reverse gap6 md:gap-0 md:flex-row overflowhidden h-svh rounded-t-lg max-md:bgprimary p-5">
      <section className="h-full w-full md:max-w-[50%] flex flex-col justify-center items-center  max-md:rounded-t-[50px] bgwhite rounded-t-xl bg-white dark:!bg-black">
        <aside className="flex flex-col gap-3 text-center ">
          <h1 className="text-card-foreground  text-2xl md:text-4xl font-sirwan_meduim ">
            بەخێربێیت بۆ پەڕەی چونەژورەوە 👋
          </h1>
          <p className="text-card-foreground/50 font-medium font-sirwan_reguler">
            چوونەژوورەوە بۆ دەستپێکردنی بەڕێوەبردنی پڕۆژەکانت.
          </p>
        </aside>
        <div className="w-full p-8 min-w-80 max-w-xl ">
          <AuthForm />
        </div>
      </section>
      <AspectRatio ratio={16 / 7} className="rounded-2xl">
        <Image
          src={signIn}
          alt="Login"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </AspectRatio>
    </main>
  );
}
