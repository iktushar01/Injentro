import { SidebarData, NavItem } from "@/types/sidebar";

export const getClientSidebarData = async (
  dynamicClassroomItems: NavItem[]
): Promise<SidebarData> => {
  return {
    logo: {
      src: "/logo.png",
      alt: "Acadex logo",
      title: "Acadex",
      description: "Student Panel",
    },
    navGroups: [
      {
        title: "Overview",
        items: [
          { label: "Classroom", icon: "LayoutDashboard", href: "/dashboard/classroom" },
          { label: "Leaderboard", icon: "BarChart3", href: "/dashboard/classroom/leaderboard" },
          { label: "Favorites", icon: "Heart", href: "/dashboard/favorites" },
          { label: "Services", icon: "ClipboardList", href: "/dashboard/services" },
        ],
      },
      {
        title: "list of classrooms",
        items:
          dynamicClassroomItems.length > 0
            ? dynamicClassroomItems
            : [{ label: "No classes joined", icon: "BookOpen", href: "/dashboard/classroom" }],
      },
      {
        title: "Messages",
        items: [
          { label: "Messages", icon: "MessageSquare", href: "/dashboard/classroom/Group-chat" },
        ],
      },
      {
        title: "System",
        items: [
          { label: "Settings", icon: "Settings", href: "/dashboard/settings" },
        ],
      },
    ],
  };
};