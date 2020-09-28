import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/Teste', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export default mongoose
