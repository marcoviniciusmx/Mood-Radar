import {
  Button,
  Cards,
  ClimateButton,
  CurrentWeather,
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
            <div>
              <Button>Silencioso</Button>
              <Button>Moderado</Button>
              <Button>Barulhento</Button>
            </div>
          </Cards>

          <Cards>
            <Parameters>
              <h2>Pessoas</h2>
              <span className="material-symbols-outlined text-primary/40" data-icon="groups">groups</span>
            </Parameters>
            <div>
              <Button>Vazio</Button>
              <Button>Normal</Button>
              <Button>Lotado</Button>
            </div>
          </Cards>

          <Cards>
            <Parameters>
              <h2>Pressa</h2>
              <span class="material-symbols-outlined text-primary/40" data-icon="speed">speed</span>
            </Parameters>
            <div>
              <Button>Calmo</Button>
              <Button>Dinâmico</Button>
              <Button>Urgente</Button>
            </div>
          </Cards>

          <Cards>
            <Parameters>
              <h2>Humor</h2>
              <span class="material-symbols-outlined text-primary/40" data-icon="mood">mood</span>
            </Parameters>
            <div>
              <Button>Alegre</Button>
              <Button>Sério</Button>
              <Button>Tenso</Button>
            </div>
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
            <p>Clima atual</p>

            <div>
              <h3>Neutro</h3>
              <span class="material-symbols-outlined text-primary text-3xl" data-icon="cloud_queue">cloud_queue</span>
            </div>

            <p>O ambiente está equilibrado, permitindo foco moderado sem grandes distrações externas.</p>

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
