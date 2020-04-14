import React from "react";
import styled from "styled-components";
import icnRefresh from "../../assets/icon-refresh.svg";
import icnSettings from "../../assets/icon-settings.svg";
import icnClose from "../../assets/icon-close.svg";

export const ArrowDown = (props) => {
  const { color } = props;
  const fillColor = color || "#969696";
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 7H4V0H10V7H14L7 15L0 7Z" />
    </svg>
  );
};

export const Spinner = (props) => {
  const { color } = props;
  const fillColor = color || "#969696";
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.40291 11.8113C4.40291 11.217 3.92579 10.7399 3.33148 10.7399C2.74554 10.7399 2.26005 11.217 2.26005 11.8113C2.26005 12.3973 2.74554 12.8828 3.33148 12.8828C3.92579 12.8828 4.40291 12.3973 4.40291 11.8113ZM8.57144 13.5357C8.57144 12.9414 8.09432 12.4643 7.50001 12.4643C6.9057 12.4643 6.42858 12.9414 6.42858 13.5357C6.42858 14.13 6.9057 14.6071 7.50001 14.6071C8.09432 14.6071 8.57144 14.13 8.57144 13.5357ZM2.67858 7.64282C2.67858 7.04851 2.20146 6.57139 1.60715 6.57139C1.01284 6.57139 0.535721 7.04851 0.535721 7.64282C0.535721 8.23713 1.01284 8.71425 1.60715 8.71425C2.20146 8.71425 2.67858 8.23713 2.67858 7.64282ZM12.74 11.8113C12.74 11.217 12.2545 10.7399 11.6685 10.7399C11.0742 10.7399 10.5971 11.217 10.5971 11.8113C10.5971 12.3973 11.0742 12.8828 11.6685 12.8828C12.2545 12.8828 12.74 12.3973 12.74 11.8113ZM4.67077 3.4743C4.67077 2.73769 4.06809 2.13501 3.33148 2.13501C2.59487 2.13501 1.99219 2.73769 1.99219 3.4743C1.99219 4.2109 2.59487 4.81358 3.33148 4.81358C4.06809 4.81358 4.67077 4.2109 4.67077 3.4743ZM14.4643 7.64282C14.4643 7.04851 13.9872 6.57139 13.3929 6.57139C12.7986 6.57139 12.3214 7.04851 12.3214 7.64282C12.3214 8.23713 12.7986 8.71425 13.3929 8.71425C13.9872 8.71425 14.4643 8.23713 14.4643 7.64282ZM9.10715 1.74997C9.10715 0.862689 8.38728 0.142822 7.50001 0.142822C6.61273 0.142822 5.89286 0.862689 5.89286 1.74997C5.89286 2.63724 6.61273 3.35711 7.50001 3.35711C8.38728 3.35711 9.10715 2.63724 9.10715 1.74997ZM13.5435 3.4743C13.5435 2.44472 12.6981 1.5993 11.6685 1.5993C10.6306 1.5993 9.79353 2.44472 9.79353 3.4743C9.79353 4.51224 10.6306 5.3493 11.6685 5.3493C12.6981 5.3493 13.5435 4.51224 13.5435 3.4743Z" />
    </svg>
  );
};

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const Action = (props) => {
  const { icon, disabled, onClick } = props;
  let icnSrc = null;
  switch (icon) {
    case "close":
      icnSrc = icnClose;
      break;
    case "settings":
      icnSrc = icnSettings;
      break;
    default:
      break;
  }
  return (
    <ActionContainer onClick={() => !disabled && onClick()} disabled={disabled}>
      <img src={icnSrc} width={"100%"} height={"auto"} />
    </ActionContainer>
  );
};
