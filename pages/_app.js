import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import CUSTOM_THEME from './../materialTheme';
import { Layout } from './../components';
import { LayoutContext, UserSessionContext } from './../contextes';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      layout: {
        navIsOpen: false,
      },
      userSession: {},
    };
  }

  /**
   *            LAYOUT MGMT
   */

  setLayout = setLayoutCallback => {
    this.setState(setLayoutCallback);
  };

  get layoutContext() {
    const { setLayout } = this;
    const { layout } = this.state;
    return {
      layout,
      setLayout,
    };
  }

  /**
   *            USER SESSION MGMT
   */

  setUserSession = setUserSessionCallback => {
    this.setState(setUserSessionCallback);
  };

  get userSessionContext() {
    const { setUserSession } = this;
    const { userSession } = this.state;
    return {
      userSession,
      setUserSession,
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={CUSTOM_THEME}>
        <Head>
          <title>Naany</title>
        </Head>
        <CssBaseline />
        <LayoutContext.Provider value={this.layoutContext}>
          <UserSessionContext.Provider value={this.userSessionContext}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </UserSessionContext.Provider>
        </LayoutContext.Provider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
