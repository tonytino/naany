import React from 'react'
import App from 'next/app'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import CUSTOM_THEME from '../materialTheme'
import { Layout } from './../components/layout'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={CUSTOM_THEME}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }
}

export default MyApp
