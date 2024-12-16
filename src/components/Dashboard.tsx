import React from 'react';
import { useAdmin } from '../context/AdminContext';
import ProductsView from './views/ProductsView';
import CustomersView from './views/CustomersView';
import FeedbackView from './views/FeedbackView';
import OrdersView from './views/OrdersView';
import StatsView from './views/StatsView';
import VoucherView from './views/VoucherView';
import CategorySupplierView from './views/CategorySupplierView';

const Dashboard: React.FC = () => {
  const { activeView } = useAdmin();

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <StatsView />;
      case 'customers':
        return <CustomersView />;
      case 'products':
        return <ProductsView />;
      case 'feedback':
        return <FeedbackView />;
      case 'orders':
        return <OrdersView />;
      case 'vouchers':
        return <VoucherView />;
      case 'categories-suppliers':
        return <CategorySupplierView />;
      default:
        return <StatsView />;
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {renderView()}
    </div>
  );
};

export default Dashboard;
