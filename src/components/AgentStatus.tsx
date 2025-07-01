
import React from 'react';
import { Bot, MessageSquare, Clock, TrendingUp } from 'lucide-react';

const agents = [
  {
    id: 1,
    name: 'Sarah',
    role: 'Sales Expert',
    status: 'active',
    conversations: 8,
    efficiency: 94,
    responseTime: '1.2s',
    sentiment: 'positive',
  },
  {
    id: 2,
    name: 'Mike',
    role: 'Support Specialist',
    status: 'active',
    conversations: 5,
    efficiency: 88,
    responseTime: '2.1s',
    sentiment: 'neutral',
  },
  {
    id: 3,
    name: 'Emma',
    role: 'HR Assistant',
    status: 'idle',
    conversations: 0,
    efficiency: 92,
    responseTime: '1.8s',
    sentiment: 'positive',
  },
];

const AgentStatus = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'idle':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-slate-400';
      default:
        return 'bg-slate-400';
    }
  };

  const getSentimentEmoji = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return '😊';
      case 'neutral':
        return '😐';
      case 'negative':
        return '😞';
      default:
        return '😐';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900">AI Agents</h3>
        <span className="text-sm text-slate-500">Real-time status</span>
      </div>

      <div className="space-y-4">
        {agents.map((agent) => (
          <div key={agent.id} className="border border-slate-100 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Bot className="h-8 w-8 text-blue-600" />
                  <div
                    className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(
                      agent.status
                    )} rounded-full border-2 border-white`}
                  ></div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">{agent.name}</h4>
                  <p className="text-sm text-slate-500">{agent.role}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1">
                  <MessageSquare className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium text-slate-900">
                    {agent.conversations}
                  </span>
                </div>
                <p className="text-xs text-slate-500">conversations</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-lg">
                    {getSentimentEmoji(agent.sentiment)}
                  </span>
                  <span className="text-sm font-medium text-slate-900">
                    {agent.efficiency}%
                  </span>
                </div>
                <p className="text-xs text-slate-500">Sentiment</p>
              </div>
              <div>
                <div className="flex items-center justify-center space-x-1">
                  <Clock className="h-3 w-3 text-slate-400" />
                  <span className="text-sm font-medium text-slate-900">
                    {agent.responseTime}
                  </span>
                </div>
                <p className="text-xs text-slate-500">Response</p>
              </div>
              <div>
                <div className="flex items-center justify-center space-x-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-sm font-medium text-slate-900">
                    {agent.efficiency}%
                  </span>
                </div>
                <p className="text-xs text-slate-500">Success</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
        Manage all agents →
      </button>
    </div>
  );
};

export default AgentStatus;
