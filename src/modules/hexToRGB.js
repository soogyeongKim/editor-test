function hexToRGB(hex, opacity) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
    result[3],
    16
  )},${opacity})`;
}

// 투명도가 있는 색상을 만들기 위한 함수
export default hexToRGB;
