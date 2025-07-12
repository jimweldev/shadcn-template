import { FaChartArea } from 'react-icons/fa6';
import { Outlet } from 'react-router';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar, { type SidebarGroup } from './_components/app-sidebar';
import AppSidebarToggle from './_components/app-sidebar-toggle';

const MainLayout = () => {
  const sidebarGroups: SidebarGroup[] = [
    {
      sidebarLabel: 'Components',
      sidebarItems: [
        {
          title: 'Button',
          url: '/button',
          icon: FaChartArea,
          end: true,
        },
        {
          title: 'Input',
          url: '/input',
          icon: FaChartArea,
        },
        {
          title: 'React Select',
          url: '/react-select',
          icon: FaChartArea,
        },
        {
          title: 'Dialog',
          url: '/dialog',
          icon: FaChartArea,
        },
        {
          title: 'Tab',
          url: '/tab',
          icon: FaChartArea,
        },
      ],
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar sidebarGroups={sidebarGroups} />
      <main className="flex-1">
        <header className="bg-card flex justify-between p-2 shadow-sm">
          <div className="flex gap-2">
            <AppSidebarToggle />
          </div>
        </header>

        <div className="@container/main p-4 sm:p-6">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default MainLayout;
