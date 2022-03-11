import React from "react"
import { Link } from "gatsby"
import ctl from "@netlify/classnames-template-literals"
import PropTypes from "prop-types"
import Logo from '../images/icons/nav/logo.svg'
import MenuBar from '../images/icons/nav/menu.svg'
import CloseIcon from '../images/icons/nav/close.svg'


const Header = ({openMenu, setOpenMenu}) => {
  return(
    <header className={headerStyle}>
      <nav>
      <ul className={ulStyle}>
        <li className={logoWrapStyle}>
          <Link to="/">
            <Logo/>
          </Link>
          Grace Oisamoje
        </li>

        <li onClick={()=> setOpenMenu(!openMenu)} className={menuIconsWrapStyle}>
          {!openMenu ? <MenuBar/> : <CloseIcon/>}
        </li>

      </ul>
      </nav>
    </header>
)
}

const headerStyle = ctl(`
  border-b-[1px]
  border-gm-border-grey
  px-[100px]
`)

const ulStyle = ctl(`
  flex
  justify-between
  items-center
  py-6
  border-x-[1px]
  border-gm-border-grey
  px-[40px]
`)

const logoWrapStyle = ctl(`
  flex
  items-center
  uppercase
  text-[12px]
  text-gm-logo
  font-bold
  tracking-[0.12em]
`)
const menuIconsWrapStyle = ctl(`
  cursor-pointer
  flex flex-col
  items-center
`)


export default Header
