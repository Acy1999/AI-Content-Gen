import React from 'react'
import { Component } from 'react'
import Display from './Display'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import heroBanner from '../heroBanner1.jpeg'

class Home extends Component {
  render(){
    return(
      <body>
      <div>
          <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                //src={heroBanner}
                alt="hero Image" />
            </Carousel.Item>
          </Carousel>
          <br/>
          <br/>
          <h1>Online Artificial Intellegence AI (API) with OpenAI</h1>
          <p>To get started, pick a use-case from below to start generating content.</p>
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
      </body>
    )
  }
}
export default Home
