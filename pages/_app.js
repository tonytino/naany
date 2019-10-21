import React from 'react'
import App from 'next/app'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import CUSTOM_THEME from '../materialTheme'

const useStyles = makeStyles(theme => ({
  layout: {
    padding: `${theme.typography.pxToRem(40)} ${theme.typography.pxToRem(0)}`,
    maxWidth: theme.typography.pxToRem(1024),
    margin: 'auto',
    height: '100vh'
  },
}));

function Layout ({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.layout}>
      {children}
    </div>
  )
}

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
