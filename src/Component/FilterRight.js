import React, {Component} from  'react';
import {Link} from  'react-router-dom';

class FilterRight extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <React.Fragment>
                        <div className="lsoc_option_container">
                            <div className="form-group">
                                {/* <label htmlFor="456">廠商類型</label> */}
                                <select className="form-control" >
                                    <option>3C電子</option>
                                    <option>美食餐廳</option>
                                    <option>生活用品</option>
                                    <option>服飾產品</option>
                                    <option>政府單位</option>
                                    <option>其他類型</option>
                                </select>
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="456">廠商類型</label> */}
                                <select className="form-control" >
                                    <option>3C電子</option>
                                    <option>美食餐廳</option>
                                    <option>生活用品</option>
                                    <option>服飾產品</option>
                                    <option>政府單位</option>
                                    <option>其他類型</option>
                                </select>
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="456">廠商類型</label> */}
                                <select className="form-control" >
                                    <option>3C電子</option>
                                    <option>美食餐廳</option>
                                    <option>生活用品</option>
                                    <option>服飾產品</option>
                                    <option>政府單位</option>
                                    <option>其他類型</option>
                                </select>
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="456">廠商類型</label> */}
                                <select className="form-control" >
                                    <option>3C電子</option>
                                    <option>美食餐廳</option>
                                    <option>生活用品</option>
                                    <option>服飾產品</option>
                                    <option>政府單位</option>
                                    <option>其他類型</option>
                                </select>
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="456">廠商類型</label> */}
                                <select className="form-control" >
                                    <option>3C電子</option>
                                    <option>美食餐廳</option>
                                    <option>生活用品</option>
                                    <option>服飾產品</option>
                                    <option>政府單位</option>
                                    <option>其他類型</option>
                                </select>
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="456">廠商類型</label> */}
                                <select className="form-control" >
                                    <option>3C電子</option>
                                    <option>美食餐廳</option>
                                    <option>生活用品</option>
                                    <option>服飾產品</option>
                                    <option>政府單位</option>
                                    <option>其他類型</option>
                                </select>
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="456">廠商類型</label> */}
                                <select className="form-control" >
                                    <option>3C電子</option>
                                    <option>美食餐廳</option>
                                    <option>生活用品</option>
                                    <option>服飾產品</option>
                                    <option>政府單位</option>
                                    <option>其他類型</option>
                                </select>
                            </div>
                        </div>
                        <div className="lsoc_btn_container">
                            <Link to=""><i class="fas fa-filter"></i>篩選</Link>
                            <Link to=""><i class="fas fa-trash-alt"></i>清空條件</Link>
                        </div>
                    
                </React.Fragment>
        )
    }
}


export default FilterRight;