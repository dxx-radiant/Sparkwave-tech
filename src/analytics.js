// Google Analytics 4. Paste the Measurement ID (looks like G-XXXXXXXXXX) here to
// turn tracking on. While it's empty, nothing loads and every call below does
// nothing. Local `npm run dev` never sends data, so testing doesn't skew reports.
export const GA_MEASUREMENT_ID = ''

const enabled = () => Boolean(GA_MEASUREMENT_ID) && !import.meta.env.DEV

export function initAnalytics() {
  if (!enabled() || window.gtag) return
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  // Page views are sent by trackPageView on every route change instead, so each
  // page is recorded once with its own title.
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })
}

export function trackPageView() {
  if (!window.gtag) return
  window.gtag('event', 'page_view', {
    page_location: window.location.href,
    page_title: document.title,
  })
}

export function trackEvent(name, params) {
  if (!window.gtag) return
  window.gtag('event', name, params)
}
