import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import mutations from './mutations'
import getters from './getter'
import {uuid} from '../util/mUtils'

const state = {
	userArr: [{
		username: "admin",
		password: "123"
	}, {
		username: "test",
		password: "123"
	}],
	chatUsers: [{
			id: '1',
			chatName: "李小二",
			message: ["你好,帅哥","李小二你今天的工资不发了"],
			route:"/messageChat/1"
		}, {
			id: '2',
			chatName: "王小明",
			message: ["你好,帅哥"],
			route:"/messageChat/2"
		},
		{
			id: '3',
			chatName: "王小三",
			message: ["你好,帅哥"],
			route:"/messageChat/3"
		}
	],
	friends:[{id:uuid(),friName:"王晓从"},{id:uuid(),friName:"赵高"},{id:uuid(),friName:"李白"},{id:uuid(),friName:"张二蛋"},{id:uuid(),friName:"离散狗"}]
}



export default new Vuex.Store({
	state,
	mutations,
	getters
})
