
function Dashboard () {
  return (
    <section className="flex flex-col gap-4 p-8 w-full">
      <section className="flex flex-col gap-4">
        <p>Resumo - Relatório</p>
        <section className="flex gap-4">
          <div className="rounded-2xl h-32 w-48 flex flex-col bg-venda text-text-light font-medium items-center justify-center gap-4">
            <p>Vendas Realizadas</p>
            <p>35</p>
          </div>
          <div className="rounded-2xl h-32 w-48 flex flex-col bg-venda text-text-light font-medium items-center justify-center gap-4">
            <p>Vendas Realizadas</p>
            <p>35</p>
          </div>
          <div className="rounded-2xl h-32 w-48 flex flex-col bg-venda text-text-light font-medium items-center justify-center gap-4">
            <p>Vendas Realizadas</p>
            <p>35</p>
          </div>
          <div className="rounded-2xl h-32 w-48 flex flex-col bg-venda text-text-light font-medium items-center justify-center gap-4">
            <p>Vendas Realizadas</p>
            <p>35</p>
          </div>
        </section>
      </section>
      <section className="flex gap-4 w-full">
        <section className="w-[40%] bg-sidebar rounded-2xl p-4 flex flex-col gap-2">
          <h3>Chats em Andamento</h3>
          <section className="flex flex-col gap-4">
            <section className="flex gap-4 items-center w-full bg-dashboard rounded-2xl p-4">
              <div className="w-8 h-8 bg-white rounded-2xl"></div>
              <div>
                <div className="flex justify-between pr-4">
                  <h4>Rodrigo Silva</h4>
                  <p>2m</p>
                </div>
                <p className="text-xs">Ultima mensagem: Preciso de ajuda humana</p>
                <div className="flex gap-2">
                  <button className="rounded-2xl bg-tag-suporte cursor-pointer text-text-suporte text-xs py-1 px-2">Suporte</button>
                  <button className="rounded-2xl bg-tag-progresso cursor-pointer text-text-progresso text-xs py-1 px-2">Em Progresso</button>
                </div>
              </div>
            </section>
            <section className="flex gap-4 items-center w-full bg-dashboard rounded-2xl p-4">
              <div className="w-8 h-8 bg-white rounded-2xl"></div>
              <div>
                <div className="flex justify-between pr-4">
                  <h4>Rodrigo Silva</h4>
                  <p>2m</p>
                </div>
                <p className="text-xs">Ultima mensagem: Preciso de ajuda humana</p>
                <div className="flex gap-2">
                  <button className="rounded-2xl bg-tag-suporte cursor-pointer text-text-suporte text-xs py-1 px-2">Suporte</button>
                  <button className="rounded-2xl bg-tag-progresso cursor-pointer text-text-progresso text-xs py-1 px-2">Em Progresso</button>
                </div>
              </div>
            </section>
            <section className="flex gap-4 items-center w-full bg-dashboard rounded-2xl p-4">
              <div className="w-8 h-8 bg-white rounded-2xl"></div>
              <div>
                <div className="flex justify-between pr-4">
                  <h4>Rodrigo Silva</h4>
                  <p>2m</p>
                </div>
                <p className="text-xs">Ultima mensagem: Preciso de ajuda humana</p>
                <div className="flex gap-2">
                  <button className="rounded-2xl bg-tag-suporte cursor-pointer text-text-suporte text-xs py-1 px-2">Suporte</button>
                  <button className="rounded-2xl bg-tag-progresso cursor-pointer text-text-progresso text-xs py-1 px-2">Em Progresso</button>
                </div>
              </div>
            </section>
          </section>
        </section>
        <section className="w-full bg-sidebar rounded-2xl flex items-center justify-center flex-col gap-4">
          <h3>Gráfico Todos os Tickets</h3>
          <section className="h-28 w-[50%] bg-white"></section>
        </section>
      </section>
      <section className="w-full bg-sidebar rounded-2xl px-32 py-6 flex flex-col gap-4">
        <section className="flex justify-between">
          <p>Vendas concluidas (por periodo)</p>
          <nav>
            <ul className="flex list-none gap-4">
              <li>
                1D
              </li>
              <li>
                5D
              </li>
              <li>
                1M
              </li>
              <li>
                6M
              </li>
              <li>
                1Y
              </li>
              <li>
                5Y
              </li>
              <li>
                MAX
              </li>
            </ul>
          </nav>
        </section>
        <section className="w-full flex justify-center items-center">
          <div className="h-32 w-[80%] bg-white">

          </div>
        </section>
      </section>
    </section>
  )
}

export default Dashboard
