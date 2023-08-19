export const required = (value: string) => {
    if (value) return undefined
    return "Field is required"
}

