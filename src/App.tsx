import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NuqsAdapter } from 'nuqs/adapters/react-router/v6';
import Navbar from '@layout/Navbar';
import Footer from '@layout/Footer';
import AboutPage from '@pages/about';
import Components from '@pages/components';

import HomePage from '@pages/home';
import Ideas from '@pages/Ideas';
import JoinUs from '@pages/JoinUs';
import TermsOfService from '@pages/TermsOfService';
import ScrollToTop from '@ui/ScrollToTop';
import Discord from '@pages/Discord';
import NotFound from '@pages/NotFound';
import AccessibilityPage from '@pages/accessibility';
import Tokens from '@pages/tokens';

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
