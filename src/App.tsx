import React from 'react';
import { BarChart3, Users, Package, MessageSquare, TruckIcon, Menu, Ticket, LayersIcon } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { AdminProvider } from './context/AdminContext';
import { Toaster } from 'react-hot-toast';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', id: 'dashboard' },
    { icon: Users, label: 'Customers', id: 'customers' },
    { icon: Package, label: 'Products', id: 'products' },
    { icon: MessageSquare, label: 'Feedback', id: 'feedback' },
    { icon: TruckIcon, label: 'Orders', id: 'orders' },
    { icon: Ticket, label: 'Vouchers', id: 'vouchers' },
    { icon: LayersIcon, label: 'Categories & Suppliers', id: 'categories-suppliers' }
  ];

  return (
    <AdminProvider>
      <Toaster position="top-right" />
      <div className="flex h-screen bg-gray-50">
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen}
          menuItems={menuItems}
        />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white shadow-sm">
            <div className="flex items-center justify-between p-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-md hover:bg-gray-100 lg:hidden"
              >
                <Menu size={24} />
              </button>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src="https://i.pinimg.com/736x/60/76/2d/60762d2abf0c0762d461e6206834ba06.jpg"
                    alt="Admin"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
            <Dashboard />
          </main>
        </div>
      </div>
    </AdminProvider>
  );
}

export default App;