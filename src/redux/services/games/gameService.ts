import axios from 'axios';

const API_URL = '/api/games'

const getGames = async () => {
  const config = {
    headers: {
      "Content-Type": "text/plain"
    }
  }

  const response = await axios.post(API_URL, `fields involved_companies.*;where involved_companies != null;where rating > 75;`, config)

  return response.data
}

const gameService = {
  getGames
}

export default gameService