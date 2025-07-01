
import React from 'react';
import { MessageSquare, Bot, User, Clock } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'conversation',
    message: 'New conversation started with Premium Customer',
    user: 'Sarah AI',
    time: '2 min ago',
    status: 'active',
  },
  {
    id: 2,
    type: 'escalation',
    message: 'Conversation escalated to human agent',
    user: 'Mike AI → John Smith',
    time: '5 min ago',
    status: 'escalated',
  },
  {
    id: 3,
    type: 'completion',
    message: 'Campaign "Spring Promotion" completed successfully',
    user: 'System',
    time: '12 min ago',
    status: 'completed',
  },
  {
    id: 4,
    type: 'conversation',
    message: 'Customer satisfaction score: 9/10',
    user: 'Emma AI',
    time: '18 min ago',
    status: 'positive',
  },
];

const LiveActivity = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-700';
      case 'escalated':
        return 'bg-orange-100 text-orange-700';
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'positive':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'conversation':
        return <MessageSquare className="h-4 w-4" />;
      case 'escalation':
        return <User className="h-4 w-4" />;
      case 'completion':
        return <Bot className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Live Activity</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate-500">Live</span>
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg ${getStatusColor(activity.status)}`}>
              {getIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900">
                {activity.message}
              </p>
              <div className="flex items-center mt-1 space-x-2">
                <span className="text-xs text-slate-500">{activity.user}</span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
        View all activity →
      </button>
    </div>
  );
};

export default LiveActivity;
