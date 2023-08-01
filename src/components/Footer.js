import React from "react"

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__paragraph">
        &copy; {new Date().getFullYear()}. Роман Щебетенко
      </p>
    </footer>
  )
}

export default Footer
