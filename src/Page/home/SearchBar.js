import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SearchBar.scss';

class SearchBar extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <div className="searchbar">
                    <div className="searchbar_btn searchbar_btn1">
                        <ul className="searchbar_btn_dropdown_toggle">
                            <div>選擇欲找工作類型</div>
                            <li><Link to="">aaaa</Link></li>
                            <li><Link to="">bbbb</Link></li>
                            <li><Link to="">cccc</Link></li>
                            <li><Link to="">dddd</Link></li>
                        </ul>
                    </div>
                    <div className="searchbar_btn searchbar_btn2">
                        <ul className="searchbar_btn_dropdown_toggle">
                            <div>選擇欲找工作類型</div>
                            <li><Link to="">aaaa</Link></li>
                            <li><Link to="">bbbb</Link></li>
                            <li><Link to="">cccc</Link></li>
                            <li><Link to="">dddd</Link></li>
                        </ul>
                    </div>
                    <input className=" searchbar_btn searchbar_btn3" placeholder="關鍵字搜尋：產品名稱等" />
                </div>
                <Link to="/list" className="startsearch_btn">
                <i className="fas fa-search"></i><span>開始搜尋</span>
                </Link>
            </React.Fragment>
        )
    }
}


export default SearchBar;