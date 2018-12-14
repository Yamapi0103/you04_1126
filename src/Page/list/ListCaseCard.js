
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListCaseCard.scss';
import swal from 'sweetalert';
import ListCaseCardItem from './ListCaseCardItem'
import ListCaseCardItemByVisitor from './ListCaseCardItemByVisitor'
import cookie from 'react-cookies';

class ListCaseCard extends Component {
    constructor(props) {
        super(props);
        
    }
    isLogin =()=>{
        return cookie.load('userId')?true:false;
    }
    render() {
        return (
            <React.Fragment>
                
                    {this.isLogin()?
                        this.props.cases.map(ct =>
                            <ListCaseCardItem cases={ct}/>
                        )
                        :
                        this.props.cases.map(ct =>
                            <ListCaseCardItemByVisitor cases={ct}/>
                        )

                        
                    }


            </React.Fragment>
        );
    }
}


export default ListCaseCard;