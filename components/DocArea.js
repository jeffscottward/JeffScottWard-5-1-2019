import React, { useState, useContext } from 'react'
import DocsContext from '../components/Context';
import DocGridItem from './DocGridItem'
import { totalSize, totalDocs } from '../utils/totals'

export default () => {
  const { docs } = useContext(DocsContext)

  return (
  <main>
    <div className="doc-area">
      <div className="docs-status">
        <div className="docs-status-alpha">
          <span className="total-docs">{totalDocs(docs)}&nbsp;</span>
          <span>Documents</span></div>
        <div className="docs-status-beta">
          <span className="total-size">Total size: </span>
          <span className="amount">&nbsp;{totalSize(docs)}</span>
          <span className="unit">kb</span>
        </div>
      </div>
      <ul className="doc-grid">
        {
          docs.onlyVisible.length === 0 ? (
            docs.uploads.map((item, idx) => (
              <DocGridItem key={'doc-upload' + idx} data={item} />
            ))
          ) : (
            docs.onlyVisible.map((item, idx) => (
              <DocGridItem key={'doc-upload' + idx} data={item} />
            ))
          )
        }
      </ul>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
        }
        .docs-status {
          display: flex;
          align-items: bottom;
          justify-content: space-between;
        }
        .docs-status-alpha {font-size: 30px;}
        .docs-status-beta {font-size: 22px;}
        
        {/* Baseline alignment of header text */}
        .docs-status > * {display: flex;}
        .docs-status > * > * {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        
        .doc-grid {
          display: grid;
          grid-gap: 1rem;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-flow: row dense;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .docs-status {
            flex-direction: column;
          }
          .docs-status-alpha {
            margin-bottom: 10px;
          }
          .doc-grid { display: block; }
        }
      `}</style>
    </div>
  </main>
  )
}