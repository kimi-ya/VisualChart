// 接口
import express, { Express, Router, Request, Response } from 'express';
import axios from 'axios';

const app: Express = express();

// 允许跨域
app.use('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

const router: Router = express.Router();

app.use('/api', router);

// req 接收前端的数据  res 传给前端的数据
router.get('/list', async (req: Request, res: Response) => {
    const result = await axios.get('https://c.m.163.com/ug/api/wuhan/app/data/list-total?t=333357703994')
    res.json({
        ...result.data.data
    })
})

// 接口地址端口号
app.listen(3333, () => {
    console.log('success server http://localhost:3333')
})