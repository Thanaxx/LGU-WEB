import React, {useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Page/Home';
import Job from './Page/Jobs';
import Mayor from './Page/Mayor';
import Tour from './Page/Tourism';
import News from './Page/News';
import Footer from './Component/Footer'
import Contacts from './Page/Contacts';
import Faq from './Page/FAQ';
import Aos from 'aos';
import 'aos/dist/aos.css'
import ScrollToTop from './Page/ScrollToTop';

function App() {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1600,
      delay: 100,
    });
  })

  return (
    <>
        <Router>
        <ScrollToTop />
          <Switch>
              <Route path="/home" exact component={Home} />
              <Route path="/" exact component={Home} />
              <Route path="/government/mayor" exact component={Mayor} />
              <Route path="/government/vice" exact component={Mayor} />
              <Route path="/government/profile" exact component={Mayor} />
              <Route path="/government/council" exact component={Mayor} />
              <Route path="/news" exact component={News} />
              <Route path="/jobs" exact component={Job} />
              <Route path="/tourism" exact component={Tour} />
              <Route path="/contact" exact component={Contacts} />
              <Route path="/faq" exact component={Faq} />
          </Switch>
              <Footer />
      </Router>
    </>
  );
}

export default App;
