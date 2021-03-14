import React from'react';

class Contactform extends React.Component{
    constructor(){
        super()
        this.state={fullname: '',feedback :'', email:''}; //initialize name fields
        //this.state={btn:'', idname:'' }
        this.send = this.send.bind(this);
    }
    render(){
        return(
            
            <div className="container mt-5">
                <div>{ this.state.fullname }</div>
                <div>{ this.state.email }</div>
                <form action="" method="post">
                    <div className="formgroup row">
                    <input type="text" onChange ={this.send} className="form-control mt-2" placeholder="fullname"></input>
                    </div>
                    <div className="formgroup row">
                    <input type="email" onChange ={this.send} placeholder="email" className="form-control mt-2"></input>    
                    </div>
                    
                    <div className="formgroup row">
                    <button type="button" className="btn mt-4 btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )

    }
    //or u use arrow function ES6, then no need to bind
    //to pick one value on the form
    // send(event){
    //     let formname = event.target.value;
    //     let feedbackstring = <p>Thank you {formname} for registering</p>
    //     this.setState({feedback:feedbackstring});
    //     console.log(event);
    // }
    //[event.target.id]
    send(event){
        this.setState({[event.target.name]:event.target.value });
    }
    
}

export default Contactform;