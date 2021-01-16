import React from "react";

type Props = {
  Component: React.FC;
  pageProps: Record<string, string>;
};

function MyApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}

export default MyApp;
