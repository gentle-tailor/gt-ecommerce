import { injectGlobal } from 'emotion';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #fff;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 300;
    font-size: 10px;
    line-height: 1.4;
  }

  a {
    text-decoration: none;
  }
`
