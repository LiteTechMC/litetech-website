import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'

import memberData from '../js discord bot/members.json'
import key from '../js discord bot/youtubekey.json'
import {
    Grid, Typography
} from '@material-ui/core';
import YoutubeCard from './YoutubeCard.js'

const truncate = (input) => input.length > 250 ? `${input.substring(0, 250)}...` : input;

class Main extends React.Component {

  state = {
    externalData: null,
  };

  componentDidMount() {
    this._asyncRequest = getYoutubeVideos().then(
      externalData => {
        this._asyncRequest = null;
        this.setState({externalData});
      }
    );
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }


  render() {
    let close = (
      <div
        role="button"
        aria-label="Close article"
        tabIndex={0}

        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}

        onKeyDown={(ev) => {
          if (ev.keyCode === 13) {
            this.props.onCloseArticle()
          }
        }}
      ></div>
    )

    let youtubeVideo = null;
    if (this.state.externalData === null) {
      youtubeVideo = (
          <div>Loading</div>
      )
    } else {
      youtubeVideo = (
        <Grid container spacing={3}>
          {this.state.externalData.items.map(({ id, snippet = {} }) => {
            const { title, thumbnails = {}, resourceId = {}, description } = snippet;
            const { medium } = thumbnails;
            return (
              <Grid item xs={12} lg={6}>
                <YoutubeCard 
                    videoName={title}
                    image={ medium.url }
                    url={resourceId.videoId}
                    description={truncate(description)}
                >
                </YoutubeCard>
            </Grid>
            )
          })}
        </Grid>

      )
    }

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Us</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          {close} 
          <p>
            LiteTech is a relatively new technical server, that will update to each major stable release of the game.
            You can keep up to date with our progress over <a href="https://www.youtube.com/channel/UCz2OSSQHYe0-vlgh7FQrM9g" target="_blank" rel="noreferrer">here.</a>
          </p>
          <p>
            Our members are a collection of players throughout the world who enjoy creating anything from efficient 
            arms to cool contraptions. In the end, we're just a bunch of idiots trying to have a good time.
          </p>
          
        </article>

        <article
          id="members"
          className={`${this.props.article === 'members' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Members</h2>
          
          <MemberList/>

          {close}
        </article>

        <article
          id="youtube"
          className={`${this.props.article === 'youtube' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Youtube Videos</h2>

          {close}

          { youtubeVideo }
        </article>

        <article
          id="discord"
          className={`${this.props.article === 'discord' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <a href="https://discord.gg/WnWJ7adHNG" target="_blank" rel="noreferrer">
            <h2 className="major">Discord</h2>
          </a>

          {close}

          <div>
            <iframe title="Discord iFrame" src="https://discord.com/widget?id=732264415268700160&theme=dark" width="100%" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </article>

        <article
          id="login"
          className={`${this.props.article === 'login' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Login</h2>
          {close}
          <p> Not yet implemented!</p>
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

function MemberList() {
    const listItems = memberData.map((member) =>
        <li key={member.username}>
            {member.username}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

async function getYoutubeVideos() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=12&playlistId=PLUDyUa7vgsQlEST5MYSqTmc03U0Mr_Ihc&key=${key.key}`)
  const data = await res.json();
  console.log(data);
  return data;
}

export default Main
