import React,{ Component } from 'react';
import {Link} from 'react-router-dom';


class Publish_plan extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className='plan_buy_box'>
                <div className="pbb_plan_ctn">
                    <h3>{this.props.plan}</h3>
                    <span>$<strong>{this.props.perprice}</strong> /則</span>
                </div>
                <div className="pbb_content_ctn">
                    <p className='description'>選擇{this.props.plan}將會使您得到{this.props.point}，並且{this.props.text}，每次刊登案子的價格為{this.props.perprice}元一則</p>
                    <div className="info">
                        <p className='number'>{this.props.point}</p>
                        <p className='number'>{this.props.money}<span>的價格</span></p>
                        <p className='number'>{this.props.pnum}則<span>刊登額度</span></p>
                    </div>
                </div>
                
                
                <Link className='plan_buy_btn' to={`/plan_buy/${this.props.point}/${this.props.text}/${this.props.money}/${this.props.plan}/${this.props.perprice}/${this.props.pnum}`} onClick={this.handle}><i className="fas fa-cart-plus"/>&nbsp;購買方案</Link>
            </div>
        )                       
    }
}
export default Publish_plan;