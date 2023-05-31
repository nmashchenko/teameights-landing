import styled from "styled-components";

export const SmallText = styled.h1`
  font-weight: 500;
  font-size: 20px;

  text-align: center;
  margin: 0;

  background: radial-gradient(
        94.05% 4394.48% at 5.95% 11.97%,
        #46a11b 0%,
        #79f242 49.79%,
        #46a11b 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    #5bd424;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  /* neon text */
  text-shadow: 0px 0px 16px rgba(91, 212, 36, 0.25);
`;

export const MediumText = styled.h1`
  font-weight: 600;
  font-size: 32px;

  text-align: center;
  margin: 0;

  background: radial-gradient(
        94.05% 4394.48% at 5.95% 11.97%,
        #46a11b 0%,
        #79f242 49.79%,
        #46a11b 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    #5bd424;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  /* neon text */
  text-shadow: 0px 0px 16px rgba(91, 212, 36, 0.25);
`;

export const LargeText = styled.h1`
  font-weight: 600;
  font-size: 56px;

  text-align: center;
  margin: 0;

  background: radial-gradient(
        94.05% 4394.48% at 5.95% 11.97%,
        #46a11b 0%,
        #79f242 49.79%,
        #46a11b 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    #5bd424;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  /* neon text */
  text-shadow: 0px 0px 16px rgba(91, 212, 36, 0.25);

  @media screen and (max-width: 1024px) {
    font-size: 38px;
  }
`;
