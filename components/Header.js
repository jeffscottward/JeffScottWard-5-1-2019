import React, { useState } from 'react'
import Fuse from 'fuse.js'
import UploadBtn from './UploadBtn'
import Context from '../components/Context'

var fuseOptions = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    "name",
  ]
};

export default (props) => {
  var fuse = new Fuse(props.docs.uploads, fuseOptions)
  const [searchString, setSearchString] = useState('')
  function runFuzzySearch(input) {return fuse.search(input)}
  console.log(runFuzzySearch(searchString))
  return (
    <header>
      {/* <Context.Consumer>
        {(stateData, setState) => {
          return ( */}
              <input
                className="search"
                type="text"
                placeholder="Search documents..."
                disabled={props.docs.uploads.length === 0}
                value={searchString}
                onChange={e => setSearchString(e.target.value)} />
              <UploadBtn />
          {/* )
        }}
      </Context.Consumer> */}
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
          border: 1px solid #575757;
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