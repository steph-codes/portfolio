import React from 'react'

class Restaurant extends React.Component{
    constructor(){
        super();
        this.state = {apidata:[]};
    }

    render(){
        let cat = this.state.apidata;
        //let todisplay=''


        let todisplay = cat.map(function(value,key){
            return <p>{value.strCategory} <img src={value.strCategoryThumb}></img></p>
        })

        return(
        <div><p>Welcome to my restauarant</p>
        { todisplay }
        </div>
        
        )
    }

    componentDidMount(){
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php") //endpoint
        .then((response)=>{
            return response.json()
        })
        .then((data) => {
            //json data / data.categories cos categories was returned in the console
            console.log(data.categories);

            let dataArray = data.categories; //json obj
            this.setState({apidata:dataArray});
        })
        
        .catch((err)=> {
            //if theres an error
            alert('There is no internet')
        })
    }

    

}
export default Restaurant;