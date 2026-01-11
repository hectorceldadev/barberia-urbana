import { Anton, Geist } from "next/font/google"

export const anton = Anton({
    subsets: ['latin'],
    weight: '400',
    display: 'swap'
})

export const geist = Geist({
    subsets: ['latin'],
    weight: ['200', '400', '600', '700'],
    display: 'swap'
})