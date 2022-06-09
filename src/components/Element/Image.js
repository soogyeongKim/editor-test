import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { common, elementSize, space } from 'styles/CommonCSS';

function ImageComponent({ src, fit, ...props }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (src) {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        setLoading(false);
      };
    }

    return () => setLoading(true);
  }, [src]);

  return src && <ImageImg src={src} fit={fit} $loading={loading} {...props} />;
}

const ImageImg = styled.img`
  ${elementSize}
  ${common}
  ${space}
  display:block;
  object-fit: ${({ fit }) => fit || 'contain'};
  transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  ${({ $loading }) =>
    $loading
      ? css`
          filter: blur(3px);
        `
      : css`
          filter: blur(0px);
          visibility: visible;
        `}
`;

export default ImageComponent;
