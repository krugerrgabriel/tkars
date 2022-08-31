import React, { useState, useRef, useEffect } from 'react';

import { Body } from './styles';

import { ScrollMenuProps } from './interfaces';

const ScrollMenu: React.FC<ScrollMenuProps> = props => {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = event => {
    let slider = sliderRef.current;

    setIsDown(true);

    setStartX(event.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDown(false);
  };

  const onMouseUp = () => {
    setIsDown(false);
  };

  const onMouseMove = event => {
    if (!isDown) return;

    let slider = sliderRef.current;

    event.preventDefault();

    const x = event.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - walk;
  };

  return (
    <Body
      ref={sliderRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {props.children}
    </Body>
  );
};

export default ScrollMenu;
