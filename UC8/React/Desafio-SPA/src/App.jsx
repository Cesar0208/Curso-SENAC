import Header from "./components/Header"
import Hero from "./components/Hero"
import MapSection from "./components/MapSection"
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MapSection />
        <HowItWorks />
      </main>
      <Footer />
    </>
  )
}

export default App
