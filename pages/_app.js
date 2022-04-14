import '../styles/globals.css'
import {SessionProvider} from "next-auth/react"

// Documentation:
/*
  https://next-auth.js.org/
*/

function MyApp({ Component,
                 pageProps:{ session, ...pageProps }
              }) {
  /*
   We wrap the application inside the Provider from next-auth client,
   this will allows us to get a logInState

   This allows us to persist a log in state between the pages on Next.js
  */
  return(<SessionProvider session={session}>
              <Component {...pageProps} />
          </SessionProvider>
  )
}

export default MyApp


