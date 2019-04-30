import React from 'react'
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
      // Fancy algo - https://stackoverflow.com/a/26327271
      var removeIndex = docs.uploads.map(item => item.id).indexOf(action.payload)
      if(removeIndex >= 0){docs.uploads.splice(removeIndex, 1)}
      return;
    case "SET_VISIBLE_DOCS":
      // if no fuzzy search started
      // if (!!docs.visible === false){
      // }
      if(action.payload.length === 0 ) {
        docs.visible = docs.uploads
      } else {
        docs.visible = action.payload
      }
      return;
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