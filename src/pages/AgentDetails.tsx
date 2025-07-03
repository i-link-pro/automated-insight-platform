
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Settings, Bot, MessageSquare, TrendingUp, Clock, Star, History } from 'lucide-react';

const AgentDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const agent = {
    id: id,
    name: 'Sarah',
    role: 'Sales Expert',
    status: 'active',
    conversations: 127,
    successRate: 91,
    avgResponse: '1.2s',
    model: 'GPT-4 Turbo',
    version: 'v2.1',
    totalConversations: 1847,
    rating: 4.8,
    uptime: '99.9%'
  };

  const recentConversations = [
    { id: 1, customer: 'John Smith', status: 'completed', duration: '5m 32s', result: 'success' },
    { id: 2, customer: 'Emma Wilson', status: 'active', duration: '2m 15s', result: 'pending' },
    { id: 3, customer: 'Mike Johnson', status: 'completed', duration: '8m 47s', result: 'success' },
  ];

  const handleVersionHistory = () => {
    // Navigate to version history page or show modal
    console.log('Show version history for agent', id);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="flex items-center mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/agents')}
              className="mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Agents
            </Button>
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <h1 className="text-2xl font-bold text-slate-900">{agent.name}</h1>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                  {agent.version}
                </span>
              </div>
              <p className="text-slate-600">{agent.role} - Performance Dashboard</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={handleVersionHistory}>
                <History className="h-4 w-4 mr-2" />
                Version History
              </Button>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Edit Agent
              </Button>
            </div>
          </div>

          {/* Agent Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  {agent.status}
                </span>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{agent.conversations}</p>
                <p className="text-sm text-slate-600">Active Conversations</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-green-600 text-sm font-medium">+5.2%</div>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{agent.successRate}%</p>
                <p className="text-sm text-slate-600">Success Rate</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-green-600 text-sm font-medium">-0.3s</div>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{agent.avgResponse}</p>
                <p className="text-sm text-slate-600">Avg Response Time</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Star className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-green-600 text-sm font-medium">+0.2</div>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{agent.rating}</p>
                <p className="text-sm text-slate-600">Customer Rating</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Conversations */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Conversations</h3>
              <div className="space-y-4">
                {recentConversations.map((conversation) => (
                  <div key={conversation.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{conversation.customer}</p>
                        <p className="text-xs text-slate-500">Duration: {conversation.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        conversation.result === 'success' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {conversation.result}
                      </span>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Agent Configuration */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Agent Configuration</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-600">AI Model</p>
                  <p className="text-sm font-medium text-slate-900">{agent.model}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Version</p>
                  <p className="text-sm font-medium text-blue-600">{agent.version}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Total Conversations</p>
                  <p className="text-sm font-medium text-slate-900">{agent.totalConversations.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Uptime</p>
                  <p className="text-sm font-medium text-green-600">{agent.uptime}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Specialization</p>
                  <p className="text-sm font-medium text-slate-900">{agent.role}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <Button className="w-full mb-2 bg-blue-600 hover:bg-blue-700">
                  <Bot className="h-4 w-4 mr-2" />
                  Test Agent
                </Button>
                <Button variant="outline" className="w-full">
                  View Training Data
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AgentDetails;
