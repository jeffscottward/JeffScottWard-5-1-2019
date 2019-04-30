import React, { useContext } from 'react'
import DocsContext from '../components/Context';

import { borderColor } from '../components/cssVars'

export default (props) => {
  let {data} = props
  const { dispatch } = useContext(DocsContext)
  return (
    <li className="doc">
      <div className="doc-label-row">
        <div className="doc-name">{data.name}</div>
      </div>
      <div className="doc-label-row">
        <div className="doc-size-label">
          <span className="amount">{data.size}</span>
          <span className="unit">kb</span>
        </div>
        <div className="doc-delete">
          <button
            className="delete"
            onClick={e => dispatch({ type: "REMOVE_DOC", payload: data.id })}>
              delete
          </button>
        </div>
      </div>
      <style jsx>{`
        .doc { 
          border: 1px solid ${borderColor};
          padding: 25px;
          white-space: nowrap;
          overflow: hidden;
        }
        
        .doc-label-row:first-child {
          margin-bottom: 20px;
          overflow: hidden;
        }
        
        .doc-label-row:last-child {
          display: flex;
          justify-content: space-between;
        }
        
        .doc-name {
          font-size: 25px;
          max-width: 100%;
        }
        
        .delete {
          padding: 2px 20px;
          cursor: pointer;
        }  
      `}</style>
    </li>
  )
}