import React from 'react'


class Advert extends React.Component{
    constructor(props){
        super(props);
        this.state={status: '', message:''}
        this.addComment2 = this.addComment2.bind(this);
    }
    static getDerivedStateFromProps(pros, state){
        //return({message:'Comment  been added'});
       return state.message;
    }
    render(){
        return(
            <div>
                <button className='btn btn-block btn-danger' onClick={this.addComment}>Add a comment</button>
                <button className='btn btn-block btn-primary' onClick={this.addComment2}>Add another</button>
                <h4 style={{color:"red"}}>Advert One</h4><img src="hero.png"></img><br/>
                <h4>Advert two</h4><img src="hero.png" className="mb-4"/>
                <p>{ this.state.message }</p>
                <p>{ this.state.status }</p>
            </div>
            
        )

    }
    // addComment(){
    //     //alert('Comment has been added'); set state to assign new value
    //     //this refers to addComment here not that of the class
    //     this.setState({message:'Comment has been added'});
        
    // }
    //add comment2 is used when ur not using an arrow function
    addComment2(){
        this.setState({message:'Comment has been added'});
    }
    addComment =()=>{
        this.setState({message:'Comment has been added'});
    }
    //add stuffs before page displays ur component
    
}

export default Advert;

