const url = process.env.REACT_APP_API_URL || `http://localhost:4000/api/v1`

export default class UserModel {
  static create(data) {
    return fetch(`${url}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res=> res.json())

  }

  static login(credentials) {
    return fetch(`${url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials),
      //include with any request requiring authentication
      credentials: 'include'
    }).then(res=> res.json())
    
  }

  static logout() {
    return fetch(`${url}/auth/logout`, {
      method: "DELETE",
      credentials: 'include'
    })

  }
}
