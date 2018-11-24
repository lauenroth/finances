import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
// import htmlescape from 'htmlescape';
// import fonts from '../styles/fonts.css';
import GlobalStyle from '../styles/global';
// import '../styles/global.js';

/* eslint-disable react/no-danger */

// Inject global CSS

/**
 * Next.Js Document
 * @description The Document is only rendered on the serverside
 */
export default class MyDocument extends Document {
  /**
   * Get properties from server
   * @param {*} params
   */
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
    });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()],
    };
  }

  /**
   * Render
   */
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="application-name" content="Finances" />
          {/* <style dangerouslySetInnerHTML={{ __html: globalCSS }} /> */}
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <GlobalStyle />
          {/* <script dangerouslySetInnerHTML={{ __html: `__ENV__ = ${htmlescape(env)}` }} /> */}
          <NextScript />
        </body>
      </html>
    );
  }
}
