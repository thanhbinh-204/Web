import React from 'react';
import { useAdmin } from '../context/AdminContext';
import { LucideIcon } from 'lucide-react';

interface MenuItem {
  icon: LucideIcon;
  label: string;
  id: string;
}

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, menuItems }) => {
  const { activeView, setActiveView } = useAdmin();

  return (
    <div
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed lg:relative lg:translate-x-0 z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center">
          <span className="text-white text-2xl mx-2 font-semibold">Quản lý</span>
        </div>
      </div>

      <nav className="mt-10">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              className={`flex items-center mt-4 py-2 px-6 cursor-pointer ${
                activeView === item.id
                  ? 'bg-gray-700 bg-opacity-25 text-gray-100'
                  : 'text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100'
              }`}
              onClick={() => setActiveView(item.id)}
            >
              <Icon className="w-6 h-6" />
              <span className="mx-3">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;