import React, { useState, useContext, useEffect } from 'react'
import UploadBtn from './UploadBtn'
import { DocsActions } from '../context/docs'
import { DocsContext } from '../context/docsContext'
import fuzzySearch from '../utils/fuzzy'
import { borderColor, mobileBreakPoint } from '../components/cssVars'

export default () => {
  const [searchString, setSearchString] = useState('')
  const { docs, dispatch } = useContext(DocsContext)

  function handleFuzzyInput (val) {
    setSearchString(val)
    dispatch({
      type: DocsActions.SET_VISIBLE_DOCS,
      payload: fuzzySearch(docs.uploads, val)
    })
  }

  // Set onlyVisible to match uploads to stay in sync
  useEffect(() => handleFuzzyInput(''), [])
  console.log(docs)
  return (
    <header>
      <input
        className="search"
        type="text"
        placeholder="Search documents..."
        disabled={docs.uploads.length === 0}
        value={searchString}
        onChange={e => handleFuzzyInput(e.target.value)} />
      <UploadBtn />
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 60px;
        }
        .search {
          background: #F7F7F7;
          border: 1px solid ${borderColor};
          width: 500px;
          padding: 10px;
          font-size: 1rem;
        }
        .search::placeholder {color: #3D3D3D;}
        .upload { padding: 0 50px; }  
        @media (max-width: ${mobileBreakPoint}) {
          header { flex-direction: column-reverse; }
          .search, .upload {
            width: 100%;
            height: 40px;
          }
        }
      `}
    </style>
  </header>
  )
}