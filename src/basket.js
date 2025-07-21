let getUser;
try {
    getUser = JSON.parse(localStorage.getItem('user'))

} catch {
    getUser = null
}

let UserBasket = []
if (getUser) {

    getUser.card = UserBasket

    localStorage.setItem('user', JSON.stringify(getUser))


}

export default UserBasket

