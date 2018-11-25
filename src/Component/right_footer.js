import React,{ Component } from 'react';
import {Link} from 'react-router-dom'
// import {BrowserRouter, Route , Link} from 'react-router-dom'; 

class Right_footer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='right_footer'>
                <ul>
                    <li className='footer_title'>Y04服務總覽</li>
                    <li><Link to=''>刊登專案</Link></li>
                    <li><Link to=''>會員中心</Link></li>
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
                    <li><Link to=''>意見回饋</Link></li>
                    <li><Link to=''>郵件聯繫</Link></li>
                    <li><Link to=''>台北專線: 02-2345-6789</Link></li>
                    <li><Link to=''>高雄專線: 02-2345-6789</Link></li>
                </ul>
            </div> 
        );
    }
}
export default Right_footer;