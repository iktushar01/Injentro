import { SidebarData } from "@/types/sidebar";

export const getClientSidebarData = async (): Promise<SidebarData> => {
  return {
    logo: {
      src: "/logo.png",
      alt: "Acadex logo",
      title: "Acadex",
      description: "Student Panel",
    },
    navGroups: [
      {
        title: "Main",
        items: [
          {
            label: "Dashboard",
            icon: "LayoutDashboard",
            href: "/dashboard",
          },
          {
            label: "Settings",
            icon: "Settings",
            href: "/dashboard/settings",
          },
        ],
      },
    ],
  };
};