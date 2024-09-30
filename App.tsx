import React from 'react'
import Navigation from './src/navigation/Navigation'
// import { StatusBar } from 'react-native'
const  App = () => {
  return (
    <>
          {/* Set global StatusBar */}
          {/* <StatusBar
          backgroundColor={'#fff'}
          barStyle={'dark-content'}
          translucent= {false}
          hidden={false}
          /> */}
          <Navigation />
    </>
  )
}
export default App;