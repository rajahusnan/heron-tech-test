import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'

import { Footer } from './components/footer'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import { Mutliagen } from './components/mutliagen'
import { Common } from './components/common'
import { Contact } from './components/contact'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} data2={landingPageData.Features2}  />
      <Mutliagen data={landingPageData.Multiagen}/>
      <Common data={landingPageData.Common}/>
      <Services data={landingPageData.Services} />
      <Contact data={landingPageData.Contact}/>
      <Footer />
    </div>
  )
}

export default App
