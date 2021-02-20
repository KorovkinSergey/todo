import React, {useState} from 'react'
import {formatDistanceToNow} from 'date-fns'
import PropTypes from 'prop-types'

function Task({task, changeTask, deleteTask}) {

	const time = formatDistanceToNow(new Date(+task.id))

	const [changeTitle, setChangeTitle] = useState(false)
	const [title, setTitle] = useState(task.title)

	const changeCheckbox = () => changeTask({...task, completed: !task.completed})


	const onKeyEnterHandle = e => {
		if (e.charCode === 13) {
			changeTask({...task, title})
			setChangeTitle(false)
		}
	}
	return (
		<li className={task.completed ? 'completed' : null}>
			{!changeTitle
				? <div className="view">
					<input className="toggle" type="checkbox" checked={task.completed} onChange={() => changeCheckbox()}/>
					<label>
						<span className="description">{task.title}</span>
						<span className="created">{time}</span>
					</label>
					<button className="icon icon-edit" onClick={() => setChangeTitle(true)}/>
					<button className="icon icon-destroy" onClick={() => deleteTask(task)}/>
				</div>
				: <input type="text" className="edit"
								 value={title}
								 onChange={e => {
									 setTitle(e.target.value)
								 }}
								 onKeyPress={e => onKeyEnterHandle(e)}
								 autoFocus={true}
				/>
			}
		</li>
	)
}


Task.propTypes = {
	task: PropTypes.object,
	changeTask: PropTypes.func,
	deleteTask: PropTypes.func
}

Task.defaultProps  = {
	task: {
		title:'defaultProps',
		completed: false,
		id: new Date().getTime().toString()
	},
	changeTask: () => {},
	deleteTask: () => {}
}

export default Task
