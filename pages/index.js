import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '../components/Header'
import DocArea from '../components/DocArea'
import Normalize from '../components/Normalize'

import SampleState from '../SampleState.json'
import DocsContext from '../components/Context'

import { useImmerReducer } from '../reducers/immerReducer'
import { docsReducer } from '../reducers/docsReducer'

import { buttonStyles } from '../components/cssVars'

const Index = () => {
  const [apiData, setApiData] = useState({
    "docs": {
      "uploads": [
        {
          "id": 314340,
          "name": "XXX.jpg",
          "type": "jpg",
          "size": "300"
        }
      ],
      "onlyVisible": []
    }
  })

  async function getData() {
    // Backend works!
    const res = await axios.get('/docs')
    const resData = res.data
    console.log({resData})
    return resData
  }

  useEffect(()=>{setApiData(getData())},[])

  // Can't get apidData to reassign after useEffect...
  const [docs, dispatch] = useImmerReducer(docsReducer, apiData.docs);

  console.log({apiData})
  
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
//   const res = await axios.get('/docs')
//   const data = await res.json()
//   console.log(`Show data fetched. ${data}`)
//   return {
//     docsREQ: data
//   }
// }

export default Index