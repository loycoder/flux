import React from 'react';

import MyButtonCompents from './MyButtonCompents';

import MyButtonAction from '../actions/MyButtonAction';

import ListStore from "../stores/ListStore";

export default class MyButtonController extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsList: ListStore.getAll()
        };
    }

    /**
     * 修改 state 之前调用
     */
    componentWillMount() {
        console.log('componentWillMount');
        ListStore.removeChange(this.onchange.bind(this));
    }

    /**
     * 渲染出最终的 dom，后调用
     */
    componentDidMount() {
        ListStore.addChange(this.onchange.bind(this));
    }

    onchange() {

        this.setState({
            itemsList: ListStore.getAll()
        });

    }

    createNewItem(e) {
        MyButtonAction.addNewItem('add item');
    }

    /**
     * 1.将Onclick事件，作为 属性参数，传递给 MyButton组件。这样做，保证了组件的灵活性，不再是 写死 的click.而是针对不同的组件，有不同的click事件。
     * @returns {XML}
     */
    render() {
        return <div><MyButtonCompents items={this.state.itemsList} onClick={this.createNewItem}/></div>;
    }
}




