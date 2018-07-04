import React, { Component } from 'react'
import Intro from '../components/intro'
import About from '../components/about'
import Footer from '../components/footer';
import Experiences from '../components/experiences'

class IndexPage extends Component {
  render() {
    const { data } = this.props
    const introData = {
      introHTML: data.contentfulIntro.intro.childMarkdownRemark.html,
    }
    const aboutData = {
      titleHTML: data.contentfulAbout.title.childMarkdownRemark.html,
      bodyHTML: data.contentfulAbout.body.childMarkdownRemark.html,
      images: data.contentfulAbout.images,
    }
    const experienceData = data.allContentfulExperience;
    const footerdata = data.contentfulLinks;
    return (
      <div>
        <Intro data={introData} />
        <About data={aboutData} />
        <Experiences data={experienceData} />
        <Footer data={footerdata}/>
      </div>
    )
  }
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    contentfulIntro {
      intro {
        childMarkdownRemark {
          html
        }
      }
    }
    contentfulAbout {
      title {
        childMarkdownRemark {
          html
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      images {
        sizes(maxWidth: 1240, quality: 90) {
          ...GatsbyContentfulSizes
        }
      }
    }
    allContentfulExperience {
      edges {
        node {
          icon {
            sizes(maxWidth: 100, quality: 90) {
              ...GatsbyContentfulSizes
            }
          }
          title
          location
          date
          dateForSorting
          tools {
            id
            childMarkdownRemark {
              html
            }
          }
          childContentfulExperienceBodyTextNode {
            id
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    contentfulLinks {
      github
      linkedIn
      medium
    } 
  }
`
