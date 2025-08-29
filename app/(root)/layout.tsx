import { getSession } from "@/lib/utils/cookies";
import { AppSidebar } from "@/components/layout/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import QueryClientProviderWrapper from "@/providers/query_provider_wrapper";
import Header from "@/components/layout/header";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getSession();
  return (
    <QueryClientProviderWrapper>
      <SidebarProvider>
        <AppSidebar session={user} side={"right"} />
        <div className="w-full px-2  ">
          <Header />
          <main>{children}</main>
        </div>
      </SidebarProvider>
    </QueryClientProviderWrapper>
  );
}
