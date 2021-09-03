import React from 'react'
import Coverpage from '../Component/Cover'
import Texts from '../Component/Text'
import Councils from '../Component/CouncilName'
import Headnews from '../Component/NewsSection'
import Career from '../Component/Career'
import Info from '../Component/More'
import Navigation from '../Component/Nav'

function Home() {
    return (
        <>
          <Navigation />
          <Coverpage />
          <Texts />
          <Councils />
          <Headnews />
          <Career />
          <Info />
        </>
    )
}

export default Home