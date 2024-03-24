import bcrypt from 'bcrypt'

export const handlPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const handlPassword = await bcrypt.hash(password,salt)
    return handlPassword
}