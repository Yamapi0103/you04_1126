import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './celebrityHome.scss';
// import CelebrityList from './celebrityList';
// import CelebrityInfo from './celebrityInfo';


class CelebrityHome extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <h2>選擇你喜歡的網紅<br/>可按照類型做查詢</h2>

                <ul className="flex">
                    <Link to="/celebrity/youtube" data-type="youtube" onClick={this.changeMedia} className="celebtn ">YouTube</Link>
                    <p className="celebtnline">|</p>
                    <Link to="/celebrity/facebook" data-type="facebook" onClick={this.changeMedia} className="celebtn ">Facebook</Link>
                    <p className="celebtnline">|</p>
                    <Link to="/celebrity/instgram" data-type="instgram" onClick={this.changeMedia} className="celebtn ">Instagram</Link>
                    <p className="celebtnline">|</p>
                    <Link to="/celebrity/blog" data-type="blog" onClick={this.changeMedia} className="celebtn ">Blog</Link>
                    <p className="celebtnline">|</p>
                    <Link to="/celebrity/all" data-type="all" onClick={this.changeMedia} className="celebtn ">所有</Link>
                </ul>
            </React.Fragment>
        )
    }
}

export default CelebrityHome;

