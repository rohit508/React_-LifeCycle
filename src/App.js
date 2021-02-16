import React, { Component } from 'react'

export default class App extends Component {

    // react lifecycle methods
    // =============== constructor ==========

    constructor() {
        super()
        this.state = {
            count: 0,
            Data: []
        }
        // console.log("construtor");
    }

    // =============== getDerivedStateFromProps ==========

    // static getDerivedStateFromProps() {
    //     // console.log("getDerivedStateFromProps")
    //     return {
    //         count: 10,


    //     }


    // }

    // ================= componentDidMount ================
    // this  methods use for call Api 

    // componentDidMount() {
    //     console.log("componentDidMount")

    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then(data => {
    //         this.setState({
    //             Data : data
    //         })
    //     })
    //     .catch( arr => console.log(arr))
    // }




    // ================= render ================
    //  static getDerivedStateFromProps(props, state) {
    //     console.log("getDerivedStateFromProps" ,state)
    //     return  null


    //     }

    // shouldComponentUpdate(){
    //     return false
    // }

    componentWillUnmount() {
        console.log("component End")
    }
    render() {
        // console.log("render..")
        // console.log("data==>",this.state.Data)

        return (
            <div style={{ textAlign: "center" }}>


                <h1>Life cycle</h1>

                {this.state.count < 5 && <h1>{this.state.count}</h1>}
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>increament</button>
                <button onClick={() => { this.setState({ count: this.state.count - 1 }) }}>decreament</button>


                {/*  Api call  */}

                {/* {this.state.Data.map((v,i) => {
                    return <h5>{v.title}</h5>
                    
                })} */}
            </div>
        )
    }
}


// Mounting: 

// constructor()
// getDerivedStateFromProps()
// render()
// componentDidMount()






// Updating : 

// getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate() props and state

// componentDidUpdate()





// Unmounting :

// componentWillUnmount()