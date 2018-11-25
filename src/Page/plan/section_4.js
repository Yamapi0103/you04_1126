import React,{ Component } from 'react';
// import {BrowserRouter, Route , Link} from 'react-router-dom';
import Publish_plan from './publish_plan';

class Section_4 extends Component{
    constructor(props){
        super(props);
        this.pointArray=['500點','1500點','3000點','5000點'];
        this.textArray=['能夠刊登一個案子','能夠刊登三個案子','能夠刊登六個案子','能夠刊登六個案子'];
        this.moneyArray=['100元','300元','500元','750元'];
    }
    handle =()=>{window.scrollTo(0,0)};
    // Information = ()=>{
    //     let pointArray=['500點','1500點','3000點','5000點'];
    //     let textArray=['能夠刊登一個案子','能夠刊登三個案子','能夠刊登六個案子','能夠刊登六個案子'];
    //     let moneyArray=['100元','300元','500元','750元'];
    //     let a = [pointArray,textArray,moneyArray];
    //     return a;
    // }

  
    render(){
        return(
            <section className='plan_section_4'>
                <div id='plan_section_4_content' className='plan_section_4_content'>
                   <h1>刊登完整方案</h1>
                   <div className='plan_buy'>
                        {this.pointArray.map((v,k)=>{
                            return(
                                <Publish_plan key={k}  point={this.pointArray[k]}
                                 text={this.textArray[k]} money={this.moneyArray[k]} />
                            );
                        })};
                   </div>
                </div>
            </section>
        );
    }
}
export default Section_4;