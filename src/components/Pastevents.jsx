import React, {useRef} from 'react'
import Cards from './Cards'
import './pastevents.css'
export default function Pastevents() {
  const ref = useRef(null)
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <div className='past-events'>
        <h1>Events By us:</h1>
        <div className="all-past-events">
            <button className='scroll-event' onClick={() => scroll(-500)}>x</button>
            <div ref = {ref} className="swipe-events">
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
            <button className='scroll-event' onClick={() => scroll(500)}>x</button>
        </div>
    </div>
  )
}
