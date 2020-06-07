import App from "next/app";
import React from "react";
import Layout from "../components/Layout";

class MainApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MainApp;
