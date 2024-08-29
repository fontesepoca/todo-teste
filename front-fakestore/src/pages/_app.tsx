import "../styles/globals.css";
import type { AppProps } from "next/app";
import MyProvider from "fakestore/context/myProvider";
import { StrictMode } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StrictMode>
        <MyProvider>
          <Component {...pageProps} />
        </MyProvider>
      </StrictMode>
    </>
  );
}
