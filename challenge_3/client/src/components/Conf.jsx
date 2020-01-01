import React, { Component} from "react"
export default class Conf extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible : true
        }
    }

    render(){
        return (
        <div> 
            <button> Confirm </button>
        </div>)
    }
}