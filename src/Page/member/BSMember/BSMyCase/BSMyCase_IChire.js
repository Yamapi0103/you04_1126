import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import cookie from 'react-cookies';

class BSMyCase_IChire extends Component {
    constructor(props) {
        super(props);
        this.state={
            icHireArray:[],
        }; 
        // console.log(this.props.BScase_sid)
        this.BScase_sid = this.props.BScase_sid;  //案子的sid
        this.close = this.props.close;  //如果是從結案的列表來的
        
    }
    showIChire = ()=>{
        fetch('http://localhost:3000/case/showHire/'+this.BScase_sid)
        .then(res=>res.json())
        .then(data=>{   //回傳 應徵此案子的所有網紅資料 [{網紅1},{網紅2}...]
            
            this.setState({
                icHireArray:data
            })
        }) 
    }
    scrollTOP=()=>{
        window.scrollTo(0,0);
    }
   
    componentDidMount=()=>{
       this.showIChire();
      
    };

    render() {
      
        return (
            this.state.icHireArray.map((k)=>{
                return(
                    <div key={k.IC_sid} className='imco_card_IC_container'>
                        <div className='imco_card_IC_content'>
                            <Link to={`/celebrityInfo/${k.IC_sid}`} className='imco_card_IC_img'>
                                <img src={(k.IC_photo=="")?'/images/user-solid.svg':"http://localhost:3000/info/"+k.IC_photo}></img>
                            </Link>
                            <p className="introduction">
                                名字: {k.IC_name}
                                <br/>
                                性別: {k.IC_gender}
                                <br/>
                                擅長推廣媒體: {k.IC_media}
                                <br/>
                                經手業配數: {k.IC_case}
                            </p>
                        </div>
                        <div className='btn_div'>
                            {
                                (this.close == 'close')?
                                ''
                                :
                                <Link className="openChat_btn" to={`/BSMember/BSMyChat/${k.sid}`} onClick={this.scrollTOP}>開啟對話</Link>
                            }
                          </div>
                    </div>
                )
            })
        )   
    }
}

export default BSMyCase_IChire;
