export default function getUserBasket() {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    return user.card || []
}