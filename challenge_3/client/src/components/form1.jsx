import React, { Component} from "react"
import MyForm2 from "./form2.jsx"

export default class MyForm extends Component {
    constructor(props){
        console.log("in constructor")
        super(props)
        this.state = {
           visibleForm1: true,
           name: "" ,
           email: "",
           password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event){
        console.log(event.target.name)
        this.setState({[event.target.name]: event.target.value})
    }

    handleClick(){
        this.setState({ visibleForm1: false})
    }
    render(){
        console.log("in render")

        if(this.state.visibleForm1 === true){
        return (
            <div className="form1">
                <form>
                    Name <br/>
                    <input type="text" name="Name"  value={this.state.Name} onChange={this.handleChange}/> <br/>
                    Email <br/>
                    <input type="email" name="Email" value={this.state.Email} onChange={this.handleChange}/> <br/>
                    password <br/>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/> <br/>
                  
                </form>
                <button className="form1-Btn" onClick={this.handleClick}> NEXT </button>
            </div>
        ) }
        else {
           return <MyForm2 saveStorage = {this.props.saveStorage}/>
        }
    }

} 
