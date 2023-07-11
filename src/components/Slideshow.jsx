import React from 'react'
import './slideshow.css'


const Slideshow = () => {
    const showSlides = () => {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    };

    // Initialize slideIndex variable before calling the function
    let slideIndex = 0;

    // Call the showSlides function after the elements are available
    window.onload = showSlides;

    function currentSlide(n) {
        showSlides(n);
    }
    function plusSlides(n) {
        slideIndex += n;
        showSlides(slideIndex);
    }
    return (
        <div>
            <div class="slideshow-container">

                <div class="mySlides fade">
                    <img src="./Images/img1.jpg" alt='abc' />
                </div>

                <div class="mySlides fade">
                    <img src="./Images/img2.webp" alt='abc' />
                </div>

                <div class="mySlides fade">
                    <img src="./Images/img3.jpg" alt='abc' />
                </div>

                <a class="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a class="next" onClick={() => plusSlides(1)}>&#10095;</a>
            </div>
            <br />

            <div style={{ textAlign: 'center' }}>
                <span className='dot' onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
            </div>
        </div>


    )
}

export default Slideshow
