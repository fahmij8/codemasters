import { css } from "@emotion/react";
import { colors, type } from "@workday/canvas-kit-react/tokens";
import type { PartialEmotionCanvasTheme } from "@workday/canvas-kit-react";

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

  div[role="tablist"]::after {
    background: none;
  }

  code {
    ${type.levels.subtext.large.fontSize};
    padding: 0.2rem 0.4rem;
    margin: 0;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
    color: ${colors.blueberry400};
  }

  .landing-page-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .landing-page-container h1 {
    line-height: 1.2;
  }

  .landing-page-animation {
    width: 30vw;
  }

  .wavey.main {
    flex: 1;
    background-color: #a69867;
  }

  .wavey {
    margin-top: -5px;
    background-color: #a69867;
    background-image: url("https://daks2k3a4ib2z.cloudfront.net/570019496d89fd540a95a091/57363e99807049795e6196ec_wavy.png"),
      -webkit-linear-gradient(270deg, rgba(0, 0, 0, 0.2), transparent 15%);
    background-image: url("https://daks2k3a4ib2z.cloudfront.net/570019496d89fd540a95a091/57363e99807049795e6196ec_wavy.png"),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2), transparent 15%);
    background-position: 50% 0px, 0px 0px;
    background-size: contain, auto;
    background-repeat: repeat-x, repeat;
  }

  @media (max-width: 768px) {
    .landing-page-container {
      flex-direction: column-reverse;
      padding-top: 0;
    }

    .landing-page-container h1 {
      font-size: 2rem;
    }

    .landing-page-animation {
      width: 300px;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 480px) {
    .landing-page-container h1 {
      font-size: 1.5rem;
    }

    .landing-page-animation {
      width: 100%;
    }
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
