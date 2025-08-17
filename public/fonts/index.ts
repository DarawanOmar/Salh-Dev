import localFont from "next/font/local";
export const fontSirwan = localFont({
  src: [
    {
      path: "./UniSIRWAN Expo Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "./UniSIRWAN Expo Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./UniSIRWAN Expo Medium.ttf",
      weight: "500",
      style: "meduim",
    },
    {
      path: "./UniSIRWAN Expo Bold.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-sirwan",
  display: "swap",
});
