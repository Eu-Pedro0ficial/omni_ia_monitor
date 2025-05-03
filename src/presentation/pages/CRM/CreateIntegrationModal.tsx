import { useState } from "react";

export default function CreateIntegrationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    apiKey: "",
    variable: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    console.log("Integração criada:", form);
    onClose();
  };

  const handleDiscard = () => {
    setForm({ name: "", apiKey: "", variable: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative z-50 bg-black p-6 rounded w-full max-w-xl border border-gray-800 text-white">
        <h2 className="text-2xl font-bold text-purple-500 mb-6">Nova Integração</h2>

        <div className="space-y-4">
          <div>
            <label className="text-sm">Nome:</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full p-2 bg-gray-900 border border-gray-700 rounded mt-1" />
          </div>

          <div>
            <label className="text-sm">Chave de API:</label>
            <input name="apiKey" value={form.apiKey} onChange={handleChange} className="w-full p-2 bg-gray-900 border border-gray-700 rounded mt-1" />
          </div>

          <div>
            <label className="text-sm">Variáveis:</label>
            <select name="variable" value={form.variable} onChange={handleChange} className="w-full p-2 bg-gray-900 border border-gray-700 rounded mt-1">
              <option value="">Selecione</option>
              <option value="$CPF">$CPF</option>
              <option value="$EMAIL">$EMAIL</option>
            </select>
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
