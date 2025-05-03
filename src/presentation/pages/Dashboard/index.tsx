import { Card, CardContent } from "@/presentation/components/ui/Card";
import { Button } from "@/presentation/components/ui/Button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import {
  LayoutDashboard,
  FileText,
  MessageCircle,
  Users,
  Bot,
  LogOut,
} from "lucide-react";

const pieData = [
  { name: "Suporte", value: 139, color: "#f4b400" },
  { name: "Sem Resposta", value: 10, color: "#db4437" },
  { name: "Em Andamento", value: 10, color: "#4285f4" },
  { name: "Vendas Realizadas", value: 35, color: "#0f9d58" },
];

const chartData = [
  { name: "1", value: 20 },
  { name: "2", value: 80 },
  { name: "3", value: 70 },
  { name: "4", value: 60 },
  { name: "5", value: 80 },
  { name: "6", value: 50 },
  { name: "7", value: 70 },
];

export default function DashboardOmniIA() {
  return (
    <main className="flex-1 bg-black p-6 overflow-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-xl font-semibold">
          Resumo - Relatórios
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card className="bg-green-600 text-white">
          <CardContent className="p-4">
            Vendas Realizadas
            <br />
            <span className="text-2xl font-bold">35</span>
          </CardContent>
        </Card>
        <Card className="bg-blue-800 text-white">
          <CardContent className="p-4">
            Em Andamento
            <br />
            <span className="text-2xl font-bold">10</span>
          </CardContent>
        </Card>
        <Card className="bg-yellow-700 text-white">
          <CardContent className="p-4">
            Tickets - Suporte
            <br />
            <span className="text-2xl font-bold">35</span>
          </CardContent>
        </Card>
        <Card className="bg-yellow-500 text-white">
          <CardContent className="p-4">
            Pararam de Responder
            <br />
            <span className="text-2xl font-bold">10</span>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 space-y-2">
            <h3 className="text-lg font-bold">Chats em Andamento</h3>
            <div className="bg-purple-600 p-3 rounded text-white">
              <p>
                <strong>Rodrigo Silva</strong>{" "}
                <span className="text-xs">2m</span>
              </p>
              <p className="text-sm">
                Última mensagem: Preciso de Ajuda Humana
              </p>
              <div className="flex space-x-2 text-xs mt-2">
                <span className="bg-green-500 px-2 py-1 rounded">Suporte</span>
                <span className="bg-blue-700 px-2 py-1 rounded">
                  Em Progresso
                </span>
              </div>
            </div>
            {[1, 2].map((i) => (
              <div key={i} className="bg-purple-600 p-3 rounded text-white">
                <p>
                  <strong>Joyce Silva</strong>{" "}
                  <span className="text-xs">5m</span>
                </p>
                <p className="text-sm">Última mensagem: Qual o valor?</p>
                <div className="flex space-x-2 text-xs mt-2">
                  <span className="bg-yellow-500 px-2 py-1 rounded">Venda</span>
                  <span className="bg-blue-700 px-2 py-1 rounded">
                    Em Progresso
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-bold mb-4">Gráfico Todos os Tickets</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p className="text-center text-2xl font-bold">Total 90</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-4">
          <h3 className="text-lg font-bold mb-2">
            Vendas concluídas (por período)
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#a855f7"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </main>
  );
}
