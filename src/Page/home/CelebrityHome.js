import React, {Component} from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import CaseCard from './CaseCard';
import Slider from './Slider';

import cookie from 'react-cookies'
import CelebrityList from '../celebrity/celebrityList';
import CelebrityInfo from '../celebrity/celebrityInfo';


class CelebrityHome extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let userType = this.islogIn()? cookie.load('userId')[0].userType:null
        return(
            <React.Fragment>
            <ul>
                <li><Link to="celebrity/all">YouTube</Link></li>
                <li><Link to="celebrity/all">Facebook</Link></li>
                <li><Link to="celebrity/all">全部</Link></li>
                <li><Link to="celebrity/all">全部</Link></li>
            </ul>
            <Link to="celebrity/all">全部</Link>
            </React.Fragment>
        )
    }
}

export default CelebrityHome;

