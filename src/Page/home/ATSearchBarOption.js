import React, {Component} from 'react';
import './SearchBar.scss';

class ATSearchBarOption extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                {
                    this.props.active_option.map(active_option =>
                        <option key={active_option.id} value={active_option.id}>{active_option.active_name}</option>
                    )
                }
              
            </React.Fragment>
        )
    }
}


export default ATSearchBarOption;