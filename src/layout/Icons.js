import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
function Icons() {
  return (
    <div className="icon_footer_section">
      <FontAwesomeIcon
        icon="fa-brands fa-facebook"
        size="xl"
        className="icons"
      />
      <FontAwesomeIcon
        icon="fa-brands fa-twitter"
        size="xl"
        className="icons"
      />
      <FontAwesomeIcon
        icon="fa-brands fa-instagram"
        size="xl"
        className="icons"
      />
    </div>
  )
}

export default Icons
library.add(fab)
