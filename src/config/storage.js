import * as constants from "./constants"

// 存储 access token
export const setAccessToken = (token) => localStorage.setItem(constants.ACCESS_TOKEN, token)
// 存储 refresh token
export const setRefreshToken = (token) => localStorage.setItem(constants.REFRESH_TOKEN, token)
// 获取 access token
export const getAccessToken = () => localStorage.getItem(constants.ACCESS_TOKEN)
// 获取 refresh token
export const getRefreshToken = () => localStorage.getItem(constants.REFRESH_TOKEN)
// 删除 access token
export const removeAccessToken = () => localStorage.removeItem(constants.ACCESS_TOKEN)
// 删除 refresh token
export const removeRefreshToken = () => localStorage.removeItem(constants.REFRESH_TOKEN)