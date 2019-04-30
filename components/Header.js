import React, { useState, useContext, useEffect } from 'react'
import UploadBtn from './UploadBtn'
import DocsContext from '../components/Context';
import fuzzySearch from '../utils/fuzzy';

import { borderColor } from '../components/cssVars'

export default () => {
  const [searchString, setSearchString] = useState('')
  const { docs, dispatch } = useContext(DocsContext)

  function handleFuzzyInput (val) {
    setSearchString(val)
    const fuzzyResult = fuzzySearch(docs.uploads, val)
    
    // Update Context here
    dispatch({ type: "SET_VISIBLE_DOCS", payload: fuzzyResult})
  }

  // Set onlyVisible to match uploads to stay in sync
  useEffect(() => handleFuzzyInput(''), []);
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
        }

        header {
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

        @media (max-width: 768px) {
          header {
            flex-direction: column-reverse;
          }

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