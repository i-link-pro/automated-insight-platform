
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Bot } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CreateAgent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Agent Created",
      description: "Your new AI agent has been created successfully.",
    });
    navigate('/agents');
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

          <div className="max-w-2xl">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-6">
              <div>
                <Label htmlFor="name">Agent Name</Label>
                <Input id="name" placeholder="Enter agent name" required />
              </div>

              <div>
                <Label htmlFor="role">Role/Specialization</Label>
                <select id="role" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select role</option>
                  <option value="sales">Sales Expert</option>
                  <option value="support">Support Specialist</option>
                  <option value="hr">HR Assistant</option>
                  <option value="marketing">Marketing Assistant</option>
                </select>
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
                <Label htmlFor="personality">Personality & Tone</Label>
                <Textarea id="personality" placeholder="Describe the agent's personality, communication style, and tone" />
              </div>

              <div>
                <Label htmlFor="instructions">System Instructions</Label>
                <Textarea id="instructions" placeholder="Provide specific instructions for how the agent should behave and respond" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="temperature">Response Creativity</Label>
                  <Input id="temperature" type="range" min="0" max="1" step="0.1" defaultValue="0.3" />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>Focused</span>
                    <span>Creative</span>
                  </div>
                </div>
                <div>
                  <Label htmlFor="max-tokens">Max Response Length</Label>
                  <Input id="max-tokens" type="number" placeholder="500" />
                </div>
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
        </main>
      </div>
    </div>
  );
};

export default CreateAgent;
