import React, { ReactNode, Suspense, useRef } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";


function App({ Component, pageProps }: any) {
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  const AppMainBody = useRef(null);

  return getLayout(
    <>
      <Head>
        <title>Gator Wallet</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
        <meta name="AdsBot-Google" content="noindex" />
        <link rel="icon" href="/new-favicon.ico" />
      </Head>

      <div className="flex flex-col app-container h-screen">
        <div className="relative">
          <div className="flex flex-col bg-white">
            <Layout
              className="transition-all duration-300 flex-grow"
              ref={AppMainBody}
            >
              
              <Component {...pageProps} key={router.route} />
             
            </Layout>
            <div className="relative mt-auto">
              <div className="absolute w-full h-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
