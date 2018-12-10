import React, {Component} from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import NewCaseCard from './NewCaseCard';
import HotCaseCard from './HotCaseCard';
import Slider from './Slider';

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
                        <a href="#" className="down_btn"></a>
                    </div>
                </div>
                
                <div className="home_section1h">
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
                        <div className="hshc_left"></div>
                        <div className="hshc_right">
                            <div className="issue">
                                <Link to="#"><h4>第一次接案就上手</h4></Link>
                                <span>Lorem ipsum dolor sit amet sed diam nonumy.Lorem ipsum dolor sit amet,sed diam nonumy</span>
                            </div>
                            <div className="issue">
                                <Link to="#"><h4>接案沒有靈感怎麼辦？</h4></Link>
                                <span>Lorem ipsum dolor sit amet sed diam nonumy.Lorem ipsum dolor sit amet,sed diam nonumy</span>
                            </div>
                            <div className="issue">
                                <Link to="#"><h4>如何與廠商溝通</h4></Link>
                                <span>Lorem ipsum dolor sit amet sed diam nonumy.Lorem ipsum dolor sit amet,sed diam nonumy</span>
                            </div>
                            <div className="issue">
                                <Link to="#"><h4>網紅經驗分享</h4></Link>
                                <span>Lorem ipsum dolor sit amet sed diam nonumy.Lorem ipsum dolor sit amet,sed diam nonumy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;

