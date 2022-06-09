import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './Theme';

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
      padding: 0;
      margin: 0;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      font-size: 14px;
      word-break: keep-all;
      color:  ${theme.colors.font};
      background-color: #F9F9F9;
      overflow-x: hidden;
      overflow-y:overlay;
      line-height: 1.2;
    };
    body::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 4px;
      background-color: transparent;
    }
    body::-webkit-scrollbar-thumb {
      border-radius: 19px;
      background-color: ${theme.colors.main};
    }
    button{
      all: unset;
      cursor:pointer;
    }
    html,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
    display: block;
    }
    ol,
    ul {
    list-style: none;
    }
    blockquote,
    q {
    quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
    content: "";
    content: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }
    input:focus {
    outline: none;
    }
    textarea:focus {
      outline: none;
    }

    a {
    color: inherit;
    text-decoration: none;
    }
    a:hover, a:active {text-decoration: none; color:inherit;}
    strong{
      font-weight:700;
    };
    input::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px white inset;
    }
`;

export default GlobalStyle;
