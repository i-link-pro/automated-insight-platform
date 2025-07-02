
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Plus, Play, Pause, BarChart3 } from 'lucide-react';

const Campaigns = () => {
  const navigate = useNavigate();

  const campaigns = [
    {
      id: 1,
      name: 'Spring Promotion 2024',
      status: 'active',
      contacts: 15247,
      engaged: 4832,
      conversions: 267,
      budget: '$5,000',
      spent: '$1,847',
      roi: '2,349%'
    },
    {
      id: 2,
      name: 'Customer Retention',
      status: 'paused',
      contacts: 8930,
      engaged: 2156,
      conversions: 89,
      budget: '$3,000',
      spent: '$967',
      roi: '1,245%'
    },
    {
      id: 3,
      name: 'Product Launch Q2',
      status: 'draft',
      contacts: 0,
      engaged: 0,
      conversions: 0,
      budget: '$8,000',
      spent: '$0',
      roi: '0%'
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
                Campaign Management
              </h1>
              <p className="text-slate-600">
                Create and manage AI-powered marketing campaigns
              </p>
            </div>
            <Button 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => navigate('/campaigns/new')}
            >
              <Plus className="h-4 w-4 mr-2" />
              New Campaign
            </Button>
          </div>

          {/* Campaign Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Total Campaigns</p>
                  <p className="text-2xl font-bold text-slate-900">12</p>
                </div>
                <BarChart3 className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Active Now</p>
                  <p className="text-2xl font-bold text-green-600">3</p>
                </div>
                <Play className="h-8 w-8 text-green-500" />
              </div>
            </div>
          </div>

          {/* Campaigns List */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">All Campaigns</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Campaign
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Engagement
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Budget
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      ROI
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {campaigns.map((campaign) => (
                    <tr key={campaign.id} className="hover:bg-slate-50 cursor-pointer" onClick={() => navigate(`/campaigns/${campaign.id}`)}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-slate-900">{campaign.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          campaign.status === 'active' 
                            ? 'bg-green-100 text-green-800'
                            : campaign.status === 'paused'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {campaign.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                        {campaign.engaged.toLocaleString()} ({Math.round((campaign.engaged/campaign.contacts)*100)}%)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                        {campaign.spent} / {campaign.budget}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                        {campaign.roi}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); }}>
                            {campaign.status === 'active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                          </Button>
                          <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); }}>
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

export default Campaigns;
