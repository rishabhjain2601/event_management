import React from 'react'
import Cardslider from '../components/Cardslider'
import Navbar from '../components/Navbar'
import Card_upcoming from '../components/Card_upcoming'
import Card_default from '../components/Card_default'

const About = () => {
  return (
    <div>
    <Navbar/>
    <Cardslider category={"Upcoming Events"} cardType={Card_upcoming} />
    <Cardslider category={"Past Events"} cardType={Card_default} />
    </div>
  )
}

export default About
