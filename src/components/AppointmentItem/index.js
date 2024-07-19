// Write your code here
import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {listOfAppointments, toggleStar} = props
  const {id, title, date, isStarred} = listOfAppointments
  const starred = () => {
    toggleStar(id)
  }
  const img = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="list">
      <div className="appointment-details">
        <p className="appointment-title">{title}</p>
        <p className="time">{format(new Date(date), 'dd MMMM yyyy, EEEE')}</p>
      </div>
      <button
        className="star-img-button"
        data-testid="star"
        type="button"
        onClick={starred}
      >
        <img src={img} className="star-img" alt="star" />
      </button>
    </li>
  )
}
export default AppointmentItem
