import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'

const { Configuration, OpenAIApi } = require("openai");

class Names extends Component {
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
    prompt: `Come up with 10 unique and creative names for ${formDataObj.nameDescriptor}`,
    temperature: 0.9,
    max_tokens: 200,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  .then((response) =>{
    this.setState({
      heading: `AI Name Suggestions for: ${formDataObj.nameDescriptor}`,
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
        <h1 className='hero-h1'> Generate Names</h1>
        <br/>
        <h4 className='hero-p'> Create a list of names for anything. All you need to do is enter a description of what you want to name get sarted. </h4>
        <br/>
        <br/>
        <div className='form-content'>
          <div className='form'>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group className="content-header" controlId="formBasicEmail">
            <Form.Label> What would you like us to name?</Form.Label>
            <br/>
            <Form.Text className="content-body">
              Enter as much information as possible for more accurate names.
            </Form.Text>
            <Form.Control
                    type="text"
                    name="nameDescriptor"
                    placeholder="Enter a description of what you need a name for."/>
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

export default Names
