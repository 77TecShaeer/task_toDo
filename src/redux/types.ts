
export interface user {
    email: string;
    password: string;
    image: string;
    id: string
}

export interface taskType {
    title: string
    description: string
    status?: string
    userId?: string
    id: string
}