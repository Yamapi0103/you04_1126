import React,{ Component } from 'react';


class Section_2 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section className='plan_section_2'>
                <h1>刊登流程</h1>
                <div id='plan_section_2_content' className='plan_section_2_content'>
                    <div className='plan_box'>
                        <div className='plan_box_circle'>
                            <i class="fas fa-address-book"></i>
                        </div>
                        <div className='plan_box_text'>
                            <p>加入會員並購買適合您的方案</p>
                        </div>
                    </div>
                    <div className='plan_box'>
                        <div className='plan_box_circle'>
                            <i class="fas fa-pen-fancy"></i>
                        </div>
                        <div className='plan_box_text'>
                            <p>刊登您的業配案</p>
                        </div>
                    </div>
                    <div className='plan_box'>
                        <div className='plan_box_circle'>
                            <i class="fas fa-headphones-alt"></i>
                        </div>
                        <div className='plan_box_text'>
                            <p>等待網紅與您聯繫並詳談</p>
                        </div>
                    </div>
                    <div className='plan_box'>
                        <div className='plan_box_circle'>
                            <i class="fas fa-hand-holding-usd"></i>
                        </div>
                        <div className='plan_box_text'>
                            <p>享受曝光帶來的效益</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Section_2;