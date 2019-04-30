import React from 'react'

import Header from '../components/Header'
import DocArea from '../components/DocArea'
import Normalize from '../components/Normalize'

import SampleState from '../SampleState.json'
import DocsContext from '../components/Context'

import { useImmerReducer } from '../reducers/immerReducer'
import { docsReducer } from '../reducers/docsReducer'

export default () => {
  const [docs, dispatch] = useImmerReducer(docsReducer, SampleState.docs);
  return (
    <DocsContext.Provider value={{
      docs: docs,
      dispatch
    }}>
      <div id="app">
        <Header />
        <DocArea />
        <Normalize />
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
            background: #C2D5FF;
            border: 1px solid #575757;
            color: #171E37;
            font-size: 1rem;
          }
        `}</style>
      </div>
    </DocsContext.Provider>
  )
}