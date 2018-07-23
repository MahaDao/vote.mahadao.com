import styled from 'styled-components';
import theme from '../../../theme';
import Button from '../../Button';

export const StyledTitle = styled.div`
  font-weight: bold;
  color: #212536;
  line-height: 22px;
  font-size: 28px;
`;

export const StyledBlurb = styled.p`
  line-height: 22px;
  font-size: 17px;
  color: ${theme.text.dim_grey_alt};
  margin: 22px 0px 16px 0px;
`;

export const StyledTop = styled.div`
  display: flex;
  justify-content: center;
`;

export const Column = styled.div`
  position: relative;
  width: 100%;
  height: ${({ spanHeight }) => (spanHeight ? '100%' : 'auto')};
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
`;

export const StyledAnchor = styled.a`
  color: ${({ blue }) => (blue ? '#3080ed' : '#212536')};
  margin-bottom: -3px;
  border-bottom: 1px dashed
    ${({ blue }) => (blue ? '#2F80ED' : theme.text.dim_grey_alt)};
`;

export const CircledNum = styled.div`
  border-radius: 50%;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background: ${({ dim }) => (dim ? '#D1D8DA' : '#30bd9f')};
  color: #fff;
  text-align: center;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '17px')};
  padding: ${({ p }) => (p ? `${p}px` : '3px')};
`;

export const Section = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  margin-bottom: 22px;
`;

export const GuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: 0px 20px;
  height: 210px;
  justify-content: space-between;
`;

export const Guide = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

export const GuideTitle = styled.p`
  font-size: 20px;
  color: #212536;
`;

export const GuideInfo = styled.p`
  font-size: 15px;
  color: ${theme.text.dim_grey_alt};
`;

export const SetupLater = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${theme.text.dim_grey_alt};
  cursor: pointer;
  margin-top: 18px;
`;

export const InfoBox = styled.div`
  display: flex;
  border: 1px solid #dfe1e3;
  box-sizing: border-box;
  border-radius: 4px;
  background: #f2f5fa;
  height: ${({ height }) => (height ? `${height}px` : '68px')};
`;

export const InfoBoxSection = styled.div`
  width: 100%;
  padding: 12px;
`;

export const InfoBoxHeading = styled.div`
  line-height: 26px;
  font-size: 14px;
  color: ${theme.text.dim_grey_alt};
`;

export const ProgressTabsWrapper = styled.div`
  height: 78px;
  display: flex;
  background: inherit;
`;

export const TabsTitle = styled.p`
  font-size: 14px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;

export const TabsTitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ active, theme }) =>
    active ? theme.text.green : theme.text.dim_green};
`;

export const TxHash = styled.a`
  padding: 6px;
  padding-top: 20px;
  font-size: 14px;
`;

export const StyledInput = styled.input`
  border: 1px solid #d1d8da;
  height: 40px;
  color: ${theme.text.dim_grey_alt};
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  display: block;
`;

export const Note = styled.p`
  font-style: oblique;
  font-size: 14px;
  opacity: 0.5;
  align-self: flex-start;
  margin-left: 10px;
`;

export const InputLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 26px;
`;

export const ValueLabel = styled.span`
  color: ${theme.text.dim_grey_alt};
`;

export const EndButton = styled(Button)`
  align-self: flex-end;
  margin-top: 24px;
  width: auto;
`;