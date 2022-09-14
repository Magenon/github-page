<<<<<<< HEAD
import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'
import Menu from '../menu'

function Header() {
    return (
        <header className="app-header">
            <div class="logo-container">
                <li><Link className="logo" to="/"></Link></li>
            </div>

            <Menu />

        </header >
    )
}

=======
import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'
import Menu from '../menu'

function Header() {
    return (
        <header className="app-header">
            <div class="logo-container">
                <li><Link className="logo" to="/"></Link></li>
            </div>

            <Menu />

        </header >
    )
}

>>>>>>> 31c82e9 (adionar arquivos)
export default Header