import React,{ Component } from 'react';


class Section_1 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section className='plan_section_1'>
                <div id='plan_section_1_content' className='plan_section_1_content'>
                    <h1>為商品尋找最方便業配合作的最佳平台, You04</h1>
                    <h2>擺脫惱人的意願詢問與繁瑣接洽</h2>
                    <div className='plan_section_1_content_bottom'>
                        <p>你是否曾經花大錢買廣告，辛苦經營網路社群，收益卻無法達到預期？</p>
                        <p>現在起交給平台專業的網紅們，利用在社群媒體上的高度聲量，讓你的產品在短時間內擁有知名度！</p>
                        <p>You04 提供了您 4 種方案，依據您的專案數量需求，選擇最適合您的點數組合，愈高金額的方案，相對擁有更優惠的扣款機制，趕緊選擇你的通行證，藉由網紅們的力量，創造高人氣！</p>
                    </div>
                </div>
            </section>
        );
    }
}
export default Section_1;