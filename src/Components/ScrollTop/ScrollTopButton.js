import React, { useEffect, useState } from 'react'
import './style.css'
export const ScrollTopButton = () => {
    const [scrollTop, setScrollTop] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                setScrollTop(true)
              }
            else {
                setScrollTop(false)
            }
        })
    },[])
    const scrollHandle = () => {
      window.scrollTo({
           top: 0,
           left: 0,
        behavior: "smooth",
      });
    };
    return (
      <>
        {scrollTop && (
          <div className='scrollTopBtn' onClick={scrollHandle}>
            <box-icon name="up-arrow-circle" color="#ffffff"></box-icon>
          </div>
        )}
      </>
    );
}






