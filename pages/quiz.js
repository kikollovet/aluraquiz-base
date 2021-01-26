import React from 'react'
import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

export default function QuizPage({name}) {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <div>
        <h1>Quiz page {name} </h1>
      </div>
    </QuizBackground>
  )
}

QuizPage.getInitialProps = ({ query: { name } }) => {
  return { name }
}