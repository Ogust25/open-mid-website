import { useState } from 'react'
import { FormAddPlayer } from '../components/FormAddPlayer'
import { Nav } from '../components/Nav'
import { NavLogged } from '../components/NavLogged'
import { getPlayer, getPlayerMedia } from '../services/wowApi'
import { getPlayerLogs } from '../services/wowLogsApi'
// import TankContainer from './TankContainer';
// import HealContainer from './HealContainer';
// import DpsContainer from './DpsContainer';

export const Roster = ({ isLogged }) => {
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: 'Steakozor',
      src: 'https://render.worldofwarcraft.com/eu/character/elune/19/193631763-avatar.jpg',
      role: 'dps',
    },
    {
      id: 2,
      name: 'Mury',
      src: 'https://render.worldofwarcraft.com/eu/character/elune/150/155300246-avatar.jpg',
      role: 'heal',
    },
    {
      id: 3,
      name: 'Mnk',
      src: 'https://render.worldofwarcraft.com/eu/character/elune/70/199881286-avatar.jpg',
      role: 'tank',
    },
  ])

  const addPlayer = (player) => {
    let renderURL = `/profile/wow/character/${player.server.toLowerCase()}/${player.name.toLowerCase()}`
    let namespace = '?namespace=profile-eu&locale=fr_FR'
    let token = '&access_token=EUEA33zY2I1w9JhLuczefUfFAaLOROAUB8'

    fetch(`https://eu.api.blizzard.com${renderURL}${namespace}${token}`).then(
      (response) =>
        response.json().then((data) => {
          // console.log(data);
          const playerClass = data.character_class.name
          const playerSpec = data.active_spec.name
          const name = data.name
          const server = data.realm.name
          const ilvl = data.equipped_item_level
          const role = player.role

          fetch(data.mythic_keystone_profile.href + token).then((response) =>
            response.json().then((data) => {
              console.log(data)
              let rio = 0
              if (data.current_mythic_rating) {
                rio = data.current_mythic_rating.rating
              }

              fetch(
                `https://eu.api.blizzard.com${renderURL}/character-media${namespace}${token}`
              ).then((response) =>
                response.json().then((data) => {
                  const portrait = data.assets[0].value
                  const imgPerso = data.assets[3].value

                  const id = Math.floor(Math.random() * 10000) + 1
                  const newPlayer = {
                    id: id,
                    name: name,
                    src: portrait,
                    role: role,
                    imgPerso: imgPerso,
                    server: server,
                    spec: playerSpec,
                    class: playerClass,
                    ilvl: ilvl,
                    rio: rio,
                  }
                  setPlayers([...players, newPlayer])
                })
              )
            })
          )
        })
    )
  }

  return (
    <div className="bg-main h-screen relative overflow-hidden">
      {isLogged ? <NavLogged /> : <Nav />}

      <div className="flex justify-center items-center mt-10 text-white font-bold">
        <div className="flex flex-col bg-container w-5/6 rounded-xl p-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-5xl">Roster Open Mid</h2>
            {isLogged ? <FormAddPlayer onAdd={addPlayer} /> : <></>}
          </div>
          {/* <TankContainer players={players} />
          <HealContainer players={players} />
          <DpsContainer players={players} /> */}
        </div>
      </div>
    </div>
  )
}
