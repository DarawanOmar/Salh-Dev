import { Toaster } from "sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { getSession } from "@/lib/utils/cookies";
import { AppSidebar } from "@/components/layout/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import QueryClientProviderWrapper from "@/providers/query_provider_wrapper";
import Link from "next/link";
import { Notification } from "@/public/icons";
import UserView from "@/components/layout/user-view";
import { Button } from "@/components/ui/button";
import BttonModeVibe from "@/components/layout/button-mode-vibe";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getSession();
  return (
    <NuqsAdapter>
      <QueryClientProviderWrapper>
        <SidebarProvider>
          <AppSidebar session={user} side={"right"} />

          <div className="w-full px-2 sm:p-4 ">
            <div className="w-full flex  justify-between items-center gap-5 mt-2">
              <div className="flex gap-3 items-center">
                <div className="flex lg:hidden ">
                  <SidebarTrigger />
                </div>
              </div>
              <div className="flex flex-wrap gap-3 md:gap10 items-center">
                <BttonModeVibe />
                <Link href={"/notifications"}>
                  <Button>
                    <Notification height={25} width={25} />
                  </Button>
                </Link>
                <UserView />
              </div>
            </div>
            <main>{children}</main>
            <Toaster
              dir="rtl"
              toastOptions={{
                className: "font-sirwan-meduim",
              }}
              richColors
            />
          </div>
        </SidebarProvider>
      </QueryClientProviderWrapper>
    </NuqsAdapter>
  );
}
