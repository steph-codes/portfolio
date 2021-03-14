import React from 'react';
import Advert from './Advert'
class Feed extends React.Component{
    render(){
    return (
             <div>   
                <div><p>sam just uploaded{this.props.user}</p></div>
                <div><p>jon just uploaded</p></div>
                <Advert/>
            </div>
        )
    }
}
export default Feed;