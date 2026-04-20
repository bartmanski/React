import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: 'Inter', 'Segoe UI', sans-serif;
      }
    `}
  />
);
