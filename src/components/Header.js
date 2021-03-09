import React, {useState} from 'react'
import PropTypes from 'prop-types'


function Header({addNewTask}) {
	const [input, setInput] = useState('')

	const onChangeHandle = (e) => setInput(e.target.value)

	const onKeyEnterHandle = e => {
		if (e.charCode === 13 && input !== '') {
			const id = new Date().getTime().toString()
			addNewTask({id, title: input, completed: false})
			setInput('')
		}
	}

	return (
		<header className='header'>
			<h1>todos</h1>
			<input
				className="new-todo"
				placeholder="What needs to be done?"
				value={input}
				onChange={e => onChangeHandle(e)}
				onKeyPress={e => onKeyEnterHandle(e)}
				autoFocus
			/>
		</header>
	)
}


Header.propTypes = {
	addNewTask: PropTypes.func
}

Header.defaultProps = {
	addNewTask: () => {
	}
}


export default Header
