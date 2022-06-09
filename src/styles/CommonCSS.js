import styled, { css, keyframes } from 'styled-components';
import hexToRGB from 'modules/hexToRGB';

export const common = css`
  position: ${({ position }) => position || 'static'};
  ${({ textAlign }) => (textAlign ? `text-align: ${textAlign};` : '')}
  ${({ flex }) => (flex ? `flex: ${flex};` : '')}
  ${({ alignSelf }) => (alignSelf ? `align-self:${alignSelf};` : '')};
  ${({ gap }) => (gap ? `gap : ${Number(gap) ? `${gap}px` : gap};` : '')}
  ${({ pointer }) => (pointer ? 'cursor: pointer;' : '')}
  ${({ radius }) =>
    radius
      ? `border-radius: ${Number(radius) ? `${radius}px;` : radius}`
      : ' '} 
  ${({ bgColor, theme }) =>
    bgColor
      ? `background-color: ${
          theme.colors[bgColor] ? theme.colors[bgColor] : bgColor
        };`
      : ''};
  ${({ border, theme }) =>
    border ? `border : 1px solid ${theme.colors.colorD4};` : ''};
  ${({ borderBottom, theme }) =>
    borderBottom ? `border-bottom: 1px solid ${theme.colors.colorD4};` : ''};
  ${({ borderTop, theme }) =>
    borderTop ? `border-top: 1px solid ${theme.colors.colorD4};` : ''};
  ${({ borderRight, theme }) =>
    borderRight ? `border-right: 1px solid ${theme.colors.colorD4};` : ''};
  ${({ borderLeft, theme }) =>
    borderLeft ? `border-left: 1px solid ${theme.colors.colorD4};` : ''};
  ${({ hover }) =>
    hover
      ? `transition: all 150ms;
      &:hover{
        opacity: 0.5;
      }`
      : ''};

  @media ${({ theme }) => theme.device.tablet} {
    ${({ mFlex, flex }) =>
      mFlex ? `flex:  ${mFlex};` : flex ? `flex:${flex};` : ''}
    ${({ mGap, gap }) =>
      mGap
        ? `gap : ${Number(mGap) ? `${mGap}px` : mGap};`
        : gap
        ? `gap : ${Number(gap) ? `${gap}px` : gap};`
        : ''}
    ${({ mTextAlign, textAlign }) =>
      mTextAlign
        ? `text-align: ${mTextAlign};`
        : textAlign
        ? `text-align: ${textAlign};`
        : ''}

        ${({ hover }) =>
      hover
        ? `transition: all 150ms;
          &:hover{
            opacity: 1;
          }`
        : ''};
  }

  @media ${({ theme }) => theme.device.mobile} {
    ${({ sFlex, mFlex, flex }) =>
      sFlex
        ? `flex: ${sFlex};`
        : mFlex
        ? `flex: ${mFlex};`
        : flex
        ? `flex: ${flex};`
        : ''}
    ${({ sGap, mGap, gap }) =>
      sGap
        ? `gap : ${Number(sGap) ? `${sGap}px` : sGap};`
        : mGap
        ? `gap : ${Number(mGap) ? `${mGap}px` : mGap};`
        : gap
        ? `gap : ${Number(gap) ? `${gap}px` : gap};`
        : ''}
    ${({ sTextAlign, mTextAlign, textAlign }) =>
      sTextAlign
        ? `text-align: ${sTextAlign};`
        : mTextAlign
        ? `text-align: ${mTextAlign};`
        : textAlign
        ? `text-align: ${textAlign};`
        : ''}
  }
`;

