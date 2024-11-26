import { Router } from 'express'
import authenticationRoutes from '@/modules/authentication/routes/auth.routes'
import { prefixAuth } from '../constants'

const routerApplication: Router = Router()

routerApplication.use(prefixAuth, authenticationRoutes)

export default routerApplication