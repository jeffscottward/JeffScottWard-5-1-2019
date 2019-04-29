import React from 'react'
// import Link from 'next/link'
import Header from '../components/Header'
import DocArea from '../components/DocArea'
import Normalize from '../components/Normalize'

import SampleState from '../SampleState.json'

export default () => (
  <div id="app">
    <Header docs={SampleState}/>
    <DocArea docs={SampleState}/>
    <Normalize/>
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
        marign: 0;
        padding: 0;
      }

      button {
        background: #C2D5FF;
        border: 1px solid #575757;
        color: #171E37;
        font-size: 1rem;
      }
    `}</style>
  </div>
)
