import { injectGlobal } from 'emotion';
import { viewportBelow } from 'utils/styles/mediaQuery';
import { font } from './constants';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #fff;
    font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 300;
    font-size: 10px;
    color: ${font.color.secondary};
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
