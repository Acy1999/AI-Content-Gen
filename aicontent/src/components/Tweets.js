import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'

const { Configuration, OpenAIApi } = require("openai");

class Tweets extends Component {
  constructor(){
    super()
    this.state = {
      heading: 'The Response from the AI will be shown here',
      response: '... await the response'
    }
  }

onFormSubmit = e => {
  //start by preventing the default
  e.preventDefault()

  const formData = new FormData(e.target),
  formDataObj = Object.fromEntries(formData.entries())
  console.log(formDataObj.tweetDescriptor)
  console.log(process.env.REACT_APP_OPENAI_API_KEY)
  //////OPENAI
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  openai.createCompletion("text-davinci-002", {
    prompt: `Write a funny and engaging tweet about ${formDataObj.tweetDescriptor} maybe with hashtags at the end`,
    temperature: 0.9,
    max_tokens: 200,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  .then((response) =>{
    this.setState({
      heading: `AI Tweet Suggestions for: ${formDataObj.tweetDescriptor}`,
      response: `${response.data.choices[0].text}`
    })
  });
}

  render() {

    return (
      <div>
        <Container>
        <br/>
        <br/>
        <h1 className='hero-h1'> Generate X Posts</h1>
        <br/>
        <h4 className='hero-p'> Create Xeets for anything. All you need to do is enter the content you want to talk about to get sarted. </h4>
        <br/>
        <br/>
        <div className='form-content'>
          <div className='form'>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group className="content-header" controlId="formBasicEmail">
            <Form.Label> What would you like us to Xeet about?</Form.Label>
            <Form.Text className="content-body">
              Enter as much information as possible for more accurate X posts.
            </Form.Text>
            <Form.Control
                    type="text"
                    name="tweetDescriptor"
                    placeholder="Enter what your X post is about."/>
                    <br/> 
          </Form.Group>

          <Button variant="outline-light" size="lg" type="submit">
            Get AI Suggestions
          </Button>
        </Form>

        <br/>
        <br/>
        <h1 className='content-header'>{this.state.heading}</h1>
        <Card>
          <Card.Body>
              <br/>
              <Card.Text>
                <h4 className='content-header'>
                {this.state.response}
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          </div>
          </Container>
          <br/>
          <br/>
          <br/>
          <br/>
      </div>
    )
  }
}

export default Tweets
