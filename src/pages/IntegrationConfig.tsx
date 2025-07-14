
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Save, Eye, EyeOff, Key, Settings, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const IntegrationConfig = () => {
  const navigate = useNavigate();
  const { integrationName } = useParams();
  const { toast } = useToast();
  
  const [showApiKey, setShowApiKey] = useState(false);
  const [config, setConfig] = useState({
    apiKey: '',
    secretKey: '',
    webhookUrl: '',
    enabled: true,
    testMode: false,
    customSettings: ''
  });

  const handleSave = () => {
    toast({
      title: "Configuration Saved",
      description: "Integration settings have been successfully updated.",
    });
  };

  const handleTestConnection = () => {
    toast({
      title: "Testing Connection",
      description: "Verifying integration credentials...",
    });
    
    // Simulate API test
    setTimeout(() => {
      toast({
        title: "Connection Successful",
        description: "Integration is working correctly.",
      });
    }, 2000);
  };

  const getIntegrationDetails = (name: string) => {
    const integrations: Record<string, any> = {
      'zapier': {
        title: 'Zapier',
        description: 'Automate workflows with 5000+ apps',
        fields: ['apiKey', 'webhookUrl']
      },
      'slack': {
        title: 'Slack',
        description: 'Get notifications in your Slack workspace',
        fields: ['apiKey', 'webhookUrl', 'customSettings']
      },
      'gmail': {
        title: 'Gmail',
        description: 'Send emails directly from campaigns',
        fields: ['apiKey', 'secretKey']
      },
      'salesforce': {
        title: 'Salesforce',
        description: 'Sync customer data with Salesforce CRM',
        fields: ['apiKey', 'secretKey', 'customSettings']
      },
      'stripe': {
        title: 'Stripe',
        description: 'Process payments and track revenue',
        fields: ['apiKey', 'secretKey', 'webhookUrl']
      },
      'openai': {
        title: 'OpenAI',
        description: 'Advanced AI models for conversations',
        fields: ['apiKey']
      }
    };
    
    return integrations[name || ''] || {
      title: 'Integration',
      description: 'Configure integration settings',
      fields: ['apiKey']
    };
  };

  const integration = getIntegrationDetails(integrationName || '');

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/settings/integrations')}
                className="mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Integrations
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Configure {integration.title}</h1>
                <p className="text-slate-600">{integration.description}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Settings className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">Integration Settings</h2>
                    <p className="text-sm text-slate-600">Configure your {integration.title} integration</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Enable/Disable Toggle */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base font-medium">Enable Integration</Label>
                    <p className="text-sm text-slate-600">Turn this integration on or off</p>
                  </div>
                  <Switch 
                    checked={config.enabled}
                    onCheckedChange={(checked) => setConfig({...config, enabled: checked})}
                  />
                </div>

                {integration.fields.includes('apiKey') && (
                  <div className="space-y-2">
                    <Label htmlFor="apiKey" className="flex items-center space-x-2">
                      <Key className="h-4 w-4" />
                      <span>API Key</span>
                    </Label>
                    <div className="relative">
                      <Input
                        id="apiKey"
                        type={showApiKey ? "text" : "password"}
                        value={config.apiKey}
                        onChange={(e) => setConfig({...config, apiKey: e.target.value})}
                        placeholder="Enter your API key"
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowApiKey(!showApiKey)}
                      >
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                )}

                {integration.fields.includes('secretKey') && (
                  <div className="space-y-2">
                    <Label htmlFor="secretKey" className="flex items-center space-x-2">
                      <Shield className="h-4 w-4" />
                      <span>Secret Key</span>
                    </Label>
                    <Input
                      id="secretKey"
                      type="password"
                      value={config.secretKey}
                      onChange={(e) => setConfig({...config, secretKey: e.target.value})}
                      placeholder="Enter your secret key"
                    />
                  </div>
                )}

                {integration.fields.includes('webhookUrl') && (
                  <div className="space-y-2">
                    <Label htmlFor="webhookUrl">Webhook URL</Label>
                    <Input
                      id="webhookUrl"
                      type="url"
                      value={config.webhookUrl}
                      onChange={(e) => setConfig({...config, webhookUrl: e.target.value})}
                      placeholder="https://your-webhook-url.com"
                    />
                  </div>
                )}

                {/* Test Mode Toggle */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base font-medium">Test Mode</Label>
                    <p className="text-sm text-slate-600">Use sandbox/test environment</p>
                  </div>
                  <Switch 
                    checked={config.testMode}
                    onCheckedChange={(checked) => setConfig({...config, testMode: checked})}
                  />
                </div>

                {integration.fields.includes('customSettings') && (
                  <div className="space-y-2">
                    <Label htmlFor="customSettings">Custom Settings (JSON)</Label>
                    <Textarea
                      id="customSettings"
                      value={config.customSettings}
                      onChange={(e) => setConfig({...config, customSettings: e.target.value})}
                      placeholder='{"key": "value", "option": true}'
                      rows={4}
                    />
                    <p className="text-xs text-slate-500">Enter additional configuration as JSON</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-between pt-6 border-t border-slate-200">
                  <Button variant="outline" onClick={handleTestConnection}>
                    Test Connection
                  </Button>
                  <div className="space-x-3">
                    <Button variant="outline" onClick={() => navigate('/settings/integrations')}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                      <Save className="h-4 w-4 mr-2" />
                      Save Configuration
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
              <p className="text-blue-800 mb-4">
                Follow these steps to configure your {integration.title} integration:
              </p>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>Visit your {integration.title} dashboard to get your API credentials</li>
                <li>Copy and paste the required keys into the fields above</li>
                <li>Test the connection to ensure everything is working</li>
                <li>Save your configuration to start using the integration</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default IntegrationConfig;