export const elementSize = css`
  ${({ width }) =>
    width ? `width: ${Number(width) ? `${width}px` : width};` : ''}
  ${({ minWidth }) =>
    minWidth
      ? `min-width : ${Number(minWidth) ? `${minWidth}px` : minWidth}`
      : ''};
  ${({ maxWidth }) =>
    maxWidth
      ? `max-width : ${Number(maxWidth) ? `${maxWidth}px` : maxWidth}`
      : ''};
  ${({ height }) =>
    height ? `height: ${Number(height) ? `${height}px` : height};` : ''}
  ${({ minHeight }) =>
    minHeight
      ? `min-height : ${Number(minHeight) ? `${minHeight}px` : minHeight};`
      : ''};
  ${({ maxHeight }) =>
    maxHeight
      ? `max-height : ${Number(maxHeight) ? `${maxHeight}px` : maxHeight};`
      : ''};

  @media ${({ theme }) => theme.device.tablet} {
    ${({ mWidth, width }) =>
      mWidth
        ? `width:  ${Number(mWidth) ? `${mWidth}px` : mWidth};`
        : width
        ? `width : ${Number(width) ? `${width}px` : width};`
        : ''}
    ${({ mMinWidth, minWidth }) =>
      mMinWidth
        ? `min-width:  ${Number(mMinWidth) ? `${mMinWidth}px` : mMinWidth};`
        : minWidth
        ? `min-width : ${Number(minWidth) ? `${minWidth}px` : minWidth};`
        : ''};
    ${({ mMaxWidth, maxWidth }) =>
      mMaxWidth
        ? `max-width:  ${Number(mMaxWidth) ? `${mMaxWidth}px` : mMaxWidth};`
        : maxWidth
        ? `max-width : ${Number(maxWidth) ? `${maxWidth}px` : maxWidth};`
        : ''};
    ${({ mHeight, height }) =>
      mHeight
        ? `height:  ${Number(mHeight) ? `${mHeight}px` : mHeight};`
        : height
        ? `height : ${Number(height) ? `${height}px` : height};`
        : ''}
    ${({ mMinHeight, minHeight }) =>
      mMinHeight
        ? `min-height:  ${Number(mMinHeight) ? `${mMinHeight}px` : mMinHeight};`
        : minHeight
        ? `min-height : ${Number(minHeight) ? `${minHeight}px` : minHeight};`
        : ''};
    ${({ mMaxHeight, maxHeight }) =>
      mMaxHeight
        ? `max-height:  ${Number(mMaxHeight) ? `${mMaxHeight}px` : mMaxHeight};`
        : maxHeight
        ? `max-height : ${Number(maxHeight) ? `${maxHeight}px` : maxHeight};`
        : ''};
  }

  @media ${({ theme }) => theme.device.mobile} {
    ${({ sWidth, mWidth, width }) =>
      sWidth
        ? `width:  ${Number(sWidth) ? `${sWidth}px` : sWidth};`
        : mWidth
        ? `width:  ${Number(mWidth) ? `${mWidth}px` : mWidth};`
        : width
        ? `width : ${Number(width) ? `${width}px` : width};`
        : ''};

    ${({ sMinWidth, mMinWidth, minWidth }) =>
      sMinWidth
        ? `min-width:  ${Number(sMinWidth) ? `${sMinWidth}px` : sMinWidth};`
        : mMinWidth
        ? `min-width:  ${Number(mMinWidth) ? `${mMinWidth}px` : mMinWidth};`
        : minWidth
        ? `min-width : ${Number(minWidth) ? `${minWidth}px` : minWidth};`
        : ''};

    ${({ sMaxWidth, mMaxWidth, maxWidth }) =>
      sMaxWidth
        ? `max-width:  ${Number(sMaxWidth) ? `${sMaxWidth}px` : sMaxWidth};`
        : mMaxWidth
        ? `max-width:  ${Number(mMaxWidth) ? `${mMaxWidth}px` : mMaxWidth};`
        : maxWidth
        ? `max-width : ${Number(maxWidth) ? `${maxWidth}px` : maxWidth};`
        : ''};
    ${({ sHeight, mHeight, height }) =>
      sHeight
        ? `height:  ${Number(sHeight) ? `${sHeight}px` : sHeight};`
        : mHeight
        ? `height:  ${Number(mHeight) ? `${mHeight}px` : mHeight};`
        : height
        ? `height : ${Number(height) ? `${height}px` : height};`
        : ''}
    ${({ sMinHeight, mMinHeight, minHeight }) =>
      sMinHeight
        ? `min-height:  ${Number(sMinHeight) ? `${sMinHeight}px` : sMinHeight};`
        : mMinHeight
        ? `min-height:  ${Number(mMinHeight) ? `${mMinHeight}px` : mMinHeight};`
        : minHeight
        ? `min-height : ${Number(minHeight) ? `${minHeight}px` : minHeight};`
        : ''};
    ${({ sMaxHeight, mMaxHeight, maxHeight }) =>
      sMaxHeight
        ? `max-height:  ${Number(sMaxHeight) ? `${sMaxHeight}px` : sMaxHeight};`
        : mMaxHeight
        ? `max-height:  ${Number(mMaxHeight) ? `${mMaxHeight}px` : mMaxHeight};`
        : maxHeight
        ? `max-height : ${Number(maxHeight) ? `${maxHeight}px` : maxHeight};`
        : ''};
  }
`;

