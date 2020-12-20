import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import windowStyles from "../style/Window.module.scss";
import youtubeIcon from "../images/youtube render.png";

const YoutubeCard = ({ videoName, image, url, description }) => {
  return (
    <Card className={windowStyles.youtubeCard}>
      <CardHeader 
        className={windowStyles.youtubeTitle}
        title={videoName}
        titleTypographyProps={{variant:'p' }}
      />
      <CardActionArea className={windowStyles.media}>
        <a href={`https://www.youtube.com/watch?v=${url}`} target="_blank" rel="noreferrer">
          <div className={windowStyles.cardImage}>
            <div className={windowStyles.image}>
              <CardMedia
                className={windowStyles.media}
                component="img"
                alt={videoName}
                image={ image }
                title={videoName}
              />
            </div>
            <span className={windowStyles.overlay}>
              <img src={youtubeIcon} alt=""/>
              <Typography paragraph>
                <strong>
                  View on Youtube
                </strong>
              </Typography>
            </span>
          </div>
        </a>
      </CardActionArea>
      <CardContent className={windowStyles.youtubeContent}>
        <Typography paragraph variant="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default YoutubeCard;