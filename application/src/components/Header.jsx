import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText , FormFeedback} from 'reactstrap';
import Transaction from './../service/App.service'

export default class Header extends Component {

    state = {
        value1: '',
        value2: '',
        from: '',
        to: ''
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        // for future use
        // Transaction.post("fake/url",this.state)
    }

    isValid = (data) => {
        if (data.from != '' && data.to != '') {
            debugger;
            const from = data.from.split("-");
            const to = data.to.split("-");
            return new Date(from[0], from[1], from[2]) <= new Date(to[0], to[1], to[2]) ? false : true
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onFormSubmit} ref={form => this.form = form}>
                    <Row>
                        <Col className="form-group">
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input valid={this.state.value1.length>0} type="text" onChange={this.handleInputChange} value={this.state.value1} name="value1" id="value1" placeholder="placeholder" required />
                            </FormGroup>
                        </Col>
                        <Col className="form-group">
                            <FormGroup>
                                <Label for="examplePassword">Name</Label>
                                <Input valid={this.state.value2.length>0} type="text" onChange={this.handleInputChange} value={this.state.value2} name="value2" id="value2" placeholder="placeholder" required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="form-group">
                            <FormGroup>
                                <Label for="exampleEmail">From</Label>
                                <Input invalid={this.isValid(this.state)} type="date" onChange={this.handleInputChange} value={this.state.from} name="from" id="from" placeholder="placeholder" required />
                                
                               <FormFeedback> {
                                   this.isValid(this.state)? 'from date can\'t grater than to date' : void 0
                                }</FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col className="form-group">
                            <FormGroup>
                                <Label for="exampleEmail">To</Label>
                                <Input invalid={this.isValid(this.state)} type="date" onChange={this.handleInputChange} value={this.state.to} name="to" id="to" placeholder="with a placeholder" required />
                               
                               <FormFeedback> {
                                   this.isValid(this.state)? 'from date can\'t grater than to date' : void 0
                                }</FormFeedback>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button disabled={this.isValid(this.state)}>Submit</Button>
                </Form>
            </div>
        )
    }

}