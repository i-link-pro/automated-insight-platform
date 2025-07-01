
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { BarChart3, TrendingUp, TrendingDown, DollarSign, Users, MessageSquare } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Analytics Dashboard
            </h1>
            <p className="text-slate-600">
              Track performance metrics and insights
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex items-center text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">+12%</span>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">15,247</p>
                <p className="text-sm text-slate-600">Total Conversations</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex items-center text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">+8.5%</span>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">31.2%</p>
                <p className="text-sm text-slate-600">Conversion Rate</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex items-center text-red-600">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">-2.1%</span>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">$89,432</p>
                <p className="text-sm text-slate-600">Revenue This Month</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex items-center text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">+5.2%</span>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">2,847</p>
                <p className="text-sm text-slate-600">Active Customers</p>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">
                Conversation Volume
              </h3>
              <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-500">Conversation trends chart</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Weekly conversation volume over time
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">
                Agent Performance
              </h3>
              <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-500">Agent efficiency metrics</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Success rates and response times
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Top Performing Campaigns
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Spring Promotion</span>
                  <span className="text-sm font-medium text-green-600">2,349% ROI</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Customer Retention</span>
                  <span className="text-sm font-medium text-green-600">1,245% ROI</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Product Launch</span>
                  <span className="text-sm font-medium text-green-600">987% ROI</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Customer Segments
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Premium Users</span>
                  <span className="text-sm font-medium text-slate-900">234 (8.2%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Active Users</span>
                  <span className="text-sm font-medium text-slate-900">1,456 (51.1%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Trial Users</span>
                  <span className="text-sm font-medium text-slate-900">567 (19.9%)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Response Times
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Average Response</span>
                  <span className="text-sm font-medium text-slate-900">1.4s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Fastest Agent</span>
                  <span className="text-sm font-medium text-green-600">0.9s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Peak Hours</span>
                  <span className="text-sm font-medium text-slate-900">2-4 PM</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
