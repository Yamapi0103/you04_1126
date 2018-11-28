import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SearchBar.scss';

class ISearchBarOption extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <React.Fragment>
                {
                    this.props.industry_option.map(industry_option =>
                        // console.log(industry_option.industry_name)
                        <option value={industry_option.id}>{industry_option.industry_name}</option>
                    )
                }
              
            </React.Fragment>
        )
    }
}


export default ISearchBarOption;