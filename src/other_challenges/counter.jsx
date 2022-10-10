import React, {useState} from 'react'

// class Counter extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { count: 0}
    
//   }

//   render() {
//     const { count } = this.state
//     return (
//       <div>
//         <h3>{count}</h3>
//         <button onClick={(e) => this.setState({count: count + 1})}>+</button>
//         <button onClick={(e) => this.setState({count: count - 1})}>-</button>
//       </div>
//     )
//   }
// }

const Counter = (props) => {
  const [ count, setCount ] = useState(0)

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

    </div>
  )
}

export default Counter;