const express = require('express')
const router = express.Router()
const Task = require('../models/Task')

// 获取任务列表
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: '缺少用户ID'
      })
    }
    
    const tasks = await Task.find({ userId }).sort({ startTime: 1 })
    
    res.json({
      success: true,
      data: tasks
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
})

// 添加任务
router.post('/', async (req, res) => {
  try {
    const { userId, name, startTime, endTime, category } = req.body
    
    if (!userId || !name || !startTime || !endTime) {
      return res.status(400).json({
        success: false,
        message: '缺少必要字段'
      })
    }
    
    const task = new Task({
      userId,
      name,
      startTime,
      endTime,
      category,
      status: 'pending',
      createTime: new Date()
    })
    
    const savedTask = await task.save()
    
    res.status(201).json({
      success: true,
      data: savedTask
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
})

// Add this route for deleting tasks
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({
        success: false,
        message: '缺少任务ID'
      });
    }

    const result = await Task.findByIdAndDelete(id);
    
    if (!result) {
      return res.status(404).json({
        success: false,
        message: '任务未找到'
      });
    }

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// 更新任务
router.put('/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const { status } = req.body;

    if (!taskId) {
      return res.status(400).json({
        success: false,
        message: '缺少任务ID'
      });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { status },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: '任务未找到'
      });
    }

    res.json({
      success: true,
      data: updatedTask
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// 其他路由...
// 更新任务、删除任务等

module.exports = router 