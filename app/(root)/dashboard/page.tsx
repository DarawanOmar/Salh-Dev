import React, { Suspense } from "react";
import Card, { data } from "./_components/card";
import { DashboardType, getDashboardData, getNotifications } from "./_lib";

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FeedDashboard />
    </Suspense>
  );
}

export default Page;

async function FeedDashboard() {
  const dataDashboard = await getDashboardData();
  const countNotifications = await getNotifications();
  return (
    <div className="px-3">
      <h1 className="mb-5">بــەخـــێــربێــن 👋</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {data({
          data: dataDashboard.data || ({} as DashboardType),
          totalNotification: countNotifications.data?.length || 0,
        }).map((item) => (
          <Card key={item.name} data={item} />
        ))}
      </div>
    </div>
  );
}
