import React from 'react'

export default (props) => (
  <header>
    <input className="search" type="text" placeholder="Search documents..." disabled={!props.docs}/>
    <button className="upload" disabled={!props.uploadReadyState}>UPLOAD</button>
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
    `}</style>
  </header>
)