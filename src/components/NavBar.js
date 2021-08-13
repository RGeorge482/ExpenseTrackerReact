import React from 'react'

export const NavBar = () => {
  return (
    <header className="header">
    <div className="logo">Expense Tracker</div>
    <nav>
      <ul>
        <li>
          <div>About</div>
        </li>
        <li>
          <div>Income</div>
        </li>
        <li>
          <div>Expense</div>
        </li>
        <li>
          <div>Login</div>
        </li>
        <li>
          <div>Register</div>
        </li>
      </ul>
    </nav>
  </header>
  )
}
