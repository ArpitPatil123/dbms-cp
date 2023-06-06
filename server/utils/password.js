import bcrypt from 'bcrypt';

export const hashPassword = async(password) => {
    const saltRounds = 10;
    const hashesPassword = await bcrypt.hash(password, saltRounds);
    return hashesPassword;
}

export const comparePassword = async(password, hash) => {
    return await bcrypt.compare(password, hash);
}