export const space = css`
  ${({ margin }) => (margin ? `margin : ${margin};` : '')}
  ${({ mb }) => (mb ? `margin-bottom : ${Number(mb) ? `${mb}px` : mb};` : '')}
  ${({ mt }) => (mt ? `margin-top : ${Number(mt) ? `${mt}px` : mt};` : '')}
  ${({ mr }) => (mr ? `margin-right : ${Number(mr) ? `${mr}px` : mr};` : '')}
  ${({ ml }) => (ml ? `margin-left : ${Number(ml) ? `${ml}px` : ml};` : '')}

  ${({ padding }) => (padding ? `padding :${padding};` : '')}
  ${({ pb }) => (pb ? `padding-bottom : ${Number(pb) ? `${pb}px` : pb};` : '')}
  ${({ pt }) => (pt ? `padding-top : ${Number(pt) ? `${pt}px` : pt};` : '')}
  ${({ pr }) => (pr ? `padding-right : ${Number(pr) ? `${pr}px` : pr};` : '')}
  ${({ pl }) => (pl ? `padding-left : ${Number(pl) ? `${pl}px` : pl};` : '')}

  @media ${({ theme }) => theme.device.tablet} {
    ${({ mMargin, margin }) =>
      mMargin ? `margin :${mMargin};` : margin ? `margin:${margin};` : ''}
    ${({ mMb, mb }) =>
      mMb
        ? `margin-bottom:${Number(mMb) ? `${mMb}px` : mMb};`
        : mb
        ? `margin-bottom : ${Number(mb) ? `${mb}px` : mb};`
        : ''}
    ${({ mMt, mt }) =>
      mMt
        ? `margin-top:${Number(mMt) ? `${mMt}px` : mMt};`
        : mt
        ? `margin-top : ${Number(mt) ? `${mt}px` : mt};`
        : ''};
    ${({ mMr, mr }) =>
      mMr
        ? `margin-right:${Number(mMr) ? `${mMr}px` : mMr};`
        : mr
        ? `margin-right : ${Number(mr) ? `${mr}px` : mr};`
        : ''}
    ${({ mMl, ml }) =>
      mMl
        ? `margin-left:${Number(mMl) ? `${mMl}px` : mMl};`
        : ml
        ? `margin-left : ${Number(ml) ? `${ml}px` : ml};`
        : ''};

    ${({ mPadding, padding }) =>
      mPadding ? `padding :${mPadding};` : padding ? `padding:${padding};` : ''}
    ${({ mPb, pb }) =>
      mPb
        ? `padding-bottom:${Number(mPb) ? `${mPb}px` : mPb};`
        : pb
        ? `padding-bottom : ${Number(pb) ? `${pb}px` : pb};`
        : ''}
    ${({ mPt, pt }) =>
      mPt
        ? `padding-top:${Number(mPt) ? `${mPt}px` : mPt};`
        : pt
        ? `padding-top : ${Number(pt) ? `${pt}px` : pt};`
        : ''};
    ${({ mPr, pr }) =>
      mPr
        ? `padding-right:${Number(mPr) ? `${mPr}px` : mPr};`
        : pr
        ? `padding-right : ${Number(pr) ? `${pr}px` : pr};`
        : ''}
    ${({ mPl, pl }) =>
      mPl
        ? `padding-left:${Number(mPl) ? `${mPl}px` : mPl};`
        : pl
        ? `padding-left : ${Number(pl) ? `${pl}px` : pl};`
        : ''};
  }

  @media ${({ theme }) => theme.device.mobile} {
    ${({ sMargin, mMargin, margin }) =>
      sMargin
        ? `margin :${sMargin};`
        : mMargin
        ? `margin :${mMargin};`
        : margin
        ? `margin:${margin};`
        : ''}

    ${({ sMb, mMb, mb }) =>
      sMb
        ? `margin-bottom:${Number(sMb) ? `${sMb}px` : sMb};`
        : mMb
        ? `margin-bottom:${Number(mMb) ? `${mMb}px` : mMb};`
        : mb
        ? `margin-bottom : ${Number(mb) ? `${mb}px` : mb};`
        : ''}
    ${({ sMt, mMt, mt }) =>
      sMt
        ? `margin-top:${Number(sMt) ? `${sMt}px` : sMt};`
        : mMt
        ? `margin-top:${Number(mMt) ? `${mMt}px` : mMt};`
        : mt
        ? `margin-top : ${Number(mt) ? `${mt}px` : mt};`
        : ''};
    ${({ sMr, mMr, mr }) =>
      sMr
        ? `margin-right:${Number(sMr) ? `${sMr}px` : sMr};`
        : mMr
        ? `margin-right:${Number(mMr) ? `${mMr}px` : mMr};`
        : mr
        ? `margin-right : ${Number(mr) ? `${mr}px` : mr};`
        : ''}
    ${({ sMl, mMl, ml }) =>
      sMl
        ? `margin-left:${Number(sMl) ? `${sMl}px` : sMl};`
        : mMl
        ? `margin-left:${Number(mMl) ? `${mMl}px` : mMl};`
        : ml
        ? `margin-left : ${Number(ml) ? `${ml}px` : ml};`
        : ''};

    ${({ sPadding, mPadding, padding }) =>
      sPadding
        ? `padding :${sPadding};`
        : mPadding
        ? `padding :${mPadding};`
        : padding
        ? `padding:${padding};`
        : ''}
    ${({ sPb, mPb, pb }) =>
      sPb
        ? `padding-bottom:${Number(sPb) ? `${sPb}px` : sPb};`
        : mPb
        ? `padding-bottom:${Number(mPb) ? `${mPb}px` : mPb};`
        : pb
        ? `padding-bottom : ${Number(pb) ? `${pb}px` : pb};`
        : ''}
    ${({ sPt, mPt, pt }) =>
      sPt
        ? `padding-top:${Number(sPt) ? `${sPt}px` : sPt};`
        : mPt
        ? `padding-top:${Number(mPt) ? `${mPt}px` : mPt};`
        : pt
        ? `padding-top : ${Number(pt) ? `${pt}px` : pt};`
        : ''};
    ${({ sPr, mPr, pr }) =>
      sPr
        ? `padding-right:${Number(sPr) ? `${sPr}px` : sPr};`
        : mPr
        ? `padding-right:${Number(mPr) ? `${mPr}px` : mPr};`
        : pr
        ? `padding-right : ${Number(pr) ? `${pr}px` : pr};`
        : ''}
    ${({ sPl, mPl, pl }) =>
      sPl
        ? `padding-left:${Number(sPl) ? `${sPl}px` : sPl};`
        : mPl
        ? `padding-left:${Number(mPl) ? `${mPl}px` : mPl};`
        : pl
        ? `padding-left : ${Number(pl) ? `${pl}px` : pl};`
        : ''};
  }
`;

