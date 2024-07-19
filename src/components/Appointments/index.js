// Write your code here
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    listOfAppointments: [],
    title: '',
    date: '',
    isStarred: false,
  }

  onTitleChange = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onDateChange = event => {
    this.setState({
      date: event.target.value,
    })
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date, isStarred} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred,
    }
    this.setState(prevState => ({
      listOfAppointments: [...prevState.listOfAppointments, newAppointment],
      title: '',
      date: '',
    }))
  }

  toggleStar = id => {
    this.setState(prevState => ({
      listOfAppointments: prevState.listOfAppointments.map(item => {
        if (id === item.id) {
          return {...item, isStarred: !item.isStarred}
        }
        return item
      }),
    }))
  }

  starredItems = () => {
    this.setState(prevState => ({
      listOfAppointments: prevState.listOfAppointments.filter(
        item => item.isStarred === true,
      ),
    }))
  }

  render() {
    const {listOfAppointments, title, date, isStarred} = this.state
    const {filterClassName} = isStarred ? 'starred' : 'unStarred'
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="add-appointment">
            <div className="input-container">
              <h1 className="heading">Add Appointment</h1>
              <form className="my-form" onSubmit={this.onAddAppointment}>
                <label className="label" htmlFor="title">
                  TITLE
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Title"
                  id="title"
                  onChange={this.onTitleChange}
                  value={title}
                  className="input"
                />
                <br />
                <label className="label" htmlFor="date">
                  DATE
                </label>
                <br />
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  id="date"
                  onChange={this.onDateChange}
                  value={date}
                  className="input"
                />
                <br />
                <button className="add-btn" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="img"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="content">
            <h1 className="sub-heading">Appointments</h1>
            <button
              type="button"
              className={`filter-style ${filterClassName}`}
              onClick={this.starredItems}
            >
              Starred
            </button>
          </div>
          <ul className="unordered-list">
            {listOfAppointments.map(item => (
              <AppointmentItem
                listOfAppointments={item}
                key={item.id}
                toggleStar={this.toggleStar}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
