import axios from 'axios';

const API_URL = '/api/games'

const getGames = async () => {
  const config = {
    headers: {
      "Content-Type": "text/plain"
    }
  }

  const response = await axios.post(API_URL, `fields name, rating, storyline, summary, cover, first_release_date;limit 20;`, config)

  return response.data.data
}

const gameService = {
  getGames
}

export default gameService