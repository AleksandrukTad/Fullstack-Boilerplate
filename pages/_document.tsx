import IDocument from "next/document";
import * as Document from "next/document";
import React from "react";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends IDocument {
  public static getInitialProps(props: any) {
    const sheet = new ServerStyleSheet();
    const page = props.renderPage((App: any) => (innerProps: any) =>
      sheet.collectStyles(<App {...innerProps} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  public render() {
    return (
      <html>
        <body>
          <Document.Main />
          <Document.NextScript />
        </body>
      </html>
    );
  }
}
