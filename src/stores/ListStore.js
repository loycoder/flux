var event = require('events').EventEmitter;

var assign = require('object-assign');


/**
 * 4.在上一步骤中。 AppDispatcher.js 中 触发了addNewItemHandler 的操作。
 *   addNewItemHandler()方法中 很简单。 只是将数据追加  items中、
 *
 *   扩展知识点：
 *
 *     require('object-assign') , 是nodeJS中一个 对象合并模块.
 *
 *     基本使用方法：
 *       objectAssign=require('object-assign');
 *       objectAssign({foo: 0}, {bar: 1});
 输出: {foo: 0, bar: 1}

 obj1.func.call(obj)方法
 意思是将obj看成obj1,调用func方法

 好了。言归正传，
 下面的代码: assign () 方法，实际上是将 {},  EventEmitter.prototype, 和一个封装带有方法的操作的 对象。 合并成了一个对象

 这个合并后的对象，包含了  EventEmitter 对象的 所有属性和方法。
 所以在 第三个 对象中，我们能看到 这样的方法： this.emit() 和 this.on() 的方法， 实际上是 从EventEmitter 克隆过来的

 至于addChangeListener() 方法， 我们看到它是在 MyButtonController.js  componentDidMount() 中调用，将要处理的 change 作为回调参数 传递过来，

 /========================
 当数据变化后，AppDispatcher.js 中 触发了  emitChange() 方法。在emitChange()方法中。 只有一行代码 this.emit('change');
 因为 emit()是  通过 从 require('object-assign')中的 assign() 合并后，从  EventEmitter.prototype 原型中 克隆过来的。
 nodeJs events模块的 机制是： 当 调用 emit('事件名称') 后。 就会出发 对应当前 事件回调。 即 onchange 的回调。
 //======================
 emitChange: function () {
            this.emit('change');
        },

 /========================
 此处的 callback 对应的是 MyButtonController.js 中的 _onChange() 方法.
 addChangeListener: function (callback) {
                this.on('change', callback);
            },
 *
 *
 *     require('event') 是 nodeJs 中的一个事件模块。
 *     简单的理解就是：
 *        通过  require('events').EventEmitter  获取到 Event实例后。然后注册一个 事件(该事件可以是自定义，比如 hello事件).
 *
 *
 */
var ListStore = assign(event.prototype, {

    items: [],

    getAll() {
        return this.items;
    },


    addItem(text) {
        this.items.push(text);
    },


    /**
     * 手动触发change
     */
    emitChange() {
        this.emit('my_change');
    },

    /**
     * 移除事件
     */
    removeChange(callback) {
        this.removeListener('my_change', callback);
    },

    /**
     * 添加事件
     * @param _change
     */
    addChange(_change) {

        this.on('my_change', _change);
    },


});

export default ListStore;