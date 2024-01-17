import { useLayoutEffect } from "react";
import video from "./assets/video/video.mp4";
import logo from "./assets/images/64d3dd9edfb41666c35b15c2_Sundown logo.svg";
import gsap from "gsap";
import Swip from "./components/Swip";
import { RiGlobalLine } from "react-icons/ri";

// Import Swiper styles

function App() {
  useLayoutEffect(() => {
    function page4Animation() {
      var elemC = document.querySelector(".elem-container");
      var fixed = document.querySelector(".fixed-image");

      elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
      });
      elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
      });

      var elems = document.querySelectorAll(".elem");
      elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
          var image = e.getAttribute("data-image");
          fixed.style.backgroundImage = `url(${image})`;
        });
      });
    }

    function swiperAnimation() {
        const i = document.querySelector(".indicator");
        const p4 = document.querySelector(".page4");

        const onMouseMove = (event) => {

        const offsetY = event.clientY - p4.getBoundingClientRect().top;
        const { clientX, clientY } = event;
        gsap.to(i, {
          x: clientX,
          y: offsetY,
          duration: 1,
          ease: "expo",
        });
      };

      p4.addEventListener("mousemove", onMouseMove);
      p4.addEventListener("mousemove", function () {
        gsap.to(i, {
          scale: 1,
          opacity: 1,
        });
      });

      p4.addEventListener("mouseleave", function () {
        gsap.to(i, {
          scale: 0,
          opacity: 0,
        });
      });
    }

    function menuAnimation() {
      var menu = document.querySelector("nav h3");
      var full = document.querySelector(".full-scr");
      var img = document.querySelector("nav>img");
      var flag = 0;
      menu.addEventListener("click", function () {
        if (flag == 0) {
          full.style.top = 0;
          img.style.opacity = 0;
          flag = 1;
        } else {
          full.style.top = "-100%";
          img.style.opacity = 1;
          flag = 0;
        }
      });
    }

    function loaderAnimation() {
      var loader = document.querySelector(".loader");
      setTimeout(function () {
        loader.style.top = "-100%";
      }, 4200);
    }

    swiperAnimation();
    page4Animation();
    menuAnimation();

    loaderAnimation();
  }, []);

  return (
    <>
      <div className="loader">
        <h1>ENVIRONMENTS</h1>
        <h1>EXPERIENCES</h1>
        <h1>CONTENT</h1>
      </div>
      <div className="fixed-image"></div>
      <div className="wrapper">
        <main>
          <div className="page1">
            <nav>
              <img src={logo} alt="" />
              <div className="nav-part2">
                <h4>
                  <a href="#">Work</a>
                </h4>
                <h4>
                  <a href="#">Studio</a>
                </h4>
                <h4>
                  <a href="#">Contact</a>
                </h4>
              </div>
              <h3>Menu</h3>
            </nav>
            <div className="center">
              <div className="left">
                <h3>
                  Sundown is a multi-disciplinary studio focused on creating
                  unique, end-to-end experiences and environments.
                </h3>
              </div>
              <div className="right">
                <h1>
                  SPACES <br />
                  THAT <br />
                  INSPIRE
                </h1>
              </div>
            </div>
            <div className="hero-shape">
              <div className="hero-1"></div>
              <div className="hero-2"></div>
              <div className="hero-3"></div>
            </div>
            <video src={video} loop autoPlay muted></video>
          </div>
          <div className="page2">
            <div className="moving-text">
              <div class="con">
                <h1>EXPERIENCES</h1>
                <div className="gola"></div>
                <h1>CONTENT</h1>
                <div className="gola"></div>
                <h1>ENVIRONMENTS</h1>
                <div className="gola"></div>
              </div>
              <div class="con">
                <h1>EXPERIENCES</h1>
                <div className="gola"></div>
                <h1>CONTENT</h1>
                <div className="gola"></div>
                <h1>ENVIRONMENTS</h1>
                <div className="gola"></div>
              </div>
              <div class="con">
                <h1>EXPERIENCES</h1>
                <div className="gola"></div>
                <h1>CONTENT</h1>
                <div className="gola"></div>
                <h1>ENVIRONMENTS</h1>
                <div className="gola"></div>
              </div>
            </div>
            <div className="page2-bottom">
              <h1>
                We are a group of design- driven, goal-focused creators,
                producers, and designers who believe that the details make all
                the difference.
              </h1>
              <div className="bottom-part2">
                <img alt="" />
                <p>
                  We love to create, we love to solve, we love to collaborate,
                  and we love to turn amazing ideas into reality. We’re here to
                  partner with you through every step of the process and know
                  that relationships are the most important things we build.
                </p>
              </div>
            </div>
            <div className="gooey"></div>
          </div>
          <div className="page3">
            <div className="elem-container">
              <div
                className="elem1 elem"
                data-image="https://images.unsplash.com/photo-1701001308648-7b731a52b8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixclassName=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
              >
                <div className="overlay"></div>
                <h2>Makers Studio HOI</h2>
              </div>
              <div
                className="elem"
                data-image="https://images.unsplash.com/photo-1700975928909-da4a46227a47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixclassName=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
              >
                <div className="overlay"></div>
                <h2>50th Anniversary</h2>
              </div>
              <div
                className="elem"
                data-image="https://images.unsplash.com/photo-1701077137611-9be394bf62f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixclassName=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
              >
                <div className="overlay"></div>
                <h2>NYFW Popup</h2>
              </div>
              <div
                className="elem"
                data-image="https://images.unsplash.com/photo-1701014159309-4a8b84faadfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixclassName=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
              >
                <div className="overlay"></div>
                <h2>Air Force 1 2021</h2>
              </div>
              <div
                className="elem"
                data-image="https://images.unsplash.com/photo-1700924546093-f914fd5b8814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixclassName=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
              >
                <div className="overlay"></div>
                <h2>SOHO NYC</h2>
              </div>
              <div
                className="elem"
                data-image="https://images.unsplash.com/photo-1700601437860-e66da79cf6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixclassName=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D"
              >
                <div className="overlay"></div>
                <h2>SOHO 2023</h2>
              </div>
              <div
                className="elem"
                data-image="https://images.unsplash.com/photo-1700769025506-6c3dcb9ec9b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixclassName=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D"
              >
                <div className="overlay"></div>
                <h2>Play New Kidvision</h2>
              </div>
            </div>
          </div>
          <Swip />
          <div className="page5"></div>
        <div className="footer">
            <div className="container">
                <div className="link">
                    <a href="#">work</a>
                    <a href="#">studio</a>
                    <a href="#">contact</a>
                </div>
                <div className="form">
                    <h5>Get industry insights and creative inspiration straight to your inbox.</h5>
                    <div class="group">
                        <input type="text" placeholder="Email address" />
                        <button>&gt;</button>
                    </div>
                </div>
            </div>
          <div className="gooey1"></div>
          <div className="gooey2"></div>
          <div className="gooey3"></div>
          
          <h1>Sundown</h1>
          <div className="footer-bottom">
            <h6>copyright &copy; Sundown Studio</h6>
            <h6><RiGlobalLine />brooklyn,NY</h6>
            <h6>instagram</h6>
            <h6>linkedin</h6>
          </div>
        </div>
        </main>
        <div className="full-scr">
          <div className="full-div1"></div>
        </div>
      </div>
    </>
  );
}

export default App;
