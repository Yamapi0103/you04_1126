import React,{ Component } from 'react';
import './plan_buy.scss';

class Plan_buy extends Component{
    constructor(props){
        super(props);
        this.point = props.match.params.point;
        this.text = props.match.params.text;
        this.money = props.match.params.money;
    }
    
    render(){
        return(
            <section className='plan_buy'>
                <section className='plan_buy_content'>
                    <section className='choose'>
                        <h3 className='title'>您選擇的方案</h3>
                        <div className='line'></div>
                        <div className='choose_plan'>
                            
                            <div className='plan_buy_box'>
                                <p className='number'>{this.point}</p>
                                <p className='text'>{this.text}</p>
                                <p className='number'>{this.money}</p>
                            </div>

                            <div className='final_check'>
                                <div className='final_check_title_div'>
                                    <p>方案說明</p>
                                    <a href='' className='final_check_change'><i className="fas fa-circle"/>更換方案</a>
                                </div>
                                <p className='final_check_content'>
                                《漫威蜘蛛人》是《拉捷特與克拉克》團隊 Insomniac Games 擔綱開發的開放世界動作冒險遊戲，改編自漫威經典超級英雄漫畫《蜘蛛人》。採用開放世界舞台來呈現原作廣大的紐約曼哈頓舞台，融合高速動作與電影式演出玩法。讓玩家扮演經典超級英雄「蜘蛛人」與面罩背後的平凡人彼得‧帕克，施展飛簷走壁的蜘蛛異能縱橫現代叢林的紐約曼哈頓，打擊惡勢力維護市民安全。
            
            　　                 遊戲將陸續釋出以「不夜城（The City That Never Sleeps）」為題的 3 個 DLC 章節，進一步描寫本篇未提及的角色與情節。繼先前以女竊賊「黑貓（Black Cat）」為主題的第 1 個 DLC 章節「竊盜（The Heist）」之後，本次預定釋出的第 2 個 DLC 章節「地盤戰爭（Turf Wars）」將以前一章節揭露的反派「錘頭（Hammerhead）」為主題，描寫他率領幫派與蜘蛛人對抗的故事。
                                </p>
                                <h2 className='final_check_money'>NT$750</h2>
                            </div>
                        </div>
                    </section>
                    <section className='white_section'></section>
                    <section className='ATM'>
                        <form action="" className='form'>
                            <div className='form_content'>
                                <h3 className='title'>使用優惠</h3>
                                <div className='line'></div>
                                <p className='p_input_radio'><input type="radio" name="coupon" value="no"/>無</p>
                                <p className='p_input_radio'><input type="radio" name="coupon" value="coupon"/>輸入折扣代碼 (Coupon)</p>
                                <input type='text' placeholder='輸入 Coupon代碼'/><input type="submit" value="確定"/>
                            </div>

                            <div className='form_content'>
                                <h3 className='title'>付款方式</h3>
                                <div className='line'></div>
                                <p className='p_input_radio'><input type="radio" name="card" value="no"/>信用卡 （VISA、MasterCard、JCB 卡及銀聯卡)</p>
                                <p className='p_input_radio'><input type="radio" name="card" value="coupon"/>ATM 轉帳</p>
                                <p className='p_input_radio'><input type="radio" name="card" value="coupon"/>超商付款（手續費 NT$ 30)</p>
                            </div>

                            <div className='form_content'>
                                <h3 className='title'>發票選項</h3>
                                <div className='line'></div>
                                <p style={{marginBottom:"20px",fontSize: "1.5rem"}}>以下資訊只用於開立發票，並不會在其他頁面顯示。發票一經開立後不可更改，請確認資訊是否都填寫正確喔！ （ * 為必填欄位）</p>
                                <div className='nameEmail'>
                                    <div>
                                        <label htmlFor='enter_name'>姓名 *</label>
                                        <input type='text' placeholder='請填入真實姓名' maxLength="10" id='enter_name' className='enter'/>
                                    </div>
                                    <div>
                                        <label htmlFor='enter_email'>聯絡用電子信箱 *</label>
                                        <input type='text' placeholder='請填入電子信箱' maxLength="20" id='enter_email' className='enter'/>
                                    </div>
                                </div>
                                <ul className='ul'>
                                    <li><p>電子發票</p>
                                        <ul>
                                            <li><p className='p_input_radio'><input type="radio" name="invoice" value="by_you04"/>將發票儲存在You04，中獎後自動寄信通知您</p></li>
                                            <li>
                                                <p className='p_input_radio'><input type="radio" name="invoice" value="Natural_barcode"/>自然人憑證條碼
                                                <input type='text' maxLength="16" placeholder='長度16個字元，由2碼大寫字母加上14碼數字組成'/></p>
                                            </li>
                                            <li><p className='p_input_radio'><input type="radio" name="invoice" value="phone_barcode"/>手機條碼</p></li>
                                        </ul>
                                    </li>
                                    <li><p className='p_input_radio'><input type="radio" name="invoice" value="donation_invoice"/>捐贈發票</p></li>
                                    <li><p className='p_input_radio'><input type="radio" name="invoice" value="edit_invoice"/>統編發票</p></li>
                                </ul>
                            </div>
                            <div className='form_bottom'>
                                <p>結帳金額 &nbsp;&nbsp;<span>NT$ 750</span></p>
                                <button>購買方案</button>
                            </div>
                        </form>
                    </section>
                </section>
            </section>
            
        );
    }
}
export default Plan_buy;