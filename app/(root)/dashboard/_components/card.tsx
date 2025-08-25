import React from "react";
import notifi from "@/public/notification.svg";
import committee from "@/public/committee.svg";
import active_user from "@/public/active-user.svg";
import money_given from "@/public/money-recive.svg";
import money_recive from "@/public/money-recived.svg";
import poor from "@/public/pooer.svg";
import charitable from "@/public/charitable.svg";
import Image from "next/image";
import total_user from "@/public/total-user.svg";
// import { Decreased, Increased } from "@/public/icons";
import { DashboardType } from "../_lib";

type Props = {
  data: CardType;
};

function Card({ data }: Props) {
  return (
    <div className="border p-6 rounded-lg space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h2 className="text-muted-foreground">{data.name}</h2>
          <p className="text-xl font-bold">{data.total.toLocaleString()}</p>
        </div>
        <Image src={data.icon} alt={data.name} className="w-12 h-12 mb-2" />
      </div>
      {/* <div className="flex items-center gap-1">
        <p className="text-foreground">{data.description}</p>
        {data.is_increased ? <Increased /> : <Decreased />}
      </div> */}
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

export const data = ({
  data,
  totalNotification,
}: {
  data: DashboardType;
  totalNotification: number;
}): CardType[] => [
  {
    name: "ئاگادارکردنەوەکان",
    icon: notifi,
    total: totalNotification,
    description: " ئاگادارکردنەوە زیادی کردووە",
    is_increased: true,
  },
  {
    name: "کۆی گشتی لیژنە",
    icon: committee,
    total: data.committeeMembers.total || 0,
    description: " لیژنە زیادی کردووە",
    is_increased: true,
  },
  {
    name: "بەکارهێنەرانی چالاک",
    icon: active_user,
    total: data.users.active || 0,
    description: "بەکارهێنەران زیادی کردووە",
    is_increased: true,
  },
  {
    name: "کۆی گشتی بەکارهێنەر",
    icon: total_user,
    total: data.users.total || 0,
    description: "  بەکارهێنەر زیادی کردووە",
    is_increased: true,
  },
  {
    name: "کۆی گشتی پارەی دەرچوو",
    icon: money_given,
    total: +data.moneyGiven[0].totalAmount || 0,
    description: "  پارە زیادی کردووە",
    is_increased: true,
  },
  {
    name: "کۆی گشتی پارەی هاتوو",
    icon: money_recive,
    total: +data.moneyReceived[0].totalAmount || 0,
    description: " پارە زیادی کردووە",
    is_increased: true,
  },

  {
    name: "کۆی گشتی خێرخواز",
    icon: charitable,
    total: data.charitables.total || 0,
    description: "  خێرخواز زیادی کردووە",
    is_increased: true,
  },
  {
    name: "کۆی گشتی هەژارەکان",
    icon: poor,
    total: data.headMembers.total || 0,
    description: "  هەژارەکان زیادی کردووە",
    is_increased: true,
  },
  {
    name: "کۆی گشتی هەژاری کاتی",
    icon: poor,
    total: data.headMembers.temporary || 0,
    description: "  هەژاری کاتی زیادی کردووە",
    is_increased: true,
  },
  {
    name: "قـاسـەی ســەرەکـی",
    icon: money_recive,
    total: +data.safe[0].totalDinar || 0,
    description: "  پارە زیادی کردووە",
    is_increased: true,
  },
  {
    name: "قـاسـەی لاوەکــی",
    icon: money_recive,
    total: +data.safe[1].totalDinar || 0,
    description: "  پارە زیادی کردووە",
    is_increased: true,
  },
];
