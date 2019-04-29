import React from 'react'
// import axios from 'axios'
// import Context from '../components/Context'

import Header from '../components/Header'
import DocArea from '../components/DocArea'
import Normalize from '../components/Normalize'

import SampleState from '../SampleState.json'

// class Provider extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       initialState: SampleState,
//       visibleDocs: []
//     };
//   }

//   changeVisibleDocs = (key, val) => {
//     this.setState({[key]: val});
//   }

//   render() {
//     return (
//       <Context.Provider
//         value={{
//           state: this.state,
//           changeVisibleDocs: this.changeVisibleDocs
//         }}
//       >
//         {this.props.children}
//       </Context.Provider>
//     );
//   }
// }

const Index = () => (
  // <Provider>
    <div id="app">
      {/* <Context.Consumer>
        {(stateData) => {
          return ( */}
            <div>
              <Header docs={SampleState.docs} />
              <DocArea docs={SampleState.docs} />
            </div>
          {/* )
        }}
      </Context.Consumer> */}
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
  // </Provider>
)

// Index.getInitialProps = async function (context) {
//   // const { id } = context.query

//   console.log(context.req)

//   let data = {}
  
//   // const res = await axios.get('http://localhost:3000/docs-api/')
//   // console.log(`res: ${res.data}`)
//   // const data = await res.json()

//   // console.log(`Fetched: ${data}`)

//   return { data }
// }

export default Index