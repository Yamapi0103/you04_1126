import React, {Component} from 'react';
import './List.scss';
import {Link} from 'react-router-dom';
import SearchBar from '../home/SearchBar';
import ListCaseCard from './ListCaseCard';
// import Listjson from './casejson.json';
import $ from 'jquery';
import FilterRight from '../../Component/FilterRight'


class List extends Component{
    constructor(props){
        super(props);
        this.state= {
            job:[],
            cases: [],
            totalPage: 0,
            currentPage: 1,
            perPage: 10,
            upperPageBound: 3,  //設定每組最高的分頁數字
            lowerPageBound: 0,  //設定每組最低的分頁數字
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 3 //設定每組會有幾個分頁數字
        }
        // console.log(Listjson);
    }
    
    componentDidMount() {
        this.getCase(1);
        this.getSearch()
    }

    componentDidUpdate() {
        $("ul li.btn_active").removeClass('btn_active');
        $('ul li#'+this.state.currentPage).addClass('btn_active');
    }

    // getCase() {   //這個只有單純取全部進來，res是商品資料而已
    // fetch("http://localhost:3000/case_list")
    //     .then(res => res.json())
    //     .then(data => this.setState({ 
    //         cases: data
    //     }))
    // }


    getCase(page) {   //這個的res是totalpage+商品資料(datas)，所以需要cases:後面需要指定到.datas
    fetch("http://localhost:3000/case_list/" + page)
        .then(res => res.json())
        .then(c_data => {
            this.setState({ 
            cases: c_data.datas,
            totalPage: Math.ceil(c_data.TotalCount / this.state.perPage), //計算出幾頁
            currentPage: page
        })
        // console.log(this.state.cases)
        
        //計算 prev next 按鈕是否出現
        this.setState({isNextBtnActive: 'disabled'});
        this.setState({isPrevBtnActive: 'disabled'});
        if (this.state.totalPage === parseInt(page) && this.state.totalPage > 1) {
          this.setState({ isPrevBtnActive: '' });
        }
        else if (parseInt(page) === 1 && this.state.totalPage > 1) {
          this.setState({ isNextBtnActive: '' });
        }
        else if (this.state.totalPage > 1) {
          this.setState({ isNextBtnActive: '' });
          this.setState({ isPrevBtnActive: '' });
        }
        })
    }

    paging = e => {
        // e.preventDefault();
        this.getCase($(e.target).text());
        $("body, html").animate({   //要讓他可以上去一定要設置body, html window會有問題
            scrollTop: 0
        }, 0);
        
    }

    btnPrevClick = () => {
        if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
          this.setState({ 
            upperPageBound: this.state.upperPageBound - this.state.pageBound,
            lowerPageBound: this.state.lowerPageBound - this.state.pageBound
           });
        }
        let listid = this.state.currentPage - 1;
        this.getCase(listid)
      }
    
    btnNextClick = () => {
        if ((this.state.currentPage + 1) > this.state.upperPageBound) {
            this.setState({ 
            upperPageBound: this.state.upperPageBound + this.state.pageBound,
            lowerPageBound: this.state.lowerPageBound + this.state.pageBound
            });
        }
        let listid = this.state.currentPage + 1;
        this.getCase(listid)
    }
    
    //按下...計算下一組要產生的分頁數字
    btnIncrementClick = () => {
        this.setState({
        upperPageBound: this.state.upperPageBound + this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound
        });
        let listid = this.state.upperPageBound + 1;
        this.getCase(listid)
    }
    //按下...計算上一組要產生的分頁數字
    btnDecrementClick = () => {
        this.setState({
        upperPageBound: this.state.upperPageBound - this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound
        });
        let listid = this.state.upperPageBound - this.state.pageBound;
        this.getCase(listid)
    }



    render(){
        const { totalPage, currentPage,  upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive } = this.state;

        //產生頁碼的矩陣
        const pageNumbers = [];
        for (let i=1; i<=totalPage; i++){
            pageNumbers.push(i);
        }

        //產生數字的分頁按鈕
        const renderPageNumbers = pageNumbers.map(number => {
            if  (number === 1 && currentPage ===1){
                return (
                    <li key={number} className="page-item" id={number}>
                        <Link to="#" className="btn_link" onClick={this.paging}>{number}</Link>
                    </li>
                )
            }
            else if ((number < upperPageBound + 1) && number > lowerPageBound) {
                return (
                    <li key={number} className="page-item" id={number}>
                        <Link to="#" className="btn_link" onClick={this.paging}>{number}</Link>
                    </li>
                )
            }
        })
        //按下...產生下一組分頁數字
        let pageIncrementBtn = null;
        if (pageNumbers.length > upperPageBound) {
        pageIncrementBtn = <li className="page-item"><a href='#' className="btn_link" onClick={this.btnIncrementClick}> &hellip; </a></li>
        }
        //按下...產生上一組分頁數字
        let pageDecrementBtn = null;
        if (lowerPageBound >= 1) {
        pageDecrementBtn = <li className="page-item"><a href='#' className="btn_link" onClick={this.btnDecrementClick}> &hellip; </a></li>
        }

        //判斷是否產生prev按鈕
        let renderPrevBtn = null;
        if (isPrevBtnActive !== 'disabled') {    
        renderPrevBtn = <li className="page-item"><a className="btn_link" href='#' id="btnPrev" onClick={this.btnPrevClick}>&lt;</a></li>
        }

        //判斷是否產生next按鈕
        let renderNextBtn = null;
        if (isNextBtnActive !== 'disabled') {
        renderNextBtn = <li className="page-item"><a className="btn_link" href='#' id="btnNext" onClick={this.btnNextClick}>&gt;</a></li>
        }



        return(
            <React.Fragment>
                <div className="list_section1">
                    <div className="list_section1_searchbar_container">
                        <SearchBar />
                    </div>
                </div>
                <div className="list_section2">
                    <div className="list_section2_case_container">
                        <div className="list_section2_case_container_case">
                            <ListCaseCard cases={this.state.cases}/>
                        </div>
                        <div className="list_section2_case_container_btn">
                            <ul className="pagination justify-content-center mt-3">
                                {renderPrevBtn}
                                {pageDecrementBtn}
                                {renderPageNumbers}
                                {pageIncrementBtn}
                                {renderNextBtn}
                            </ul>
                        </div>
                    </div>
                    <div className="list_section2_option_container">
                        <FilterRight />
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default List;

