import socketIo from 'socket.io-client'
import { AHOY_URL } from '../config'

const socket = socketIo(AHOY_URL)

export const useWs = () => socket
