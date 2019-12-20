// @flow

import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { typo, media } from '../../style-utils';
import type { Theme } from '../../theme';
import ArrowLeftIconImage from '../../images/ic-arrow-left.png';
import ResetPasswordImage from '../../images/img-resetpw.png';

export const Background = styled.div`
  min-height: 700px;
  background-color: ${(props: { theme: Theme }) => props.theme.color.grayBackground1};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.phone`
    min-height: 500px;
  `}
`;

export const Form = styled.form`
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerContainer = styled.div`
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  width: 660px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  position: relative;
  padding: 20px;
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.05);

  ${media.phone`
    width: 100%;
    height: 100%;
  `}
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BackButtonStyle = styled(Link)`
  width: 50px;
  height: 50px;
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.08);
  border-radius: 25px;
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  border: solid 1px ${(props: { theme: Theme }) => props.theme.color.primary};
  position: absolute;
  left: -25px;
  top: 90px;
  &:hover { background-color: ${(props: { theme: Theme }) => props.theme.color.hover1}; };
  &:focus { background-color: ${(props: { theme: Theme }) => props.theme.color.focus1}; outline: none; };
  ${media.phone`
    display: none;
  `}
`;

const ArrowLeftIconFrame = styled.img`
  min-width: 20px;
  min-height: 20px;
  object-fit: contain;
  display: relative;
  vertical-align: baseline;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  ${media.phone`
    display: none;
  `}
`;

export const BackButton = (props: {}) => (
  <BackButtonStyle {...props}>
    <ArrowLeftIconFrame src={ArrowLeftIconImage} />
  </BackButtonStyle>
);


export const ConfirmationButton = styled.button`
  width: 140px;
  height: 140px;
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.08);
  border-radius: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  border: solid 1px ${(props: { theme: Theme }) => props.theme.color.primary};
  position: absolute;
  left: 590px;
  top: 60%;
  &:hover { background-color: ${(props: { theme: Theme }) => props.theme.color.hover1}; };
  &:focus { background-color: ${(props: { theme: Theme }) => props.theme.color.focus1}; outline: none; };
  
  ${media.phone`
    width: 259px;
    height: 52px;
    border-radius: 2px;
    left: 0;
    position: relative;
    box-shadow: none;
    margin-top: 30px;
    background-color: ${(props: { theme: Theme }) => props.theme.color.primary};
    &:hover { background-color: ${(props: { theme: Theme }) => props.theme.color.hover2}; };
    &:focus { background-color: ${(props: { theme: Theme }) => props.theme.color.focus2}; outline: none; };
    margin-top: 60px;
  `}
`;

export const ConfirmationText = styled.p`
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  font-size: 20px;
  text-align: center;
  padding-top: 5px;
  color: ${(props: { theme: Theme }) => props.theme.color.primary};
  &:focus { outline: none };
  ${media.phone`
    width: 45px;
    height: 24px;
    font-size: 15px;
    padding-top: 0px;
    color: ${(props: { theme: Theme }) => props.theme.color.white};
  `}
`;

const ResetPasswordIconFrame = styled.img`
  min-width: 108px;
  min-height: 108px;
  object-fit: contain;
`;

export const ResetPasswordIcon = (props: {}) => <ResetPasswordIconFrame src={ResetPasswordImage} {...props} />;

export const ResetPasswordText = styled.div`
  ${typo.header2}

  ${media.phone`
    margin-bottom: 30px;
  `}
`;
