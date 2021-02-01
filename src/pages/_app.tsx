import { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";

import GlobalStyles from "styles/global";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple starter project to work with TypeScript, React, NextJS and StyledComponents"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
