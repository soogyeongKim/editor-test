// theme
const colors = {
  lightGray: '#DCDCE5',
  main: '#D9A796',
  sub: '#F2EDDC',
  font: '#595952',

  colorFF: '#FFE4E5',
  colorDE: '#DEDEDE',

  background: '#F9F9F9',

  fontBlack: '#191919',
  fontGray: '#767676',
  warningColor: '#FF0000',
};

const element = {
  padding: '12px 20px',
  mPadding: '12px 10px',
  input: {
    height: '42px',
    mHeight: '42px',
    sHeight: '42px',
    padding: '12px 10px',
    mPadding: '12px 10px',
    textareaHeight: '262px',
    mTextareaHeight: '143px',
    radius: '0px',
    checkboxType: 'visibility', // disabled or visibility
  },
  button: {
    width: '136px',
    mWidth: '98px',
    sWidth: '98px',
    height: '42px',
    mHeight: '42px',
    sHeight: '42px',
  },
};

const deviceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '450px',
  mobile: '576px',
  tablet: '768px',
  minDesktop: '1200px',
  maxDesktop: '1400px',
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  mobile: `only screen and (max-width: ${deviceSizes.mobile})`,
  tabletS: `only screen and (max-width: ${deviceSizes.tabletS})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  minDesktop: `only screen and (max-width: ${deviceSizes.minDesktop})`,
  maxDesktop: `only screen and (max-width: ${deviceSizes.maxDesktop})`,
  ratio: `only screen and (max-width: 1280px) and (min-aspect-ratio: 16/9),
  screen and (max-width: 1900px) and (min-aspect-ratio: 2/1)`,
};

const theme = {
  deviceSizes,
  colors,
  device,
  element,
};

export default theme;
