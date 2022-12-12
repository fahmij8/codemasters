import { css } from '@emotion/react';
import { colors } from '@workday/canvas-kit-react/tokens';
import type { PartialEmotionCanvasTheme } from '@workday/canvas-kit-react';

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
  }

  div[role='tablist']::after {
    background: none;
  }
`;

export const appTheme: PartialEmotionCanvasTheme = {
  canvas: {
    palette: {
      primary: {
        main: colors.cantaloupe400,
      },
      alert: {
        main: colors.sourLemon400,
      },
      success: {
        main: colors.greenApple400,
      },
      error: {
        main: colors.cinnamon500,
      },
      neutral: {
        main: colors.frenchVanilla600,
      },
      common: {
        focusOutline: colors.cantaloupe400,
      },
    },
  },
};
