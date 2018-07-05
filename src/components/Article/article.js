import React, { Component } from 'react'
import { BoxSmallText, UnderLay } from '../layout'
import { ArticleElement } from './style';
import { SVGLink, Line } from '../typography';
import Arrow from '../Arrow.svg';
import emojiStrip from 'emoji-strip'

function getLink(title, id) {
  return emojiStrip(title).split(" ").join("-").toLowerCase() + "-" + id;
};


class Article extends Component {
  render() {
    const { title, datePublished, id, author, subtitle, body } = this.props.data;
    const url = getLink(title, id);
    return (
      <ArticleElement>
        <BoxSmallText>
          <UnderLay />
          <Line>
            <h2>{title}</h2>
            <SVGLink href={"https://medium.com/@joshuawootonn/" + url}><img src={Arrow} /></SVGLink>

          </Line>
          <h3>{subtitle}</h3>
          <p>{body}</p>
        </BoxSmallText>
      </ArticleElement>

    )
  }
}

export default Article