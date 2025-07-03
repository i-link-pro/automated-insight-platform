
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Bot, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CreateAgent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [testMessage, setTestMessage] = useState('');
  const [testResponse, setTestResponse] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Agent Created",
      description: "Your new AI agent has been created successfully.",
    });
    navigate('/agents');
  };

  const handleTestAgent = () => {
    if (testMessage.trim()) {
      setTestResponse(`This is a test response from your AI agent. Original message: "${testMessage}"`);
    }
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
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Create AI Agent</h1>
              <p className="text-slate-600">Configure your intelligent assistant</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Agent Configuration */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-6">
                <div>
                  <Label htmlFor="name">Agent Name</Label>
                  <Input id="name" placeholder="Enter agent name" required />
                </div>

                <div>
                  <Label htmlFor="role">Role/Specialization</Label>
                  <Textarea id="role" placeholder="Describe the agent's role, responsibilities, and areas of expertise in detail" required />
                </div>

                <div>
                  <Label htmlFor="model">AI Model</Label>
                  <select id="model" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="gpt-4-turbo">GPT-4 Turbo</option>
                    <option value="gpt-4">GPT-4</option>
                    <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="instructions">System Instructions</Label>
                  <Textarea id="instructions" placeholder="Provide specific instructions for how the agent should behave and respond" />
                </div>

                <div>
                  <Label htmlFor="max-tokens">Max Response Length</Label>
                  <Input id="max-tokens" type="number" placeholder="500" />
                </div>

                <div className="flex justify-end space-x-4">
                  <Button type="button" variant="outline" onClick={() => navigate('/agents')}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    <Bot className="h-4 w-4 mr-2" />
                    Create Agent
                  </Button>
                </div>
              </form>
            </div>

            {/* Test Agent */}
            <div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Test Agent</h3>
                <p className="text-slate-600 mb-4">Test your agent configuration before creating it</p>
                
                <div className="border border-slate-200 rounded-lg p-4 h-64 mb-4 overflow-y-auto bg-slate-50">
                  {testResponse ? (
                    <div className="space-y-4">
                      <div className="flex justify-end">
                        <div className="bg-blue-600 text-white p-3 rounded-lg max-w-xs">
                          {testMessage}
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-white border border-slate-200 p-3 rounded-lg max-w-xs">
                          {testResponse}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-500">
                      Send a test message to see how your agent responds
                    </div>
                  )}
                </div>

                <div className="flex space-x-2">
                  <Input
                    placeholder="Type a test message..."
                    value={testMessage}
                    onChange={(e) => setTestMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleTestAgent()}
                  />
                  <Button onClick={handleTestAgent} disabled={!testMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateAgent;
