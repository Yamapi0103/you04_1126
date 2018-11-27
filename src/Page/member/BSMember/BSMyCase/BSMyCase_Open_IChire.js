import React, { Component } from 'react';

class BSMyCase_Open_IChire extends Component {
    constructor(props) {
        super(props);
        this.state={
            icHireArray:[],
        }; 
        // console.log(this.props.BScase_sid)
        this.BScase_sid = this.props.BScase_sid;  //案子的sid
        this.Count = this.props.Count;  //從BSMyCase_Open.js來的,計算有幾個網紅應徵
    }
    showIChire = ()=>{
        fetch('http://localhost:3000/case/showHire/'+this.BScase_sid)
        .then(res=>res.json())
        .then(data=>{   //回傳 應徵此案子的所有網紅資料 [{網紅1},{網紅2}...]
            console.log(data.length);
            this.Count(data.length);
            this.setState({
                icHireArray:data
            })
        }) 
    }
    componentDidMount=()=>{
       this.showIChire();
       console.log('finsih2')
    };

    render() {
        return (
            this.state.icHireArray.map((k)=>{
                return(
                    <div key={k.IC_sid} className='imco_card_IC_container'>
                        <div className='imco_card_IC_content'>
                            <div className='imco_card_IC_img'>
                                <img src='/images/1.jpg'></img>
                            </div>
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
                            <button className="btn" >開啟對話</button>
                        </div>
                    </div>
                )
            })
        )   
    }
}

export default BSMyCase_Open_IChire;
