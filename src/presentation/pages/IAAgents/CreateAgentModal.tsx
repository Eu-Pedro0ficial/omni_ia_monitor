import { useState } from "react";

function CreateAgentModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    crm: "",
    prompt: "",
    type: "",
    email: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    console.log("Agente criado:", form);
    onClose();
  };

  const handleDiscard = () => {
    setForm({ name: "", crm: "", prompt: "", type: "", email: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative z-50 bg-black p-6 rounded w-full max-w-lg border border-gray-800 text-white">
        <h2 className="text-2xl font-bold text-purple-500 mb-4">Criar Novo Agente</h2>

        <div className="space-y-4">
          <div>
            <label className="text-sm">Nome:</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full p-2 bg-gray-900 border border-gray-700 rounded mt-1" />
          </div>

          <div>
            <label className="text-sm">CRM:</label>
            <select name="crm" value={form.crm} onChange={handleChange} className="w-full p-2 bg-gray-900 border border-gray-700 rounded mt-1">
              <option value="">Selecione</option>
              <option value="Salesforce">Salesforce</option>
              <option value="HubSpot">HubSpot</option>
            </select>
          </div>

          <div>
            <label className="text-sm">Prompt:</label>
            <select name="prompt" value={form.prompt} onChange={handleChange} className="w-full p-2 bg-gray-900 border border-gray-700 rounded mt-1">
              <option value="">Selecione</option>
              <option value="Modelo Prompt 1">Modelo Prompt 1</option>
              <option value="Modelo Prompt 2">Modelo Prompt 2</option>
            </select>
          </div>

          <div>
            <label className="text-sm">Tipo de agente:</label>
            <select name="type" value={form.type} onChange={handleChange} className="w-full p-2 bg-gray-900 border border-gray-700 rounded mt-1">
              <option value="">Selecione</option>
              <option value="SDR">SDR</option>
              <option value="Vendedor Ativo">Vendedor Ativo</option>
            </select>
          </div>

          <div>
            <label className="text-sm">Email:</label>
            <input name="email" value={form.email} onChange={handleChange} className="w-full p-2 bg-gray-900 border border-gray-700 rounded mt-1" />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button onClick={handleConfirm} className="bg-purple-600 px-4 py-2 rounded text-sm hover:bg-purple-700">CONFIRMAR</button>
          <button onClick={handleDiscard} className="bg-red-500 px-4 py-2 rounded text-sm hover:bg-red-600">DESCARTAR</button>
          <button onClick={onClose} className="bg-red-700 px-4 py-2 rounded text-sm hover:bg-red-800">CANCELAR</button>
        </div>
      </div>
    </div>
  );
}

export default CreateAgentModal;
