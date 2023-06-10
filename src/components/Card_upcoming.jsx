import React from 'react'
import './card_upcoming.css'

const slides = [
    {
        image: "https://picsum.photos/300/250",
        title: "This is a title",
        description: "This is a description",
        clickEvent: "sliderClick"
    },
    {
        image: "https://picsum.photos/300/250",
        title: "This is a title",
        description: "This is second description",
        clickEvent: "sliderClick"
    },
    {
        image: "https://picsum.photos/300/250",
        title: "This is a title",
        description: "This is third description",
        clickEvent: "sliderClick"
    },
    {
        image: "https://picsum.photos/300/250",
        title: "This is a title",
        description: "This is fourth description",
        clickEvent: "sliderClick"
    },
    {
        image: "https://picsum.photos/300/250",
        title: "This is a title",
        description: "This is fifth description",
        clickEvent: "sliderClick"
    },
    {
        image: "https://picsum.photos/300/250",
        title: "This is a title",
        description: "This is sixth description",
        clickEvent: "sliderClick"
    },
    {
        image: "https://picsum.photos/300/250",
        title: "This is a title",
        description: "This is seventh description",
        clickEvent: "sliderClick"
    },
    {
        image: "https://picsum.photos/300/250",
        title: "This is a title",
        description: "This is eight description",
        clickEvent: "sliderClick"
    },
    {
        image: "https://picsum.photos/300/250",
        title: "This is a title",
        description: "This is ninth description",
        clickEvent: "sliderClick"
    },
];

function Card_upcoming(props) {
    return (
        <div>
            <div className="card">
                <div><img src={slides.at(props.index).image} alt="Denim Jeans" /></div>
                    {/* {/* {slides.at(1).title} */}
                    {/* <p>{slides.at(props.index).description}</p> */}
                    <button>Register</button>
            </div>
        </div>
    )
}

export default Card_upcoming
