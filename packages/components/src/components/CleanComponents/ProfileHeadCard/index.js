import React from 'react'
import './style.scss'
import { user } from './data.json'
import Avatar from 'components/CleanComponents/Avatar'

class ProfileHeadCard extends React.Component {
  render() {
    return (
      <div className="ProfileHeadCard">
        <div
          className="ProfileHeadCard__head"
          style={{
            backgroundImage: 'url(' + user.cover + ')',
          }}
        >
          <h2 className="text-white">
            <strong>{user.mind}</strong>
          </h2>
        </div>
        <div className="ProfileHeadCard__content">
          <div className="ProfileHeadCard__left">
            <Avatar src={user.avatar} size="90" borderColor="white" border={true} />
            <strong>{user.name}</strong>
            <br />
            <span className="text-muted">{user.link}</span>
          </div>
          <div className="ProfileHeadCard__right">
            <p>{user.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ProfileHeadCard
