import { css } from '@emotion/react';
import { colors } from '@workday/canvas-kit-react/tokens';

export const globalStyles = css`
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
    color: #333;
    min-height: 100vh;
    line-height: 1.5;
    background-color: ${colors.licorice600};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    margin: 0;
    color: ${colors.blackPepper300};
  }
`;
