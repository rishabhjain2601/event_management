import React from 'react'
import Carousel from 'react-elastic-carousel'
import './cardslider.css'
import Card_upcoming from './Card_upcoming';

const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5},
    { width: 1700, itemsToShow: 6 },
];

function Cardslider(props){
    const arr = [];
    for (let i = 0; i < 9; i++) {
        arr.push(<props.cardType index={i}/>)                        
    }
    return (
        <div>
            <ul><li>
                <h1>{props.category}</h1>
            </li></ul>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    {/* <Card_upcoming index={0} />
                    <Card_upcoming index={1} />
                    <Card_upcoming index={2} />
                    <Card_upcoming index={3} />
                    <Card_upcoming index={4} />
                    <Card_upcoming index={5} />
                    <Card_upcoming index={6} /> */}
                    {arr}
                </Carousel>
            </div>
        </div>
    )
}

export default Cardslider
