import React, { Component} from "react"
import Conf from "./Conf.jsx"

export default class MyForm2 extends Component {
    constructor(props){

        super(props) 
        this.state = {
        visibleForm2: true,
         Adress: "",
         line1:"",
         line2:"",
         zipCode:"",
         city:""
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({[event.target.name] : event.target.value })
    }

    handleClick(){
       this.setState({visibleForm2: false})
     }

    render(){

        if(this.state.visibleForm2 === true){
            return (
                <div className="form2">
                <form method="post" action="/">
                    Adress <br/>
                    <input type="text" name='address' onChange={this.handleChange}/> <br/>
                    line1 <br/>
                    <input type="text" name='line1' onChange={this.handleChange}/> <br/>
                    line2<br/>
                    <input type="text" name='line2' onChange={this.handleChange}/> <br/>
                    zip code<br/>
                    <input type="text" name='code' onChange={this.handleChange}/> <br/>
                    city<br/>
                    <input type="text" name='city' onChange={this.handleChange}/> <br/>
                  
                </form>
                <button className="form2-Btn" onClick={this.handleClick}> NEXT </button>
            </div>
         ) }
            else {
                return (<Conf/>)
            }
       
        
    }
}