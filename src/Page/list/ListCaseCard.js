
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListCaseCard.scss';
import cookies from 'react-cookies';
import swal from 'sweetalert';
import ListCaseCardItem from './ListCaseCardItem'

class ListCaseCard extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <React.Fragment>
                {
                    this.props.cases.map(ct =>
                        <ListCaseCardItem cases={ct}/>
                    )
                }

            </React.Fragment>
        );
    }
}


export default ListCaseCard;