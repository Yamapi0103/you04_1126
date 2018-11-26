import React, {Component} from 'react';
import{Link} from 'react-router-dom';
import './publish.scss';
import cookies from 'react-cookies';


class Publish extends Component {
    constructor(props) {
        super(props);
        console.log("constructor") 
        var a = new Date();
        var dateTimeNow = a.getFullYear()+'-' +a.getMonth()+'-'+a.getDay()+" "+a.getHours()+':'+a.getMinutes()+':'+a.getSeconds()
        var dateNow = a.getFullYear()+'/' +a.getMonth()+'/'+a.getDay();
        this.userPoints = 0;
        this.userSid = 0;
        this.state={
            BScase_name:'',
            BS_sid:'', // 存發布專案的人(BS_sid)
            BScase_photo:'',
            BScase_ask_people:'1',
            BScase_pay:'',
            BScase_location:'',
            BScase_time_limit:dateNow,
            BScase_experience:'',
            BScase_fans:'',
            BScase_active:'',
            BScase_contact:'',
            BScase_info:'',
            BScase_publish_at:dateTimeNow
        }
    }

    //處理受控表單
    handleChange = (evt) => {
        let key = evt.target.name;
        let data = evt.target.value;
        this.setState({
            [key]: data
        })
    }


    componentDidMount =()=>{
        if(this.isLogin()){
            // this.cookie = cookies.load('userId')[0] 
        console.log(this.cookie)  //看cookie內容

        // 將下面code放componentDidMount才能新增BS_sid進DB，放addHandler就不行 ((怪怪的
        this.setState({
            BS_sid:this.cookie.BS_sid
        })   

        // console.log(cookies.load('userId2'))

    }
        // test
        // cookies.save('userTest',cookies.load('userId')[0])
        // cookies.save('userTest',{
        //     ...cookies.load('userTest'),
        //     BS_poi:"200"})
        // console.log(cookies.load('userTest'))
        
    }
    fetchPoints = (userSid)=>{
        return fetch('http://localhost:3000/api3/bsmembers/'+userSid);
    }
    addHandler = (evt) =>{
        evt.preventDefault();
        console.log(this.state)
        this.userSid = this.cookie.BS_sid
        this.userPoints = this.cookie.BS_point //cookie紀錄的point
        // console.log(this.userPoints)
        // console.log(this.userSid)

        //判斷點數是否足夠
        if(this.userPoints<100){
            alert('點數不夠')
            return
        }
        //新增bs_case
        fetch('http://localhost:3000/api/publish',{
            method:'POST',
            body: JSON.stringify(this.state),
            headers:new Headers({
                'content-type':'application/json'
            })
            }).then(res=>res.json())
            .then(data => {
                console.log(this.state)
                alert(data.message)
            })


        //扣100點點數 並更新cookie裡的BS_point
        cookies.save('userId',[{
            ...this.cookie,
            BS_point: parseInt(cookies.load('userId')[0].BS_point)-100
        }])
        this.cookie = cookies.load('userId')[0]  //對this.cookie更新
        // console.log(cookies.load('userId')[0]) 
        // console.log(this.cookie)

        //更新bsmember裡的bs_point
        fetch('http://localhost:3000/you04/updateBSmember/'+this.userSid, {
            method: 'PUT',
            body: JSON.stringify({BS_point:this.cookie.BS_point}), //只更新bsmember點數
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .then(data => {
                alert(data.message);
           })
        
    }
    
    isLogin = ()=>{
        return cookies.load('userId')?true:false
    }
    
    render(){

        this.cookie = cookies.load('userId')[0] 
        let rows=[];
        for (var i = 1; i < 3; i++) {
            rows.push(<option value={i}>{i}</option>);
        }
        
        if(!this.isLogin()){
            return(
                <React.Fragment>
                {alert("請先登入")}
                {this.props.history.push("/login")}
                </React.Fragment>
            )
        }
        else if(this.cookie.BS_point<100){
            return(
                <React.Fragment>
                    {alert("點數不足，請先去買點數!")}
                    {this.props.history.push("/plan")}
                </React.Fragment>
            )
        }
        else{
        return(
            <React.Fragment>
                <form className="publish_container">
                <h3>專案刊登</h3>
                <br/>
                
                <br/>
                {/* <div class="form-group">
                    <label htmlFor="exampleFormControlFile1">請選擇專案圖像</label>
                    <input type="file" className="form-control-file"/>
                </div> */}
                <div className="form-group">
                    <label >請填寫專案名稱</label>
                    <input type="text" value={this.state.BScase_name} name="BScase_name" onChange={this.handleChange} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>請選擇上傳圖片</label>
                    <input type="file" value={this.state.BScase_photo} className="form-control-file" name="BScase_photo" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                <div className="form-row">
                    <label>選擇需求人數</label>
                    <select value={this.state.BScase_ask_people} defaultValue="B"name="BScase_ask_people" onChange={this.handleChange} type="">
                    {rows}
                    <option value="3">3人以上</option>
                    
                    </select>
                </div>
                </div>
                 <div className="form-group">
                    <label>請選擇薪資區間</label>
                    <select className="form-control" value={this.state.BScase_pay} name="BScase_pay" onChange={this.handleChange}>
                        <option>1,000-3,000元</option>
                        <option>3,000-5,000元</option>
                        <option>5,000-10,000元</option>
                        <option>10,000-50,000元</option>
                        <option>50,001元以上</option>
                    </select>
                </div>
                
                <div>
                    <h4>工作內容</h4>
                
                <div className="form-group">
                    <label>工作地點</label>
                    <select value={this.state.BScase_location} name="BScase_location" onChange={this.handleChange} className="form-control" >
                        <option>不限</option>
                        <option>台北</option>
                        <option>台中</option>
                    </select>
                    <label>期限要求</label>
                    <input value={this.state.BScase_time_limit} name="BScase_time_limit" type="date" onChange={this.handleChange} className="form-control" />
                </div>
                </div>
                <div>
                    <h4>條件內容</h4>
                
                <div className="form-group">
                    <label>經驗要求</label>
                    <select value={this.state.case_BScase_experience} name="BScase_experience" onChange={this.handleChange} className="form-control" >
                        <option>無經驗可</option>
                        <option>1~4件案子</option>
                        <option>5件以上</option>
                    </select>
                    <label>人氣要求</label>
                    <select value={this.state.BScase_fans} name="BScase_fans" onChange={this.handleChange} className="form-control" >
                        <option>100-500</option>
                        <option>500-1,000</option>
                        <option>1,000-5,000</option>
                        <option>5,001-10,000</option>

                    </select>
                    <label htmlFor="exampleFormControlSelect1">活動要求</label>
                    <select value={this.state.BScase_active} name="BScase_active" onChange={this.handleChange} className="form-control" >
                        <option>文章</option>
                        <option>影片</option>
                        <option>現場</option>
                    </select>
                </div>
                </div>
                
                <div>
                    <h4>聯絡人資訊</h4>
                
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">聯絡人</label>
                        <input type="text" value={this.BScase_contact} name="BScase_contact" onChange={this.handleChange} className="form-control"/>
                    </div>
                </div>

                <div>
                    <h4>其他補充</h4>
                    <textarea value={this.state.BScase_info} name="BScase_info" onChange={this.handleChange} className="form-control" rows="5"></textarea>
                </div>
                <br/>
                <div className="alert alert-primary" role="alert">
                    本次刊登將會扣除您100點點數
                </div>
                <br/> 

                <div className="publish_warning">
                    <h5>還沒有點數嗎？</h5>
                    <Link to="./plan">點擊這裡購買方案！</Link>
                </div>
                <br/>
                <div className="publish_btn">
                    <button className="btn" onClick={this.addHandler}>發布</button>
                    <button className="btn" type="submit">清空</button>
                </div>

                </form>
            </React.Fragment>
            )}
    }
}

export default Publish;