import { Request, Response } from 'express'
import AlunoModel from '../models/AlunoModel'

const AlunoController = new class {
  async Index (req : Request, res : Response) {
    await AlunoModel
      .find()
      .sort('_id')
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(error => {
        return res.status(400).json(error)
      })
  }

  async show (req : Request, res : Response) {
    const Id = req.params.id
    await AlunoModel.findById(Id)
      .find()
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(error => {
        return res.status(400).json(error)
      })
  }

  async create (req : Request, res : Response) {
    const aluno = await AlunoModel.create(req.body)
    aluno
      .save()
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(error => {
        return res.status(400).json(error)
      })
  }

  async update (req : Request, res : Response) {
    const Id = req.params.id
    await AlunoModel
      .findByIdAndUpdate({ _id: Id }, req.body, { new: true })
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(error => {
        return res.status(400).json(error)
      })
  }

  async delete (req : Request, res : Response) {
    const Id = req.params.id
    await AlunoModel
      .findByIdAndDelete(Id)
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(error => {
        return res.status(400).json(error)
      })
  }
}()

export default AlunoController
