const checkIE = () => {
  const agent = navigator.userAgent.toLowerCase();
  if (
    (navigator.appName === "Netscape" && agent.indexOf("trident") !== -1) ||
    agent.indexOf("msie") !== -1
  ) {
    // ie일 경우
    return true;
  } else {
    // ie가 아닐 경우
    return false;
  }
};

// ie check 함수
export default checkIE;
