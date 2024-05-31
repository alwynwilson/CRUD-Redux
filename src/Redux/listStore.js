import { configureStore } from '@reduxjs/toolkit'
import listSlice from './listSlice'

const listStore = configureStore({
    reducer:{
        list:listSlice
    }
})

export default listStore