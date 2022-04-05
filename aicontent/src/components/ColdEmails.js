import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'

const { Configuration, OpenAIApi } = require("openai");

class ColdEmails extends Component {
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
    prompt: `Write a professional email about ${formDataObj.emailDescriptor} that is formatted correctly.`,
    temperature: 0.9,
    max_tokens: 200,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  .then((response) =>{
    this.setState({
      heading: `Cold email suggestion: ${formDataObj.emailDescriptor}`,
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
        <h1> Generate Emails </h1>
        <br/>
        <h4> Generate Emails for anything. All you need to do is enter the content you want to talk about to get sarted. </h4>
        <br/>
        <br/>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> What would you like us to email about?</Form.Label>
            <Form.Control
                    type="text"
                    name="tweetDescriptor"
                    placeholder="Enter what your email is about."/>
            <Form.Text className="text-muted">
              Enter as much information as possible for more accurate Emails.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" size="lg" type="submit">
            Get AI Suggestions
          </Button>
        </Form>

        <br/>
        <br/>

        <Card>
          <Card.Body>
            <Card.Title><h1>{this.state.heading}</h1></Card.Title>
              <br/>
              <br/>
              <Card.Text>
                <h4>
                {this.state.response}
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>
          </Container>
          <br/>
          <br/>
          <br/>
          <br/>
      </div>
    )
  }
}

export default ColdEmails
