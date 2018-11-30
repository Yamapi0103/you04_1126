import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Slider.scss';
import $ from 'jquery';

class Slider extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <div className="slider_wrapper">
                    <div className="arrow_area arrow_area_left" id="left">
                        <i className="fas fa-angle-left" id="fa-angle-left"></i>
                    </div>
                    <div className="arrow_area arrow_area_right" id="right">
                        <i className="fas fa-angle-right" id="fa-angle-right"></i>
                    </div>
                    <ul className="slider_wrap" id="slider">
                    
                    </ul>
                    <ul id="paging" className="paging">

                    </ul>
                </div>
            </React.Fragment>
        )
    }
    componentDidMount = () => {
        var slideNum = 0;  //為了讓後面的功能可以用，所以把這兩個變數變成全域變數
        var slideMove = 0;
        //不可以這樣寫var slideMove, slideNum = 0，這樣只有後者被列為0，前者一開始是undefined
        //第一次的左右icon的left right click會失效

        var sliderArray= ["slider_image1.jpg", "slider_image2.jpg", "slider_image3.jpg", "slider_image4.jpg"];
        var slideCount = sliderArray.length;

        var slideWidth = 100;
        var slideWrapper = slideWidth*slideCount;
        

        $(".slider_wrap").css("width", slideWrapper + "%")
        
        // $(".slide_wrapper").width(slideWrapper);

        //這段是產生html的片段，所以順序要擺在上面才不會出錯
        for (var $i=0; $i<slideCount; $i++){
            // $("#slider").append("<li><img src=\"images/" + sliderArray[$i] + "\" alt=\"\"></li>");
            $("#slider").append(`<li><img src="/images/${sliderArray[$i]}" alt=""></li>`);
            $(".paging").append("<li></li>");
        }


        $(".paging li:eq(0)").css("background", "white");
        // 因為瀏覽器在抓id的速度比class快所以這邊補一個id來抓
        $("#paging li").hover(function(){
            // console.log("hover");
            slideNum = $(this).index();  //變數盡量寫得長讓自己一個月後看得出來
            //他會把它變成jquery的物件，所以可以知道是符合條件的第幾個，與javascript的array有點差異
            // console.log(slideNum);
            slideMove= 0 - slideNum * slideWidth;
            // console.log(slideMove);
            // $("#slider").css("left", 0 - 800 * slideNum + "px");
            $("#slider").css("left", slideMove + "%");
            $(this).css("background", "white").siblings().css("background", "transparent");
        });
        //把下面會用到的重複code取出來當成function避免很長串一直打
        function arrowSlide () {
            slideMove= 0 - slideNum * slideWidth;
            $("#slider").css("left", slideMove + "%");
            $(".paging li").eq(slideNum).css("background", "white").siblings().css("background", "transparent");
        }

        //左右箭頭的圖片功能
        $("#left").click(function(){
            slideNum = slideNum-1;
            //老師的方法，直接設定超過的時候
            if (slideNum<0) {
                slideNum= slideCount-1;
            }
            arrowSlide ();

            // console.log(slideNum);
            // console.log("prev");

        });
                
        $("#right").click(function(){
            slideNum = slideNum+1;
            if (slideNum > slideCount-1) {
                slideNum = 0;
            }
            arrowSlide ();
        });


        //根據螢幕尺寸來改變內容，js版的media query
        // $(window).resize(function(){
        //     // console.log("resize");
        //     var windowWidth =  $(this).width();
        //     console.log(windowWidth);
        //     if (windowWidth < 900) {
        //         slideWidth = 600;
        //         // console.log(slideWidth)
        //         $(".wrapper").css("width", "600px");
        //         $(".slider_wrap li").css("width", "600px");
        //     } else if (windowWidth < 685) {
        //         slideWidth = 400;
        //         console.log(slideWidth)
        //         $(".wrapper").css("width", "400px");
        //         $(".slider_wrap li").css("width", "400px");
        //     } else {
        //         slideWidth = 800;
        //         // console.log(slideWidth)
        //         $(".wrapper").css("width", "800px");
        //         $(".slider_wrap li").css("width", "800px");
        //     }
        // });
        
        function autoSlide () {
            slideNum = slideNum+1;
            if (slideNum > slideCount-1) {
                slideNum = 0;
            }
            arrowSlide ();
            setTimeout(autoSlide, 2500);
        };
        setTimeout(autoSlide, 1500);
    }
}


export default Slider;