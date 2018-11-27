import React, { Component } from 'react';
import './BSMyFavor.scss';

class BSMyFavor extends Component {
    constructor(props) {
        super([props]);
    }

    render() {
        return (
            <React.Fragment>
                <div class="member_form_box">
                    <div class="member_form_content">

                        <form class="form-basic" method="post" action="#">

                            <div className="form-title-row">
                                <h1>我的收藏</h1>
                            </div>

                            <div className="form-row">
                                <label>
                                    <span>Full name</span>
                                    <input type="text" name="name" />
                                </label>
                            </div>

                            <div className="form-row">
                                <label>
                                    <span>Email</span>
                                    <input type="email" name="email" />
                                </label>
                            </div>

                            <div className="form-row">
                                <label>
                                    <span>Dropdown</span>
                                    <select name="dropdown">
                                        <option>Option One</option>
                                        <option>Option Two</option>
                                        <option>Option Three</option>
                                        <option>Option Four</option>
                                    </select>
                                </label>
                            </div>

                            <div className="form-row">
                                <label>
                                    <span>Textarea</span>
                                    <textarea name="textarea"></textarea>
                                </label>
                            </div>

                            <div className="form-row">
                                <label>
                                    <span>Checkbox</span>
                                    <input type="checkbox" name="checkbox" checked />
                                </label>
                            </div>

                            <div className="form-row">
                                <label><span>Radio</span></label>
                                <div className="form-radio-buttons">

                                    <div>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span>Radio option 1</span>
                                        </label>
                                    </div>

                                    <div>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span>Radio option 2</span>
                                        </label>
                                    </div>

                                    <div>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span>Radio option 3</span>
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div className="form-row">
                                <button type="submit">Submit Form</button>
                            </div>

                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BSMyFavor;

// import React, { Component } from 'react';
// import './BSMyFavor.scss';
// import cookie from 'react-cookies';
// import $ from 'jquery';

// class BSMyFavor extends Component {
//     constructor(props) {
//         super([props]);
//         this.state = {
//             bsFavorArray: [],
//             icFavorArray: [],

//         };
//         this.sid = cookie.load('userId')[0]['BS_sid'];  //廠商id
//         this.favor = null
//     }

//     //顯示網紅列表
//     showFavor = () => {
//         fetch('http://localhost:3000/case/bs_favor/' + this.sid)
//             .then(res => res.json())
//             .then(data => {
//                 this.setState({
//                     bsFavorArray: data
//                 })//回傳此廠商 收藏的網紅 [{},{}....]
//             })
//     }
//     check = (evt) => {
//         let bs_sid = evt.target.dataset.bs_sid;  //藉由button的data-bs_sid屬性紀錄每項案子的sid
//         this.favor = "icFavorArray" + bs_sid;
//         fetch('http://localhost:3000/case/ic_member/' + IC_sid)
//             .then(res => res.json())
//             .then(data => {   //回傳 應徵此專案的所有網紅資料

//                 this.setState({
//                     favor: data
//                 })
//             })


//         $(evt.target).parent().next().toggleClass('show');
//     }


//     componentDidMount = () => {
//         this.showFavor();
//         console.log('finsih');
//     };

//     render() {

//         return (
//             <React.Fragment>
//                 <div class="member_form_box">
//                     <div class="member_form_content">
//                         <div >
//                             {/* {console.log(this.state.bsFavorArray)}  第一次會是空陣列,當網頁完成後執行showFavor() => 執行setState(),賦值給this.state.bsFavorArray,同時讓網頁更新 */}

//                             {
//                                 this.state.bsFavorArray.map((v) => {
//                                     // console.log(v)
//                                     return (
//                                         <React.Fragment>
//                                             <div className="card radius-border card_shadow">
//                                                 <header className="banner">
//                                                     <img src={"/images/" + this.celebrity['fileName'] + ".jpg"} alt="e0 " />
//                                                     <div className="middle">
//                                                         <Link to={`/celebrityInfo/${this.celebrity.name}`}>
//                                                             <div className="text">查看詳細資料</div>
//                                                         </Link>
//                                                     </div>
//                                                 </header>
//                                                 <div className="card_body">
//                                                     <div className="celebrity_name_box">
//                                                         <h2 className="text_cut" >
//                                                             姓名:{this.celebrity.name}
//                                                         </h2>
//                                                     </div>
//                                                     <div className="text_align">
//                                                         <p><span>年紀: </span>{this.celebrity['age']}</p>
//                                                         <p><span>類型: </span>{this.celebrity['type']}</p>
//                                                         <p><span>粉絲數: </span>{this.celebrity['fans']}</p>

//                                                         {/* <button className="" onClick={this.Favorite}>{this.state.save}</button> */}
//                                                     </div>
//                                                     {this.state.saved ? <h5 id="saved">已收藏</h5> : null}
//                                                     <a onClick={this.Favorite}><img id={this.celebrity['fileName']} className="heart" src={imgSrc} /></a>
//                                                 </div>
//                                             </div>
//                                         </React.Fragment>
//                                     )
//                                 })

//                             }

//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }

// export default BSMyFavor;