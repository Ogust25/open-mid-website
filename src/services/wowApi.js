import axios from 'axios'

export async function getPlayer(player) {
  let renderURL = `/profile/wow/character/${player.server.toLowerCase()}/${player.name.toLowerCase()}`
  let namespace = '?namespace=profile-eu&locale=fr_FR'

  const url = `https://eu.api.blizzard.com${renderURL}${namespace}&access_token=${process.env.REACT_APP_WOW_TOKEN}`

  return axios.get(url).then((res) => {
    console.log(res.data)
    return res.data
  })
}

export async function getPlayerMedia(player) {
  let renderURL = `/profile/wow/character/${player.server.toLowerCase()}/${player.name.toLowerCase()}`
  let namespace = '?namespace=profile-eu&locale=fr_FR'

  const url = `https://eu.api.blizzard.com${renderURL}/character-media${namespace}&access_token=${process.env.REACT_APP_WOW_TOKEN}`

  return axios.get(url).then((res) => {
    console.log(res.data)
    return res.data
  })
}
