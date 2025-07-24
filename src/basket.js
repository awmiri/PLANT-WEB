let getUser;
try {
    getUser = JSON.parse(localStorage.getItem('user'))

} catch {
    getUser = null
}

let UserBasket = []
if (getUser) {
    UserBasket = getUser.card
    getUser.card = UserBasket

    localStorage.setItem('user', JSON.stringify(getUser))


}

export default UserBasket

