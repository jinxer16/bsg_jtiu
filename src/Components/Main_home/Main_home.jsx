import React from 'react'
import Benifits from '../Benifits/Benifits'
import Homef from '../Homef/Homef'
import Header from '../Header/Header'
import Start from '../Start/Start'
import Tier from '../Tier/Tier'
import Roadmap from '../Roadmap/Roadmap'
import Project_images from '../Project_images/Project_images'

function Main_home() {
  return (
    <div>
      <Header />
      <Homef />
      <Start />
      <Project_images />
      <Benifits />
      <Tier />
      <Roadmap />
    </div>
  )
}

export default Main_home
