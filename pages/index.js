import React from 'react'
// import axios from 'axios'
import DocsContext from '../components/Context'
import { produce } from "immer";

import Header from '../components/Header'
import DocArea from '../components/DocArea'
import Normalize from '../components/Normalize'

import SampleState from '../SampleState.json'

function useImmerReducer(reducer, initialState) {
  return React.useReducer(produce(reducer), initialState);
}

const docsReducer = (docs, action) => {
  switch (action.type) {
    case "SET_DOC":
      docs.uploads.push(action.payload);
      return;
    case "REMOVE_DOC":
      var removeIndex = docs.uploads.map(item => item.id )
                                    .indexOf(action.payload)
      const newArray = (removeIndex >= 0) && docs.uploads.splice(removeIndex, 1)
    default:
      return docs;
  }
};

// const visibleDocsReducer = (visibleDocs, action) => {
//   switch (action.type) {
//     case "SET_VISIBLE_DOCS":
//       console.log('action.payload'+action.payload)
//       visibleDocs = action.payload;
//       return;
//     case "RESET_VISIBLE_DOCS":
//       visibleDocs = SampleState.docs;
//       return;
//     default:
//       return visibleDocs;
//   }
// };

export default () => {
  const [docs, dispatch] = useImmerReducer(docsReducer, SampleState.docs);
  // const [visibleDocs, dispatch] = useImmerReducer(visibleDocsReducer, []);

  return (
    <DocsContext.Provider value={{
      docs: docs,
      dispatch
    }}>
      <div id="app">
        <Header/>
        <DocArea/>
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

// Index.getInitialProps = async function (context) {
//   // const { id } = context.query

//   console.log(context.req)

//   let data = {}
  
//   // const res = await axios.get('http://localhost:3000/docs-api/')
//   // console.log(`res: ${res.data}`)
//   // const data = await res.json()

//   // console.log(`Fetched: ${data}`)

//   return { data }
// }