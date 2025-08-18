"use client";

import { useQueryState } from "nuqs";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../../../../../components/ui/tabs";

function TabChange() {
  const [langType, setLangType] = useQueryState("tab", {
    defaultValue: "family_member",
    clearOnDefault: true,
    shallow: false,
  });
  return (
    <Tabs
      value={langType}
      onValueChange={setLangType}
      defaultValue="family_member"
      dir="rtl"
    >
      <TabsList className="w-full max-w-full  h-10 p-1">
        {data.map((item, index) => (
          <TabsTrigger key={index} value={item.value}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

function NewCom() {
  return <TabChange />;
}

TabChange.NewComTest = NewCom;

export default TabChange;

const data = [
  {
    value: "family_member",
    label: "ئــەنــدامـانـی خـێـزان",
  },
  {
    value: "owning",
    label: "خـاوەنــدارێــتــی",
  },
  {
    value: "committee",
    label: "لــیــژنــە",
  },
];
