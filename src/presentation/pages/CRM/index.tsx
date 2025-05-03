import { useState } from "react";
import { Plus, Settings, Info } from "lucide-react";
import CreateIntegrationModal from "./CreateIntegrationModal";

import ImageSalesforce from '@/assets/salesforce.png'
import ImagePipedrive from '@/assets/pipedrive.png'
import ImageHubspot from '@/assets/hubspot.png'
import ImagePloomes from '@/assets/ploomes.png'
import ImageExcel from '@/assets/excel.png'

const integrations = [
  { id: 1, name: "Salesforce Teste2", logo: ImageSalesforce },
  { id: 2, name: "pipedrive teste", logo: ImagePipedrive },
  { id: 3, name: "hubspot teste", logo: ImageHubspot },
  { id: 4, name: "Salesforce Teste", logo: ImageSalesforce },
  { id: 5, name: "Ploomes teste", logo: ImagePloomes },
  { id: 6, name: "Integração ao excel", logo: ImageExcel },
];

export default function IntegrationsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full h-full p-6 text-white">
      <h1 className="text-2xl font-bold text-purple-500 mb-6">Integrações</h1>

      <div className="mb-6">
      <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-700 text-sm px-4 py-2 rounded hover:bg-purple-800 flex items-center gap-2"
        >
          <Plus size={16} /> NOVA INTEGRAÇÃO
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <div key={integration.id} className="bg-sidebar border border-gray-800 rounded p-4 flex flex-col items-center">
            <img src={integration.logo} alt={integration.name} className="h-20 object-contain mb-4" />
            <p className="text-center text-white text-sm mb-4">{integration.name}</p>
            <div className="flex gap-3">
              <button className="p-2 bg-gray-800 hover:bg-purple-800 rounded-full">
                <Settings size={16} />
              </button>
              <button className="p-2 bg-gray-800 hover:bg-purple-800 rounded-full">
                <Info size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <CreateIntegrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}
