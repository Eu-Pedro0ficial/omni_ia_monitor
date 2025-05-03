import { Link, Outlet } from "react-router-dom";
import {
  LayoutDashboard, BarChart2, SlidersHorizontal, Briefcase,
  Bot, MessageCircle, LogOut, Bell, UserCircle
} from "lucide-react";

function Layout() {
  return (
    <main className="w-full h-screen bg-background text-text-light flex flex-col">
      <header className="w-full h-[56px] px-4 bg-sidebar flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">Omni.IA</h1>
        <div className="flex gap-4 items-center">
          <p className="text-sm">Bom dia, Pedro</p>
          <Bell className="w-5 h-5" />
          <UserCircle className="w-6 h-6 text-white" />
        </div>
      </header>

      <section className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-sidebar px-6 py-6 flex flex-col justify-between text-sm">
          <div className="space-y-6">
            <p className="text-text-muted text-xs">Painel do Usuário</p>
            <nav className="flex flex-col gap-4 pl-2">
              <Link to="/dashboard" className="flex items-center gap-2 text-text-muted hover:text-white">
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </Link>
              <Link to="/report" className="flex items-center gap-2 text-text-muted hover:text-white">
                <BarChart2 className="w-4 h-4" /> Relatórios
              </Link>
              <Link to="/prompts" className="flex items-center gap-2 text-text-muted hover:text-white">
                <SlidersHorizontal className="w-4 h-4" /> Prompts
              </Link>
              <Link to="/crm" className="flex items-center gap-2 text-text-muted hover:text-white">
                <Briefcase className="w-4 h-4" /> CRM
              </Link>
              <Link to="/agents" className="flex items-center gap-2 text-text-muted hover:text-white">
                <Bot className="w-4 h-4" /> Agentes I.A
              </Link>
              <Link to="/chats" className="flex items-center gap-2 text-text-muted hover:text-white">
                <MessageCircle className="w-4 h-4" /> Chats
              </Link>
            </nav>
          </div>

          <button className="flex items-center gap-2 text-text-muted hover:text-white text-sm">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </aside>

        <div className="flex-1 bg-black overflow-auto p-4">
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default Layout;
