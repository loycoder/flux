import ListStore from "../stores/ListStore";

var Dispatcher = require('flux').Dispatcher;

var AppDispatcher = new Dispatcher();

/**
 * 3. AppDispatcher 收到 注册的 Action后。做回调处理， 通过当前 Action 的 type 做真正的 路由 分发， 处理不同的 业务逻辑
 *
 *   重要知识点：
 *     1.Dispatcher 只是用来派发 Action。不应该有其他逻辑.
 *     register方法用来登记各种Action的回调函数
 *
 *
 *    关于ListStore的作用：
 *       ListStore 扮演的 作用。类似MVC 中你的 M。 专门用来管理数据， 所有的数据都存在这里面。
 *       下面的代码：
 *           根据ActionType 。 ListStore 执行了 一个  addNewItemHandler()的 方法，
 *           addNewItemHandler() 主要 是 添加了 action.text 。
 *           添加完毕后，   ListStore.emitChange() 方法。 相当于 扮演的是通知的角色，通知当前 数据有变化
 *
 */
AppDispatcher.register((action) => {
    switch (action.actionType) {

        case  'ADD_NEW_ITEM':


            ListStore.addItem(action.text);

            ListStore.emitChange();

            break;

        default:

            break;
    }
});

export default AppDispatcher;

