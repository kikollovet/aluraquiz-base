/* eslint-disable react/prop-types */
import React from 'react';
import { Lottie } from '@crello/react-lottie';
// import db from '../../../db.json';
import Widget from '../../components/Widget';
import QuizLogo from '../../components/QuizLogo';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import AlternativesForm from '../../components/AlternativesForm';
import Button from '../../components/Button';
import BackLinkArrow from '../../components/BackLinkArrow';

import loadingAnimation from './animations/loading.json';

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        Reflexão:
      </Widget.Header>

      <Widget.Content>
        <p>
          Nã há respostas certas, há apenas escolhas na vida.
        </p>
        <p>
          Temos de assumir responsabilidade por elas.
        </p>
        <p>
          O que sentimos nem sempre é uma escolha.
        </p>
        <p>
          O que vc sente em determinada situação pode te pegar de surpresa, mas como vc lida com o que vc sente é uma escolha.
        </p>
        <p>
          A melhor forma de nos conhecermos é mergulhar e compreender a motivação das nossas escolhas.
        </p>
        <p>
          Tipo, eu faço isso por causa disso. Aí estamos na superfície.
        </p>
        <p>
          Eu faço isso porque eu não sei fazer de outro jeito. Mergulhando um pouquinho.
        </p>
        <p>
          Eu faço isso porque há muito tempo tentei fazer diferente e me dei mal. Uns niveis mais embaixo.
        </p>
        <p>
          Suas escolhas estão amarradas ao contexto? 
        </p>
        <p>
          Quantos nós amarram sua escolha ao contexto?
        </p>
        <p>
          Será que precisa fazer mais nós ou desatar alguns nós que te amarram ao contexto?
        </p>
        <p>
          E por aí vai, as possibilidades de escolha frente a uma situação são infinitas.
        </p>
        <p>
          É interessante explorar mais a fundo o porque fazemos tal escolha.
        </p>
        <p>
          O porque nos sentimos de tal jeito em determinadas situações.
        </p>
        <p>
          Explorando o mundo interno descobrimos causas e motivações desconhecidas que nos levam a agir como agimos.
        </p>
        <p>
          Descobrimos também explicações para os nosso sentimentos.
        </p>
        <p>
          A compreessão inevitávelmente nos leva a mudança, ao amadurecimento.
        </p>
        <p>
          Acima de tudo, o auto conhecimento pode nos trazer tesouros lindos. Descobrimos potencias que estavam escondidas bem lá no fundo!
        </p>
        <p>
          Cada tesouro nos torna melhor e melhor. Mudamos de dentro pra fora e assim agimos no mundo de maneiras muito mais benéficas para todos!!
        </p>
        <p>
          Se conhecer leva tempo. Mudar também pode demorar. O esforço e a vontade são essencias. Mas aposto que se vc se aventurar a expandir 
          seu conhecimento acerca de si-mesmo você só tem a ganhar. Tentar ser uma pessoa melhor é uma escolha, e vc que escolha vai fazer? :)
        </p>
        Abaixo uma pequena reflexão sobre o modo como vc lida com as situações das perguntas. Cuidado!!! Pode conter provocações!!!
        <ul>
          {results.map((result, index) => (
            <li key={`result__${index}`}>
              <p>#
                {index + 1}
                {' '}
              
                {result}
              </p>
            </li>
            
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Prepare-se...
      </Widget.Header>

      <Widget.Content style={{ display: 'flex', justifyContent: 'center' }}>
        <Lottie
          width="200px"
          height="200px"
          className="lottie-container basic"
          config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
        />
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const resultAlternative = question.title + " " + question.comentario[selectedAlternative]//selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  const [isGifLoaded, setIsGifLoaded] = React.useState(false);

  setTimeout(() => {
    setIsGifLoaded(true);
  }, 1 * 2000);

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      {!isGifLoaded && 
      <div width="100%" height="100%" style={{margin: "auto", backgroundColor: 'orange'}}>
        <Lottie
          width="200px"
          height="200px"
          className="lottie-container basic"
          config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
          style={{margin: "auto", backgroundColor: 'orange'}}
        />
      </div>
      }

      {isGifLoaded && <img
        alt="Gif/Imagem reflexiva relacionada a pergunta"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        src={question.image}
      />}
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(resultAlternative);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
              setIsGifLoaded(false);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = 'SUCCESS';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                //   onChange={() => setSelectedAlternative(alternativeIndex)} essa dá ruim
                  onClick={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                  disabled={isQuestionSubmited}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {isQuestionSubmited && <p>Sua resposta diz sobre você!</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const totalQuestions = externalQuestions.length;
  const bg = externalBg;

  function addResult(result) {
    // results.push(result);
    setResults([
      ...results,
      result,
    ]);
  }

  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // atualizado === willUpdate
  // morre === willUnmount
  React.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 2000);
  // nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}