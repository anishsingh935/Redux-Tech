import React from "react";
// import NavBar from "../Components/NavBar";
// import MerkabaLogo from "../images/Cannabis_News_small.png";
import "./home.css";
import Content1 from "../images/content1.png"
import Content2 from "../images/content2.png"
import Content3 from "../images/content3.png"
import downDots from "../images/downDots.png"
import upDots from "../images/upDots.png"
import circleDown from "../images/circleDown.png"
import row3img from "../images/row3img.png"
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Image } from 'react-bootstrap';
import { Hidden } from '@material-ui/core';

import HeaderHeroImage from '../images/home_hero_image.png';
import HomeChevron from '../images/home-chevron-down.png'
import row4img1 from '../images/row4img1.png'
import row4img2 from '../images/row4img2.png'
import row4img3 from '../images/row4img3.png'
import row4img4 from '../images/row4img4.png'
import row4img5 from '../images/row4img5.png'
import row4img6 from '../images/row4img6.png'


const Home = () => {
    const history = useNavigate()
    return (
        <div>
            <header className="home__HeaderContainer" style={{ float: "left" }}>
                <Container>

                    {/* first row part */}
                    <Row>
                        {/* <Col xs={6}> */}
                        <div className="home__mainConatiner">
                            <div className="home__leftSideContainer">
                                <h1 className="home__headerHeroTextTitle">
                                    Analyze <span className="home__headerHeroTextSpan">Cannabis</span> News through a Rest API
                                </h1>
                                <p className="home__headerHeroTextDescription">
                                    With over 500 news sources, from all 50 states and their cities. Cannabis news articles are enhanced with metadata derived from machine learning algorithms.
                                </p>
                                <Button
                                    bsPrefix="home__getStarted"
                                    onClick={() => history("/register")}
                                >Get Started</Button>
                            </div>
                            {/* </Col> */}
                            {/* <Hidden xsDown> */}
                            {/* <Col xs={5}> */}
                            <div className="home__rightSideContainer">
                                <Image
                                    src={HeaderHeroImage}
                                    alt="home-hero-image"
                                    fluid
                                    style={{ width: "100%" }}
                                />
                            </div>
                        </div>
                        {/* </Col> */}
                        {/* </Hidden> */}
                    </Row>

                    {/* second row part */}
                    <Row>
                        <div className="home__secondPt">
                            <div className="secondPt__header">Cannabis News API Machine Learning
                                <div className="secondPt__header__underline"></div>
                            </div>
                            <div className="secondPt__bottom_header">We use the ML algorithms to do the following</div>

                            <div className="secondPt__content">
                                <div className="secondPt__content__1">
                                    <div className="secondPt__content__img"><img src={Content1} style={{ width: "31.08%" }} alt="load" /></div>
                                    <div className="secondPt__content__header">Pre-processing</div>
                                    <div className="secondPt__content__bottomHeader">LDA & TFIDF Vectorizer for text preprocessing and topic extraction.</div>

                                    <div className="downDots"><img src={downDots} alt="load" /></div>
                                </div>

                                <div className="secondPt__content__2">
                                    <div className="secondPt__content__img"><img src={Content2} style={{ width: "31.08%" }} alt="load" /></div>
                                    <div className="secondPt__content__header">Summarization</div>
                                    <div className="secondPt__content__bottomHeader">T5 transformer-based language model for text summarization</div>

                                    <div className="circleDown"><img src={circleDown} alt="load" /></div>
                                </div>

                                <div className="secondPt__content__2">
                                    <div className="secondPt__content__img"><img src={Content3} style={{ width: "31.08%" }} alt="load" /></div>
                                    <div className="secondPt__content__header">Sentiment Analysis</div>
                                    <div className="secondPt__content__bottomHeader">Multinomial Naive Bayes for sentiment classification.</div>

                                    <div className="upDots"><img src={upDots} alt="load" /></div>

                                </div>
                            </div>
                        </div>
                    </Row>

                    {/* third row part */}
                    <Row>
                        <div className="home__thirdPt">
                            <div className="thirdPt__header">Developers First</div>
                            <div className="thirdPt__content">

                                <div className="thirdPt__content__leftSide"> <img src={row3img} alt="load" /> </div>
                                <div className="thirdPt__content__rightSide">
                                    <div className="thirdPt__content__rightSide__label">
                                        We believe the best way to analyze news at scale is through code.
                                        We strive to provide clear and concise documentation so developers can get up and
                                        running with Cannabis New API in just a couple of minutes.
                                    </div>
                                    <div className="thirdPt__content__rightSide__btn"><button>Developer Docs</button></div>
                                </div>

                            </div>
                        </div>
                    </Row>

                    {/* fourth row part */}
                    <Row>
                        <div className="home__fourthPt">
                            <div className="home__fourthPt__header">
                                How we use Natural Language Processing To Provide Relevant Information About Articles:

                                <div className="row4__underline1"></div>
                                <div className="row4__underline2"></div>
                            </div>

                            {/* for laptop and tabs content 1 */}
                            <div className="home__fourthPt__content1">

                                <div className="home__fourthPt__content__top">
                                    {/* content 1 */}
                                    <div className="row4__content">
                                        {/* content 1 img */}
                                        <div className="row4__content__img"><img src={row4img1} alt="load" /></div>
                                        <div className="row4__content__content">

                                            <div className="row4__content__content__header">GPE</div>
                                            <div className="row4__content__content__content">
                                                Geographic Position Extraction identifies and extract location names or entities
                                            </div>
                                        </div>
                                    </div>

                                    {/* content 2 */}
                                    <div className="row4__content">
                                        {/* content 2 img */}
                                        <div className="row4__content__img"><img src={row4img2} alt="load" /></div>
                                        <div className="row4__content1__content">

                                            <div className="row4__content__content__header">Topics </div>
                                            <div className="row4__content__content__content">
                                                Topic analysis categorizes articles with the following topics: Politics, Crime, Business, and Consumer
                                            </div>
                                        </div>
                                    </div>

                                    {/* content 3 */}
                                    <div className="row4__content">
                                        {/* content 3 img */}
                                        <div className="row4__content__img"><img src={row4img3} alt="load" /></div>
                                        <div className="row4__content__content">

                                            <div className="row4__content__content__header">Sentiment</div>
                                            <div className="row4__content__content__content">
                                                Positive, Neutral and Negative
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="home__fourthPt__content__below">
                                    {/* content 4 */}
                                    <div className="row4__content">
                                        {/* content 4 img */}
                                        <div className="row4__content__img"><img src={row4img4} alt="load" /></div>
                                        <div className="row4__content__content">

                                            <div className="row4__content__content__header">PERSON </div>
                                            <div className="row4__content__content__content">
                                                Extracts names of people or individuals
                                            </div>
                                        </div>
                                    </div>

                                    {/* content 5 */}
                                    <div className="row4__content">
                                        {/* content 5 img */}
                                        <div className="row4__content__img"><img src={row4img5} alt="load" /></div>
                                        <div className="row4__content__content">

                                            <div className="row4__content__content__header">ORG</div>
                                            <div className="row4__content__content__content">
                                                Organization Recognition extracts names of organizations
                                            </div>
                                        </div>
                                    </div>

                                    {/* content 6 */}
                                    <div className="row4__content">
                                        {/* content 6 img */}
                                        <div className="row4__content__img"><img src={row4img6} alt="load" /></div>
                                        <div className="row4__content__content">

                                            <div className="row4__content__content__header">Summarization</div>
                                            <div className="row4__content__content__content">
                                                Summarization of news article content
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* for mobile content 1 */}
                            <div className="home__fourthPt__content2">

                                <div className="home__fourthPt__content__top">
                                    {/* content 1 */}
                                    <div className="row4__content">
                                        {/* content 1 img */}
                                        <div className="row4__content__img"><img src={row4img1} alt="load" /></div>
                                        <div className="row4__content__content">

                                            <div className="row4__content__content__header">GPE</div>
                                            <div className="row4__content__content__content">
                                                Geographic Position Extraction identifies and extract location names or entities
                                            </div>
                                        </div>
                                    </div>

                                    {/* content 2 */}
                                    <div className="row4__content">
                                        {/* content 2 img */}
                                        <div className="row4__content__img"><img src={row4img2} alt="load" /></div>
                                        <div className="row4__content1__content">

                                            <div className="row4__content__content__header">Topics </div>
                                            <div className="row4__content__content__content">
                                                Topic analysis categorizes articles with the following topics: Politics, Crime, Business, and Consumer
                                            </div>
                                        </div>
                                    </div>

                                    <div className="home__fourthPt__content__middle">

                                        {/* content 3 */}
                                        <div className="row4__content">
                                            {/* content 3 img */}
                                            <div className="row4__content__img"><img src={row4img3} alt="load" /></div>
                                            <div className="row4__content__content">

                                                <div className="row4__content__content__header">Sentiment</div>
                                                <div className="row4__content__content__content">
                                                    Positive, Neutral and Negative
                                                </div>
                                            </div>
                                        </div>

                                        {/* content 4 */}
                                        <div className="row4__content">
                                            {/* content 4 img */}
                                            <div className="row4__content__img"><img src={row4img4} alt="load" /></div>
                                            <div className="row4__content__content">

                                                <div className="row4__content__content__header">PERSON </div>
                                                <div className="row4__content__content__content">
                                                    Extracts names of people or individuals
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="home__fourthPt__content__below">

                                    {/* content 5 */}
                                    <div className="row4__content">
                                        {/* content 5 img */}
                                        <div className="row4__content__img"><img src={row4img5} alt="load" /></div>
                                        <div className="row4__content__content">

                                            <div className="row4__content__content__header">ORG</div>
                                            <div className="row4__content__content__content">
                                                Organization Recognition extracts names of organizations
                                            </div>
                                        </div>
                                    </div>

                                    {/* content 6 */}
                                    <div className="row4__content">
                                        {/* content 6 img */}
                                        <div className="row4__content__img"><img src={row4img6} alt="load" /></div>
                                        <div className="row4__content__content">

                                            <div className="row4__content__content__header">Summarization</div>
                                            <div className="row4__content__content__content">
                                                Summarization of news article content
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </Row>

                    {/* fifth part footer */}
                    <Row>
                        <div className="home__footer">
                            <div className="home__footer__leftSide">Signup to become a beta tester and get your API key today.</div>
                            <div className="home__footer__rightSide"><button>Signup</button></div>
                            <div className="home__footer__copyRight">© 2023 Cannabis News API. All right reserved.</div>
                        </div>
                    </Row>

                </Container>
                <Hidden smUp>
                    <img
                        src={HomeChevron}
                        alt="Chevron Down"
                        className="header__chavron_down"
                    />
                </Hidden>
            </header>
        </div>
    );
};

export default Home;
