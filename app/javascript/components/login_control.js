import { useState } from "react"
import html from "./htm_create_element"
import FlavaForm from "./flava_form";

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const userGreeting = () => html`<h1>Welcome back!</h1>`
  const guestGreeting = () => html`<h1>Please Log In.</h1>`

  const greeting = () => isLoggedIn ? userGreeting() : guestGreeting()

  const handleLogin = () => setIsLoggedIn(true)
  const handleLogout = () => setIsLoggedIn(false)

  const loginButton = () => {
    return html`<button onClick=${() => handleLogin()}>Login</button>`
  }

  const logoutButton = () => {
    return html`<button onClick=${() => handleLogout()}>Logout</button>`
  }

  const buttonSelection = () => isLoggedIn ? logoutButton() : loginButton()
  const contentSelection = () => {
    if(isLoggedIn) {
      return html `
        <${FlavaForm} />
      `
    }
  }

  return html`
    <div>
      ${greeting()}
      ${buttonSelection()}
      ${contentSelection()}
    </div>
  `
}