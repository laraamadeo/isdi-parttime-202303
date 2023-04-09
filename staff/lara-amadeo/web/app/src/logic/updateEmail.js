import { findUserbyEmail } from "./helpers/data-managers.js"

export const updateEmail = (email, currentEmail, newEmail, confirmNewEmail) => {

    const user = findUserbyEmail(email)

    if (!user)
    throw new Error('User not found')

    if (currentEmail !== email)
    throw new Error('Invalid current email')

    if (currentEmail === newEmail)
    throw new Error('New email cannot be the same as current email')

    if (newEmail !== confirmNewEmail)
    throw new Error('New emails do not match')

    user.email = newEmail
    email = newEmail
}