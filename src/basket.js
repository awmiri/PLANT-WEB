let getUser = JSON.parse(localStorage.getItem('user'))

let UserBasket = []

getUser.card = UserBasket

localStorage.setItem('user', JSON.stringify(getUser))

export default UserBasket
