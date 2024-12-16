import React, { useState, useEffect } from 'react';
// import { Package, CheckCircle, Clock, XCircle } from 'lucide-react';
// import { getAllOrders, updateOrderStatus } from '../../services/api'; // Import các hàm API
import { getAllOrders } from '../../services/api';

interface Order {
  _id: string;
  customer: string;
  date: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: number;
}

const OrdersView: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getAllOrders();
        const formattedOrders = data.map((order: any) => ({
          _id: order._id,
          customer: order.user._id,
          date: new Date(order.date).toLocaleDateString(),
          total: order.total,
          status: order.status,
          items: order.products.length
        }));
        setOrders(formattedOrders);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };
    fetchOrders();
  }, []);

  // const handleStatusChange = async (orderId: string, newStatus: Order['status']) => {
  //   try {
  //     await updateOrderStatus(orderId, newStatus);
  //     setOrders(orders.map(order =>
  //       order._id === orderId ? { ...order, status: newStatus } : order
  //     ));
  //   } catch (error) {
  //     console.error("Failed to update order status:", error);
  //   }
  // };

  // const getStatusColor = (status: Order['status']) => {
  //   switch (status) {
  //     case 'pending':
  //       return 'bg-yellow-100 text-yellow-800';
  //     case 'processing':
  //       return 'bg-blue-100 text-blue-800';
  //     case 'shipped':
  //       return 'bg-purple-100 text-purple-800';
  //     case 'delivered':
  //       return 'bg-green-100 text-green-800';
  //     case 'cancelled':
  //       return 'bg-red-100 text-red-800';
  //   }
  // };

  // const getStatusIcon = (status: Order['status']) => {
  //   switch (status) {
  //     case 'pending':
  //       return <Clock size={16} className="mr-1" />;
  //     case 'processing':
  //       return <Package size={16} className="mr-1" />;
  //     case 'shipped':
  //       return <Package size={16} className="mr-1" />;
  //     case 'delivered':
  //       return <CheckCircle size={16} className="mr-1" />;
  //     case 'cancelled':
  //       return <XCircle size={16} className="mr-1" />;
  //   }
  // };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">ĐƠN HÀNG</h2>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mã đơn hàng</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mã Khách hàng</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số lượng</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tổng hóa đơn</th>

              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th> */}

            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">#{order._id}</div>
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">#{order.customer}</div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{order.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{order.items}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{order.total.toLocaleString('vi-VN')} VNĐ</div>
                </td>

                {/* <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    {String(order.status).charAt(0).toUpperCase() + String(order.status).slice(1)}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    className="text-sm border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={order.status}
                    onChange={(e) => handleStatusChange(order._id, e.target.value as Order['status'])}
                  >
                    {order.status === 'pending' && (
                      <>
                        <option value="pending">pending</option>
                        <option value="processing">Update to: Processing</option>
                        <option value="cancelled">Update to: Cancelled</option>
                      </>
                    )}
                    {order.status === 'processing' && (
                      <>
                        <option value="processing">processing</option>
                        <option value="shipped">Update to: Shipped</option>
                        <option value="cancelled">Update to: Cancelled</option>
                      </>
                    )}
                    {order.status === 'shipped' && (
                      <>
                        <option value="shipped">shipped</option>
                        <option value="delivered">Update to: Delivered</option>
                      </>
                    )}
                    {order.status === 'delivered' && (
                      <option value="delivered" disabled>Delivered</option>
                    )}
                    {order.status === 'cancelled' && (
                      <option value="cancelled" disabled>Cancelled</option>
                    )}
                  </select>
                </td> */}

              </tr>
            )
          )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersView;
