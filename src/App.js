import { useLayoutEffect } from "react";
import "./App.css";
import video from './assets/video/video.mp4';
import logo from "./assets/images/64d3dd9edfb41666c35b15c2_Sundown logo.svg";
import gsap from "gsap";
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';

function App() {
    useLayoutEffect(()=>{
          
  
  function page4Animation() {
      var elemC = document.querySelector("#elem-container")
      var fixed = document.querySelector("#fixed-image")
      elemC.addEventListener("mouseenter", function () {
          fixed.style.display = "block"
      })
      elemC.addEventListener("mouseleave", function () {
          fixed.style.display = "none"
      })
  
      var elems = document.querySelectorAll(".elem")
      elems.forEach(function (e) {
          e.addEventListener("mouseenter", function () {
              var image = e.getAttribute("data-image")
              fixed.style.backgroundImage = `url(${image})`
          })
      })
  }
  
  function swiperAnimation() {
      const area = document.querySelector('#page4');
      const indicator = document.querySelector(".indicator");

      const onMouseMove = (event) =>{
        const {clientX,clientY} = event;
            gsap.to(indicator,{
            x:clientX,
            y:clientY,
            duration: 1,
            ease : 'expo',
            })

        area.addEventListener('mouseenter', function () {
            gsap.to(indicator, {
                scale: 1,
                display: "block",
            });
            
        });

        document.addEventListener('mousemove', onMouseMove)
        
        area.addEventListener('mouseleave', function () {
            gsap.to(indicator, {
                scale: 0,
                display:"none"
        
            });
        });

    }

      

  }
  function menuAnimation() {
  
      var menu = document.querySelector("nav h3")
      var full = document.querySelector("#full-scr")
      var navimg = document.querySelector("nav img")
      var flag = 0
      menu.addEventListener("click", function () {
          if (flag == 0) {
              full.style.top = 0
              navimg.style.opacity = 0
              flag = 1
          } else {
              full.style.top = "-100%"
              navimg.style.opacity = 1
              flag = 0
          }
      })
  }
  
  function loaderAnimation() {
      var loader = document.querySelector("#loader")
      setTimeout(function () {
          loader.style.top = "-100%"
      }, 4200)
  }
  
  swiperAnimation()
  page4Animation()
  menuAnimation()

  loaderAnimation()
},[]);

  return (
    <>
      <div id="loader">
        <h1>ENVIRONMENTS</h1>
        <h1>EXPERIENCES</h1>
        <h1>CONTENT</h1>
      </div>
      <div id="fixed-image"></div>
      <div className="wrapper">
        <main>

        <div id="page1">
            <nav>
                <img src={logo}
                    alt=""/>
                <div id="nav-part2">
                    <h4><a href="#">Work</a></h4>
                    <h4><a href="#">Studio</a></h4>
                    <h4><a href="#">Contact</a></h4>
                </div>
                <h3>Menu</h3>
            </nav>
            <div id="center">
                <div id="left">
                    <h3 >Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and
                        environments.</h3>
                </div>
                <div id="right">
                    <h1>SPACES <br/>
                        THAT <br/>
                        INSPIRE
                      </h1>
                </div>

            </div>
            <div id="hero-shape">
                <div id="hero-1"></div>
                <div id="hero-2"></div>
                <div id="hero-3"></div>
            </div>
            <video src={video} loop autoPlay muted ></video>
        </div>
        <div id="page2">
            <div id="moving-text">
                <div class="con">
                    <h1>EXPERIENCES</h1>
                    <div id="gola"></div>
                    <h1>CONTENT</h1>
                    <div id="gola"></div>
                    <h1>ENVIRONMENTS</h1>
                    <div id="gola"></div>
                </div>
                <div class="con">
                    <h1>EXPERIENCES</h1>
                    <div id="gola"></div>
                    <h1>CONTENT</h1>
                    <div id="gola"></div>
                    <h1>ENVIRONMENTS</h1>
                    <div id="gola"></div>
                </div>
                <div class="con">
                    <h1>EXPERIENCES</h1>
                    <div id="gola"></div>
                    <h1>CONTENT</h1>
                    <div id="gola"></div>
                    <h1>ENVIRONMENTS</h1>
                    <div id="gola"></div>
                </div>
            </div>
            <div id="page2-bottom">
                <h1>We are a group of design- driven, goal-focused creators,  producers, and designers who
                    believe that the details  make all the difference.</h1>
                <div id="bottom-part2">
                    <img 
                        alt=""/>
                    <p>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas
                        into reality. We’re here to partner with you through every step of the process and know that
                        relationships are the most important things we build.</p>
                </div>
            </div>
            <div id="gooey">

            </div>
        </div>
        <div id="page3">
            <div id="elem-container">
            <div id="elem1" class="elem"
                    data-image="https://images.unsplash.com/photo-1701001308648-7b731a52b8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D">
                    <div class="overlay"></div>
                    <h2>Makers Studio HOI</h2>
                </div>
                <div class="elem"
                    data-image="https://images.unsplash.com/photo-1700975928909-da4a46227a47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8">
                    <div class="overlay"></div>
                    <h2>50th Anniversary</h2>
                </div>
                <div class="elem"
                    data-image="https://images.unsplash.com/photo-1701077137611-9be394bf62f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D">
                    <div class="overlay"></div>
                    <h2>NYFW Popup</h2>
                </div>
                <div class="elem"
                    data-image="https://images.unsplash.com/photo-1701014159309-4a8b84faadfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D">
                    <div class="overlay"></div>
                    <h2>Air Force 1 2021</h2>
                </div>
                <div class="elem"
                    data-image="https://images.unsplash.com/photo-1700924546093-f914fd5b8814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D">
                    <div class="overlay"></div>
                    <h2>SOHO NYC</h2>
                </div>
                <div class="elem"
                    data-image="https://images.unsplash.com/photo-1700601437860-e66da79cf6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D">
                    <div class="overlay"></div>
                    <h2>SOHO 2023</h2>
                </div>
                <div class="elem"
                    data-image="https://images.unsplash.com/photo-1700769025506-6c3dcb9ec9b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D">
                    <div class="overlay"></div>
                    <h2>Play New Kidvision</h2>
                </div>
            </div>
        </div>
        <div id="page4">
            <div className="indicator">
                
            </div>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      ...
    </Swiper>
        </div>
        <div id="page5">

        </div>
        </main>
          <div id="full-scr">
              <div id="full-div1">

              </div>
          </div>
          <div id="footer">
              <div id="footer-div">
                
              </div>
              <h1>Sundown</h1>
              <div id="footer-bottom">
                
              </div>
          </div>
      </div>
    </>
  );
}

export default App;
