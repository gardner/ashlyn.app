import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'
import Squiggles from './assets/squiggles.svg'
import animation from './animation.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
      <Squiggles className="squiggles" />
      <Container>
        <Navigation />
        {children}
      </Container>
      </div>
    )
  }
}

export default Template
