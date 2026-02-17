import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NuqsAdapter } from 'nuqs/adapters/react-router/v6';
import Navbar from '@layout/Navbar';
import Footer from '@layout/Footer';
import AboutPage from './lib/demo/pages/about';
import Components from './lib/demo/pages/components';

import HomePage from './lib/demo/pages/home';
import Ideas from './lib/demo/pages/Ideas';
import JoinUs from './lib/demo/pages/JoinUs';
import TermsOfService from './lib/demo/pages/TermsOfService';
import ScrollToTop from '@ui/ScrollToTop';
import Discord from './lib/demo/pages/Discord';
import NotFound from './lib/demo/pages/NotFound';
import AccessibilityPage from './lib/demo/pages/accessibility';
import Tokens from './lib/demo/pages/tokens';

function App() {
  return (
    <Router>
      <NuqsAdapter>
        <div className='min-h-screen flex flex-col'>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/components' element={<Components />} />
            <Route path='/tokens' element={<Tokens />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/accessibility' element={<AccessibilityPage />} />
            <Route path='/ideas' element={<Ideas />} />
            <Route path='/join-us' element={<JoinUs />} />{' '}
            <Route path='/terms-of-service' element={<TermsOfService />} />
            <Route path='/discord' Component={Discord} />
            {/*Not Found/404 Page */}
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </NuqsAdapter>
    </Router>
  );
}

export default App;
