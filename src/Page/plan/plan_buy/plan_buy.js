import React,{ Component } from 'react';
import './plan_buy.scss';
import cookie from 'react-cookies';
import $ from 'jquery';
import swal from 'sweetalert';

class Plan_buy extends Component{
    constructor(props){
        super(props);
        this.point = props.match.params.point;
        this.text = props.match.params.text;
        this.money = props.match.params.money;
        this.state={
            email:cookie.load('userId')[0].BS_email,
            re_name:'',  //發票真實姓名
            re_email:'', //發票聯絡電子郵件
            method:'',
            receipt:'',
            now:'',
            amount: this.money,
            point: this.point,
        }
        // 狀況一：一開始不設定email這裡設定，傳送資料時會crush
        // if(this.islogIn()) {
        //     this.state={
        //         email:cookie.load('userId')[0].BS_email,    //使用者之email帳號
        //     }
        // }
        // 狀抗二：一開始設定email空白值，在這裡用setState，會出錯，不能在constructor用setState
        // 狀況三：設定
        this.flag_re_name = null;
        this.flag_re_email = null;
        this.flag_method = null;
    }
    //-------------------------------------驗證登入區--------------------------------------
    islogIn = () =>{
        return cookie.load('userId')? true : false;
    }

    componentDidMount =()=>{
        // 如果尚未登入跳出警告視窗，並自動跳轉頁面
        // if(!this.islogIn()) {
        //     setTimeout(
        //         ()=> {
        //             swal.close();
        //             this.props.history.push("/login")
        //         }
        //         , 3000);
        //     swal("哦哦~您還未登入唷!", "我們將在幾秒後為您跳轉至登入頁面", "info");
        // } 
        // else {
        //     this.setState=({
        //         email:cookie.load('userId')[0].BS_email    //使用者之email帳號
        //     })
        // }
        // console.log(this.state)
        $("body, html").animate({   //要讓他可以上去一定要設置body, html window會有問題
            scrollTop: 0
        }, 0);
    }
    
    //this.props.history.push("/login") setTimeout放這段會失敗
    //{window.location.replace("http://localhost:3000/login")}


    //--------------------------------------state隨輸入改變 & 檢查資料區--------------------------------------
    change=(evt)=>{
        const inputName = evt.target.name;
        const inputValue = evt.target.value;
        this.setState({
            [inputName]:inputValue
        })
    }
    
    blur=(evt)=>{
        //檢查發票真實姓名是否輸入
        if(evt.target == document.querySelector('#enter_name')){
            if(this.state.re_name == ''){
                //沒有輸入姓名
                this.flag_re_name = false;
                document.querySelector('#pb_blank_text1').style.display='none';
                document.querySelector('#pb_enter_name_text').style.display='block';
            }else{
                //有輸入姓名
                this.flag_re_name = true;
                document.querySelector('#pb_blank_text1').style.display='block';
                document.querySelector('#pb_enter_name_text').style.display='none';
            }
        }

        //檢查email是否輸入及格式是否正確
        if(evt.target == document.querySelector('#enter_email')){
            if(this.state.re_email == ''){
                //沒有輸入email
                    this.flag_re_email = false;
                  document.querySelector('#pb_blank_text2').style.display='none';
                  document.querySelector('#pb_enter_email_text').style.display='block';
            }else{
                //有輸入email，開始檢查格式
                document.querySelector('#pb_enter_email_text').style.display='none';
                let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
                if(emailRule.test(evt.target.value) == false){
                    //格式錯誤
                    document.querySelector('#pb_email_format_text').style.display='block';
                    document.querySelector('#pb_blank_text2').style.display='none';
                }
                else{
                    //檢查完都沒問題
                    this.flag_re_email = true;
                    document.querySelector('#pb_email_format_text').style.display='none';
                    document.querySelector('#pb_blank_text2').style.display='block';
                }
            }
        }
    }
    //--------------------------------------結帳功能區--------------------------------------
    checkout = (evt) => {
        evt.preventDefault();
        if(document.querySelector('#method1').checked || document.querySelector('#method2').checked || document.querySelector('#method3').checked){
            //有選擇
            this.flag_method = true;
            document.querySelector('#pb_blank_text3').style.display='block';
            document.querySelector('#pb_method_text').style.display='none';
        }else{
            //無勾選
            this.flag_method = false;
            document.querySelector('#pb_blank_text3').style.display='none';
            document.querySelector('#pb_method_text').style.display='block';
        }
        //當確認都沒問題後才可以上傳
        if(this.flag_re_name == true && this.flag_re_email == true && this.flag_method == true){
            //取得現在時間，並將格式轉成YYYY-MM-DD HH:MM:SS
            const onTime = () => {
                const date = new Date();
                const mm = date.getMonth() + 1;
                const dd = date.getDate();
                const hh = date.getHours();
                const mi = date.getMinutes();
                const ss = date.getSeconds();

                return [date.getFullYear(), "-" +
                    (mm > 9 ? '' : '0') + mm, "-" +
                    (dd > 9 ? '' : '0') + dd, " " +
                    (hh > 9 ? '' : '0') + hh, ":" +
                    (mi > 9 ? '' : '0') + mi, ":" +
                    (ss > 9 ? '' : '0') + ss
                ].join('');
            }
            this.state.now = onTime();
            fetch('//localhost:3000/plan_buy',{
                method:'POST',
                body:JSON.stringify(this.state),
                headers:new Headers({   
                    'content-Type': 'application/json'  
                })
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.stay==false){
                    setTimeout(
                        ()=> {
                            swal.close();
                            this.props.history.push("/home");
                        }
                        , 3000);
                    swal("結帳成功", "感謝您的購買，將為您將畫面轉至首頁", "success");

                    cookie.save('userId',[{
                        ...cookie.load('userId')[0],
                        BS_point: parseInt(cookie.load('userId')[0].BS_point)+parseInt(this.point)
                    }])

                    //申請成功就跳回首頁
                    this.props.history.push("/home");
                }
            })
        }
        else{
            swal("結帳未成功", "您有欄位尚未填完，請填完再嘗試", "error");
        }
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
                                <h2 className='final_check_money'>NT${this.money}</h2>
                            </div>
                        </div>
                    </section>
                    <section className='white_section'></section>
                    <section className='ATM'>
                        <form action="" className='form'>
                            {/* <div className='form_content'>
                                <h3 className='title'>使用優惠</h3>
                                <div className='line'></div>
                                <p className='p_input_radio'><input type="radio" name="coupon" value="no"/>無</p>
                                <p className='p_input_radio'><input type="radio" name="coupon" value="coupon"/>輸入折扣代碼 (Coupon)</p>
                                <input type='text' placeholder='輸入 Coupon代碼'/><input type="submit" value="確定"/>
                            </div> */}

