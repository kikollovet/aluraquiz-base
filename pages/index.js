import React from 'react'
import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Link from '../src/components/Link';
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import FormNameButton from '../src/components/FormNameButton'
import InputName from '../src/components/InputName'
import Head from 'next/head'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'
import Input from '../src/components/Input'
import Button from '../src/components/Button'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  text-align: center;
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {

  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Auto-Conhecimento</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
              <h1>
                Conhecimento acerca de si-mesmo
                <p>
                  {'---------------------------------------------------'}
                </p>
                <p>
                  AVISO ao NAVEGANTE!!! Caso decida escrever o seu nome e apertar o botão saiba
                  que vc encontrará perguntas sobre 
                  você e seu íntimo, seu mundo interno. As perguntas tem como objetivo
                  expandir seu auto-conhecimento. Vc pode ficar mexido com algumas, 
                  reflexivo ou apenas odiar isto e achar uma baboseira. O objetivo é que vc 
                  reflita sobre a maneira como você lida com a vida. Refletir pode causar
                  um certo incômodo. Cada pergunta tem algumas possiveis respostas que vc pode escolher.
                  As imagens se relacionam com as perguntas e podem te fazer refletir, te provocar e/ou evocar lembranças.
                  Ao final será feita uma pequena análise reflexiva sobre suas respostas.
                  Fique a vontade para não seguir em frente. Ninguém terá acesso as suas respostas,
                  inclusive eu, o site não usa banco de dados, ou seja só vc saberá as respostas que escolheu
                  para cada pergunta!! Dito tudo isso a escolha de seguir em frente é sua. Caso queira prosseguir, 
                  siga com cautela, respeito a si mesmo, amor próprio, e auto cuidado, respire
                  e simbora mergulhar no nosso mundo interno! Lembre-se, se faltar oxigenio volte para
                  a superfície! Amor próprio e auto cuidado são essencias ao mergulhar no mundo interno.
                  Boa viagem!!!
                </p>
              </h1>
              
              
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do React');
            }}>
              
              {/* <InputName
              onChange={function (infosDoEvento) {
                console.log(infosDoEvento.target.value);
                //name = infosDoEvento.target.value;
                setName(infosDoEvento.target.value)
              }}
              placeholder="Diz seu nome"/> */}

              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Conte seu nome marinheiro"
                value={name}
              />

              {/* <br/> */}
              {/* <FormNameButton type="submit" disabled={name.length === 0}>
                Pronto pra jogar {name}? 
              </FormNameButton> */}

              <Button type="submit" disabled={name.length === 0}>
                {`Pronto pra mergulhar ${name}?`}
              </Button>

            </form>
          </Widget.Content>
        </Widget>
        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <ul>
            {db.external.map((linkExterno) => {

              const [projectName, githubUser]= linkExterno
              .replace(/\//g, '')
              .replace('https:', '')
              .replace('.vercel.app', '')
              .split('.');

              return (
                <li key={linkExterno}>
                  <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                  >
                    {`${githubUser}/${projectName}`}
                  </Widget.Topic>
                </li>
              )
            })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        /> 
      </QuizContainer>
      <GitHubCorner projectUrl="https://www.github.com/kikollovet"/>
    </QuizBackground>
  )
}
