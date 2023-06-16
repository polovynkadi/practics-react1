import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|home)">
          <Home {...homeData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const card2Data = {
    className: "card-1",
};

const card3Data = {
    className: "card-2",
};

const homeData = {
    ourContact: "Our Contact",
    office4042ImperialRoadUk: "Office: 4042 Imperial Road, UK",
    help0411425277425: "Help; (0411) 425 277 / 425",
    emailInboxFinanceCom: "Email: inbox@finance.com",
    aboutUs1: "About Us",
    loremIpsumDolorSi1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies",
    subscribe: "Subscribe",
    yourEmail: "Your Email",
    followUs: "Follow Us",
    weLikeToStartYourProjectWithUs: "We Like To Start Your Project With Us",
    getInTouch1: "Get in Touch",
    address1: "09 April,2022",
    byAdmin1: "by Admin",
    loremIpsumDolorSi2: "Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam",
    readMore1: "Read More",
    blog: "BLOG",
    readOurnews: "Read OurNews",
    address2: "09 April,2022",
    byAdmin2: "by Admin",
    loremIpsumDolorSi3: "Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam",
    readMore2: "Read More",
    address3: "09 April,2022",
    byAdmin3: "by Admin",
    loremIpsumDolorSi4: "Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam",
    readMore3: "Read More",
    testimony: "TESTIMONY",
    whatDoOurClientsSaysAboutUs: "What Do Our Clients Says About Us",
    loremIpsumDolorSi5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
    name: "JAMES JOKOVIC",
    itConsultant: "IT CONSULTANT",
    portfolio: "PORTFOLIO",
    viewOurCaseStudies: "View Our Case Studies",
    loremIpsumDolorSi6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, hab",
    viewAll: "VIEW ALL",
    aboutUs2: "ABOUT US",
    designDevelopForBetterSolution: <React.Fragment>Design &amp; Develop<br />For Better Solution</React.Fragment>,
    loremIpsumDolorSi7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, habitasse nec mauris sagittis imperdiet lobortis porttitor. Ipsum mi sed uta aliquet ut. Turpis viverra volutpat sed eu porta morbi egesta ut   hac rutrum ut augue vitae, nec, ut. Nibh nibh quam",
    learnMore: "Learn More",
    creativeWorkCreativeMind: "CREATIVE WORK, CREATIVE MIND",
    weAreDigitalCreativeAgency: <React.Fragment>We Are Digital<br />Creative Agency</React.Fragment>,
    loremIpsumDolorSi8: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi sed metus id et viverra augue.",
    getInTouch2: "Get in Touch",
    design: "Design",
    loremIpsumDolorSi9: "Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus  id et viverra augue.",
    development: "Development",
    loremIpsumDolorSi10: "Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus  id et viverra augue.",
    testingQa: "Testing & QA",
    loremIpsumDolorSi11: "Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus  id et viverra augue.",
    navbarLinkPlace1: "Home",
    navbarLinkAboutUs: "About Us",
    navbarLinkPortfolio: "Portfolio",
    navbarLinkTestimony: "Testimony",
    navbarLinkNews: "News",
    navbarLinkPlace2: "Contact",
    card1Props: card2Data,
    card2Props: card3Data,
};

