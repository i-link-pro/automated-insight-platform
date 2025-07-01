import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import KPICard from '@/components/KPICard';
import LiveActivity from '@/components/LiveActivity';
import AgentStatus from '@/components/AgentStatus';
import QuickActions from '@/components/QuickActions';
import { MessageSquare, TrendingUp, DollarSign, Bot, BarChart3 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Welcome back, John! 👋
            </h1>
            <p className="text-slate-600">
              Here's what's happening with your AI automation today.
            </p>
          </div>

          {/* KPI Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <KPICard
              title="Active Conversations"
              value="127"
              change="+12%"
              trend="up"
              icon={MessageSquare}
              iconColor="bg-blue-500"
            />
            <KPICard
              title="Campaign ROI"
              value="+34.5%"
              change="+2.1%"
              trend="up"
              icon={TrendingUp}
              iconColor="bg-green-500"
            />
            <KPICard
              title="Monthly Costs"
              value="$2,847"
              change="-5%"
              trend="down"
              icon={DollarSign}
              iconColor="bg-purple-500"
            />
            <KPICard
              title="Agent Efficiency"
              value="87.3%"
              change="+3.2%"
              trend="up"
              icon={Bot}
              iconColor="bg-orange-500"
            />
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <LiveActivity />
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-6">
                  Conversation Volume
                </h3>
                <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-500">Chart visualization would go here</p>
                    <p className="text-sm text-slate-400 mt-1">
                      Integration with Recharts for beautiful charts
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <AgentStatus />
              <QuickActions />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
