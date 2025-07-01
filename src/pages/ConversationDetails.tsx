
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Send, Phone, Video, User, Bot, Clock, Star } from 'lucide-react';

const ConversationDetails = () => {
  const navigate = useNavigate();
  const { id, type } = useParams(); // type can be 'chat' or 'call'

  const conversation = {
    id: id,
    customer: 'John Smith',
    agent: 'Sarah',
    status: 'active',
    type: type || 'chat',
    startTime: '2:30 PM',
    duration: '12 min',
    sentiment: 'positive',
    rating: 5
  };

  const messages = [
    { id: 1, sender: 'customer', text: 'Hi, I need help with my billing issue', time: '2:30 PM' },
    { id: 2, sender: 'agent', text: 'Hello! I\'d be happy to help you with your billing concern. Can you please provide me with your account number?', time: '2:31 PM' },
    { id: 3, sender: 'customer', text: 'Sure, it\'s AC-12345678', time: '2:32 PM' },
    { id: 4, sender: 'agent', text: 'Thank you! I can see your account now. I notice there was a duplicate charge on your last invoice. Let me fix that for you right away.', time: '2:33 PM' },
    { id: 5, sender: 'customer', text: 'That would be great, thank you!', time: '2:34 PM' },
    { id: 6, sender: 'agent', text: 'I\'ve processed a refund for the duplicate charge. You should see it in your account within 3-5 business days. Is there anything else I can help you with?', time: '2:40 PM' },
    { id: 7, sender: 'customer', text: 'No, that\'s perfect. Thanks for helping me with the billing issue!', time: '2:41 PM' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="flex items-center mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/conversations')}
              className="mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Conversations
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                {conversation.type === 'call' ? 'Call' : 'Chat'} Details
              </h1>
              <p className="text-slate-600">
                {conversation.customer} → {conversation.agent}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Conversation Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Conversation Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-slate-600" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">{conversation.customer}</p>
                    <p className="text-xs text-slate-500">Customer</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Bot className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">{conversation.agent}</p>
                    <p className="text-xs text-slate-500">AI Agent</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-slate-600" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">{conversation.startTime}</p>
                    <p className="text-xs text-slate-500">Duration: {conversation.duration}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Rating: {conversation.rating}/5</p>
                    <p className="text-xs text-slate-500 capitalize">{conversation.sentiment} sentiment</p>
                  </div>
                </div>
              </div>

              {conversation.type === 'call' && (
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <Button className="w-full mb-2 bg-green-600 hover:bg-green-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Back
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Video className="h-4 w-4 mr-2" />
                    Video Call
                  </Button>
                </div>
              )}
            </div>

            {/* Chat/Call Content */}
            <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
              <div className="p-6 border-b border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">
                  {conversation.type === 'call' ? 'Call Transcript' : 'Chat Messages'}
                </h3>
              </div>

              <div className="flex-1 p-6 space-y-4 max-h-96 overflow-y-auto">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === 'customer' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'customer' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-slate-100 text-slate-900'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'customer' ? 'text-blue-100' : 'text-slate-500'
                      }`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {conversation.type === 'chat' && conversation.status === 'active' && (
                <div className="p-6 border-t border-slate-200">
                  <div className="flex space-x-2">
                    <Input placeholder="Type your message..." className="flex-1" />
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ConversationDetails;
