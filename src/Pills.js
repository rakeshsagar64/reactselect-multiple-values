import React from 'react';
class Pill extends React.Component {
  
    render() {
        if(this.props.data !== undefined){ 
        return (
         <span  className="col-xs-3 thumbnail">
            <p>{this.props.data}</p>
            <button onClick={()=>{this.props.deleteCourse(this.props.data)}}>X</button>
            
        </span> );
        }
        else{
            return (<div></div>);
                
        }
    }
}
 
export default Pill;