import React,{ Component } from 'react';
import Left_footer from './left_footer';
import Right_footer from './right_footer';
import './footer.scss';

class Footer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section className='footer'>
                <div className='footer_content'>
                    <Left_footer/>
                    <Right_footer/>
                </div>
            </section>
            
        );
    }
}
export default Footer;