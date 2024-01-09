import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
    'userStore',
    () => {
        // token
        const accessToken = ref('')
        const refreshToken = ref('')

        // user base info
        const uid = ref('')
        const username = ref('')
        const introduction = ref('')

        const removeAccessToken = () => {
            accessToken.value = ''
        }

        const removeRefreshToken = () => {
            refreshToken.value = ''
        }

        return { accessToken, refreshToken, uid, username, introduction,
                 removeAccessToken, removeRefreshToken }
    },
    {
        persist: {
            enabled: true
        }
    }
)