
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Settings, Plus, MessageSquare, Users, Activity } from 'lucide-react';

type ChannelCredentials = 
  | { widget_id: string; phone_number?: undefined; api_token?: undefined; page_id?: undefined }
  | { phone_number: string; widget_id?: undefined; api_token?: undefined; page_id?: undefined }
  | { api_token: string; widget_id?: undefined; phone_number?: undefined; page_id?: undefined }
  | { page_id: string; widget_id?: undefined; phone_number?: undefined; api_token?: undefined }
  | Record<string, never>; // Empty object type

type Channel = {
  id: number;
  name: string;
  type: string;
  status: string;
  messages: number;
  segment: string;
  credentials: ChannelCredentials;
};

const Channels = () => {
  const navigate = useNavigate();
  const [channels, setChannels] = useState<Channel[]>([
    {
      id: 1,
      name: 'Website Chat',
      type: 'sitechat',
      status: 'active',
      messages: 1247,
      segment: 'All Visitors',
      credentials: { widget_id: 'WGT_12345' }
    },
    {
      id: 2,
      name: 'WhatsApp Business',
      type: 'whatsapp',
      status: 'active',
      messages: 892,
      segment: 'Premium Customers',
      credentials: { phone_number: '+1234567890' }
    },
    {
      id: 3,
      name: 'Telegram Bot',
      type: 'telegram',
      status: 'inactive',
      messages: 156,
      segment: 'Tech Support',
      credentials: { api_token: 'BOT_TOKEN_123' }
    },
    {
      id: 4,
      name: 'Facebook Messenger',
      type: 'facebook',
      status: 'active',
      messages: 634,
      segment: 'Social Media',
      credentials: { page_id: 'PAGE_12345' }
    },
    {
      id: 5,
      name: 'Instagram Direct',
      type: 'instagram',
      status: 'pending',
      messages: 0,
      segment: 'Influencers',
      credentials: {}
    },
    {
      id: 6,
      name: 'LinkedIn Messages',
      type: 'linkedin',
      status: 'inactive',
      messages: 23,
      segment: 'B2B Leads',
      credentials: {}
    }
  ]);

  const getChannelIcon = (type: string) => {
    return <MessageSquare className="h-5 w-5" />;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Channels</h1>
                <p className="text-slate-600">Manage your incoming communication channels</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Channel
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {channels.map((channel) => (
              <div key={channel.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      {getChannelIcon(channel.type)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{channel.name}</h3>
                      <p className="text-sm text-slate-500 capitalize">{channel.type}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(channel.status)}>
                    {channel.status}
                  </Badge>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Messages</span>
                    <div className="flex items-center space-x-1">
                      <Activity className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">{channel.messages.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">User Segment</span>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">{channel.segment}</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Settings className="h-4 w-4 mr-2" />
                    Configure
                  </Button>
                  <Button 
                    variant={channel.status === 'active' ? 'destructive' : 'default'}
                    size="sm" 
                    className="flex-1"
                  >
                    {channel.status === 'active' ? 'Disable' : 'Enable'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Channels;
