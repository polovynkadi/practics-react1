import React from "react";
import Card from "../Card";
import "./Home.css";

function Home(props) {
  const {
    ourContact,
    office4042ImperialRoadUk,
    help0411425277425,
    emailInboxFinanceCom,
    aboutUs1,
    loremIpsumDolorSi1,
    subscribe,
    yourEmail,
    followUs,
    weLikeToStartYourProjectWithUs,
    getInTouch1,
    address1,
    byAdmin1,
    loremIpsumDolorSi2,
    readMore1,
    blog,
    readOurnews,
    address2,
    byAdmin2,
    loremIpsumDolorSi3,
    readMore2,
    address3,
    byAdmin3,
    loremIpsumDolorSi4,
    readMore3,
    testimony,
    whatDoOurClientsSaysAboutUs,
    loremIpsumDolorSi5,
    name,
    itConsultant,
    portfolio,
    viewOurCaseStudies,
    loremIpsumDolorSi6,
    viewAll,
    aboutUs2,
    designDevelopForBetterSolution,
    loremIpsumDolorSi7,
    learnMore,
    creativeWorkCreativeMind,
    weAreDigitalCreativeAgency,
    loremIpsumDolorSi8,
    getInTouch2,
    design,
    loremIpsumDolorSi9,
    development,
    loremIpsumDolorSi10,
    testingQa,
    loremIpsumDolorSi11,
    navbarLinkPlace1,
    navbarLinkAboutUs,
    navbarLinkPortfolio,
    navbarLinkTestimony,
    navbarLinkNews,
    navbarLinkPlace2,
    card1Props,
    card2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home screen">
        <div className="overlap-group2">
          <div className="bg">
            <div className="ellipse-14"></div>
            <div className="ellipse-14-1"></div>
            <div className="ellipse-15"></div>
          </div>
          <footer className="footer">
            <img className="frame-20" src="/img/frame-20.svg" alt="Frame 20" />
            <div className="frame-27">
              <div className="our-contact poppins-medium-steel-gray-18px">{ourContact}</div>
              <p className="office-4042-imperial-road-uk poppins-normal-steel-gray-14px">{office4042ImperialRoadUk}</p>
              <p className="frame-27-item poppins-normal-steel-gray-14px">{help0411425277425}</p>
              <div className="frame-27-item poppins-normal-steel-gray-14px">{emailInboxFinanceCom}</div>
            </div>
            <div className="flex-col-1">
              <div className="about-us poppins-medium-steel-gray-18px">{aboutUs1}</div>
              <p className="lorem-ipsum-dolor-si-2 poppins-normal-steel-gray-14px">{loremIpsumDolorSi1}</p>
            </div>
            <div className="flex-col-2">
              <div className="frame-28">
                <div className="subscribe poppins-medium-steel-gray-18px">{subscribe}</div>
                <div className="overlap-group">
                  <div className="your-email valign-text-middle">{yourEmail}</div>
                  <img
                    className="fluentsend-20-filled"
                    src="/img/fluent-send-20-filled.svg"
                    alt="fluent:send-20-filled"
                  />
                </div>
              </div>
              <div className="group-2">
                <div className="follow-us poppins-medium-steel-gray-18px">{followUs}</div>
                <img className="social-icons" src="/img/social-icons.svg" alt="social icons" />
              </div>
            </div>
          </footer>
          <div className="get-in-touch">
            <p className="we-like-to-start-your-project-with-us">{weLikeToStartYourProjectWithUs}</p>
            <div className="overlap-group-1">
              <div className="get-in-touch-1 poppins-semi-bold-royal-blue-14px">{getInTouch1}</div>
            </div>
          </div>
          <div className="blog">
            <div className="flex-col-3">
              <img className="rectangle" src="/img/rectangle-6.svg" alt="Rectangle 6" />
              <div className="frame-1">
                <div className="frame-16 poppins-medium-bastille-12px">
                  <div className="address">{address1}</div>
                  <div className="by-admin">{byAdmin1}</div>
                </div>
                <p className="lorem-ipsum-dolor-si poppins-normal-bastille-14px">{loremIpsumDolorSi2}</p>
                <div className="read-more poppins-normal-royal-blue-14px">{readMore1}</div>
              </div>
            </div>
            <div className="flex-col-4">
              <div className="blog-1 poppins-medium-bastille-14px">{blog}</div>
              <div className="read-our-news poppins-semi-bold-bastille-48px">{readOurnews}</div>
              <img className="rectangle-7" src="/img/rectangle-7.svg" alt="Rectangle 7" />
              <div className="frame-18">
                <div className="frame-16 poppins-medium-bastille-12px">
                  <div className="address">{address2}</div>
                  <div className="by-admin">{byAdmin2}</div>
                </div>
                <p className="lorem-ipsum-dolor-si poppins-normal-bastille-14px">{loremIpsumDolorSi3}</p>
                <div className="read-more poppins-normal-royal-blue-14px">{readMore2}</div>
              </div>
            </div>
            <div className="flex-col-5">
              <img className="rectangle" src="/img/rectangle-8.svg" alt="Rectangle 8" />
              <div className="frame-1">
                <div className="frame-16 poppins-medium-bastille-12px">
                  <div className="address">{address3}</div>
                  <div className="by-admin">{byAdmin3}</div>
                </div>
                <p className="lorem-ipsum-dolor-si poppins-normal-bastille-14px">{loremIpsumDolorSi4}</p>
                <div className="read-more poppins-normal-royal-blue-14px">{readMore3}</div>
              </div>
            </div>
          </div>
          <div className="testimony">
            <div className="ellipse-container">
              <img className="ellipse" src="/img/ellipse-2.svg" alt="Ellipse 2" />
              <img className="ellipse-1" src="/img/ellipse-4.svg" alt="Ellipse 4" />
            </div>
            <img className="ellipse-3" src="/img/ellipse-3.svg" alt="Ellipse 3" />
            <div className="flex-col-6">
              <div className="testimony-1 poppins-medium-bastille-14px">{testimony}</div>
              <p className="what-do-our-clients-says-about-us poppins-semi-bold-bastille-48px">
                {whatDoOurClientsSaysAboutUs}
              </p>
              <div className="overlap-group1">
                <div className="ellipse-14-2"></div>
                <div className="ellipse-5"></div>
                <img className="ellipse-6" src="/img/ellipse-6.svg" alt="Ellipse 6" />
                <p className="lorem-ipsum-dolor-si-3">{loremIpsumDolorSi5}</p>
              </div>
              <div className="name poppins-medium-bastille-14px">{name}</div>
              <div className="it-consultant">{itConsultant}</div>
              <div className="frame-6">
                <div className="ellipse-10"></div>
                <div className="ellipse-11"></div>
                <div className="ellipse-1-1"></div>
                <div className="ellipse-1-1"></div>
              </div>
            </div>
            <img className="ellipse-8" src="/img/ellipse-8.svg" alt="Ellipse 8" />
            <div className="ellipse-container-1">
              <img className="ellipse-1" src="/img/ellipse-9.svg" alt="Ellipse 9" />
              <img className="ellipse" src="/img/ellipse-7.svg" alt="Ellipse 7" />
            </div>
          </div>
          <div className="portfolio">
            <div className="flex-row">
              <div className="flex-col-7">
                <div className="portfolio-1 poppins-medium-bastille-14px">{portfolio}</div>
                <div className="view-our-case-studies poppins-semi-bold-bastille-48px">{viewOurCaseStudies}</div>
              </div>
              <div className="flex-col-8">
                <p className="lorem-ipsum-dolor-si-4 poppins-normal-black-14px">{loremIpsumDolorSi6}</p>
                <div className="frame-4">
                  <div className="vi-ew-all valign-text-middle">{viewAll}</div>
                  <img className="vector" src="/img/vector.svg" alt="Vector" />
                </div>
              </div>
            </div>
            <div className="card-container">
              <Card />
              <Card className={card1Props.className} />
              <Card className={card2Props.className} />
            </div>
          </div>
          <div className="about-us-1">
            <img className="rectangle-3" src="/img/rectangle-3.svg" alt="Rectangle 3" />
            <div className="flex-col-9">
              <div className="about-us-2 poppins-medium-bastille-14px">{aboutUs2}</div>
              <p className="design-develop-for-better-solution poppins-semi-bold-bastille-48px">
                {designDevelopForBetterSolution}
              </p>
              <p className="lorem-ipsum-dolor-si-5 poppins-normal-black-14px">{loremIpsumDolorSi7}</p>
              <div className="overlap-group-2">
                <div className="learn-more valign-text-middle poppins-medium-white-14px">{learnMore}</div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="flex-row-1">
              <div className="flex-col-10">
                <div className="creative-work-creative-mind poppins-medium-bastille-14px">
                  {creativeWorkCreativeMind}
                </div>
                <h1 className="we-are-digital-creative-agency">{weAreDigitalCreativeAgency}</h1>
                <p className="lorem-ipsum-dolor-si-6">{loremIpsumDolorSi8}</p>
                <div className="button">
                  <div className="get-in-touch-2 valign-text-middle poppins-medium-white-14px">{getInTouch2}</div>
                </div>
              </div>
              <img className="rectangle-2" src="/img/rectangle-2.svg" alt="Rectangle 2" />
              <img className="rectangle-1" src="/img/rectangle-1.svg" alt="Rectangle 1" />
            </div>
            <div className="frame-container">
              <div className="frame">
                <div className="design">
                  <img className="vector-1" src="/img/vector-4.svg" alt="Vector" />
                </div>
                <div className="flex-col">
                  <div className="design-1 valign-text-middle poppins-medium-bastille-18px">{design}</div>
                  <p className="lorem-ipsum-dolor-si-1 valign-text-middle poppins-normal-bastille-14px-2">
                    {loremIpsumDolorSi9}
                  </p>
                </div>
              </div>
              <div className="frame">
                <div className="development">
                  <div className="vector-container">
                    <img className="vector-2" src="/img/vector-5.svg" alt="Vector" />
                    <img className="vector-3" src="/img/vector-6.svg" alt="Vector" />
                  </div>
                </div>
                <div className="flex-col">
                  <div className="development-1 valign-text-middle poppins-medium-bastille-18px">{development}</div>
                  <p className="lorem-ipsum-dolor-si-1 valign-text-middle poppins-normal-bastille-14px-2">
                    {loremIpsumDolorSi10}
                  </p>
                </div>
              </div>
              <div className="frame">
                <div className="overlap-group1-1">
                  <img className="icon-check_mark" src="/img/vector-7.svg" alt="icon-check_mark" />
                  <img className="vector-4" src="/img/vector-8.svg" alt="Vector" />
                </div>
                <div className="flex-col">
                  <div className="testing-qa valign-text-middle poppins-medium-bastille-18px">{testingQa}</div>
                  <p className="lorem-ipsum-dolor-si-1 valign-text-middle poppins-normal-bastille-14px-2">
                    {loremIpsumDolorSi11}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <header className="header">
            <img className="frame-20-1" src="/img/frame-20.svg" alt="Frame 20" />
            <div className="navbar">
              <div className="navbar-link-place poppins-semi-bold-royal-blue-14px">{navbarLinkPlace1}</div>
              <div className="navbar-link-about-us poppins-normal-bastille-14px">{navbarLinkAboutUs}</div>
              <div className="navbar-link-portfolio poppins-normal-bastille-14px">{navbarLinkPortfolio}</div>
              <div className="navbar-link-testimony poppins-normal-bastille-14px">{navbarLinkTestimony}</div>
              <div className="navbar-link-news poppins-normal-bastille-14px">{navbarLinkNews}</div>
              <div className="navbar-link-place-1 poppins-normal-bastille-14px">{navbarLinkPlace2}</div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default Home;
