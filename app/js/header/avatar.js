import React from 'react';

import * as Services from './services'

export default class HeaderAvatar extends React.Component {
  constructor(props){
    super(props)
    this.state= {}
  }

  async componentWillMount() {
    try {
      const userInfos = await Services.getUserInfos()
      this.setState({
        profilePic: this.formatProfileImage(userInfos.profile_image_url)
      })
    } catch (e) {
      console.log(e)
    }
  }

  formatProfileImage(image_url) {
    return image_url.replace(/_normal/i, '')
  }

  render() {
    const { profilePic } = this.state
    return (
      <div className="container">
        <div className="avatar-wrapper">
          <div className="avatar">
            <a href=""><img src={profilePic} alt="" /></a>
          </div>
        </div>
      </div>
    );
  }
}
