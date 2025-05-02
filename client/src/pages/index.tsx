/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Home from '../templates/Home'

export default function Index(props: any) {
  return <Home {...props} />
}

export function getServerSideProps() {
  // fazer lógica
  // buscar dados em alguma API
  // fazer cálculo ou leitura de context

  // retorno dos dados
  return {
    props: {
      heading: 'Olha eu aqui'
    }
  }
}