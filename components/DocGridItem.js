import React, { useContext } from 'react'
import DocsContext from '../components/Context';

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
          border: 1px solid #575757; 
          padding: 25px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .doc-label-row:first-child {
          margin-bottom: 20px;
        }
        
        .doc-label-row:last-child {
          display: flex;
          justify-content: space-between;
          overflow: hidden;
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