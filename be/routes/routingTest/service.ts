import Task from '../../models/Task'
import { Request , Response } from 'express';

const testMessage = async (req : Request, res : Response) : Promise<void> => {
    res.send("안녕하세요.");
}

const findDataByDatabase = async (req : Request, res : Response) : Promise<void> => {
    try{
        console.log("데이터 찾기 시작");
        const sort = req.query.sort as string;
        const count = Number(req.query.count) || 0;
    
        const sortOption : { [key: string] : 'asc' | 'desc' } = {
            createdAt: sort === 'oldest' ? 'asc' : 'desc',
        };
    
        const tasks = await Task.find().sort(sortOption).limit(count);
        if(tasks) res.send(tasks);
        else res.status(404).send({ message: "데이터를 찾을 수 없습니다."});
    } catch(err) {
        console.log(err);
    }
}

const service = {
    testMessage,
    findDataByDatabase,
}

export default service;