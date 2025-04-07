import { Link, Outlet } from "react-router-dom";
import { LayoutDashboard, BarChart2, SlidersHorizontal, Briefcase, Bot, MessageCircle, LogOut, Bell } from 'lucide-react';

// className="border border-red-500"

function Layout() {
  return (
    <main className="w-full max-w-[100vw] h-full max-h-[100vh] bg-background text-text-light flex flex-col gap-[2px]">
      <header className="w-full h-full max-h-[8%] flex justify-between items-center px-4 bg-sidebar">
        <section>
          <h1 className="text-3xl font-bold">Omni.IA</h1>
        </section>
        <section className="flex gap-4 items-center">
          <div>
            <p className="text-1xl">Bom dia Pedro</p>
          </div>
          <Bell />
          <div>User Picture</div>
        </section>
      </header>
      <section className="w-full h-[92%] flex">
        <aside className="flex flex-col w-full max-w-[25%] pl-8 bg-sidebar justify-between py-8">
          <section className="flex flex-col gap-4">
            <section>
              <p className="text-text-muted">Painel do Usuário</p>
            </section>
            <section className="w-full flex flex-col pl-4 items-start gap-12">
              <button className="flex gap-2 text-text-muted cursor-pointer">
                <LayoutDashboard />
                <Link to="/dashboard" children="Dashboard"/>
              </button>
              <button className="flex gap-2 text-text-muted cursor-pointer">
                <BarChart2 />
                <Link to="/report" children="Relatórios"/>
              </button>
              <button className="flex gap-2 text-text-muted cursor-pointer">
                <SlidersHorizontal />
                <Link to="/prompts" children="Prompts"/>
              </button>
              <button className="flex gap-2 text-text-muted cursor-pointer">
                <Briefcase />
                <Link to="/crm" children="CRM"/>
              </button>
              <button className="flex gap-2 text-text-muted cursor-pointer">
                <Bot />
                <Link to="/agents" children="Agentes I.A"/>
              </button>
              <button className="flex gap-2 text-text-muted cursor-pointer">
                <MessageCircle />
                <Link to="/chats" children="Chats"/>
              </button>
            </section>
          </section>
          <section className="flex text-text-muted">
            <button className="flex gap-2 cursor-pointer">
              <LogOut />
              <p>Logout</p>
            </button>
          </section>
        </aside>
        <Outlet />
      </section>
    </main>
  );
}

export default Layout;
