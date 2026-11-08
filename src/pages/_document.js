import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

// Sets the theme before the first paint so dark mode never flashes white.
// Uses the saved choice if there is one, otherwise follows the system setting.
const themeScript = `
(function () {
  var theme = 'light';
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      theme = saved;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    }
  } catch (e) {}
  document.documentElement.setAttribute('data-theme', theme);
})();
`

export default class MyDocument extends Document {
  // Renders styled-components styles into the static HTML, so pages arrive styled.
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#fbfbfc"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#16151f"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
