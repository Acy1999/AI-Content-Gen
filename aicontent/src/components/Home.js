import React from 'react'
import { Component } from 'react'
import Display from './Display'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

class Home extends Component {
  render(){
    return(
      <div>
          <Container>
          <br/>
          <br/>
          <h1 className='hero-h1'>Artificial Intellegence Content Generation</h1>
          <p className='hero-p'>To get started, pick a use-case from below to start generating content.</p>
          <br/>
          <br/>
        <Row>
          <Col>
          <Display
            header = "Product Descriptions"
            title = "Generate Product Descriptions"
            text = "Generate product descriptions for any type of product. All you need to do is enter the name and a breif product overview to get sarted."
            theLink = "/product-description" />
          </Col>

          <Col>
          <Display
            header = "Marketing Emails"
            title = "Cold Email Template"
            text = "This is perfect for marketing agents or companies who need fresh ideas daily on cold email content that is created entirely by AI technology."
            theLink = "/cold-emails" />
          </Col>

          <Col>
          <Display
            header = "X Posts"
            title = "Engaging Xeets"
            text = "Start generating xeets with hashtags for your online social media campaigns on X. Create endless unique xeet ideas, no more writers block"
            theLink = "/tweets" />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
          <Display
            header = "Instagram Captions"
            title = "Generate Instagram Captions"
            text = "Take the stress out of finding your perfect post's caption. All we need for you is a description of the Image to get sarted."
            theLink = "/insta-captions" />
          </Col>

          <Col>
          <Display
            header = "Name Generation"
            title = "Cold Email Template"
            text = "This is perfect for marketing agents or companies who need fresh ideas daily on cold email content that is created entirely by AI technology."
            theLink = "/cold-emails" />
          </Col>

          <Col>
          <Display
            header = "Tweets"
            title = "Engaging Tweets"
            text = "Start generating tweet ideas with hashtags for your online social media campaigns on twitter. Create endless unique tweet ideas, no more writers block"
            theLink = "/tweets" />
          </Col>
        </Row>

        <br/>
        <br/>
        <br/>
          </Container>
      </div>
    )
  }
}
export default Home
