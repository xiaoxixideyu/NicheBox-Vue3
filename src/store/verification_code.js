import { defineStore } from 'pinia'
import { ref } from 'vue'
import {sendRegisterCode as httpSendRegisterCode} from '@/http/apis/user' 

export const useVerificationCodeStore = defineStore(
    "verification_code",
    () => {
        // code
        const code = ref('')

        const sendRegisterCode = (email) => {
            new Promise((resolve, reject) => {
                httpSendRegisterCode(email).then(res =>{
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        }
        return {code, sendRegisterCode}
    },
    {
        persist: {
            enabled: false
        }
    }
)