import { injectGlobal } from 'emotion';
import { viewportBelow } from 'utils/styles/mediaQuery';

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
    letter-spacing: .3em;

    ${viewportBelow('tabletLandscape')} {
      font-size: 11px;
    }
  }

  a {
    text-decoration: none;
  }
`
