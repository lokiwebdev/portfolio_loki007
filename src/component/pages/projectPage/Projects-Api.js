import imgTodo from '../../assets/todo_list.jpg'
import imgCalculator from "../../assets/calculator.jpg"
import imgClock from "../../assets/clock.png"

const projects = [
  {
    id: 1,
    image: imgTodo,
    to: "/todo",
    title: "Todo List",
    desc: "This is description.",
  },
  {
    id: 2,
    image: imgTodo,
    to: "/todofb",
    title: "Todo Firebase",
    desc: "This is description."
  },
  {
    id: 3,
    image: imgCalculator,
    to: "/calculator",
    title: "Calculater",
    desc: "This is description."
  },
  {
    id: 4,
    image: imgClock,
    to: "/clock",
    title: "Clock",
    desc: "This is description."
  },
]
export default projects
