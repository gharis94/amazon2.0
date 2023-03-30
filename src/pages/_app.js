import '@/styles/globals.css';
import {store} from '../redux/store'
import { Provider } from 'react-redux';
//import {SessionProvider} from 'next-auth/react';
import {SessionProvider} from 'next-auth/react';

export default function App({ Component,pageProps}) {
  //console.log(pageProps)
  return (
    <SessionProvider session={pageProps.session} >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}
