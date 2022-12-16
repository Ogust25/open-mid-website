import axios from 'axios'

export async function getPlayerLogs() {
  axios({
    method: 'post',
    url: 'https://www.warcraftlogs.com/api/v2/client',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_WOWLOGS_TOKEN}`,
    },
    data: {
      query: `{
            characterData {
                character(name: "steakozor", serverSlug: "elune", serverRegion: "eu") {
                    encounterRankings(encounterID: 2398, difficulty: 4)
                }
            }
        }`,
    },
  }).then((res) => {
    console.log(res.data)
    return res.data
  })
}