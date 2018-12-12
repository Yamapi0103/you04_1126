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
                        你是否曾經花大錢買廣告，辛苦經營網路社群，收益卻無法達到預期？
                        <br />
                        現在起交給平台專業的網紅們，你的產品能在短時間內擁有知名度，網紅是一群在社群媒體上具有高度聲量的人，除此之外，網紅們更是擁有一群死忠的粉絲擁戴，相較於一般民眾，更能夠輕易地說服閱聽眾！
                        <br />
                        You04 提供了您 4 種方案，依據您的專案數量需求，選擇最適合您的點數組合，愈高金額的方案，相對擁有更優惠的扣款機制，趕緊選擇你的通行證，藉由網紅們的力量，創造高人氣！
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