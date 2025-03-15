const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// 连接数据库
mongoose.connect('mongodb+srv://yeager:Ljc138499.@cluster0.owy3l.mongodb.net/self_discipline_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// 导入路由
const taskRoutes = require('./routes/tasks')
const userRoutes = require('./routes/users')
const statsRoutes = require('./routes/stats')

const app = express()

// 中间件
app.use(cors())
app.use(bodyParser.json())

// 路由
app.use('/api/tasks', taskRoutes)
app.use('/api/users', userRoutes)
app.use('/api/stats', statsRoutes)

// 错误处理
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    message: '服务器内部错误'
  })
})

// 启动服务器
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`服务器运行在 ${PORT} 端口`)
}) 