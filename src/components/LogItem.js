import React from 'react'
import Moment from 'react-moment'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

const LogItem = (props) => {
	const item = props.item
	const setVariant = () => {
		if (item.priority === 'high') {
			return 'danger'
		} else if (item.priority === 'moderate') {
			return 'warning'
		} else {
			return 'success'
		}
	}
	return (
		<tr>
			<td>
				<Badge variant={setVariant()} className="p-2">
					{/* standard way to capitalize each letter */}
					{item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
				</Badge>
			</td>
			<td>{item.text}</td>
			<td>{item.user}</td>
			<td>
				<Moment format="MMMM Do YYYY, h:mm:ss a">
					{new Date(item.created)}
				</Moment>
			</td>
			<td>
				<Button
					variant="danger"
					size="sm"
					onClick={() => props.deleteItem(item._id)}
				>
					delete
				</Button>
			</td>
		</tr>
	)
}

export default LogItem
