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
              <Button>Silencioso</Button>
              <Button>Moderado</Button>
              <Button>Barulhento</Button>
            </Choices>
          </Cards>

          <Cards>
            <Parameters>
              <h2>Pessoas</h2>
              <span className="material-symbols-outlined text-primary/40" data-icon="groups">groups</span>
            </Parameters>
            <Choices>
              <Button>Vazio</Button>
              <Button>Normal</Button>
              <Button>Lotado</Button>
            </Choices>
          </Cards>

          <Cards>
            <Parameters>
              <h2>Pressa</h2>
              <span class="material-symbols-outlined text-primary/40" data-icon="speed">speed</span>
            </Parameters>
            <Choices>
              <Button>Calmo</Button>
              <Button>Dinâmico</Button>
              <Button>Urgente</Button>
            </Choices>
          </Cards>

          <Cards>
            <Parameters>
              <h2>Humor</h2>
              <span class="material-symbols-outlined text-primary/40" data-icon="mood">mood</span>
            </Parameters>
            <Choices>
              <Button>Alegre</Button>
              <Button>Sério</Button>
              <Button>Tenso</Button>
            </Choices>
          </Cards>

          <ClimateButton>
            <span class="material-symbols-outlined text-[20px]" data-icon="analytics">analytics</span>
            Analisar Clima
          </ClimateButton>

          <ResetButton>
            <span class="material-symbols-outlined text-[20px]" data-icon="restart_alt">restart_alt</span>
            Resetar
          </ResetButton>

          <CurrentWeather>
            <Current>Clima atual</Current>

            <Diagnosis>
              <h3>Neutro</h3>
              <span class="material-symbols-outlined text-primary text-3xl" data-icon="cloud_queue">cloud_queue</span>
            </Diagnosis>

            <Description>O ambiente está equilibrado, permitindo foco moderado sem grandes distrações externas.</Description>

            <Sugestion>
              <span class="material-symbols-outlined text-lg" data-icon="lightbulb">lightbulb</span>
              <p>Dica: Ótimo momento para tarefas de rotina.</p>
            </Sugestion>
          </CurrentWeather>

        </Main>
      </Wrapper>
    </>
  )
}

export default Home
