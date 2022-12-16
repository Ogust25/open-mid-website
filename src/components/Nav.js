import React from 'react'
import { Link } from 'react-router-dom'
import omBanner from '../assets/images/om-banner.png'

export const Nav = () => {
  return (
    <nav className="flex flex-col items-center">
      <div className="bg-container w-11/12 rounded-3xl flex items-center p-3 mt-3 justify-between text-white text-xl drop-shadow-xl">
        <Link to="/">
          <img
            className="h-14"
            src={omBanner}
            alt="Nom et banière de la guilde"
          ></img>
        </Link>
        <ul className="flex justify-evenly w-2/3">
          <li className="hover:text-blue-200 cursor-pointer">
            <Link to="/roster">Roster</Link>
          </li>
          <li>
            <a
              className="hover:text-blue-200"
              target="blank_"
              href="https://www.warcraftlogs.com/guild/id/304005"
            >
              Warcraft Logs
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-200"
              target="blank_"
              href="https://raider.io/guilds/eu/varimathras/Open%20Mid"
            >
              Raider.io
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-200"
              target="blank_"
              href="https://www.wowprogress.com/guild/eu/varimathras/Open+Mid"
            >
              WoW-Progress
            </a>
          </li>
        </ul>
        <button
          className="bg-button rounded-xl py-3 px-5 mr-3 hover:bg-buttonHover"
          id="loginButton"
        >
          Login
        </button>
      </div>
    </nav>
  )
}
