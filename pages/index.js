import React from 'react'
import { StateProvider } from '../state/state';

import Header from '../components/Header'
import DocArea from '../components/DocArea'
import NormalizeCSS from '../components/NormalizeCSS'

import SampleState from '../SampleState.json'

import { DocsReducer } from '../state/reducers/docs'
import { buttonStyles } from '../cssVars'

export default () => {
  return (
    <div id="app">
      <StateProvider
        initialState={SampleState.docs}
        reducer={DocsReducer}>
        <Header />
        <DocArea/>
      </StateProvider>
      <NormalizeCSS />
      <style jsx global>{`
        * {
          box-sizing: border-box;
          font-family: sans-serif;
        }

        #app{
          max-width: 960px;
          padding: 40px;
          margin: auto;
        }

        ul, li { 
          list-style: none;
          margin: 0;
          padding: 0;
        }

        button,
        input[type="button"],
        input[accept="image/jpeg, image/png"] {
          background: ${buttonStyles.background};
          border: ${buttonStyles.border};
          color: ${buttonStyles.color};
          font-size: ${buttonStyles['font-size']};
        }
      `}</style>
    </div>
  )
}