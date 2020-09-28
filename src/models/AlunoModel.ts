import mongoose from '../config/database'

const AlunoModel = new mongoose.Schema({
  Nome: { type: String, required: true },
  Telefone: { type: String, required: false },
  Email: { type: String, required: false }
})

export default mongoose.model('Aluno', AlunoModel)
