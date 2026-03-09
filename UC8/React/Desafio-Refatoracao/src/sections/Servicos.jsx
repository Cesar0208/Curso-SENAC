import CardServico from "../components/CardServico"

function Servicos(){

  const listaServicos = [
    {
      titulo:"Consultoria",
      descricao:"Ajudamos empresas a crescer."
    },
    {
      titulo:"Desenvolvimento Web",
      descricao:"Criamos aplicações modernas."
    },
    {
      titulo:"Automação",
      descricao:"Automatizamos processos."
    }
  ]

  return(

    <section className="servicos">

      <h2>Nossos Serviços</h2>

      <div className="grid-servicos">

        {listaServicos.map((servico, index) => (
          
          <CardServico
            key={index}
            titulo={servico.titulo}
            descricao={servico.descricao}
          />

        ))}

      </div>

    </section>

  )
}

export default Servicos