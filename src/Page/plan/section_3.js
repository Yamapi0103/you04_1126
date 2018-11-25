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
                    <p className='plan_section_3_content_p'>刊登案子上架維持時間等</p>
                    <div className='plan_description'>
                        <p className='plan_description_text'>
                            隨著網路購物愈來愈便利，詐騙的案例也愈來愈多，尤其現今的詐騙，很多都會利用官方(指該產品的公司或代理商)的宣傳文案、影片及照片，再以很低的價格來吸引消費者下單。

                            而當消費者以為貨到付款是很安全的模式而下單購物，當收到商品時才發現商品要嘛不是有瑕疵，就是山寨版，或是以同類型但低階的產品來混充，甚至以其它產品來冒充。

                            當消費者反應給客服時，再以寄錯貨來拖延安撫消費者，以達到拖延時間拿到款項的目的。

                            若網購不甚被騙，不要太緊張，趕緊先和宅配公司聯絡，表明收到的貨品與訂單內容不符，宅配公司會協助處理止付、退款。

                            即使真的是客服寄錯，也一樣採取退貨，事後再重新下訂，千萬不要相信網路客服所謂的，重新寄送，而拖延到追回款項的時效。
                        </p>
                        <div className='plan_description_img'>
                            <img src='./images/plan.jpg'/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Section_3;