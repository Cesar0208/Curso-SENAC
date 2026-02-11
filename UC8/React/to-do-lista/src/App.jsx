import { useState } from 'react'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([])
  const [inputTarefa, setInputTarefa] = useState("")

  const adicionarTarefa = (e) => {
    e.preventDefault()
    if (inputTarefa.trim() === "") return

    setTarefas([...tarefas, { texto: inputTarefa, feita: false }])
    setInputTarefa("")
  }

  const removerTarefa = (indexParaRemover) => {
    setTarefas(tarefas.filter((_, index) => index !== indexParaRemover))
  }

  const marcarComoFeita = (indexTarefa) => {
    setTarefas(
      tarefas.map((tarefa, index) =>
        index === indexTarefa
          ? { ...tarefa, feita: !tarefa.feita }
          : tarefa
      )
    )
  }

  return (
    <div className="container">
      <h1>Minha Lista de Estudos</h1>
      <h3>Quantidade de tarefas: {tarefas.length}</h3>

      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa..."
          value={inputTarefa}
          onChange={(e) => setInputTarefa(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li
            key={index}
            className={tarefa.feita ? "tarefa tarefa-pronta" : "tarefa"}
          >
            {tarefa.texto}
            <div>
              <button
                title="Marcar como pronto" className="btnPronto" onClick={() => marcarComoFeita(index)}>✅</button>
              <button title="Apagar" className="btnApagar" onClick={() => removerTarefa(index)}>❌</button>
            </div>
          </li>
        ))}
      </ul>

      {tarefas.length === 0 && <p>Parabéns! Você concluiu tudo. 🚀</p>}
      <button onClick={() => setTarefas([])}>Resetar tudo</button>
    </div>
  )
}

export default App
