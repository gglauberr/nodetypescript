import { Request, Response, NextFunction } from 'express'
import AlunoModel from '../models/AlunoModel'

const AlunoValidation = async (req : Request, res : Response, next : NextFunction) : Promise<any> => {
  const { Nome, Telefone, Email } = req.body

  if (!Nome) return res.status(400).json({ error: 'O nome é obrigatório' })
  if (!Telefone) return res.status(400).json({ error: 'O Telefone é obrigatório' })
  if (!Email) return res.status(400).json({ error: 'O Email é obrigatório' })

  let exists

  if (req.params.id) {
    exists = await AlunoModel.find({
      _id: { $ne: req.params.id },
      Nome: { $eq: Nome },
      Telefone: { $eq: Telefone },
      Email: { $eq: Email }
    })
  } else {
    exists = await AlunoModel.find({
      Nome: { $eq: Nome },
      Telefone: { $eq: Telefone },
      Email: { $eq: Email }
    })
  }

  if (!exists) return res.status(400).json({ error: 'O aluno já existe' })

  next()
}

export default AlunoValidation
