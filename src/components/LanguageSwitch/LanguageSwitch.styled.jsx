import styled from "@emotion/styled";
import uaFlag from "../../images/flags/ukraine-flag.png";
import uaFlagGrey from "../../images/flags/ukraine-flag-grey.png";
import enFlag from "../../images/flags/england-flag.png";
import enFlagGrey from "../../images/flags/england-flag-grey.png";

export const LanguageCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 58px;
  height: 24px;
`;

export const UaBtn = styled.button`
  width: 24px;
  height: 24px;
  background-image: url(${uaFlagGrey});
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  :hover,
  :focus,
  &.active {
    background-image: url(${uaFlag});
  }
`;

export const EnBtn = styled.button`
  width: 24px;
  height: 24px;
  background-image: url(${enFlagGrey});
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  :hover,
  :focus,
  &.active {
    background-image: url(${enFlag});
  }
`;
