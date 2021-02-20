import React from 'react'
import PropTypes from 'prop-types'

function Footer({filterTasksHandler, deleteCompletedTasks, filter, tasksCount}) {


	const onClickHandler = e => filterTasksHandler(e.target.textContent)

	return (
		<footer className="footer">
			<span className="todo-count">{tasksCount} items left</span>
			<ul className="filters">
				<li>
					<button className={filter === 'All' ? 'selected' : null} onClick={e => onClickHandler(e)}>
						All
					</button>
				</li>
				<li>
					<button className={filter === 'Active' ? 'selected' : null} onClick={e => onClickHandler(e)}>Active</button>
				</li>
				<li>
					<button className={filter === 'Completed' ? 'selected' : null} onClick={e => onClickHandler(e)}>Completed
					</button>
				</li>
			</ul>
			<button
				className="clear-completed"
				onClick={() => deleteCompletedTasks()}
			>
				Clear completed
			</button>
		</footer>
	)
}


Footer.propTypes = {
	filterTasksHandler: PropTypes.func,
	deleteCompletedTasks: PropTypes.func,
	filter: PropTypes.string,
	tasksCount: PropTypes.number,
}

Footer.defaultProps  = {
	filterTasksHandler: () => {},
	deleteCompletedTasks: () => {},
	filter: 'All',
	tasksCount: 0,
}


export default Footer