export const position = css`
  ${({ top }) => (top ? `top : ${Number(top) ? `${top}px` : top};` : '')}
  ${({ left }) => (left ? `left : ${Number(left) ? `${left}px` : left};` : '')};
  ${({ right }) =>
    right ? `right : ${Number(right) ? `${right}px` : right};` : ''}
  ${({ bottom }) =>
    bottom ? `bottom : ${Number(bottom) ? `${bottom}px` : bottom};` : ''};
  ${({ transform }) => (transform ? `transform : ${transform};` : '')}
  ${({ zIndex }) => (zIndex ? `z-index: ${zIndex};` : '')};

  @media ${({ theme }) => theme.device.tablet} {
    ${({ top, mTop }) =>
      mTop
        ? `top : ${Number(mTop) ? `${mTop}px` : mTop};`
        : top
        ? `top: ${Number(top) ? `${top}px` : top};`
        : ''};
    ${({ left, mLeft }) =>
      mLeft
        ? `left :${Number(mLeft) ? `${mLeft}px` : mLeft};`
        : left
        ? `left : ${Number(left) ? `${left}px` : left};`
        : ''};
    ${({ right, mRight }) =>
      mRight
        ? `right :${Number(mRight) ? `${mRight}px` : mRight};`
        : right
        ? `right : ${Number(right) ? `${right}px` : right};`
        : ''};
    ${({ bottom, mBottom }) =>
      mBottom
        ? `bottom :${Number(mBottom) ? `${mBottom}px` : mBottom};`
        : bottom
        ? `bottom : ${Number(bottom) ? `${bottom}px` : bottom};`
        : ''};
    ${({ mTransform, transform }) =>
      mTransform
        ? `transform :${mTransform};`
        : transform
        ? `transform : ${transform};`
        : ''};
  }

  @media ${({ theme }) => theme.device.mobile} {
    ${({ sTop, mTop, top }) =>
      sTop
        ? `top : ${Number(sTop) ? `${sTop}px` : sTop};`
        : mTop
        ? `top : ${Number(mTop) ? `${mTop}px` : mTop};`
        : top
        ? `top: ${Number(top) ? `${top}px` : top};`
        : ''};
    ${({ sLeft, mLeft, left }) =>
      sLeft
        ? `left :${Number(sLeft) ? `${sLeft}px` : sLeft};`
        : mLeft
        ? `left :${Number(mLeft) ? `${mLeft}px` : mLeft};`
        : left
        ? `left : ${Number(left) ? `${left}px` : left};`
        : ''};
    ${({ sRight, mRight, right }) =>
      sRight
        ? `right :${Number(sRight) ? `${sRight}px` : sRight};`
        : mRight
        ? `right :${Number(mRight) ? `${mRight}px` : mRight};`
        : right
        ? `right : ${Number(right) ? `${right}px` : right};`
        : ''};
    ${({ sBottom, mBottom, bottom }) =>
      sBottom
        ? `bottom :${Number(sBottom) ? `${sBottom}px` : sBottom};`
        : mBottom
        ? `bottom :${Number(mBottom) ? `${mBottom}px` : mBottom};`
        : bottom
        ? `bottom : ${Number(bottom) ? `${bottom}px` : bottom};`
        : ''};
    ${({ sTransform, mTransform, transform }) =>
      sTransform
        ? `transform :${sTransform};`
        : mTransform
        ? `transform :${mTransform};`
        : transform
        ? `transform : ${transform};`
        : ''};
  }
`;

