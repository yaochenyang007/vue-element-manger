
const user = {
    /*
    * 初始状态
    */
    state: {
        token: '',
        name: '',
        avatar: '',
        roles: []
    },
    /** 
    * 更改Vuex的 store 中的状态的唯一方法是提交 mutation
    */
    mutations: {
        /** 
         * 修改token
        * @param {string}  state 值
        * @param {string}  token 值
        */
        SET_TOKEN: (state, token) => {
            state.token = token;
        }
    },
    /*
    * 计算属性[支持异步])
    */
    actions: {
    }
};

export default user;
