
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Input } from '@/components/ui/input';
import { MessageSquare, User, Bot, Clock, Star, Search, Filter, Phone, Video } from 'lucide-react';

const Conversations = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const conversations = [
    {
      id: 1,
      customer: 'John Smith',
      agent: 'Sarah',
      status: 'active',
      type: 'chat',
      lastMessage: 'Thanks for helping me with the billing issue!',
      timestamp: '2 min ago',
      sentiment: 'positive',
      rating: 5
    },
    {
      id: 2,
      customer: 'Emily Johnson',
      agent: 'Mike',
      status: 'resolved',
      type: 'call',
      lastMessage: 'Perfect, that solved my problem.',
      timestamp: '15 min ago',
      sentiment: 'positive',
      rating: 4
    },
    {
      id: 3,
      customer: 'David Wilson',
      agent: 'Emma',
      status: 'waiting',
      type: 'chat',
      lastMessage: 'I need help with account setup.',
      timestamp: '1 hour ago',
      sentiment: 'neutral',
      rating: null
    },
    {
      id: 4,
      customer: 'Sarah Davis',
      agent: 'Sarah',
      status: 'escalated',
      type: 'call',
      lastMessage: 'This is getting frustrating...',
      timestamp: '2 hours ago',
      sentiment: 'negative',
      rating: null
    }
  ];

  const filteredConversations = conversations.filter(conversation => {
    const matchesSearch = conversation.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conversation.agent.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conversation.lastMessage.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || conversation.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const handleConversationClick = (conversation: any) => {
    navigate(`/conversations/${conversation.id}/${conversation.type}`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Conversations
            </h1>
            <p className="text-slate-600">
              Monitor and manage customer interactions
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="resolved">Resolved</option>
                <option value="waiting">Waiting</option>
                <option value="escalated">Escalated</option>
              </select>
            </div>
          </div>

          {/* Conversation Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Active Chats</p>
                  <p className="text-2xl font-bold text-blue-600">12</p>
                </div>
                <MessageSquare className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Resolved Today</p>
                  <p className="text-2xl font-bold text-green-600">47</p>
                </div>
                <User className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Avg Response Time</p>
                  <p className="text-2xl font-bold text-slate-900">1.4s</p>
                </div>
                <Clock className="h-8 w-8 text-purple-500" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Satisfaction</p>
                  <p className="text-2xl font-bold text-orange-600">4.6</p>
                </div>
                <Star className="h-8 w-8 text-orange-500" />
              </div>
            </div>
          </div>

          {/* Conversations List */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">
                Recent Conversations ({filteredConversations.length})
              </h3>
            </div>
            <div className="divide-y divide-slate-200">
              {filteredConversations.map((conversation) => (
                <div 
                  key={conversation.id} 
                  className="p-6 hover:bg-slate-50 cursor-pointer"
                  onClick={() => handleConversationClick(conversation)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-slate-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="text-sm font-medium text-slate-900">{conversation.customer}</h4>
                          <span className="text-xs text-slate-500">→</span>
                          <div className="flex items-center space-x-1">
                            <Bot className="h-3 w-3 text-blue-500" />
                            <span className="text-xs text-slate-600">{conversation.agent}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {conversation.type === 'call' ? (
                              <Phone className="h-3 w-3 text-green-500" />
                            ) : (
                              <MessageSquare className="h-3 w-3 text-blue-500" />
                            )}
                            <span className="text-xs text-slate-500">{conversation.type}</span>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 mb-2">{conversation.lastMessage}</p>
                        <div className="flex items-center space-x-4 text-xs text-slate-500">
                          <span>{conversation.timestamp}</span>
                          <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                            conversation.sentiment === 'positive' 
                              ? 'bg-green-100 text-green-800'
                              : conversation.sentiment === 'negative'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {conversation.sentiment}
                          </span>
                          {conversation.rating && (
                            <div className="flex items-center space-x-1">
                              <Star className="h-3 w-3 text-yellow-400 fill-current" />
                              <span>{conversation.rating}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      conversation.status === 'active' 
                        ? 'bg-blue-100 text-blue-800'
                        : conversation.status === 'resolved'
                        ? 'bg-green-100 text-green-800'
                        : conversation.status === 'waiting'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {conversation.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Conversations;