export const shadow = (x, y, r, opacity) => css`
  box-shadow: ${x || '0'}px ${y || '6'}px ${r || '10'}px
    rgba(21, 19, 30, ${opacity || '0.10'});
`;

export const flexCol = (align, justify) => css`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: ${justify};
  align-items: ${align};
`;

export const flexRow = (align, justify) => css`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: ${justify};
  align-items: ${align};
`;

export const scrollbar = css`
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 19px;
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

export const nonScrollbar = css`
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }
`;

export const fluid = css`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  box-sizing: border-box;
`;

export const backgroundCenter = css`
  background-position: center;
  background-repeat: no-repeat;
`;

export const fadeoutKeyframes = keyframes`
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}`;

export const fadeinKeyframes = keyframes`
0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadein = (time) => css`
  -webkit-animation: ${fadeinKeyframes} ${time || '0.3'}s
    cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: ${fadeinKeyframes} ${time || '0.3'}s
    cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export const fadeout = (time) => css`
  -webkit-animation: ${fadeoutKeyframes} ${time || '0.3'} ease-out both;
  animation: ${fadeoutKeyframes} ${time || '0.3'} ease-out both;
`;

export const Span = styled.span`
  ${elementSize}
  ${space}
  font-weight: ${({ weight }) => weight || 'inherit'};
  color: ${({ color, theme }) =>
    color ? (theme.colors[color] ? theme.colors[color] : color) : 'inherit'};
`;

export const Relative = styled.div`
  ${elementSize}
  ${common}
  ${space}
  box-sizing: border-box;
  position: relative;
`;

export const Fixed = styled.div`
  ${elementSize};
  ${common};
  ${space};
  ${position};
  box-sizing: border-box;
  position: fixed;
`;

export const Absolute = styled.div`
  ${elementSize};
  ${common};
  ${space};
  ${position};
  box-sizing: border-box;
  position: absolute;
