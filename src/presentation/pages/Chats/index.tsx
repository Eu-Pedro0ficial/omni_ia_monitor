import { Plus, Paperclip, Send } from "lucide-react"

function Chats () {
  return (
    <section className="flex gap-4 h-full w-full p-8">
      <aside className="h-full w-[35%] rounded-2xl bg-sidebar py-8 px-4 flex flex-col gap-4">
        <header className="flex flex-col gap-4">
          <section className="flex justify-between">
            <div>
              <p className="font-bold text-text-dashboard">Vendedor</p>
            </div>
            <Plus/>
          </section>
          <section>
            <input className="outline-none w-full bg-text-light rounded-2xl h-10 text-black px-4" type="text" placeholder="Search messages" />
          </section>
        </header>
        <section className="w-full flex flex-col gap-4">
          <section className="flex gap-4 w-full">
            <section className="h-16 w-16 bg-white rounded-2xl"></section>
            <section className="w-full">
              <div className="flex justify-between w-full">
                <p className="text-text-dashboard">Florencio Dorranes</p>
                <p className="text-text-dashboard">20m</p>
              </div>
              <p className="text-xs">Negocio fechado</p>
              <button className="rounded-2xl bg-tag-progresso cursor-pointer text-text-progresso text-xs py-1 px-2">Venda concluida</button>
            </section>
          </section>
          <section className="flex gap-4 w-full">
            <section className="h-16 w-16 bg-white rounded-2xl"></section>
            <section className="w-full">
              <div className="flex justify-between w-full">
                <p className="text-text-dashboard">Florencio Dorranes</p>
                <p className="text-text-dashboard">20m</p>
              </div>
              <p className="text-xs">Negocio fechado</p>
              <button className="rounded-2xl bg-tag-progresso cursor-pointer text-text-progresso text-xs py-1 px-2">Venda concluida</button>
            </section>
          </section>
          <section className="flex gap-4 w-full">
            <section className="h-16 w-16 bg-white rounded-2xl"></section>
            <section className="w-full">
              <div className="flex justify-between w-full">
                <p className="text-text-dashboard">Florencio Dorranes</p>
                <p className="text-text-dashboard">20m</p>
              </div>
              <p className="text-xs">Negocio fechado</p>
              <button className="rounded-2xl bg-tag-progresso cursor-pointer text-text-progresso text-xs py-1 px-2">Venda concluida</button>
            </section>
          </section>
          <section className="flex gap-4 w-full">
            <section className="h-16 w-16 bg-white rounded-2xl"></section>
            <section className="w-full">
              <div className="flex justify-between w-full">
                <p className="text-text-dashboard">Florencio Dorranes</p>
                <p className="text-text-dashboard">20m</p>
              </div>
              <p className="text-xs">Negocio fechado</p>
              <button className="rounded-2xl bg-tag-progresso cursor-pointer text-text-progresso text-xs py-1 px-2">Venda concluida</button>
            </section>
          </section>
        </section>
      </aside>
      <section className="h-full w-full rounded-2xl bg-sidebar px-8 py-4">
        <header className="flex justify-between">
          <section className="flex gap-4">
            <div className="h-12 w-12 bg-white rounded-2xl"></div>
            <div>
              <p className="font-bold text-text-dashboard">Florencio Dorrances</p>
              <section className="flex gap-2 items-center">
                <div className="h-2 w-2 rounded-2xl bg-teal-900"></div>
                <p className="text-xs text-text-dashboard">Online</p>
              </section>
            </div>
          </section>
          <section className="flex gap-4">
            <button className="bg-dashboard-opt text-text-dashboard py-0.5 px-4 outline-none rounded-2xl cursor-pointer font-bold">Inserir Ticket</button>
            <button className="bg-dashboard-opt text-text-dashboard py-0.5 px-4 outline-none rounded-2xl cursor-pointer font-bold">Assumir Chat</button>
          </section>
        </header>
        <section className="flex justify-center items-center h-[85%]">
          ...mensagens
        </section>
        <section className="flex items-center justify-between">
          <button className="w-[5%] cursor-pointer">
            <Paperclip className="text-andamento"/>
          </button>
          <div className="flex w-full rounded-2xl h-12 bg-text-light justify-between items-center px-6">
            <input className="text-black" type="text" placeholder="Escreva sua mensagem" />
            <button className="cursor-pointer">
              <Send className="text-andamento"/>
            </button>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Chats
