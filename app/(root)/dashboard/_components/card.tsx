import React from "react";
import notifi from "@/public/notification.svg";
import committee from "@/public/committee.svg";
import active_user from "@/public/active-user.svg";
import total_user from "@/public/total-user.svg";
import money_given from "@/public/money-recive.svg";
import money_recive from "@/public/money-recived.svg";
import poor from "@/public/pooer.svg";
import charitable from "@/public/charitable.svg";
import Image from "next/image";
import { Decreased, Increased } from "@/public/icons";

type Props = {
  data: CardType;
};

function Card({ data }: Props) {
  return (
    <div className="border p-4 rounded-lg space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h2 className="text-muted-foreground">{data.name}</h2>
          <p className="text-xl font-bold">{data.total}</p>
        </div>
        <Image src={data.icon} alt={data.name} className="w-12 h-12 mb-2" />
      </div>
      <div className="flex items-center gap-1">
        <p className="text-foreground">{data.description}</p>
        {data.is_increased ? <Increased /> : <Decreased />}
      </div>
    </div>
  );
}

export default Card;

type CardType = {
  name: string;
  icon: any;
  total: number;
  description: string;
  is_increased: boolean;
};

export const data = (): CardType[] => [
  {
    name: "ئاگادارکردنەوەکان",
    icon: notifi,
    total: 20,
    description: " ئاگادارکردنەوە زیادی کردووە",
    is_increased: true,
  },
  {
    name: "کۆی گشتی لیژنە",
    icon: committee,
    total: 32,
    description: " لیژنە زیادی کردووە",
    is_increased: true,
  },
  {
    name: "بەکارهێنەرانی چالاک",
    icon: active_user,
    total: 10,
    description: "بەکارهێنەران زیادی کردووە",
    is_increased: true,
  },
  {
    name: "کۆی گشتی بەکارهێنەر",
    icon: total_user,
    total: 14,
    description: "  بەکارهێنەر زیادی کردووە",
    is_increased: true,
  },
  {
    name: "کۆی گشتی پارەی دەرچوو",
    icon: money_given,
    total: 24500,
    description: "  پارە زیادی کردووە",
    is_increased: true,
  },
  {
    name: "کۆی گشتی پارەی هاتوو",
    icon: money_recive,
    total: 75400,
    description: " پارە زیادی کردووە",
    is_increased: true,
  },

  {
    name: "کۆی گشتی خێرخواز",
    icon: charitable,
    total: 90,
    description: "  خێرخواز زیادی کردووە",
    is_increased: true,
  },
  {
    name: "کۆی گشتی هەژارەکان",
    icon: poor,
    total: 120,
    description: "  هەژارەکان زیادی کردووە",
    is_increased: true,
  },
  {
    name: "کۆی گشتی هەژاری کاتی",
    icon: poor,
    total: 70,
    description: "  هەژاری کاتی زیادی کردووە",
    is_increased: true,
  },
  {
    name: "قاسە",
    icon: money_recive,
    total: 873000,
    description: "  پارە زیادی کردووە",
    is_increased: true,
  },
];
