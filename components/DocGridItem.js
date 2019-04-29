import React from 'react'

export default (props) => {
  let {data} = props
  return (
    <li className="doc">
      <div className="doc-label-row">
        <div className="doc-name">{data.name}</div>
      </div>
      <div className="doc-label-row">
        <div className="doc-size-label">
          <span className="amount">{data.fileSize}</span>
          <span className="unit">kb</span>
        </div>
        <div className="doc-delete">
          <button
            className="delete"
            onClick={e => removeUpload(data.id)}>
              delete
          </button>
        </div>
      </div>
      <style jsx>{`
        .doc { 
          border: 1px solid #575757; 
          padding: 25px;
        }
        
        .doc-label-row:first-child {
          margin-bottom: 20px;
        }
        
        .doc-label-row:last-child {
          display: flex;
          justify-content: space-between;
        }
        
        .doc-title {
          font-size: 28px
        }
        
        .delete {
          padding: 2px 20px;
        }  
      `}</style>
    </li>
  )
}