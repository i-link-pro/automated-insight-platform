
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import KPICard from '@/components/KPICard';
import LiveActivity from '@/components/LiveActivity';
import AgentStatus from '@/components/AgentStatus';
import QuickActions from '@/components/QuickActions';
import { MessageSquare, DollarSign, Bot } from 'lucide-react';

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <KPICard
              title="Active Conversations"
              value="127"
              change="+12%"
              trend="up"
              icon={MessageSquare}
              iconColor="bg-blue-500"
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
              <QuickActions />
              <LiveActivity />
            </div>
            
            <div className="space-y-6">
              <AgentStatus />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
