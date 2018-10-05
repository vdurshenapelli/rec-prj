import React, { Component } from 'react';

export default class LeftPanel extends Component {
    state = {
        tree: {
            "module": "react-ui-tree",
            "children": [{
                "collapsed": true,
                "module": "dist",
                "children": [{
                    "module": "node.js"
                }]
            }, {
                "collapsed": true,
                "module": "src",
                "children": [{
                    "module": "component"
                }]

            }]
        }
    }

    createTree = (data) => {
        return (
            <ul>
                <li>
                    {data.module}
                    {
                        data.children && data.children.length > 0 ? data.children.map(item => this.createTree(item)) : void 0
                    }
                </li>
            </ul>
        )
    }

    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Tree</h3>
                </div>{
                    this.createTree(this.state.tree)
                }
            </nav>
        )
    }
}
