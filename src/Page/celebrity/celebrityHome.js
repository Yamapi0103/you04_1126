import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import CelebrityList from './celebrityList';
// import CelebrityInfo from './celebrityInfo';


class CelebrityHome extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
            <h2>選擇你喜歡的網紅<br/>可按照類型或熱門程度做查詢</h2>

            <ul className="flex">
                <li><Link to="celebrity/youtube">YouTube</Link></li>
                <li><Link to="celebrity/facebook">Facebook</Link></li>
                <li><Link to="celebrity/instgram">Instagram</Link></li>
                <li><Link to="celebrity/blog">部落客</Link></li>
                <li><Link to="celebrity/all">查看全部</Link></li>
            </ul>
            </React.Fragment>
        )
    }
}

export default CelebrityHome;

