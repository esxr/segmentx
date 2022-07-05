import '../styles/globals.scss'

/** Make reportWebVitals function to measure performance
 * TTFB (Time To First Byte) < 200-500ms
 * FCP (First Contentful Paint) < 1s
 * LCP (Last Contentful Paint) < 2.5s
 * FID (First Input Delay) < 100ms
 * CLS (Cumulative Layout Shift) < 0.1
*/
export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'FCP':
      // handle FCP results
      break
    case 'LCP':
      // handle LCP results
      break
    case 'CLS':
      // handle CLS results
      break
    case 'FID':
      // handle FID results
      break
    case 'TTFB':
      // handle TTFB results
      break
    default:
      break
  }
}


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
