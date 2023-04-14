import { useState } from "react"
import h from "./htm_create_element"
import FlavaForm from "./flava_form";

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const userGreeting = () => h`<h1>Welcome back!</h1>`
  const guestGreeting = () => h`<h1>Please sign up.</h1>`

  const greeting = () => isLoggedIn ? userGreeting() : guestGreeting()

  const handleLogin = () => setIsLoggedIn(true)
  const handleLogout = () => setIsLoggedIn(false)

  const loginButton = () => {
    return h`<button onClick=${() => handleLogin()}>Login</button>`
  }

  const logoutButton = () => {
    return h`<button onClick=${() => handleLogout()}>Logout</button>`
  }

  const buttonSelection = () => isLoggedIn ? logoutButton() : loginButton()
  const contentSelection = () => {
    if(isLoggedIn) {
      return h `
        <${FlavaForm} />
      `
    }
  }

  return h`
    <div>
      ${greeting()}
      ${buttonSelection()}
      ${contentSelection()}
    </div>
  `
}