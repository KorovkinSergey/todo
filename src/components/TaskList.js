import React from 'react'
import Task from './Task'
import PropTypes from 'prop-types'


function TaskList({tasks, changeTask, deleteTask}) {

	return (
		<ul className="todo-list">
			{tasks.map((task, index) => <Task
				key={index}
				task={task}
				changeTask={changeTask}
				deleteTask={deleteTask}
			/>)}
		</ul>
	)
}

TaskList.propTypes = {
	tasks: PropTypes.array,
	changeTask: PropTypes.func,
	deleteTask: PropTypes.func,
}

TaskList.defaultProps = {
	tasks: [],
	changeTask: () => {
	},
	deleteTask: () => {
	}
}

export default TaskList
