import React,{ Component } from 'react';
import {Link} from 'react-router-dom';


class Publish_plan extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className='plan_buy_box'>
                <p className='number'>{this.props.point}</p>
                <p className='text'>{this.props.text}</p>
                <p className='number'>{this.props.money}</p>
                <Link className='plan_buy_btn' to={`/plan_buy/${this.props.point}/${this.props.text}/${this.props.money}`} onClick={this.handle}><i className="fas fa-cart-plus"/>&nbsp;開始刊登</Link>
            </div>
        )                       
    }
}
export default Publish_plan;