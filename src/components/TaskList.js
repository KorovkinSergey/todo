import React from 'react'
import Task from './Task'
import PropTypes from 'prop-types'


function TaskList({tasks, filter, changeTask, deleteTask}) {

	return (
		<ul className="todo-list">
			{tasks.filter(item => {
				switch (filter) {
					case 'Active':
						return !item.completed
					case 'Completed':
						return item.completed
					default:
						return item
			}}).map((task, index) => <Task
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
