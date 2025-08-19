import React, { Suspense } from "react";
import Card, { data } from "./_components/card";

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FeedDashboard />
    </Suspense>
  );
}

export default Page;

async function FeedDashboard() {
  // const data = await getDashboardData();
  return (
    <div className="px-3">
      <h1 className="mb-5">بــەخـــێــربێــن 👋</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {data().map((item) => (
          <Card key={item.name} data={item} />
        ))}
      </div>
    </div>
  );
}
