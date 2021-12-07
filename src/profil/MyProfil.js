import React, { Component } from 'react';



class MyProfil extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullname : this.props.fullName,
            bio : this.props.bio,
            profession : this.props.profession,
            children : this.props.children,
            myfunction : this.props.myfunction 
        }

        console.log("====>props", props);
      /*  this.state = {
           
            const {fullName, bio, profession}  = props
        };*/
    }
    render() {
        return (
            <div class="container">
                <div class="alert alert-primary" role="alert">
                    <h1>hello { this.state.fullName}</h1>   
               
            <h2>Votre Bio {this.state.bio} </h2>
             <h3> profession= {this.state.profession}</h3>
             </div>
            <img src={this.state.children}/>
           
            <div >
                 <button onClick={()=> this.state.myfunction(`Bienvenue`)}>CLickMe</button>
            </div>
            </div>
        );
    }
}
MyProfil.defaultProps = {
    fullName: "jull",
    bio: "passionné par l foot",
    profession: "footballeur",
    
}


export default MyProfil;