import {io} from 'socket.io-client'
import {BACKEND_URL} from './env'

const URL = BACKEND_URL;

export const socket = io(URL, {
  autoConnect : false,
  reconnection : false
})