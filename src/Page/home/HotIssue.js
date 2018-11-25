import React, {Component} from 'react';
import './HotIssue.scss';

class HotIssue extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <div className="home_section4_container">
                    <div className="home_section4_container_left">
                    <div className="home_section4_ctn_left_img">
                        
                    </div>
                    <div className="home_section4_ctn_left_text_ctn">
                        <h4>跟著我八步驟成為網紅/王力宏報導</h4>
                        <span>中美貿易戰延燒，多家台廠出現回流現象，台灣蘋果供應鏈恐醞釀「史上最大生產線遷徙潮」。和碩、仁寶、緯創、台郡、欣興、美律、可成等七大指標廠，都有意降低中國大陸生產比重，</span>
                        <a href="">...點擊更多</a>
                    </div>
                    </div>
                    <div className="home_section4_container_right">
                        <a href="">宅男變天菜，只要三小時！</a>
                        <a href="">宅男變天菜，只要三小時！</a>
                        <a href="">宅男變天菜，只要三小時！</a>
                        <a href="">宅男變天菜，只要三小時！</a>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default HotIssue;