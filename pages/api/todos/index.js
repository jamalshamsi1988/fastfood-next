import { todo } from "../../../data/todos"
export default function  handler(req,res){
    res.status(200).json(todo)
}
