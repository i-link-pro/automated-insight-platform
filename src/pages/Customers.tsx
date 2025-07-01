
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Plus, User, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Customers = () => {
  const customers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@techcorp.com',
      phone: '+1 (555) 123-4567',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      status: 'premium',
      lastContact: '2 days ago',
      totalSpent: '$12,450',
      conversations: 15
    },
    {
      id: 2,
      name: 'Emily Johnson',
      email: 'emily@startup.co',
      phone: '+1 (555) 987-6543',
      company: 'StartupXYZ',
      location: 'New York, NY',
      status: 'trial',
      lastContact: '1 week ago',
      totalSpent: '$0',
      conversations: 3
    },
    {
      id: 3,
      name: 'David Wilson',
      email: 'david.wilson@enterprise.com',
      phone: '+1 (555) 456-7890',
      company: 'Enterprise Co.',
      location: 'Chicago, IL',
      status: 'active',
      lastContact: '5 hours ago',
      totalSpent: '$8,900',
      conversations: 28
    },
    {
      id: 4,
      name: 'Sarah Davis',
      email: 'sarah@consulting.net',
      phone: '+1 (555) 321-0987',
      company: 'Consulting Net',
      location: 'Austin, TX',
      status: 'churned',
      lastContact: '2 months ago',
      totalSpent: '$3,200',
      conversations: 7
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">
                Customers
              </h1>
              <p className="text-slate-600">
                Manage your customer relationships and data
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Customer
            </Button>
          </div>

          {/* Customer Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Total Customers</p>
                  <p className="text-2xl font-bold text-slate-900">2,847</p>
                </div>
                <User className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Premium</p>
                  <p className="text-2xl font-bold text-green-600">234</p>
                </div>
                <Calendar className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Trial Users</p>
                  <p className="text-2xl font-bold text-purple-600">567</p>
                </div>
                <Mail className="h-8 w-8 text-purple-500" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Churn Rate</p>
                  <p className="text-2xl font-bold text-orange-600">2.3%</p>
                </div>
                <Phone className="h-8 w-8 text-orange-500" />
              </div>
            </div>
          </div>

          {/* Customers List */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">Customer Directory</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Total Spent
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Last Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {customers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center mr-4">
                            <User className="h-5 w-5 text-slate-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">{customer.name}</div>
                            <div className="text-sm text-slate-500">{customer.company}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-900 flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-slate-400" />
                          {customer.email}
                        </div>
                        <div className="text-sm text-slate-500 flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-2 text-slate-400" />
                          {customer.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          customer.status === 'premium' 
                            ? 'bg-purple-100 text-purple-800'
                            : customer.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : customer.status === 'trial'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {customer.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        {customer.totalSpent}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        {customer.lastContact}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Customers;
