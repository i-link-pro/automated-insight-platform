
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Bot, BarChart3, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-900 mb-6">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <Button 
          className="h-auto p-4 flex flex-col items-center space-y-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"
          variant="outline"
          onClick={() => navigate('/campaigns/new')}
        >
          <Plus className="h-6 w-6" />
          <span className="text-sm font-medium">New Campaign</span>
        </Button>
        
        <Button 
          className="h-auto p-4 flex flex-col items-center space-y-2 bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200"
          variant="outline"
          onClick={() => navigate('/agents/create')}
        >
          <Bot className="h-6 w-6" />
          <span className="text-sm font-medium">Create Agent</span>
        </Button>
        
        <Button 
          className="h-auto p-4 flex flex-col items-center space-y-2 bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
          variant="outline"
          onClick={() => navigate('/analytics')}
        >
          <BarChart3 className="h-6 w-6" />
          <span className="text-sm font-medium">View Reports</span>
        </Button>
        
        <Button 
          className="h-auto p-4 flex flex-col items-center space-y-2 bg-orange-50 hover:bg-orange-100 text-orange-700 border-orange-200"
          variant="outline"
          onClick={() => navigate('/customers')}
        >
          <Users className="h-6 w-6" />
          <span className="text-sm font-medium">Manage Customers</span>
        </Button>
      </div>
      
      <div className="mt-6 pt-6 border-t border-slate-100">
        <Button 
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          onClick={() => navigate('/ai-campaign-wizard')}
        >
          <Zap className="h-4 w-4 mr-2" />
          AI Campaign Wizard
        </Button>
      </div>
    </div>
  );
};

export default QuickActions;
