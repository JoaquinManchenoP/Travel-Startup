import React, { useState } from 'react'
import Carousel from './carousel/Carousel'
import CarouselButtons from './carousel/CarouselButtons';
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";

export default function Header() {
  const [counter, setCounter] = useState(1);
  const [tuple, setTuple] = useState([null, counter]);

  return (
    <div>
      <div className='h-headerHeight w-full flex items-center mt-12'>
        <Carousel counter={counter} setCounter={setCounter} tuple={tuple} setTuple={setTuple} />
      </div>
      <CarouselButtons counter={counter} setCounter={setCounter} tuple={tuple} setTuple={setTuple} />
    </div>
  )
}