
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Plus, FileText, Globe, HardDrive, Database } from 'lucide-react';

const KnowledgeBase = () => {
  const navigate = useNavigate();

  const documents = [
    {
      id: 1,
      name: 'Product Documentation',
      type: 'document',
      source: 'uploaded',
      category: 'Product Info',
      lastUpdated: '2 days ago',
      size: '2.4 MB'
    },
    {
      id: 2,
      name: 'FAQ Collection',
      type: 'document',
      source: 'api',
      category: 'Support',
      lastUpdated: '1 week ago',
      size: '1.8 MB'
    }
  ];

  const integrations = [
    { name: 'Google Drive', icon: HardDrive, status: 'available' },
    { name: 'API Integration', icon: Globe, status: 'available' },
    { name: 'Database', icon: Database, status: 'available' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Knowledge Base</h1>
            <p className="text-slate-600">Manage your AI knowledge sources and documentation</p>
          </div>

          {/* Main Description */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-slate-900">Main Description</h3>
              <Button variant="outline" size="sm">Edit</Button>
            </div>
            <p className="text-slate-600 mb-4">
              This is the main knowledge base description that provides context for all AI agents. 
              It contains core information about your business, products, and services that agents 
              can reference during conversations.
            </p>
            <div className="text-sm text-slate-500">Last updated: 3 days ago</div>
          </div>

          {/* Documents List */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-8">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-slate-900">Documents</h3>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => navigate('/knowledge-base/add-document')}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Document
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Document
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Source
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Last Updated
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {documents.map((doc) => (
                    <tr key={doc.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-slate-400 mr-3" />
                          <span className="text-sm font-medium text-slate-900">{doc.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          {doc.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        {doc.source}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        {doc.size}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        {doc.lastUpdated}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm">Delete</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Source Integrations */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Source Integrations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {integrations.map((integration) => (
                <div key={integration.name} className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <integration.icon className="h-6 w-6 text-blue-600" />
                    <span className="font-medium text-slate-900">{integration.name}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Connect
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default KnowledgeBase;
