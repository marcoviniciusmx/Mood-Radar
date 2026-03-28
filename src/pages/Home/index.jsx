import { useState } from "react"

import {
  Button,
  Cards,
  Choices,
  ClimateButton,
  Current,
  CurrentWeather,
  Description,
  Diagnosis,
  Main,
  MainTexts,
  Parameters,
  ResetButton,
  Subtitle,
  Sugestion,
  Wrapper
} from "./styles"

function Home() {

  const [barulho, setBarulho] = useState("")
  const [pessoas, setPessoas] = useState("")
  const [pressa, setPressa] = useState("")
  const [humor, setHumor] = useState("")

  const [situation, setSituation] = useState('Aguardando análise')

  const [description, setDescription] = useState(
    "Selecione uma opção em cada categoria para identificar o clima atual do ambiente."
  )

  const [tip, setTip] = useState(
    "Dica: escolha uma opção em cada categoria para gerar uma análise mais completa."
  )

  const contentBySituation = {
    "Aguardando análise": {
      description:
        "Selecione uma opção em cada categoria para identificar o clima atual do ambiente.",
      tip: "Dica: escolha uma opção em cada categoria para gerar uma análise mais completa."
    },
    "Leve e produtivo": {
      description:
        "O ambiente está calmo, com pouca movimentação, baixo ruído e clima emocional positivo, favorecendo concentração e bem-estar.",
      tip: "Dica: excelente momento para tarefas criativas e atividades que exigem foco."
    },
    "Foco total": {
      description:
        "O ambiente está estável, silencioso e reservado, criando condições ideais para concentração profunda e execução precisa.",
      tip: "Dica: aproveite para tarefas complexas e que exigem atenção máxima."
    },
    "Sob pressão": {
      description:
        "O ambiente apresenta sinais de sobrecarga, com urgência, tensão e maior chance de distrações ou pressão externa.",
      tip: "Dica: concentre-se no essencial e mantenha comunicação objetiva."
    },
    "Agitado": {
      description:
        "O ambiente está movimentado e acelerado, com maior nível de estímulo e menor previsibilidade.",
      tip: "Dica: priorize tarefas rápidas e organize bem as próximas ações."
    },
    "Colaborativo": {
      description:
        "O ambiente está socialmente ativo e emocionalmente favorável, o que pode estimular troca, colaboração e ritmo saudável.",
      tip: "Dica: bom momento para alinhamentos, conversas e atividades em grupo."
    },
    "Neutro": {
      description:
        "O ambiente está equilibrado, sem sinais fortes de pressão, dispersão ou desconforto.",
      tip: "Dica: ótimo momento para tarefas de rotina."
    },
    "Crítico": {
      description:
        "O clima atual combina urgência com tensão emocional, aumentando a pressão e o risco de falhas por estresse.",
      tip: "Dica: foque nas prioridades imediatas e evite distrações."
    }
  }

  const handleAnalyze = () => {
    if (!barulho || !pessoas || !pressa || !humor) {
      setSituation('Aguardando análise')
      setDescription(contentBySituation['Aguardando análise'.description])
      setTip(contentBySituation['Aguardando análise'].tip)
      return
    }

    let result = 'Neutro'

    if (
      barulho === "silencioso" &&
      pessoas === "vazio" &&
      pressa === "calmo" &&
      humor === "alegre"
    ) {
      result = "Leve e produtivo"
    } else if (
      barulho === "silencioso" &&
      pessoas === "vazio" &&
      pressa === "calmo" &&
      humor === "serio"
    ) {
      result = "Foco total"
    } else if (
      pressa === "urgente" &&
      humor === "tenso" &&
      (barulho === "barulhento" || pessoas === "lotado")
    ) {
      result = "Crítico"
    } else if (
      barulho === "barulhento" &&
      pessoas === "lotado" &&
      (pressa === "dinamico" || pressa === "urgente")
    ) {
      result = "Agitado"
    } else if (
      humor === "alegre" &&
      (pessoas === "normal" || pessoas === "lotado") &&
      pressa !== "urgente"
    ) {
      result = "Colaborativo"
    } else if (
      humor === "tenso" ||
      pressa === "urgente"
    ) {
      result = "Sob pressão"
    }

    setSituation(result)
    setDescription(contentBySituation[result].description)
    setTip(contentBySituation[result].tip)
  }

  function handleReset() {
    setBarulho("")
    setPessoas("")
    setPressa("")
    setHumor("")
    setSituation("Aguardando análise")
    setDescription(contentBySituation["Aguardando análise"].description)
    setTip(contentBySituation["Aguardando análise"].tip)
  }

  return (

    <>
      <Wrapper>
        <MainTexts>
          <h1>Mood Radar</h1>
          <Subtitle>Analise o clima do ambiente</Subtitle>
        </MainTexts>

        <Main>
          <Cards>
            <Parameters>
              <h2>Barulho</h2>
              <span className="material-symbols-outlined text-primary/40" data-icon="volume_up">volume_up</span>
            </Parameters>
            <Choices>
              <Button
                className={barulho === "silencioso" ? "active" : ""}
                onClick={() => setBarulho("silencioso")}
              >
                Silencioso
              </Button>
              <Button
                className={barulho === "moderado" ? "active" : ""}
                onClick={() => setBarulho("moderado")}
              >
                Moderado
              </Button>
              <Button
                className={barulho === "barulhento" ? "active" : ""}
                onClick={() => setBarulho("barulhento")}
              >
                Barulhento
              </Button>
            </Choices>
          </Cards>

          <Cards>
            <Parameters>
              <h2>Pessoas</h2>
              <span className="material-symbols-outlined text-primary/40" data-icon="groups">groups</span>
            </Parameters>
            <Choices>
              <Button
                className={pessoas === 'vazio' ? 'active' : ''}
                onClick={() => setPessoas("vazio")}
              >
                Vazio
              </Button>
              <Button
                className={pessoas === "normal" ? "active" : ""}
                onClick={() => setPessoas("normal")}
              >
                Normal
              </Button>
              <Button
                className={pessoas === "lotado" ? "active" : ""}
                onClick={() => setPessoas("lotado")}
              >
                Lotado
              </Button>
            </Choices>
          </Cards>

          <Cards>
            <Parameters>
              <h2>Pressa</h2>
              <span className="material-symbols-outlined text-primary/40" data-icon="speed">speed</span>
            </Parameters>
            <Choices>
              <Button
                className={pressa === "calmo" ? "active" : ""}
                onClick={() => setPressa("calmo")}
              >
                Calmo
              </Button>
              <Button
                className={pressa === "dinamico" ? "active" : ""}
                onClick={() => setPressa("dinamico")}
              >
                Dinâmico
              </Button>
              <Button
                className={pressa === "urgente" ? "active" : ""}
                onClick={() => setPressa("urgente")}
              >
                Urgente
              </Button>
            </Choices>
          </Cards>

          <Cards>
            <Parameters>
              <h2>Humor</h2>
              <span className="material-symbols-outlined text-primary/40" data-icon="mood">mood</span>
            </Parameters>
            <Choices>
              <Button
                className={humor === "alegre" ? "active" : ""}
                onClick={() => setHumor("alegre")}
              >
                Alegre
              </Button>
              <Button
                className={humor === "serio" ? "active" : ""}
                onClick={() => setHumor("serio")}
              >
                Sério
              </Button>
              <Button
                className={humor === "tenso" ? "active" : ""}
                onClick={() => setHumor("tenso")}
              >
                Tenso
              </Button>
            </Choices>
          </Cards>

          <ClimateButton onClick={handleAnalyze}>
            <span className="material-symbols-outlined text-[20px]" data-icon="analytics">analytics</span>
            Analisar Clima
          </ClimateButton>

          <ResetButton onClick={handleReset}>
            <span className="material-symbols-outlined text-[20px]" data-icon="restart_alt">restart_alt</span>
            Resetar
          </ResetButton>

          <CurrentWeather>
            <Current>Clima atual</Current>

            <Diagnosis>
              <h3>{situation}</h3>
              <span className="material-symbols-outlined text-primary text-3xl" data-icon="cloud_queue">cloud_queue</span>
            </Diagnosis>

            <Description>{description}</Description>

            <Sugestion>
              <span className="material-symbols-outlined text-lg" data-icon="lightbulb">lightbulb</span>
              <p>{tip}</p>
            </Sugestion>
          </CurrentWeather>

        </Main>
      </Wrapper>
    </>
  )
}

export default Home
