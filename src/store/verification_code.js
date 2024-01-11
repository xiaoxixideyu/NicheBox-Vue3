import { defineStore } from 'pinia'
import { ref } from 'vue'
import {sendRegisterCode as httpSendRegisterCode, 
    sendForgetPasswordCode as httpSendForgetPasswordCode,

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

        const sendForgetPasswordCode = (email) => {
            new Promise((resolve, reject) => {
                httpSendForgetPasswordCode(email).then(res =>{
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        }

        return {code, sendRegisterCode, sendForgetPasswordCode, sendSetCriticalUserInfoCode, sendCheckCriticalUserInfoCode}
    },
    {
        persist: {
            enabled: false
        }
    }
)