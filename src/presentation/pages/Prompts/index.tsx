import { useState } from "react";
import { Plus, Search, Expand, Pencil, Trash } from "lucide-react";
import CreatePromptModal from "./CreatePromptModal";

const prompts = [
  { id: 1, name: "Prompt Ativo", updatedAt: "10/04/2025" },
  { id: 2, name: "Prompt Suporte", updatedAt: "10/04/2025" },
  { id: 3, name: "Prompt Qualifica", updatedAt: "10/04/2025" }
];

export default function PromptsPage() {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredPrompts = prompts.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full h-full p-6 text-white">
      <h1 className="text-2xl font-bold text-purple-500 mb-6">Prompts</h1>

      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-700 text-sm px-4 py-2 rounded hover:bg-purple-800 flex items-center gap-2"
        >
          <Plus size={16} /> NOVO PROMPT
        </button>

        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-black border border-gray-700 rounded px-3 py-1 text-sm text-white focus:outline-none"
          />
          <Search className="absolute right-2 top-2 w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="bg-black border border-gray-700 rounded overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Nome Agente</th>
              <th className="p-3">Última Atualização</th>
              <th className="p-3 text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredPrompts.map((prompt, idx) => (
              <tr key={prompt.id} className="border-t border-gray-800 hover:bg-gray-800">
                <td className="p-3">{idx + 1}</td>
                <td className="p-3">{prompt.name}</td>
                <td className="p-3">{prompt.updatedAt}</td>
                <td className="p-3 flex justify-center gap-2">
                  <button className="p-1 hover:bg-purple-800 rounded"><Expand size={16} /></button>
                  <button className="p-1 hover:bg-purple-800 rounded"><Pencil size={16} /></button>
                  <button className="p-1 hover:bg-purple-800 rounded"><Trash size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-2 mt-4">
        {["<", "1", "2", "3", ">"].map((item, idx) => (
          <button key={idx} className="px-2 py-1 text-sm bg-black border border-gray-700 rounded hover:bg-gray-800">
            {item}
          </button>
        ))}
        <select className="ml-4 px-2 py-1 bg-black border border-gray-700 rounded text-sm">
          {[3, 5, 10].map(num => <option key={num}>{num}</option>)}
        </select>
        <span className="text-sm">/Página</span>
      </div>

      <CreatePromptModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
