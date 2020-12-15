const url = process.env.REACT_APP_API_URL || `http://localhost:4000/api/v1`

class GameModel {
  static all = () => {
    //if you want access to req.user from sessions, need todo a credentials: 'include', else req.user is empty...
    //thank stackOverflow
    return fetch(`${url}/games`, {credentials: 'include'}).then(res => res.json())
  }

  static show = (gameId) => {
    return fetch(`${url}/games/${gameId}`).then(res => res.json())
  }

  static create = (gameData) => {
    return fetch(`${url}/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(gameData)
    })
      .then(res => res.json())
  }
}

export default GameModel
