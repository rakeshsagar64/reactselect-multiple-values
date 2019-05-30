import React from 'react';
import Pill from './Pills';
class Textbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses:['Course 1','Course 2','Course 3','Course 4','Java','C#'],
            selectedCourses:[]
          }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.deleteCourse=this.deleteCourse.bind(this);
        this.handleSelect=this.handleSelect.bind(this); 
    }

    handleSubmit(e){
        console.log("submit");
        //console.log(e.target)
        
        // let selectedCourses=[...this.state.selectedCourses,this.state.value]
        // this.setState({selectedCourses});
        
        this.setState({value:""});
        e.preventDefault();
    }
    handleChange(e){
        let isValueAdded=false;
        if(this.state.courses.includes(e.target.value) && (!this.state.selectedCourses.includes(e.target.value))) {
            this.setState({value:e.target.value});
        
            let selectedCourses=[...this.state.selectedCourses,e.target.value]
        this.setState({selectedCourses});
        isValueAdded=true;
        
           // e.target.value="";
           //console.log(e); 
        }
        if(isValueAdded){
            this.setState({value:""});
            isValueAdded=false;
        }
        else{
            this.setState({value:e.target.value});
        
        }

    }
    
    handleSelect(e){
        console.log("select fired");

    }

    deleteCourse(courseName){
        console.log("dalete course called");
        let selectedCourses=this.state.selectedCourses.filter((selectedCourse)=>{
            return selectedCourse!==courseName;
        });
        console.log(selectedCourses);
        this.setState({selectedCourses});
    }

    render() { 
        const {courses,selectedCourses}=this.state;
        const options=courses.map((course)=>{return <option  value={course}>{course}</option>});
        const selectedCoursesList=selectedCourses.map((selectedCourse)=>{return <Pill data={selectedCourse} deleteCourse={this.deleteCourse}></Pill>})        
        return (<div class="container">
            <form onSubmit={this.handleSubmit}>
            <input autoComplete="off" onChange={this.handleChange} list="courses" name="courses" value={this.state.value} />
                <datalist onBlur={this.handleSelect} id="courses">
                    {options}
                </datalist>

                {/* <input type="submit" value="Submit"></input> */}
                </form>
                <div className="row" >
                {selectedCoursesList}
                </div>
        </div>  );
    }
}
 
export default Textbox;
