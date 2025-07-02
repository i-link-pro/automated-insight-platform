
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Pause, Settings, Users, MessageSquare, TrendingUp, DollarSign } from 'lucide-react';

const CampaignDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const campaign = {
    id: id,
    name: 'Spring Promotion 2024',
    status: 'active',
    contacts: 15247,
    engaged: 4832,
    conversions: 267,
    budget: '$5,000',
    spent: '$1,847',
    roi: '2,349%',
    agent: 'Sarah - Sales Expert',
    startDate: '2024-03-01',
    endDate: '2024-04-30'
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
              onClick={() => navigate('/campaigns')}
              className="mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Campaigns
            </Button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-slate-900">{campaign.name}</h1>
              <p className="text-slate-600">Campaign Details & Performance</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                {campaign.status === 'active' ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {campaign.status === 'active' ? 'Pause' : 'Start'}
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  campaign.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {campaign.status}
                </span>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{campaign.contacts.toLocaleString()}</p>
                <p className="text-sm text-slate-600">Total Contacts</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-green-600 text-sm font-medium">+12.5%</div>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{campaign.engaged.toLocaleString()}</p>
                <p className="text-sm text-slate-600">Engaged Contacts</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-green-600 text-sm font-medium">+8.3%</div>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{campaign.conversions}</p>
                <p className="text-sm text-slate-600">Conversions</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-green-600 text-sm font-medium">{campaign.roi}</div>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{campaign.spent}</p>
                <p className="text-sm text-slate-600">Spent / {campaign.budget}</p>
              </div>
            </div>
          </div>

          {/* Campaign Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Performance Over Time</h3>
              <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-500">Performance chart would go here</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Campaign Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-600">AI Agent</p>
                  <p className="text-sm font-medium text-slate-900">{campaign.agent}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Start Date</p>
                  <p className="text-sm font-medium text-slate-900">{campaign.startDate}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">End Date</p>
                  <p className="text-sm font-medium text-slate-900">{campaign.endDate}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Conversion Rate</p>
                  <p className="text-sm font-medium text-green-600">
                    {((campaign.conversions / campaign.engaged) * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CampaignDetails;
