import React,{ Component } from 'react';
import Section_1 from './section_1';
import Section_2 from './section_2';
import Section_3 from './section_3';
import Section_4 from './section_4';
import './section.scss';
// import {BrowserRouter, Route , Link} from 'react-router-dom';  //寫在這沒反應,所以寫在section_4.js了

class Plan_explain extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(     
            <React.Fragment>
                <Section_1/>
                <Section_2/>
                <Section_3/>
                <Section_4/>
            </React.Fragment>
        );
    }
}
export default Plan_explain; 