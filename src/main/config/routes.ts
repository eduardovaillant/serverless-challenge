import { adaptRoute } from '@/main/adapters'

import { Router } from 'express'

const router = Router()

router.post('/employees', adaptRoute(null))

export default router
