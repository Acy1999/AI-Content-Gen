import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'

const { Configuration, OpenAIApi } = require("openai");

class ProductDescription extends Component {
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
  console.log(formDataObj.productName)

  //////OPENAI
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  openai.createCompletion("text-davinci-002", {
    prompt: `Write a detailed, smart, informative and professional product description for ${formDataObj.productName}`,
    temperature: 0.8,
    max_tokens: 200,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  .then((response) =>{
    this.setState({
      heading: `AI Product Description Suggestions for: ${formDataObj.productName}`,
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
        <h1> Generate Product Descriptions </h1>
        <br/>
        <h4> Generate product descriptions for any type of product. All you need to do is enter the name and a breif product overview to get sarted. </h4>
        <br/>
        <br/>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> What product would you like us to describe for?</Form.Label>
            <Form.Control
                    type="text"
                    name="productName"
                    placeholder="Enter Product Name"/>
            <Form.Text className="text-muted">
              Enter as much information as possible for more accurate descriptions.
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

export default ProductDescription
