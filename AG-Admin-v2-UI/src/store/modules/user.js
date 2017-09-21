import {
  loginByEmail,
  logout,
  getInfo
} from 'api/login';
import {
  getToken,
  setToken,
  removeToken
} from 'utils/auth';

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    menus: undefined,
    elements: undefined,
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_MENUS: (state, menus) => {
      state.menus = menus;
    },
    SET_ELEMENTS: (state, elements) => {
      state.elements = elements;
    },
    LOGIN_SUCCESS: () => {
      console.log('login success')
    },
    LOGOUT_USER: state => {
      state.user = '';
    }
  },

  actions: {
    // 邮箱登录
    LoginByEmail({
      commit
    }, userInfo) {
      const username = userInfo.username.trim();
      commit('SET_TOKEN', '');
      commit('SET_ROLES', []);
      commit('SET_MENUS', undefined);
      commit('SET_ELEMENTS', undefined);
      removeToken();
      return new Promise((resolve, reject) => {
        loginByEmail(username, userInfo.password).then(response => {
          const data = response;
          setToken(data.token);
          commit('SET_TOKEN', data.token);
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 获取用户信息
    GetInfo({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response;
          commit('SET_ROLES', 'admin');
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', 'http://git.oschina.net/uploads/42/547642_geek_qi.png?1499487420');
          commit('SET_INTRODUCTION', data.description);
          const menus = {};
          for (let i = 0; i < data.menus.length; i++) {
            menus[data.menus[i].code] = true;
          }
          commit('SET_MENUS', menus);
          const elements = {};
          for (let i = 0; i < data.elements.length; i++) {
            elements[data.elements[i].code] = true;
          }
          commit('SET_ELEMENTS', elements);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 第三方验证登录
    LoginByThirdparty({
      commit,
      state
    }, code) {
      return new Promise((resolve, reject) => {
        commit('SET_CODE', code);
        loginByThirdparty(state.status, state.email, state.code).then(response => {
          commit('SET_TOKEN', response.data.token);
          setToken(response.data.token);
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 登出
    LogOut({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '');
          commit('SET_ROLES', []);
          commit('SET_MENUS', undefined);
          commit('SET_ELEMENTS', undefined);
          removeToken();
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 前端 登出
    FedLogOut({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        commit('SET_MENUS', undefined);
        commit('SET_ELEMENTS', undefined);
        removeToken();
        resolve();
      });
    },

    // 动态修改权限
    ChangeRole({
      commit
    }, role) {
      return new Promise(resolve => {
        commit('SET_ROLES', [role]);
        commit('SET_TOKEN', role);
        setToken(role);
        resolve();
      })
    }
  }
};

export default user;
