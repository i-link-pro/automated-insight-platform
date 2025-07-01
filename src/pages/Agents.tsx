import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Plus, Bot, Settings, Play, Pause, Activity } from 'lucide-react';

const Agents = () => {
  const navigate = useNavigate();

  const agents = [
    {
      id: 1,
      name: 'Sarah',
      role: 'Sales Expert',
      status: 'active',
      conversations: 12,
      successRate: 91,
      avgResponse: '1.2s',
      model: 'GPT-4 Turbo',
      lastUpdated: '2 hours ago'
    },
    {
      id: 2,
      name: 'Mike',
      role: 'Support Specialist',
      status: 'active',
      conversations: 8,
      successRate: 88,
      avgResponse: '2.1s',
      model: 'GPT-4',
      lastUpdated: '1 day ago'
    },
    {
      id: 3,
      name: 'Emma',
      role: 'HR Assistant',
      status: 'idle',
      conversations: 0,
      successRate: 95,
      avgResponse: '0.9s',
      model: 'GPT-3.5 Turbo',
      lastUpdated: '15 min ago'
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
                AI Agents
              </h1>
              <p className="text-slate-600">
                Manage and configure your AI assistants
              </p>
            </div>
            <Button 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => navigate('/agents/create')}
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Agent
            </Button>
          </div>

          {/* Agent Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Total Agents</p>
                  <p className="text-2xl font-bold text-slate-900">8</p>
                </div>
                <Bot className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Active Now</p>
                  <p className="text-2xl font-bold text-green-600">3</p>
                </div>
                <Activity className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Conversations</p>
                  <p className="text-2xl font-bold text-slate-900">127</p>
                </div>
                <Play className="h-8 w-8 text-purple-500" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Avg Success Rate</p>
                  <p className="text-2xl font-bold text-orange-600">91%</p>
                </div>
                <Settings className="h-8 w-8 text-orange-500" />
              </div>
            </div>
          </div>

          {/* Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Bot className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{agent.name}</h3>
                      <p className="text-sm text-slate-600">{agent.role}</p>
                    </div>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    agent.status === 'active' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {agent.status}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Active Conversations</span>
                    <span className="text-sm font-medium text-slate-900">{agent.conversations}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Success Rate</span>
                    <span className="text-sm font-medium text-green-600">{agent.successRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Avg Response</span>
                    <span className="text-sm font-medium text-slate-900">{agent.avgResponse}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Model</span>
                    <span className="text-sm font-medium text-slate-900">{agent.model}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                  <span className="text-xs text-slate-500">Updated {agent.lastUpdated}</span>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      {agent.status === 'active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Agents;
