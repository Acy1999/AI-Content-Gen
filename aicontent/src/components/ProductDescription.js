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

  openai.createCompletion("text-embedding-ada-002", {
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
        <h1 className='hero-h1'> Generate Product Descriptions </h1>
        <br/>
        <h4 className='hero-p'> Create product descriptions for any type of product. All you need to do is enter the name and a breif product overview to get sarted. </h4>
        <br/>
        <br/>
        <div className='form-content'>
          <div className='form'>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group className="content-header" controlId="formBasicEmail">
            <Form.Label> What product would you like us to describe for?</Form.Label>
            <br/>
            <Form.Text className="content-body">
              Enter as much information as possible for more accurate descriptions.
            </Form.Text>
            <Form.Control
                    type="text"
                    name="productName"
                    placeholder="Enter Product Name"
                    className="content-body"/>
                    <br/>
          </Form.Group>
          <Button variant="outline-light" size="lg" type="submit">
            Get AI Suggestions
          </Button>
        </Form>
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

export default ProductDescription
