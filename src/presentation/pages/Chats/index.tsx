import { useState } from "react";
import { MessageCircle } from "lucide-react";

const mockConversations = [
  {
    id: 1,
    name: "Florencio Dorrance",
    lastMessage: "Negócio fechado!",
    tag: "Venda Concluída",
    time: "24m",
    avatar: "https://i.pravatar.cc/40?u=1",
    tagColor: "bg-green-600"
  },
  {
    id: 2,
    name: "Elmer Laverty",
    lastMessage: "Preciso de Ajuda",
    tag: "Suporte",
    time: "12m",
    avatar: "https://i.pravatar.cc/40?u=2",
    tagColor: "bg-yellow-600"
  },
  {
    id: 3,
    name: "Lavern Laboy",
    lastMessage: "Estou pensando na proposta!",
    tag: "Andamento",
    time: "1h",
    avatar: "https://i.pravatar.cc/40?u=3",
    tagColor: "bg-blue-600"
  },
  {
    id: 4,
    name: "Titus Kitamura",
    lastMessage: "vou pensar",
    tag: "Sem Resposta",
    time: "5h",
    avatar: "https://i.pravatar.cc/40?u=4",
    tagColor: "bg-pink-600"
  }
];

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { from: "client", text: "Olá gostaria de saber mais sobre seus produtos" },
    { from: "client", text: "Qual o valor?" },
    { from: "client", text: "A qualidade me parece boa" },
    { from: "agent", text: "Olá, Florencio, fico feliz em lhe atender!" },
    { from: "agent", text: "O valor é R$ 300,00" },
    { from: "client", text: "Excelente!" },
    { from: "client", text: "Eu quero comprar!" },
    { from: "client", text: "Negócio fechado!" }
  ]);

  return (
    <div className="flex w-full h-full text-white">
      <aside className="w-1/3 bg-black border-r border-gray-800 p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-purple-500 font-semibold">Vendedor 1 <span className="text-xs text-white">● 12</span></h2>
          <button className="text-xl text-purple-400">+</button>
        </div>

        <input
          type="text"
          placeholder="Search messages"
          className="w-full p-2 rounded bg-gray-800 text-white text-sm focus:outline-none"
        />

        <div className="space-y-3 overflow-y-auto max-h-[80vh]">
          {mockConversations.map((conv) => (
            <div key={conv.id} className="flex items-center gap-3 p-2 rounded bg-gray-900 hover:bg-gray-800 cursor-pointer">
              <img src={conv.avatar} className="w-10 h-10 rounded-full" alt={conv.name} />
              <div className="flex-1">
                <div className="flex justify-between text-sm">
                  <span className="text-white font-semibold">{conv.name}</span>
                  <span className="text-gray-400 text-xs">{conv.time}</span>
                </div>
                <p className="text-gray-400 text-xs">{conv.lastMessage}</p>
                <span className={`text-xs px-2 py-1 rounded ${conv.tagColor}`}>{conv.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>

      <section className="flex-1 bg-[#131313] flex flex-col justify-between p-4">
        <div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-purple-400 font-semibold">Florencio Dorrance</h3>
              <span className="text-green-400 text-xs">● Online</span>
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-800 px-3 py-1 rounded text-sm">Inserir Ticket</button>
              <button className="bg-purple-700 px-3 py-1 rounded text-sm">Assumir Chat</button>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[60%] px-4 py-2 rounded-lg text-sm ${
                  msg.from === "agent"
                    ? "bg-purple-600 text-white ml-auto flex justify-end"
                    : "bg-white text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 p-2 bg-black border-t border-gray-800">
          <MessageCircle className="text-purple-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 bg-transparent text-white px-3 py-2 text-sm focus:outline-none"
          />
          <button className="bg-purple-600 p-2 rounded-full hover:bg-purple-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
