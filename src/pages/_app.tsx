import React from 'react'
import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/layout/main-layout/main-layout'
import wrapper from '../redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default wrapper.withRedux(MyApp)