`;

export const RowDiv = styled.div`
  ${common}
  ${space}
  ${elementSize}
  ${position} 
  display: ${({ display }) => display || 'flex'};
  flex-direction: row;
  box-sizing: border-box;
  flex-wrap: ${({ $wrap }) => $wrap && 'wrap'};
  justify-content: ${({ justify }) => justify || 'unset'};
  align-items: ${({ align }) => align || 'unset'};

  @media ${({ theme }) => theme.device.minDesktop} {
    flex-direction: ${({ tDirection }) => (tDirection ? 'column' : 'row')};
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: ${({ mDisplay }) => mDisplay || 'flex'};
    flex-direction: ${({ tDirection, mDirection }) =>
      mDirection || tDirection ? 'column' : 'row'};
    justify-content: ${({ mJustify, justify }) =>
      mJustify || justify || 'unset'};
    align-items: ${({ mAlign, align }) => mAlign || align || 'unset'};
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: ${({ sDisplay }) => sDisplay || 'flex'};
    flex-direction: ${({ tDirection, mDirection, sDirection }) =>
      sDirection || mDirection || tDirection ? 'column' : 'row'};
    justify-content: ${({ sJustify, mJustify, justify }) =>
      sJustify || mJustify || justify || 'unset'};
    align-items: ${({ sAlign, mAlign, align }) =>
      sAlign || mAlign || align || 'unset'};
  }
`;

export const Div = styled.div`
  box-sizing: border-box;

  ${common}
  ${space}
  ${elementSize}
  ${position}
`;

export const ColDiv = styled.div`
  ${common}
  ${space}
  ${elementSize}
  ${position} 
  display: ${({ display }) => display || 'flex'};
  flex-direction: column;
  box-sizing: border-box;
  flex-wrap: ${({ $wrap }) => $wrap && 'wrap'};
  justify-content: ${({ justify }) => justify || 'unset'};
  align-items: ${({ align }) => align || 'unset'};

  @media ${({ theme }) => theme.device.minDesktop} {
    flex-direction: ${({ tDirection }) => (tDirection ? 'row' : 'column')};
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: ${({ mDisplay }) => mDisplay || 'flex'};
    flex-direction: ${({ tDirection, mDirection }) =>
      mDirection || tDirection ? 'row' : 'column'};
    justify-content: ${({ mJustify, justify }) =>
      mJustify || justify || 'unset'};
    align-items: ${({ mAlign, align }) => mAlign || align || 'unset'};
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: ${({ sDisplay }) => sDisplay || 'flex'};
    flex-direction: ${({ tDirection, mDirection, sDirection }) =>
      mDirection || tDirection || sDirection ? 'row' : 'column'};
    justify-content: ${({ sJustify, mJustify, justify }) =>
      sJustify || mJustify || justify || 'unset'};
    align-items: ${({ sAlign, mAlign, align }) =>
      sAlign || mAlign || align || 'unset'};
  }
`;

export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ grid }) => grid}, 1fr);
  box-sizing: border-box;
  row-gap: ${({ rowGap }) =>
    rowGap ? (Number(rowGap) ? `${rowGap}px` : rowGap) : 'unset'};
  column-gap: ${({ colGap }) =>
    colGap ? (Number(colGap) ? `${colGap}px` : colGap) : 'unset'};

  ${common}
  ${elementSize}
  ${space}

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: repeat(${({ mGrid, grid }) => mGrid || grid}, 1fr);
    row-gap: ${({ rowGap, mRowGap }) =>
      mRowGap
        ? Number(mRowGap)
          ? `${mRowGap}px`
          : mRowGap
        : rowGap
        ? Number(rowGap)
          ? `${rowGap}px`
          : rowGap
        : 'unset'};
    column-gap: ${({ colGap, mColGap }) =>
      mColGap
        ? Number(mColGap)
          ? `${mColGap}px`
          : mColGap
        : colGap
        ? Number(colGap)
          ? `${colGap}px`
          : colGap
        : 'unset'};
  }

  @media ${({ theme }) => theme.device.mobile} {
    grid-template-columns: repeat(
      ${({ sGrid, mGrid, grid }) => sGrid || mGrid || grid},
      1fr
    );
    row-gap: ${({ sRowGap, mRowGap, rowGap }) =>
      sRowGap
        ? Number(sRowGap)
          ? `${sRowGap}px`
          : sRowGap
        : mRowGap
        ? Number(mRowGap)
          ? `${mRowGap}px`
          : mRowGap
        : rowGap
        ? Number(rowGap)
          ? `${rowGap}px`
          : rowGap
        : 'unset'};
    column-gap: ${({ sColGap, mColGap, colGap }) =>
      sColGap
        ? Number(sColGap)
          ? `${sColGap}px`
          : sColGap
        : mColGap
        ? Number(mColGap)
          ? `${mColGap}px`
          : mColGap
        : colGap
        ? Number(colGap)
          ? `${colGap}px`
          : colGap
        : 'unset'};
  }
`;
