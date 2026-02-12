import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Estado inicial carregando do LocalStorage
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem('lista_tarefas_v2')
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : []
  })
  
  const [inputTarefa, setInputTarefa] = useState("")
  const [confirmarLimpar, setConfirmarLimpar] = useState(false)
  const [salvando, setSalvando] = useState(false)

  // Persistência e Feedback de Salvamento
  useEffect(() => {
    localStorage.setItem('lista_tarefas_v2', JSON.stringify(tarefas))
    setSalvando(true)
    const timer = setTimeout(() => setSalvando(false), 800)
    return () => clearTimeout(timer)
  }, [tarefas])

  const adicionarTarefa = (e) => {
    e.preventDefault()
    const texto = inputTarefa.trim()
    
    if (texto === "") return
    
    // Validação de Duplicados
    if (tarefas.some(t => t.texto.toLowerCase() === texto.toLowerCase())) {
      alert("Essa tarefa já existe!")
      return
    }

    const novaTarefa = {
      id: Date.now(),
      texto: texto,
      concluida: false
    }

    setTarefas([...tarefas, novaTarefa])
    setInputTarefa("")
  }

  const alternarConcluida = (id) => {
    setTarefas(tarefas.map(t => 
      t.id === id ? { ...t, concluida: !t.concluida } : t
    ))
  }

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(t => t.id !== id))
  }

  const limparTudo = () => {
    if (confirmarLimpar) {
      setTarefas([])
      setConfirmarLimpar(false)
    } else {
      setConfirmarLimpar(true)
      setTimeout(() => setConfirmarLimpar(false), 3000) // Volta ao normal após 3s
    }
  }

  // Cálculos de Progresso
  const total = tarefas.length
  const concluidas = tarefas.filter(t => t.concluida).length
  const progresso = total === 0 ? 0 : Math.round((concluidas / total) * 100)

  return (
    <div className="container">
      <header>
        <h1>Gerenciador Pro</h1>
        <div className={`status-salvamento ${salvando ? 'visivel' : ''}`}>
          {salvando ? "☁️ Salvando..." : "✅ Salvo"}
        </div>
      </header>

      <section className="progresso-section">
        <div className="progresso-info">
          <span>{progresso}% concluído</span>
          <span>{concluidas}/{total} tarefas</span>
        </div>
        <div className="barra-progresso">
          <div className="preenchimento" style={{ width: `${progresso}%` }}></div>
        </div>
      </section>

      <form onSubmit={adicionarTarefa}>
        <input 
          type="text"
          placeholder="O que precisa ser feito?"
          value={inputTarefa}
          onChange={(e) => setInputTarefa(e.target.value)}
        />
        <button type="submit" className="btn-add">Adicionar</button>
      </form>

      <main>
        {tarefas.length === 0 ? (
          <div className="empty-state">
            <p>Sua lista está vazia</p>
            <span>Adicione uma tarefa para começar o dia! 🚀</span>
          </div>
        ) : (
          <ul>
            {tarefas.map((tarefa) => (
              <li key={tarefa.id} className={tarefa.concluida ? 'concluida' : ''}>
                <div className="tarefa-texto" onClick={() => alternarConcluida(tarefa.id)}>
                  <input type="checkbox" checked={tarefa.concluida} readOnly />
                  <span>{tarefa.texto}</span>
                </div>
                <button className="btn-delete" onClick={() => removerTarefa(tarefa.id)}>×</button>
              </li>
            ))}
          </ul>
        )}
      </main>

      {tarefas.length > 0 && (
        <button 
          className={`btn-limpar ${confirmarLimpar ? 'confirmar' : ''}`} 
          onClick={limparTudo}
        >
          {confirmarLimpar ? "Clique para confirmar!" : "Limpar Lista"}
        </button>
      )}
    </div>
  )
}

export default App