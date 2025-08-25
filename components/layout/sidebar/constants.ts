import {
  Assisted,
  Backup,
  Committee,
  Dashboard,
  IncomeRevenue,
  OutGoRevenue,
  Report,
  Roles,
  User,
  Charitable,
} from "@/public/icons";

export const dataSidebar = (permissions: string[]) => {
  return {
    projects: [
      {
        title: "داشـــبــۆڕد",
        url: "/dashboard",
        icon: Dashboard,
        isActive: permissions.includes("dashboard"),
      },
      {
        title: "بــەکـاهێنەرەکان",
        url: "/users",
        icon: User,
        isActive: permissions.includes("users"),
      },
      {
        title: "لــیــژنــەکــان",
        url: "/committee",
        icon: Committee,
        isActive: permissions.includes("committee"),
      },
      {
        title: "هــاوکـــاری کــراون",
        url: "/assisted",
        icon: Assisted,
        isActive: permissions.includes("assisted"),
      },

      {
        title: "خــێـــرخــواز",
        url: "/charitable",
        icon: Charitable,
        isActive: permissions.includes("charitable"),
      },

      {
        title: "پـــارەی هـــاتوو",
        url: "/recived-money",
        icon: IncomeRevenue,
        isActive: permissions.includes("recived-money"),
      },
      {
        title: "پـــارەی دەرچـــوو",
        url: "/given-money",
        icon: OutGoRevenue,
        isActive: permissions.includes("given-money"),
      },
      {
        title: "ڕاپـــۆرت",
        url: "/report",
        icon: Report,
        isActive: permissions.includes("report"),
      },
      {
        title: "دەســــەڵاتــەکــان",
        url: "/roles",
        icon: Roles,
        isActive: permissions.includes("roles"),
      },
      {
        title: "پـــاشــەکــەوتــکــردن",
        url: "/backup",
        icon: Backup,
        isActive: permissions.includes("backup"),
      },
    ],
    // ].filter((item) => item.isActive),
  };
};
