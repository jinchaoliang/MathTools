const express = require('express');
const router = express.Router();

// 获取所有用户
router.get('/', (req, res) => {
  res.json({ message: '获取所有用户' });
});

// 获取单个用户
router.get('/:id', (req, res) => {
  res.json({ message: `获取ID为 ${req.params.id} 的用户` });
});

// 创建新用户
router.post('/', (req, res) => {
  res.json({ message: '创建新用户', data: req.body });
});

// 更新用户
router.put('/:id', (req, res) => {
  res.json({ message: `更新ID为 ${req.params.id} 的用户`, data: req.body });
});

// 删除用户
router.delete('/:id', (req, res) => {
  res.json({ message: `删除ID为 ${req.params.id} 的用户` });
});

module.exports = router;
