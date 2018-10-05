import React, { Component } from 'react';
import { Row, Col, Table, Label } from 'reactstrap';
import moment from 'moment';
import Transaction from './../service/App.service'

export default class Account extends Component {

    state = {
        data: {
            COMBINED: [],
            EXCHANGE: [],
            REQUIRED:[]
        }
    }

    componentDidMount() {
        // for future use
        // Transaction.get("fake url");
        Transaction.getTransaction().then(transactions => {
            this.setState({
                data: transactions
            })
        })
    }

    content = () => {
        return (<div> <Row>
            <Col>
                <Table>
                    <thead>
                        <tr>
                            <th>Fund Name</th>
                            <th>Account Number</th>
                            <th>Fund Currency</th>
                            <th>Valuation Date</th>
                            <th>Valuation Frequency</th>
                            <th>Current lock Date</th>
                            <th>Total Net Assets</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.COMBINED.map(item => (
                                <tr>
                                    <td>{item.FUND_NAME}</td>
                                    <td>{item.ACCOUNT_NUMBER}</td>
                                    <td>{item.FUND_CURRENCY}</td>
                                    <td>{moment(item.VALUATION_DATE).format('YYYY-MMM-DD')}</td>
                                    <td>{item.VALUATION_FREQUENCY}</td>
                                    <td>{moment(item.CURRENT_LOCK_DATE).format('YYYY-MMM-DD')}</td>
                                    <td>{item.TOTAL_NET_ASSETS}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Col>
        </Row>
            <Row>
                <Col sm="12" md={{ size: 12 }}><Label for="exampleEmail">Created:</Label> {moment(this.state.data.CREATED_DATE).format("YYYY-MMM-DD")} </Col>
                <Col> <h3>Group Account</h3> </Col>
                <Col sm="12" md={{ size: 12 }}><Label for="exampleEmail">% Hedge tolerance check:</Label> {this.state.data.HEDGE_TOLERANCE_CHECK} </Col>
                <Col sm="12" md={{ size: 12 }}><Label for="exampleEmail">Divegre tolerance check:</Label> {this.state.data.DIVEGERE_TOLERANCE_CHECK} </Col>
            </Row>
            <Table>
                <thead>
                    <tr><th colSpan={4}>Exchange Rate</th></tr>
                    <tr>
                        <th></th>
                        <th>From </th>
                        <th>To</th>
                        <th>FX Rate Movement</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.EXCHANGE.map(item => (
                            <tr>
                                <td>{item.CURRENCY}</td>
                                <td>{item.FROM}</td>
                                <td>{item.TO}</td>
                                <td>{item.MOVEMENT}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Table>
                <thead>
                    <tr>
                        <th colSpan={10}>Required/Necessary</th>
                    </tr>
                    <tr>
                        <th>Account Number</th>
                        <th>Share Class Name</th>
                        <th>Hedged/Un-Hedged</th>
                        <th>Share Class Number</th>
                        <th>Class Currency</th>
                        <th>NAV Class Value (Local)</th>
                        <th>Net Open Fwds (Local)</th>
                        <th>Class CCY Exposure</th>
                        <th>Class CCY Exposure %</th>
                        <th>Value to be hedged</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.REQUIRED.map(item=>(
                            <tr>
                                <td>{item.ACCOUNT_NUMBER}</td>
                                <td>{item.SHARE_CLASS_NAME}</td>
                                <td>{item.IS_HEDGED}</td>
                                <td>{item.SHARE_CLASS_NUMBER}</td>
                                <td>{item.CLASS_CURRENCY}</td>
                                <td>{item.NAV_CLASS_VALUE}</td>
                                <td>{item.NET_OPEN_FWDS}</td>
                                <td>{item.CLASS_CCY_EXPOSURE}</td>
                                <td>{item.CLASS_CCY_EXPOSURE_PRESENT}</td>
                                <td>{item.VALUE_TO_BE_HEDGED}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>)
    }

    render() {
        return (
            Object.keys(this.state.data).length ? this.content() : <h5>Loading...</h5>
        )
    }
}