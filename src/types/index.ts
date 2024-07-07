interface Post {
    title: string
    body: string
    id: number
    user_id: number
}


interface Comment {
    id: number
    post_id: number
    name: string
    email: string
    body: string
}

