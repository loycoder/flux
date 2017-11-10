import AppDispatcher from "../dispatcher/MyButtonDispatcher";

/**
 * 2.接受将用户的 click 请求，通过中间件ButtonAction 将请求派发到 AppDispatcher 中做处理，Dispatcher这里扮演的相当于 是 路由的角色。
 *
 *  而ButtonAction 则扮演的是中间件 的角色。只是起到辅助的作用
 *    重要知识点：
 *      1.Action 本事只是一个对象
 *      2. Action 包含一个ActionType ， 和一系列的 其他属性，例如下面的 text.（作用是用来传递数据）
 *
 *   AppDispatcher.dispatch()方法 会隐式的把 ButtonAction 注册到 AppDispatcher 中的 register() 中。 做回调处理操作
 *
 * @param text
 */
var MyButtonActon = {

    addNewItem: (text) => {

        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text
        });
    }
};
export default MyButtonActon;
