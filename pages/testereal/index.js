import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/QuizDaMinhaPagina/index_teste_real';
import db from '../../db_teste_real.json';

export default function QuizDaGaleraPage() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen
        externalQuestions={db.questions}
        externalBg={db.bg}
      />
    </ThemeProvider>
  );
}