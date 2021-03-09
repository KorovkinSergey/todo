import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TaskList from './components/TaskList'
import './index.css'

function App() {

	const [tasks, setTasks] = useState([])

	const [filter, setFilter] = useState('All')

	const addNewTask = task => setTasks([...tasks, task])

	const changeTask = task => setTasks(tasks.map(item => item.id === task.id ? task : item))

	const deleteTask = task => setTasks(tasks.filter(item => item.id !== task.id))

	const deleteCompletedTasks = () => setTasks(tasks.filter(task => !task.completed))

	const tasksCount = tasks.reduce((count, task) => task.completed !== true ? count += 1 : count, 0)

	useEffect(() => {


	}, [tasks, filter])

	const filterTasksHandler = (fil) => setFilter(fil)

	return (
		<section className='todoapp'>
			<Header addNewTask={addNewTask}/>
			<section className="main">
				<TaskList
					tasks={tasks}
					filter={filter}
					changeTask={changeTask}
					deleteTask={deleteTask}
				/>
			</section>
			<Footer
				tasksCount={tasksCount}
				filterTasksHandler={filterTasksHandler}
				deleteCompletedTasks={deleteCompletedTasks}
				filter={filter}
			/>
		</section>
	)
}

export default App
