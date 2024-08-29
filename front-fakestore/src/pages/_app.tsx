import "../styles/globals.css";
import type { AppProps } from "next/app";
import MyProvider from "fakestore/context/myProvider";
import { StrictMode } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StrictMode>
        <Head>
          <link rel="icon" href="https://fakestoreapi.com/icons/logo.png" />
        </Head>
        <MyProvider>
          <Component {...pageProps} />
        </MyProvider>
      </StrictMode>
    </>
  );
}
