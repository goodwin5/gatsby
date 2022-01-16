import * as React from 'react'
import './header.scss'
import { StaticImage } from "gatsby-plugin-image"
class Header extends React.Component {

    componentDidMount() {
        // Other important pens.
// Map: https://codepen.io/themustafaomar/pen/ZEGJeZq
// Dashboard: https://codepen.io/themustafaomar/pen/jLMPKm

let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler')
let dropdownIsOpen = false

// Handle dropdown menues
if (dropdowns.length) {
  // Usually I don't recommend doing this (adding many event listeners to elements have the same handler)
  // Instead use event delegation: https://javascript.info/event-delegation
  // Why: https://gomakethings.com/why-event-delegation-is-a-better-way-to-listen-for-events-in-vanilla-js
  // But since we only have two dropdowns, no problem with that. 
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', (event) => {
      let target = document.querySelector(`#${event.target.dataset.dropdown}`)

      if (target) {
        if (target.classList.contains('show')) {
          target.classList.remove('show')
          dropdownIsOpen = false
        } else {
          target.classList.add('show')
          dropdownIsOpen = true
        }
      }
    })
  })
}

// Handle closing dropdowns if a user clicked the body
window.addEventListener('mouseup', (event) => {
  if (dropdownIsOpen) {
    dropdowns.forEach((dropdownButton) => {
      let dropdown = document.querySelector(`#${dropdownButton.dataset.dropdown}`)
      let targetIsDropdown = dropdown == event.target

      if (dropdownButton == event.target) {
        return
      }

      if ((!targetIsDropdown) && (!dropdown?.contains(event.target))) {
        dropdown?.classList.remove('show')
      }
    })
  }
})

// Open links in mobiles
function handleSmallScreens() {
  document.querySelector('.navbar-toggler')
    .addEventListener('click', () => {
    let navbarMenu = document.querySelector('.navbar-menu')

    if (navbarMenu.style.display === 'flex') {
      navbarMenu.style.display = 'none'
      return
    }

    navbarMenu.style.display = 'flex'
  })
}

handleSmallScreens()

    }

    render() {
        return (
            <nav className="navbar">
            <div className="container">
          
              <div className="navbar-header">
                <button className="navbar-toggler" data-toggle="open-navbar1">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <a href="/" style={{display:'flex'}}>
                <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif","png"]}
        src="../images/logo1.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      /> <div style={{display:'flex',alignItems: 'center'}}><span>老杨博客</span> </div>
                </a>
              
              </div>
          
              <div className="navbar-menu" id="open-navbar1">
                <ul className="navbar-nav">
                  <li className="active"><a href="/">首页</a></li>
                  <li><a href="/java">Java</a></li>
                  <li><a href="/java">React</a></li>
                  {/* <li className="navbar-dropdown">
                    <a href="#" className="dropdown-toggler" data-dropdown="blog">
                      React <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown" id="blog">
                      <li><a href="/react">初级教程</a></li>
                      <li className="separator"></li>
                      <li><a href="/react">进阶教程</a></li>
                    </ul>
                  </li> */}
                  <li><a href="/vue">Vue</a></li>
                  <li><a href="/interview">面试典籍</a></li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}
export default Header