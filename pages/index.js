import React from 'react'

import Header from '../components/Header'
import DocArea from '../components/DocArea'
import NormalizeCSS from '../components/NormalizeCSS'

import SampleState from '../SampleState.json'

import { DocsContext } from '../context/docs'

import { useImmerReducer } from '../reducers/immerReducer'
import { docsReducer } from '../reducers/docsReducer'

import { buttonStyles } from '../components/cssVars'

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
    </DocsContext.Provider>
  )
}

// Server-side rendering example:
// Fetch is done and rendered to page before sending app to browser

// Index.getInitialProps = async function () {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()
//   console.log(`Show data fetched. Count: ${data.length}`)
//   return {
//     shows: data
//   }
// }