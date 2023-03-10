import { Html, Head, Main, NextScript } from 'next/document'
import { Head as CustomHeadComponent} from '../components'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <CustomHeadComponent />
      <body>
        <Main />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></Script>
        <NextScript />
      </body>
    </Html>
  )
}
