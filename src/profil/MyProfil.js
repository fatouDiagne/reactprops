import React, { Component } from 'react';



class MyProfil extends Component {
    constructor(props){
        super(props);

        console.log("====>props", props);
      /*  this.state = {
           
            const {fullName, bio, profession}  = props
        };*/
    }
    render() {
        return (
            <div>
                <div class="alert alert-primary" role="alert">
                    <h1>hello { this.props.fullName}</h1>   
               
            <h2>Votre Bio {this.props.bio} </h2>
             <h3> profession= {this.props.profession}</h3>
             </div>
            <img src={this.props.children}/>
           
            <div >
                 <button onClick={()=> this.props.myfunction(`Bienvenu`)}>CLickMe</button>
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