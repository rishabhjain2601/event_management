import React from 'react'
import './card.css'

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

function Card(props) {
    return (
        <div>
            <div className="card">
                <img src={slides.at(props.index).image} alt="Denim Jeans" /><br/>
                    {/* {/* {slides.at(1).title} */}
                    <p>{slides.at(props.index).description}</p>
                    <p><button>Register</button></p>
            </div>
        </div>
    )
}

export default Card
