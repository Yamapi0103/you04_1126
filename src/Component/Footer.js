import React, { Component } from 'react';
// import Left_footer from './left_footer';
// import Right_footer from './right_footer';
import './footer.scss';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

class Footer extends Component {
    constructor(props) {
        super(props)
    }
    islogIn = () =>{
        return cookie.load('userId')? true : false;
    }

    scrollTOP=()=>{
        window.scrollTo(0,0);
    }

    render() {
        let userType = this.islogIn()? cookie.load('userId')[0].userType:null
        return (
            <section className='footer'>
                <div className='footer_content'>
                    <div className="footer_content_top">
                        {/* <div className='footer_content_top_left'>
                            <img src='/images/logo.svg' />
                        </div> */}
                        <div className='footer_content_top_right'>
                            <ul>
                                <li className='footer_title'>Y04服務總覽</li>
                                <li><Link to='publish'>刊登專案</Link></li>
                                <li><Link to={this.islogIn()?"/"+userType+"Member":""} >會員中心</Link></li>
                                <li><Link to=''>線上徵才</Link></li>
                            </ul>
                            <ul>
                                <li className='footer_title'>關於我們</li>
                                <li><Link to=''>粉絲專頁</Link></li>
                                <li><Link to=''>提供服務</Link></li>
                                <li><Link to=''>合作提案</Link></li>
                                <li><Link to=''>加入我們</Link></li>
                            </ul>
                            <ul>
                                <li className='footer_title'>聯繫Y04</li>
                                <li><Link onClick={this.scrollTOP} to='/contact_us'>聯絡我們</Link></li>
                                <li><Link to=''>郵件聯繫</Link></li>
                                {/* <li><Link to=''>台北專線: 02-2345-6789</Link></li>
                                <li><Link to=''>高雄專線: 02-2345-6789</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className='footer_bottom_logo_container'>
                        <img src='/images/logo.svg' />
                    </div>
                    <div className="footer_bottom_icon_container">
                        <Link to="" className='link_img'>
                            <i className="fab fa-facebook-square fa-xs"></i>
                            <span>facebook</span>
                        </Link>
                        <Link to="" className='link_img'>
                            <i className="fab fa-instagram fa-xs"></i>
                            <span>instagram</span>
                        </Link>
                        <Link to="" className='link_img'>
                            <i className="fab fa-twitter-square fa-xs"></i>
                            <span>twitter</span>
                        </Link>
                    </div>
                </div>
            </section>

        );
    }
}
export default Footer;