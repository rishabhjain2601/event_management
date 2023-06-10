import React from 'react'
import './soc_card.css'

const Soc_card = () => {
    return (
        <div>
            <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
                <div class="soc_card">
                    <div class="wrapper">
                        <img src="./Images/download.jpg" class="cover-image" />
                    </div>
                    {/* <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" /> */}
                    <img src="./Images/Eiffel Tower.png" class="character" />
                </div>
            </a>

        </div>
    )
}

export default Soc_card
