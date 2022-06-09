import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/Theme';
import GlobalStyle from 'styles/GlobalStyles';
import ScrollToTop from 'components/Element/ScrollToTop';
import IEComponent from 'components/Element/IE/IEComponent';
import checkIE from 'modules/checkIE';
import Main from 'routes/Main';
import NotFound from 'routes/NotFound';

function App(props) {
  const isIE = checkIE();

  return isIE ? (
    <IEComponent />
  ) : (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
