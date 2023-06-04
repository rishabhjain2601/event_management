import React from 'react'
import Carousel from 'react-elastic-carousel'
import './cardslider.css'
import Card from './Card';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
    { width: 1700, itemsToShow: 5 },
    { width: 2100, itemsToShow: 6 },
];

const Cardslider = () => {
    return (
        <div>
            <ul><li>
                <h1>Upcoming Events</h1>
            </li></ul>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    <Card index={0} />
                    <Card index={1} />
                    <Card index={2} />
                    <Card index={3} />
                    <Card index={4} />
                    <Card index={5} />
                    <Card index={6} />
                </Carousel>
            </div>
        </div>
    )
}

export default Cardslider
