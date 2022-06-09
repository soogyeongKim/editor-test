import React from 'react';
import styled from 'styled-components';
import ie from 'assets/icon/ie/ie.svg';
import chrome from 'assets/icon/ie/chrome.svg';
import firefox from 'assets/icon/ie/firefox.svg';
import opera from 'assets/icon/ie/opera.svg';
import edge from 'assets/icon/ie/edge.svg';
import './IE.css';

function IEComponent(props) {
  return (
    <IEContainer>
      <IEimg src={ie} />
      <p style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '0' }}>
        브라우저 업데이트
      </p>
      <IEDesc>
        <p style={{ marginTop: 0, marginBottom: 0 }}>
          이 브라우저는 지원이 중단되었습니다.
          <br />
          업데이트하여 최적의 인터넷 환경으로 이용하세요.
        </p>
      </IEDesc>
      <BrowserDiv>
        <a
          href="https://www.google.com/chrome/"
          target="_blank"
          rel="noreferrer"
        >
          <BrowserItem>
            <BrowserImg src={chrome} />
          </BrowserItem>
        </a>
        <a
          href="https://www.mozilla.org/ko/firefox/new/"
          target="_blank"
          rel="noreferrer"
        >
          <BrowserItem>
            <BrowserImg src={firefox} />
          </BrowserItem>
        </a>
        <a href="https://www.opera.com/ko" target="_blank" rel="noreferrer">
          <BrowserItem>
            <BrowserImg src={opera} />
          </BrowserItem>
        </a>
        <a
          href="https://www.microsoft.com/ko-kr/edge"
          target="_blank"
          rel="noreferrer"
        >
          <BrowserItem>
            <BrowserImg src={edge} />
          </BrowserItem>
        </a>
      </BrowserDiv>
    </IEContainer>
  );
}

const IEContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: #f7f9fa;
  overflow: hidden;
`;

const IEimg = styled.img`
  @media screen and (max-width: 1900px) and (device-aspect-ratio: 16/9),
    screen and (max-width: 1900px) and (device-aspect-ratio: 16/10),
    only screen and (max-width: 1400px) {
    width: 30%;
    height: 30%;
  }
`;

const IEDesc = styled.div`
  text-align: center;
  color: #767676;
  font-size: 14px;
`;

const BrowserDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-top: 3%;
`;

const BrowserItem = styled.div`
  border-radius: 10px;
  background-color: white;
  border: 1px solid #dcdce5;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 25px;

  @media screen and (max-width: 1900px) and (device-aspect-ratio: 16/9),
    screen and (max-width: 1900px) and (device-aspect-ratio: 16/10),
    only screen and (max-width: 1400px) {
    width: 180px;
    height: 180px;
    margin: 0 12.5px;
  }
`;

const BrowserImg = styled.img`
  @media screen and (max-width: 1900px) and (device-aspect-ratio: 16/9),
    screen and (max-width: 1900px) and (device-aspect-ratio: 16/10),
    only screen and (max-width: 1400px) {
    width: 50%;
    height: 50%;
  }
`;

export default IEComponent;
