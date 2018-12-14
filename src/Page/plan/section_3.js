import React,{ Component } from 'react';


class Section_3 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section className='plan_section_3'>
                <div id='plan_section_3_content' className='plan_section_3_content'>
                    <h1>方案說明</h1>
                    {/* <p className='plan_section_3_content_p'>刊登案子上架維持時間等</p> */}
                    <div className='plan_description'>
                        <p className='plan_description_text'>
                        You04 提供了您 4 種方案，依據您的專案數量需求，選擇最適合您的點數組合，愈高金額的方案，相對擁有更優惠的扣款機制，點擊右上方的更換方案可以迅速更換選擇的方案！
                        <br />
                        <br />
                        左側的方案卡顯示您所購買的方案的詳細資訊，每次刊登需要花費500點，方案卡上方代表您單次刊登所需要花費之費用，下方則顯示您選擇的方案包含的點數以及能夠刊登的額度，點數一經購買無法退還，若對刊登方案或點數有疑問，歡迎隨時聯繫You04的客服，我們會有專人為您服務。
                        </p>
                        <div className='plan_description_img'>
                            <img src='./images/pexels-photo-1547468.jpeg'/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Section_3;