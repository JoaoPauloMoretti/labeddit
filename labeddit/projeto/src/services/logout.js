import { goToLogin } from "../Route/coordinator"

export const logout = (history) => {
    localStorage.removeItem('token')
    goToLogin(history)
}