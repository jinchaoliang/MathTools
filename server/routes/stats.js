const express = require('express');
const router = express.Router();

// 获取统计数据
router.get('/', (req, res) => {
  res.json({ message: '获取统计数据' });
});

// 获取特定日期范围的统计
router.get('/:period', (req, res) => {
  res.json({ message: `获取${req.params.period}周期的统计数据` });
});

module.exports = router;