                            <div className='form_content'>
                                <h3 className='title'>付款方式</h3>
                                <div className='line'></div>
                                <p className='p_input_radio'>
                                    <input type="radio" id="method1" name="method" onChange={this.change} value="Credit"/>信用卡 （VISA、MasterCard、JCB 卡及銀聯卡)
                                </p>
                                <p className='p_input_radio'>
                                    <input type="radio" id="method2" name="method" onChange={this.change} value="ATM"/>ATM 轉帳
                                </p>
                                <p className='p_input_radio'>
                                    <input type="radio" id="method3" name="method" onChange={this.change} value="CVS"/>超商付款（手續費 NT$ 30)
                                </p>
                                <small id="pb_blank_text3" style={{color:'transparent',display:'block'}}>&nbsp;</small>
                                <small id="pb_method_text" style={{color:'red',display:'none'}}>請選擇您的付款方式，此為必選欄位</small>
                            </div>

                            <div className='form_content'>
                                <h3 className='title'>發票選項</h3>
                                <div className='line'></div>
                                <p style={{marginBottom:"20px",fontSize: "1.5rem"}}>以下資訊只用於開立發票，並不會在其他頁面顯示。發票一經開立後不可更改，請確認資訊是否都填寫正確喔！ （ * 為必填欄位）</p>
                                <div className='nameEmail'>
                                    <div>
                                        <label htmlFor='enter_name'>姓名 *</label>
                                        <input type='text' placeholder='請填入真實姓名' maxLength="10" name="re_name" id='enter_name' className='enter' onChange={this.change} onBlur={this.blur} />
                                        <small id="pb_blank_text1" style={{color:'transparent',display:'block'}}>&nbsp;</small>
                                        <small id="pb_enter_name_text" style={{color:'red',display:'none'}}>請填寫姓名，此為必要欄位</small>
                                    </div>
                                    <div>
                                        <label htmlFor='enter_email'>聯絡用電子信箱 *</label>
                                        <input type='text' placeholder='請填入電子信箱' maxLength="30" name="re_email" id='enter_email' className='enter' onChange={this.change} onBlur={this.blur} />
                                        <small id="pb_blank_text2" style={{color:'transparent',display:'block'}}>&nbsp;</small>
                                        <small id="pb_email_format_text" style={{color:'red',display:'none'}}>電子信箱格式錯誤</small>
                                        <small id="pb_enter_email_text" style={{color:'red',display:'none'}}>請填寫聯絡用電子信箱，此為必要欄位</small>
                                    </div>
                                </div>
                                <ul className='ul'>
                                    <li><p>電子發票</p>
                                        <ul>
                                            <li><p className='p_input_radio'><input type="radio" name="receipt" onChange={this.change} value="by_you04"/>將發票儲存在You04，中獎後自動寄信通知您</p></li>
                                            <li>
                                                <p className='p_input_radio'><input type="radio" name="receipt" onChange={this.change} value="Natural_barcode"/>自然人憑證條碼
                                                <input type='text' maxLength="16" placeholder='長度16個字元，由2碼大寫字母加上14碼數字組成'/></p>
                                            </li>
                                            <li><p className='p_input_radio'><input type="radio" name="receipt" onChange={this.change} value="phone_barcode"/>手機條碼</p></li>
                                        </ul>
                                    </li>
                                    <li><p className='p_input_radio'><input type="radio" name="receipt" onChange={this.change} value="donation_receipt"/>捐贈發票</p></li>
                                    <li><p className='p_input_radio'><input type="radio" name="receipt" onChange={this.change} value="edit_receipt"/>統編發票</p></li>
                                </ul>
                            </div>
                            <div className='form_bottom'>
                                <p>結帳金額 &nbsp;&nbsp;<span>NT${this.money}</span></p>
                                <button onClick={this.checkout}>購買方案</button>
                            </div>
                        </form>
                    </section>
                </section>
            </section>
            
        );
    }
}
export default Plan_buy;