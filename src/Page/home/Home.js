import React, {Component} from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import CaseCard from './CaseCard';
import Slider from './Slider';
import HotIssue from './HotIssue';



class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <div className="home_section1">
                    <div className="home_section1_top">
                        <div className="home_section1_top_container">
                            <h2>選擇你喜歡的工作種類<br />按下搜尋開始尋找適合你的工作！
                            </h2>
                            <SearchBar />
                        </div>
                    </div>
                    <div className="home_section1_bottom">
                        <a href="#" className="down_btn"></a>
                    </div>
                </div>
                <div className="home_section2">
                    <h2>熱門刊登</h2>
                    <div className="home_section2_case_container">
                        <CaseCard />
                        <CaseCard />
                        <CaseCard />
                        <CaseCard />
                    </div>
                </div>
                <div className="home_section3">
                    <Slider />
                </div>
                <div className="home_section4">
                    <h2>熱門推薦</h2>
                    <HotIssue />
                </div>
                <button><Link to="/BSMember">member</Link></button>

            </React.Fragment>
        )
    }
}

export default Home;

