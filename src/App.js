import React, { Component } from "react"
import { Route } from "react-router-dom"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import CardsProuducts from "./components/CardsProudcts"
import Scoundbg from "./components/Scoundbg"
import OurStory from "./components/OurStory"
import Delivery from "./components/Delivery"
import Footer from "./components/Footer"
import About from "./components/About"
import Services from "./components/Services"
import Shop from "./components/Shop"
import SingUp from "./components/SignUp"
import firebase from "./utils/firebase"
import { getProductsData } from "./utils/firebaseFunction"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import Contact from "./components/Contact"

library.add(fas, fab, faCheckSquare, faCoffee)
class App extends Component {
  state = { Products: null }
  async componentDidMount() {
    const ProductsData = await getProductsData()
    this.setState({ Products: ProductsData })
    this.authListener()
  }
  authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      console.log("user:", user)
    })
  }
  handleSignUp = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
  }
  render() {
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <Route exact path="/">
          <Hero />
          <section>
            <CardsProuducts />
          </section>
          <OurStory />
          <Scoundbg />
          <Delivery />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/Shop">
          <Shop Products={this.state.Products} />
        </Route>
        <Route exact path="/SignUp">
          <SingUp handleSubmit={this.handleSignUp} />
        </Route>
        <Footer />
      </div>
    )
  }
}

export default App
