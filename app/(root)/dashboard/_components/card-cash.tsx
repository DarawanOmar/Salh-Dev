import React from "react";
import { getCashs } from "../_lib";

async function CashCard() {
  const cashs = await getCashs();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
      {cashs?.data?.map((cash) => (
        <div
          key={cash.id}
          className="bg-background p-5 rounded-lg border shadow"
        >
          <h2 className="text-lg font-semibold text-foreground text-center">
            {cash.name === "Main Safe"
              ? "قــاســـەی ســـەرەکــی"
              : "قــاســـەی لاوەکـــی"}
          </h2>
          <p className="text-muted-foreground my-2">
            کــۆی دۆلار: {Number(cash.totalDollar)?.toLocaleString()}
          </p>
          <p className="text-muted-foreground">
            کــۆی دیــنــار: {Number(cash.totalDinar)?.toLocaleString()}
          </p>
          <p className="text-sm text-muted-foreground my-2">
            کــۆتــا زیــادکــردن:{" "}
            {new Date(cash.updatedAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CashCard;
