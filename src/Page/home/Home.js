import React, {Component} from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import NewCaseCard from './NewCaseCard';
import HotCaseCard from './HotCaseCard';
import Slider from './Slider';
import $ from 'jquery';
import cookie from 'react-cookies'
import CelebrityHome from '../celebrity/celebrityHome';


class Home extends Component{
    constructor(props){
        super(props)
        this.state= {   
            new_cases:[],
            hot_cases:[]
        }
    }
    islogIn = () =>{
        return cookie.load('userId')? true : false;
    }

    getCase(){
        fetch("http://localhost:3000/case_list/new/")
        .then(res => res.json())
        .then(data=>{
            // console.log(data)
            this.setState({
                new_cases:data
            })
        })
        fetch("http://localhost:3000/case_list/hot/")
        .then(res => res.json())
        .then(data=>{
            // console.log(data)
            this.setState({
                hot_cases:data
            })
        })
    }

    downBtn(evt) {
        evt.preventDefault();
        let target = $("#home_section1h").offset().top - 70;
        $("body, html").animate({   
            scrollTop: target
        }, 700);
    }

    componentDidMount() {
        this.getCase()
        if(this.islogIn()){
            console.log(cookie.load('userId')[0])
        }
    }
    render(){
        // let userType = this.islogIn()? cookie.load('userId')[0].userType:null
        return(
            <React.Fragment>
                <div className="home_section1">
                    <div className="home_section1_top">
                        <div className="home_section1_top_container">
                            {(!this.islogIn() || (cookie.load('userId')[0].userType!=='BS'))? 
                            <React.Fragment>
                            <h2>選擇你喜歡的工作種類<br />按下搜尋開始尋找適合你的工作！</h2>
                            <SearchBar />
                            </React.Fragment>
                            :
                            <CelebrityHome/>}
                        </div>
                    </div>
                    <div className="home_section1_bottom">
                        <a onClick={this.downBtn} href="#" className="down_btn"></a>
                    </div>
                </div>
                
                <div className="home_section1h" id="home_section1h">
                    <div className="home_section1h_container">
                        <h2 className="section_title">關於You04</h2>
                        <div className="about_us">
                            <div className="about_us_left">
                                {/* <div className="about_us_blank"></div>
                                <div className="about_us_blank2"></div> */}
                                <div className="about_us_content_container">
                                    <span>
                                        You04 提供當今熱門社群，包含 YouTube、Facebook、Instgram、部落格等，有意承接業配案的網紅們，一個更公開、更迅速尋求業配的平台，另一方面，各行各業的廠商，也能透過發布業配專案，在此尋求合適的網紅接案。
                                    </span>
                                </div>
                            </div>
                            <div className="about_us_right"></div>
                        </div>
                    </div>
                </div>
                
                <div className="home_section3">
                    <div className="home_section3_content">
                        <div className="home_section3_content_text">
                        </div>
                        <div className="home_section3_content_slider">
                            <Slider />
                        </div>
                    </div>
                </div>

                <div className="home_section2">
                    <h2 className="section_title">最新刊登</h2>
                    <div className="home_section2_case_container">
                        <NewCaseCard cases={this.state.new_cases}/>
                    </div>
                    <h2 className="section_title blank">熱門刊登</h2>
                    <div className="home_section2_case_container">
                        <HotCaseCard cases={this.state.hot_cases}/>
                    </div>
                </div>

                <div className="home_section4">
                    <h2 className="section_title">接案指南</h2>
                    <div className="home_section4_hotissue_container">
                        <div className="hshc_left">
                            <div className="hshc_left_img"></div>
                            <div className="hshc_left_text">
                                <h4>網紅都在直播什麼？網路直播5大要點</h4>
                                <p>網路直播的即時性非常吸引粉絲目光，其高互動性也能有效拉近與粉絲的距離，且沒有技術門檻，只要有手機和網路就能輕鬆上手，使許多自媒體和品牌在直播功能推出後都躍躍欲試……</p>
                            </div>
                        </div>
                        <div className="hshc_right">
                            <div className="issue">
                                <div className="issue_right_img issue_right_img1"></div>
                                <div className="issue_right_text">
                                    <h4>與網紅合作之前，你必須事先瞭解的注意事項</h4>
                                    <p>YouTuber 已堂堂擠進前十大，而且現在也經常看到以 Instagramer 為志的相機女孩……</p>
                                </div>
                            </div>
                            <div className="issue">
                                <div className="issue_right_img issue_right_img2"></div>
                                <div className="issue_right_text">
                                    <h4>網紅行銷的六個成功秘訣</h4>
                                    <p>若找到對的網紅，確實能有效將品牌信念傳達給更廣泛的群眾，但要如何找到合適的……</p>
                                </div>
                            </div>
                            <div className="issue">
                                <div className="issue_right_img issue_right_img3"></div>
                                <div className="issue_right_text">
                                    <h4>新創如何與 YouTuber 合作，借助他們的影響力</h4>
                                    <p>根據統計，2018台灣有 11 個 YouTube 頻道訂閱數突破百萬，其中，「這群人 TGOP」是台灣……</p>
                                </div>
                            </div>
                            <div className="issue">
                                <div className="issue_right_img issue_right_img4"></div>
                                <div className="issue_right_text">
                                    <h4>「上班不要看」、Yahoo TV、「這群人」傳授網紅行銷白皮書</h4>
                                    <p>『網紅』憑什麼紅？『網紅經濟』背後暗藏玄機！」為題，由Yahoo TV 製作人洪煒恆、「這群人」……</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;

