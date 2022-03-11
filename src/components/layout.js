import React, {useState} from "react"
import { Link } from "gatsby"
import ctl from "@netlify/classnames-template-literals"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={headerStyle}>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <div className={pageWrapStyle}>
            {openMenu ? (
              <nav className={menuWrapStyle}>
                <ul >
                  <li><Link to="/my_work">💻 My Work</Link></li>
                  <li><Link to="/about_me">👧🏽 About Me</Link></li>
                  <li><Link to="/contact_me">📞 Get Talking</Link></li>
                </ul>
              </nav>) : (
                <main>{children}</main>
              )}
          </div>
      <Footer/>
    </div>
  )
}

const headerStyle = ctl(`
  min-h-[100vh] 
  flex flex-col
`)
const pageWrapStyle = ctl(`
  border-x-[1px]
  border-gm-border-grey
  mx-[100px]
  py-10
  flex-grow
`)
const menuWrapStyle= ctl(`
 menu-nav
 text-right
 pr-[80px]
`)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
