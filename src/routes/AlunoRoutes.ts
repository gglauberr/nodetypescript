import { Router } from 'express'
import AlunoController from '../controllers/AlunoController'
import AlunoValidation from '../middleware/AlunoValidation'

const routes = Router()

routes.get('/', AlunoController.Index)
routes.get('/:id', AlunoController.show)
routes.post('/', AlunoValidation, AlunoController.create)
routes.put('/:id', AlunoValidation, AlunoController.update)
routes.delete('/:id', AlunoController.delete)

export default routes
