export const goToLogin = (history) => {
    history.push("/login")
}

export const goToRegister = (history) => {
    history.push("/signup")
}

export const goToFeed = (history) => {
    history.push("/feed")
}

export const goToDetails = (history, id) => {
    history.push(`/post/${id}`)
}