import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  render() {
    const { value, datalist, onChange } = this.props
    return (
      <div>
        <input list="users" onChange={onChange} value={value} name="user"/>
        <datalist id="users">
          {datalist.map(item => <option value={item}/>)}
        </datalist>
        <input type="submit" />
      </div>
    )
  }
}

export default User
