import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {

  return (
    <main>
      <div className="community__heading">
        <h1>
          welcome to the <br />
          land of pricks.
        </h1>
      </div>
      <div className="prickly">
        <div className="about__prickly">
          <h2>about prickly</h2>
          <p>
            prickly is a cumulative effort of one person’s craziness and need to
            becreative over 25 years of their life. it is in part inspired from
            cacti, with them being low maintenance and highly aesthetic. I am
            inspired every day by things around me and want to give back to the
            world by trying to inspire you and help you navigate the waters (more)
            easily. I am to make trivial mundane tasks like scribbling a grocery
            list on a random piece of paper, writing in your diary, making a to-do
            list or journalling fun with prickly. we believe in embracing all those
            maximalist vibes, while being sustainable, and hoarding on everything
            that brings you joy and helps you live a more colourful life.
          </p>
        </div>
        <div className="feel__prickly">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#7be4b0"
              fillOpacity={1}
              d="M0,224L80,229.3C160,235,320,245,480,218.7C640,192,800,128,960,106.7C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
          <div className="feel__prickly--content">
            <h2>what does it mean to feel prickly</h2>
            <p>
              feeling irritated, happy, sad or simply feeling can be overwhelming
              and we get it. we don't just sell products, our art and decor is a
              coping mechanism when you need one and a source to pass time when you
              don’t. welcome to the prickly family- here we give each other a reason
              to believe in our art, and hope that we can all heal together, let art
              heal you. let art heal everyone.
            </p>
          </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#7be4b0" fill-opacity="1"
                  d="M0,64L80,53.3C160,43,320,21,480,37.3C640,53,800,107,960,117.3C1120,128,1280,96,1360,80L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
              </path>
          </svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#7be4b0"
              fillOpacity={1}
              d="M0,192L80,176C160,160,320,128,480,133.3C640,139,800,181,960,197.3C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#7be4b0" fill-opacity="1"
                  d="M0,32L80,37.3C160,43,320,53,480,96C640,139,800,213,960,218.7C1120,224,1280,160,1360,128L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
              </path>
          </svg> */}
          <div className="become__prick">
            {/* <div class="become__prick--div1">
                  <h1>how can you become a prick?</h1>
                  <p>we’re introducing rep and subscription packs soon- so stay tuned!</p>
              </div>
              <div class="become__prick--div2">
                  <h1>what does the community have to say about prickly?</h1>
                  <p></p>
              </div>
              <div class="border__bottom"></div> */}
            <div className="border__top" />
            <div className="become__prick--div3">
              <h1>how can you become a prick?</h1>
              <p>
                we’re introducing rep and subscription packs soon- so stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

    // <div className="aboutSection">
    //   <div></div>
    //   <div className="aboutSectionGradient"></div>
    //   <div className="aboutSectionContainer">
    //     <Typography component="h1">About Us</Typography>

    //     <div>
    //       <div>
    //         <Avatar
    //           style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
    //           src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
    //           alt="Founder"
    //         />
    //         <Typography>Abhishek Singh</Typography>
    //         <Button onClick={visitInstagram} color="primary">
    //           Visit Instagram
    //         </Button>
    //         <span>
    //           This is a sample wesbite made by @meabhisingh. Only with the
    //           purpose to teach MERN Stack on the channel 6 Pack Programmer
    //         </span>
    //       </div>
    //       <div className="aboutSectionContainer2">
    //         <Typography component="h2">Our Brands</Typography>
    //         <a
    //           href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
    //           target="blank"
    //         >
    //           <YouTubeIcon className="youtubeSvgIcon" />
    //         </a>

    //         <a href="https://instagram.com/meabhisingh" target="blank">
    //           <InstagramIcon className="instagramSvgIcon" />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>


  );
}

export default About;
