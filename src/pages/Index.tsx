
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import KPICard from '@/components/KPICard';
import LiveActivity from '@/components/LiveActivity';
import AgentStatus from '@/components/AgentStatus';
import QuickActions from '@/components/QuickActions';
import { MessageSquare, DollarSign, Bot, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Index = () => {
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">
                Welcome back, John! 👋
              </h1>
              <p className="text-slate-600">
                Here's what's happening with your AI automation today.
              </p>
            </div>
            
            <Dialog open={isCustomizeOpen} onOpenChange={setIsCustomizeOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Customize Dashboard
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Customize Dashboard Widgets</DialogTitle>
                  <DialogDescription>
                    Select which widgets you want to display on your dashboard.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h3 className="font-medium text-sm">KPI Cards</h3>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">Active Conversations</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">Monthly Costs</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">Agent Efficiency</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-medium text-sm">Widgets</h3>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">Quick Actions</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">Live Activity</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">Agent Status</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsCustomizeOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsCustomizeOpen(false)}>
                    Save Changes
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
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
