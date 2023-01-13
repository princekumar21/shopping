import React, { useContext, useEffect, useRef } from "react";

import Typography from "@mui/material/Typography";

import BG from "../../assets/slider1.jpg";
import BG1 from "../../assets/slider1.jpg";
import BG2 from "../../assets/slider1.jpg";
import BG3 from "../../assets/slider1.jpg";
import BG4 from "../../assets/slider1.jpg";

import "./Slider.css";

// import { useMediaQuery } from '@mui/material';+
const Carousels = () => {
  useEffect(() => {
    const nextIcon = document.querySelector(".carousel-control-next-icon");

    setTimeout(() => {
      nextIcon.click();
    }, 7000);
  });

  return (
    <>
      <div
        className="mainContainerSlider"
        style={{ position: "relative", zIndex: "10" }}
      >
        <div className="overlay">
          <Typography
            className={"experineceSmoth"}
            data-aos={"fade-up"}
            data-aos-delay={"350"}
            sx={{
              fontFamily: "gilroyregular, arial, sans-serif",
              // zIndex: 10,
            }}
            fontWeight={"700"}
            fontSize={{
              xs: "40px",
              sm: "45px",
              md: "65px",
              lg: "70px",
              xl: "78px",
            }}
            maxWidth={{
              xs: "396px",
              sm: "977px",
              md: "1297px",
              lg: "1297px",
              xl: "1397px",
            }}
            // mt={8}
            mb={"130px"}
            // data-aos={'fade-up'}
            // data-aos-delay={'100'}
            lineHeight={1.2}
            // textAlign={'left'}
            // alignSelf="flex-start"
            // paddingX={'10%'}
          >
            {/* <FormattedMessage id="about.slider.heading" /> */}
          </Typography>
        </div>
        <div
          className="carousel slide carousel-fade"
          id="carouselExampleIndicators"
        >
          {/* {isSm && ( */}
          <div
            className="carousel-indicators countSlider"
            // style={{
            //   position: 'absolute',
            //   right: '34.5%',
            //   bottom: '15%',
            // }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: 'center',
                padding: "10px",
              }}
            >
              <Typography
                // className={
                //   'homeSliderTitle animated bounceInLeft d-none d-md-block'
                // }
                fontWeight={"300"}
                lineHeight={"1.1"}
                fontSize={{
                  xs: "15px",
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "18px",
                }}
                ml={0.3}
                sx={{
                  transition: "all 0.9s ease !important",
                  fontFamily: "gilroyregular, arial, sans-serif",
                  animationDelay: "2s",
                }}
              >
                01
              </Typography>
              <button
                aria-label="Slide 1"
                className="active"
                data-bs-slide-to="0"
                data-bs-target="#carouselExampleIndicators"
                type="button"
                style={{ width: "106px", height: "3px" }}
              ></button>
              <Typography
                // className={
                //   'homeSliderTitle animated bounceInLeft d-none d-md-block'
                // }
                fontWeight={"500"}
                lineHeight={"1.1"}
                fontSize={{
                  xs: "15px",
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "18px",
                }}
                ml={0.3}
                minHeight={{ xl: "38px" }}
                sx={{
                  transition: "all 0.9s ease !important",
                  fontFamily: "gilroyregular, arial, sans-serif",
                  animationDelay: "2s",
                }}
              >
                {/* <FormattedMessage
                  id="about.slider.head.count.1"
                  values={{ br: <br /> }}
                /> */}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: 'center',
                padding: "10px",
              }}
            >
              <Typography
                // className={
                //   'homeSliderTitle animated bounceInLeft d-none d-md-block'
                // }
                fontWeight={"300"}
                lineHeight={"1.1"}
                fontSize={{
                  xs: "15px",
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "18px",
                }}
                ml={0.3}
                sx={{
                  transition: "all 0.9s ease !important",
                  fontFamily: "gilroyregular, arial, sans-serif",
                  animationDelay: "2s",
                }}
              >
                02
              </Typography>
              <button
                aria-label="Slide 2"
                data-bs-slide-to="1"
                data-bs-target="#carouselExampleIndicators"
                type="button"
                style={{ width: "106px", height: "3px" }}
              ></button>
              <Typography
                // className={
                //   'homeSliderTitle animated bounceInLeft d-none d-md-block'
                // }
                fontWeight={"500"}
                lineHeight={"1.1"}
                fontSize={{
                  xs: "15px",
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "18px",
                }}
                ml={0.3}
                minHeight={{ xl: "38px" }}
                sx={{
                  transition: "all 0.9s ease !important",
                  fontFamily: "gilroyregular, arial, sans-serif",
                  animationDelay: "2s",
                }}
              >
                {/* <FormattedMessage
                  id="about.slider.head.count.2"
                  values={{ br: <br /> }}
                /> */}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: 'center',
                padding: "10px",
              }}
            >
              <Typography
                // className={
                //   'homeSliderTitle animated bounceInLeft d-none d-md-block'
                // }
                fontWeight={"300"}
                lineHeight={"1.1"}
                fontSize={{
                  xs: "15px",
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "18px",
                }}
                ml={0.3}
                sx={{
                  transition: "all 0.9s ease !important",
                  fontFamily: "gilroyregular, arial, sans-serif",
                  animationDelay: "2s",
                }}
              >
                03
              </Typography>
              <button
                aria-label="Slide 3"
                data-bs-slide-to="2"
                data-bs-target="#carouselExampleIndicators"
                type="button"
                style={{ width: "106px", height: "3px" }}
              ></button>
              <Typography
                // className={
                //   'homeSliderTitle animated bounceInLeft d-none d-md-block'
                // }
                fontWeight={"500"}
                lineHeight={"1.1"}
                fontSize={{
                  xs: "15px",
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "18px",
                }}
                ml={0.3}
                minHeight={{ xl: "38px" }}
                sx={{
                  transition: "all 0.9s ease !important",
                  fontFamily: "gilroyregular, arial, sans-serif",
                  animationDelay: "2s",
                }}
              >
                {/* <FormattedMessage
                  id="about.slider.head.count.3"
                  values={{ br: <br /> }}
                /> */}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: 'center',
                padding: "10px",
              }}
            >
              <Typography
                // className={
                //   'homeSliderTitle animated bounceInLeft d-none d-md-block'
                // }
                fontWeight={"300"}
                lineHeight={"1.1"}
                fontSize={{
                  xs: "15px",
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "18px",
                }}
                ml={0.3}
                sx={{
                  transition: "all 0.9s ease !important",
                  fontFamily: "gilroyregular, arial, sans-serif",
                  animationDelay: "2s",
                }}
              >
                04
              </Typography>
              <button
                aria-label="Slide 4"
                data-bs-slide-to="3"
                data-bs-target="#carouselExampleIndicators"
                type="button"
                style={{ width: "106px", height: "3px" }}
              ></button>
              <Typography
                // className={
                //   'homeSliderTitle animated bounceInLeft d-none d-md-block'
                // }
                fontWeight={"500"}
                lineHeight={"1.1"}
                fontSize={{
                  xs: "15px",
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "18px",
                }}
                ml={0.3}
                minHeight={{ xl: "38px" }}
                sx={{
                  transition: "all 0.9s ease !important",
                  fontFamily: "gilroyregular, arial, sans-serif",
                  animationDelay: "2s",
                }}
              >
                {/* <FormattedMessage
                  id="about.slider.head.count.4"
                  values={{ br: <br /> }}
                /> */}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: 'center',
                padding: "10px",
              }}
            >
              <Typography
                // className={
                //   'homeSliderTitle animated bounceInLeft d-none d-md-block'
                // }
                fontWeight={"300"}
                lineHeight={"1.1"}
                fontSize={{
                  xs: "15px",
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "18px",
                }}
                ml={0.3}
                sx={{
                  transition: "all 0.9s ease !important",
                  fontFamily: "gilroyregular, arial, sans-serif",
                  animationDelay: "2s",
                }}
              >
                05
              </Typography>
              <button
                aria-label="Slide 5"
                data-bs-slide-to="4"
                data-bs-target="#carouselExampleIndicators"
                type="button"
                style={{
                  width: "106px",
                  height: "3px",
                  // backgroundColor: '#D9D9D9',
                }}
              ></button>
              <Typography
                // className={
                //   'homeSliderTitle animated bounceInLeft d-none d-md-block'
                // }
                fontWeight={"500"}
                lineHeight={"1.1"}
                fontSize={{
                  xs: "15px",
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "18px",
                }}
                ml={0.3}
                minHeight={{ xl: "38px" }}
                sx={{
                  transition: "all 0.9s ease !important",
                  fontFamily: "gilroyregular, arial, sans-serif",
                  animationDelay: "2s",
                }}
              >
                {/* <FormattedMessage
                  id="about.slider.head.count.5"
                  values={{ br: <br /> }}
                /> */}
              </Typography>
            </div>
          </div>
          {/* )} */}
          <div className="carousel-inner">
            <div
              className="carousel-item active animated "
              style={{ animationDuration: "1.5s" }}
            >
              <img
                alt="..."
                className="d-block w-100"
                style={{
                  animationDuration: "2s",
                  backgroundSize: "cover",
                }}
                src={BG}
              />
              <div
                className="titleSLider"
                // style={{
                //   position: 'absolute',
                //   top: '0%',
                //   left: '12%',
                // }}
              >
                {/* <Typography
                  className="animated animate__fadeInRight withdde"
                  fontWeight={'bold'}
                  //   data-aos={'fade-down'}
                  //   data-aos-easing={'linear'}
                  //   data-aos-duration={'1500'}
                  textAlign={'left'}
                  color="#2CDA5D"
                  // mb={2}
                  fontSize={{
                    xs: '18px',
                    sm: '19px',
                    md: '24px',
                    lg: '24px',
                    xl: '24px',
                  }}
                  sx={{
                    transition: 'all 0.9s ease !important',
                    fontFamily: 'gilroysemibold, arial, sans-serif',
                    animationDelay: '0.5s',
                    animationDuration: '2.2s',
                  }}
                >
                  {' '}
                  With Edde
                </Typography> */}
                {/* <h5
                  className="animated bounceInRight"
                  style={{ animationDelay: '1s' }}
                >
                  Web Design
                </h5> */}
                <Typography
                  className={"headSlider animated animate__fadeInRight"}
                  fontWeight={{
                    xs: "700",
                    sm: "700",
                    md: "500",
                    lg: "500",
                    xl: "500",
                  }}
                  textAlign={"left"}
                  lineHeight={"1.1"}
                  width={"616px"}
                  // mb={2}
                  fontSize={{
                    xs: "32px",
                    sm: "34px",
                    md: "50px",
                    lg: "55px",
                    xl: "60px",
                  }}
                  sx={{
                    transition: "all 0.9s ease !important",
                    fontFamily: "gilroyregular, arial, sans-serif",
                    animationDelay: "1s",
                    animationDuration: "2.2s",
                  }}
                >
                  {/* <FormattedMessage id="about.slider.head.1" /> */}
                </Typography>
                {/* <p
                  className="animated bounceInLeft d-none d-md-block"
                  style={{ animationDelay: '2s' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime, nulla, tempore. Deserunt excepturi quas vero.
                </p> */}
                <Typography
                  className="animated animate__fadeInRight paraSlider"
                  sx={{
                    transition: "all 0.9s ease",
                    color: "#FEFBF9",
                    animationDelay: "1.5s",
                    animationDuration: "2.2s",
                  }}
                  width={{
                    xs: "290px",
                    sm: "380px",
                    md: "677px",
                    lg: "677px",
                    xl: "677px",
                  }}
                  // paddingRight={'200px'}
                  textAlign={"left"}
                  fontSize={{ xs: "18px", sm: "19px", md: "20px", lg: "24px" }}
                >
                  {/* <FormattedMessage id="about.slider.para.1" /> */}
                </Typography>
              </div>
            </div>
            <div
              className="carousel-item animated "
              style={{ animationDuration: "1.5s" }}
            >
              <img
                alt="..."
                className="d-block w-100 "
                src={BG1}
                style={{ animationDuration: "1.5s" }}
              />
              <div
                //   className="carousel-caption"
                className="titleSLider"
                // style={{
                //   position: 'absolute',
                //   top: '0%',
                //   left: '12%',
                // }}
              >
                {/* <Typography
                  className="animated animate__fadeInRight withdde"
                  fontWeight={'bold'}
                  color="#2CDA5D"
                  // mb={2}
                  fontSize={{
                    xs: '18px',
                    sm: '19px',
                    md: '24px',
                    lg: '24px',
                    xl: '24px',
                  }}
                  sx={{
                    transition: 'all 0.9s ease !important',
                    fontFamily: 'gilroysemibold, arial, sans-serif',
                    animationDelay: '0.5s',
                    animationDuration: '2.2s',
                  }}
                  textAlign={'left'}
                >
                  With Edde
                </Typography> */}
                <Typography
                  className={"headSlider animated animate__fadeInRight"}
                  fontWeight={{
                    xs: "700",
                    sm: "700",
                    md: "500",
                    lg: "500",
                    xl: "500",
                  }}
                  textAlign={"left"}
                  lineHeight={"1.1"}
                  width={"616px"}
                  // mb={2}
                  fontSize={{
                    xs: "32px",
                    sm: "34px",
                    md: "50px",
                    lg: "55px",
                    xl: "60px",
                  }}
                  sx={{
                    transition: "all 0.9s ease !important",
                    fontFamily: "gilroyregular, arial, sans-serif",
                    animationDelay: "1s",
                    animationDuration: "2.2s",
                  }}
                >
                  {/* <FormattedMessage id="about.slider.head.2" /> */}
                </Typography>
                <Typography
                  className="animated animate__fadeInRight paraSlider"
                  sx={{
                    transition: "all 0.9s ease",
                    color: "#FEFBF9",
                    animationDelay: "1.5s",
                    animationDuration: "2.2s",
                  }}
                  width={{
                    xs: "290px",
                    sm: "380px",
                    md: "677px",
                    lg: "677px",
                    xl: "677px",
                  }}
                  // paddingRight={'200px'}
                  textAlign={"left"}
                  fontSize={{ xs: "18px", sm: "19px", md: "20px", lg: "24px" }}
                >
                  {/* <FormattedMessage id="about.slider.para.2" /> */}
                </Typography>
              </div>
            </div>
            <div
              className="carousel-item animated "
              style={{ animationDuration: "1.5s" }}
            >
              <img
                alt="..."
                className="d-block w-100 "
                src={BG2}
                style={{ animationDuration: "1.5s" }}
              />
              <div
                className="titleSLider"
                // style={{
                //   position: 'absolute',
                //   top: '0%',
                //   left: '12%',
                // }}
              >
                {/* <Typography
                  className="animated animate__fadeInRight withdde"
                  fontWeight={'bold'}
                  color="#2CDA5D"
                  // mb={0}
                  fontSize={{
                    xs: '18px',
                    sm: '19px',
                    md: '24px',
                    lg: '24px',
                    xl: '24px',
                  }}
                  sx={{
                    transition: 'all 0.9s ease !important',
                    fontFamily: 'gilroysemibold, arial, sans-serif',
                    animationDelay: '0.5s',
                    animationDuration: '2.2s',
                  }}
                  textAlign={'left'}
                >
                  With Edde
                </Typography> */}
                <Typography
                  className={"headSlider animated animate__fadeInRight"}
                  fontWeight={{
                    xs: "700",
                    sm: "700",
                    md: "500",
                    lg: "500",
                    xl: "500",
                  }}
                  textAlign={"left"}
                  lineHeight={"1.1"}
                  width={"616px"}
                  // mb={2}
                  fontSize={{
                    xs: "32px",
                    sm: "34px",
                    md: "50px",
                    lg: "55px",
                    xl: "60px",
                  }}
                  sx={{
                    transition: "all 0.9s ease !important",
                    fontFamily: "gilroyregular, arial, sans-serif",
                    animationDelay: "1s",
                    animationDuration: "2.2s",
                  }}
                >
                  {/* <FormattedMessage id="about.slider.head.3" /> */}
                </Typography>
                <Typography
                  className="animated animate__fadeInRight paraSlider"
                  sx={{
                    transition: "all 0.9s ease",
                    color: "#FEFBF9",
                    animationDelay: "1.5s",
                    animationDuration: "2.2s",
                  }}
                  width={{
                    xs: "290px",
                    sm: "380px",
                    md: "677px",
                    lg: "677px",
                    xl: "677px",
                  }}
                  // paddingRight={'200px'}
                  textAlign={"left"}
                  fontSize={{ xs: "18px", sm: "19px", md: "20px", lg: "24px" }}
                >
                  {/* <FormattedMessage id="about.slider.para.3" /> */}
                </Typography>
              </div>
            </div>
            <div
              className="carousel-item animated "
              style={{ animationDuration: "1.5s" }}
            >
              <img
                alt="..."
                className="d-block w-100 "
                src={BG3}
                style={{ animationDuration: "1s" }}
              />
              <div
                className="titleSLider"
                // style={{
                //   position: 'absolute',
                //   top: '0%',
                //   left: '12%',
                // }}
              >
                {/* <Typography
                  className="animated animate__fadeInRight withdde"
                  fontWeight={'bold'}
                  color="#2CDA5D"
                  // mb={2}
                  fontSize={{
                    xs: '18px',
                    sm: '19px',
                    md: '24px',
                    lg: '24px',
                    xl: '24px',
                  }}
                  sx={{
                    transition: 'all 0.9s ease !important',
                    fontFamily: 'gilroysemibold, arial, sans-serif',
                    animationDelay: '0.5s',
                    animationDuration: '2.2s',
                  }}
                  textAlign={'left'}
                >
                  With Edde
                </Typography> */}
                <Typography
                  className={"headSlider animated animate__fadeInRight"}
                  fontWeight={{
                    xs: "700",
                    sm: "700",
                    md: "500",
                    lg: "500",
                    xl: "500",
                  }}
                  textAlign={"left"}
                  lineHeight={"1.1"}
                  width={"616px"}
                  // mb={2}
                  fontSize={{
                    xs: "32px",
                    sm: "34px",
                    md: "50px",
                    lg: "55px",
                    xl: "60px",
                  }}
                  sx={{
                    transition: "all 0.9s ease !important",
                    fontFamily: "gilroyregular, arial, sans-serif",
                    animationDelay: "1s",
                    animationDuration: "2.2s",
                  }}
                >
                  {/* <FormattedMessage id="about.slider.head.4" /> */}
                </Typography>
                <Typography
                  className="animated animate__fadeInRight paraSlider"
                  sx={{
                    transition: "all 0.9s ease",
                    color: "#FEFBF9",
                    animationDelay: "1.5s",
                    animationDuration: "2.2s",
                  }}
                  width={{
                    xs: "290px",
                    sm: "380px",
                    md: "677px",
                    lg: "677px",
                    xl: "677px",
                  }}
                  // paddingRight={'200px'}
                  textAlign={"left"}
                  fontSize={{ xs: "18px", sm: "19px", md: "20px", lg: "24px" }}
                >
                  {/* <FormattedMessage id="about.slider.para.4" /> */}
                </Typography>
              </div>
            </div>
            <div
              className="carousel-item animated "
              style={{ animationDuration: "1.5s" }}
            >
              <img
                alt="..."
                className="d-block w-100 "
                src={BG4}
                style={{ animationDuration: "1s" }}
              />
              <div
                className="titleSLider"
                // style={{
                //   position: 'absolute',
                //   top: '0%',
                //   left: '12%',
                // }}
              >
                {/* <Typography
                  className="animated animate__fadeInRight withdde"
                  fontWeight={'bold'}
                  color="#2CDA5D"
                  // mb={2}
                  fontSize={{
                    xs: '18px',
                    sm: '19px',
                    md: '24px',
                    lg: '24px',
                    xl: '24px',
                  }}
                  sx={{
                    transition: 'all 0.9s ease !important',
                    fontFamily: 'gilroysemibold, arial, sans-serif',
                    animationDelay: '0.5s',
                    animationDuration: '2.2s',
                  }}
                  textAlign={'left'}
                >
                  With Edde
                </Typography> */}
                <Typography
                  className={"headSlider animated animate__fadeInRight"}
                  fontWeight={{
                    xs: "500",
                    sm: "500",
                    md: "500",
                    lg: "500",
                    xl: "500",
                  }}
                  textAlign={"left"}
                  lineHeight={"1.1"}
                  width={"616px"}
                  // mb={2}
                  fontSize={{
                    xs: "32px",
                    sm: "34px",
                    md: "50px",
                    lg: "55px",
                    xl: "60px",
                  }}
                  sx={{
                    transition: "all 0.9s ease !important",
                    fontFamily: "gilroyregular, arial, sans-serif",
                    animationDelay: "1s",
                    animationDuration: "2.2s",
                  }}
                >
                  {/* <FormattedMessage id="about.slider.head.5" /> */}
                </Typography>
                <Typography
                  className="animated animate__fadeInRight paraSlider"
                  sx={{
                    transition: "all 0.9s ease",
                    color: "#FEFBF9",
                    animationDelay: "1.5s",
                    animationDuration: "2.2s",
                  }}
                  width={{
                    xs: "290px",
                    sm: "380px",
                    md: "677px",
                    lg: "677px",
                    xl: "677px",
                  }}
                  // paddingRight={'200px'}
                  textAlign={"left"}
                  fontSize={{ xs: "18px", sm: "19px", md: "20px", lg: "24px" }}
                  //conencted
                >
                  {/* <FormattedMessage id="about.slider.para.5" /> */}
                </Typography>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            data-bs-slide="prev"
            data-bs-target="#carouselExampleIndicators"
            type="button"
          >
            <span
              aria-hidden="true"
              className="carousel-control-prev-icon"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            data-bs-slide="next"
            data-bs-target="#carouselExampleIndicators"
            type="button"
          >
            <span
              aria-hidden="true"
              className="carousel-control-next-icon"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousels;
