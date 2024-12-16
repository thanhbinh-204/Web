import React from 'react';
import { DollarSign, ShoppingBag, Users } from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';

const StatsView: React.FC = () => {
  const { customers, orders } = useAdmin();

  let totalRevenue = 0;
  if (orders?.length) {
    for (const order of orders) {
      totalRevenue += order.total;
    }
  }

  const today = new Date();
  const currentMonth = today.getMonth(); // Tháng hiện tại
  const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const currentYear = today.getFullYear();
  const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear; // Năm của tháng trước

  // Hàm lấy doanh thu theo tháng
  const getRevenueByMonth = (orders: any[], month: number, year: number) => {
    return orders
      .filter((order) => {
        const orderDate = new Date(order.date);
        return (
          order.status === "1" &&
          orderDate.getMonth() === month &&
          orderDate.getFullYear() === year
        );
      })
      .reduce((acc, order) => acc + order.total, 0);
  };

  // Doanh thu tháng hiện tại và tháng trước
  const currentMonthRevenue = getRevenueByMonth(orders, currentMonth, currentYear);
  const lastMonthRevenue = getRevenueByMonth(orders, lastMonth, lastMonthYear);

  // Tính tỷ lệ tăng trưởng
  const monthlyGrowthRate = lastMonthRevenue
    ? ((currentMonthRevenue - lastMonthRevenue) / lastMonthRevenue) * 100
    : 0;

  //trang thai don hang chua phat trien nen dat mac dinh la 1 co nghia laf da hoan thanh
  const deliveredOrdersCount = orders?.filter((order) => order.status === '1').length || 0;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900">THỐNG KÊ</h2>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100">
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Tổng doanh thu</p>
              <p className="text-2xl font-semibold text-gray-900">{currentMonthRevenue.toLocaleString('vi-VN')} VNĐ</p>
                {/* 
                 =neu ti le monthlyGrowthRate nhỏ hơn 0 có nghĩa là 
                doanh thu tháng này nhỏ hơn tháng trước và hiển thị ra số - 
                  = nếu tỉ lệ monthlyGrowthRate lớn hơn không có nghĩa là doanh thu tăng lên thì 
                  hiển thị là + 
                */}
              <p className="text-sm text-green-600">
                {monthlyGrowthRate >= 0
                  ? `+${monthlyGrowthRate.toFixed(2)}% from last month`
                  : `-${Math.abs(monthlyGrowthRate).toFixed(2)}% from last month`}
              </p>

            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100">
              <ShoppingBag className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Tổng đơn hàng</p>
              <p className="text-2xl font-semibold text-gray-900">{deliveredOrdersCount}</p>
              <p className="text-sm text-blue-600">+xx.xx% from last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Số lượng khách hàng</p>
              <p className="text-2xl font-semibold text-gray-900">{customers?.length}</p>
              <p className="text-sm text-purple-600">+xx.xx% from last month</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <canvas id="revenueChart" className="w-full h-64"></canvas>
      </div>
    </div>
  );
};

export default StatsView;
