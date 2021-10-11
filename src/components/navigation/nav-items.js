import React from "react"
import { Nav, NavDropdown, SplitButton } from "react-bootstrap"
import { Link } from "gatsby"
import navigationStyles from "./navigation.module.scss"

const NavItems = ({ navItems }) => {
  const navList = navItems.map((navItem, i) => {
    if (navItem.children.length) {
      return (
        <SplitButton
          key={i}
          title={navItem.label}
          id="basic-nav-dropdown"
          className={navigationStyles.navLink}
          open={true}
          renderMenuOnMount={true}
          as={Link}
          href={navItem.path}
          caret={false}
        >
          {navItem.children.map((navItemChild, j) => (
            <NavDropdown.Item
              key={`${i}-${j}`}
              as={Link}
              to={navItemChild.path}
              className={navigationStyles.navLink}
            >
              {navItemChild.label}
            </NavDropdown.Item>
          ))}
        </SplitButton>
      )
    }
    return (
      <Nav.Link
        key={i}
        as={Link}
        to={navItem.path}
        className={navigationStyles.navLink}
      >
        {navItem.label}
      </Nav.Link>
    )
  })

  return <Nav className={"m-auto"}>{navList}</Nav>
}

export default NavItems
