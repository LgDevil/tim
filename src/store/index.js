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
	friends:[{id:uuid(),friName:"王晓从"},{id:uuid(),friName:"赵高"},{id:uuid(),friName:"李白"},{id:uuid(),friName:"张二蛋"},{id:uuid(),friName:"离散狗"}],
	timGroups:[
		{id:uuid(),groupName:"拼多多一群",route:"/timGroupsChat/1",key:"1",child:[
			{id:uuid(),name:"admin",msg:"你好啊1111"},
			{id:uuid(),name:"李小三",msg:"你好啊3333333"},
			{id:uuid(),name:"王大鹅",msg:"你好啊44444444444"},
			{id:uuid(),name:"成是非",msg:"你好啊5555555555"},
		]},
		{id:uuid(),groupName:"王者荣耀交流群",route:"/timGroupsChat/2",key:"2",child:[
			{id:uuid(),name:"admin",msg:"这个有点搞笑啊"},
		]},
		{id:uuid(),groupName:"员工讨薪群",route:"/timGroupsChat/3",key:"3",child:[
			{id:uuid(),name:"admin",msg:"是的啊"},
		]},
		{id:uuid(),groupName:"傻妮子鱼塘",route:"/timGroupsChat/4",key:"4",child:[
			{id:uuid(),name:"admin",msg:"你说傻不傻"},
		]}
	],
	manyPeople:[
		{id:uuid(),pName:"寝室三人组",route:"/manyPeople/1",key:"1",child:[]},
		{id:uuid(),pName:"Dota交流群",route:"/manyPeople/2",key:"2",child:[]},
		{id:uuid(),pName:"傻妞,傻妞",route:"/manyPeople/3",key:"3",child:[]},
		{id:uuid(),pName:"三个蒙面人",route:"/manyPeople/4",key:"4",child:[]}
	],
	goodFriends:[
		{id:uuid(),fName:"大幂幂",route:"/goodFriends/1",key:"1",child:[]},
		{id:uuid(),fName:"哪吒",route:"/goodFriends/2",key:"2",child:[]},
		{id:uuid(),fName:"小傻逼",route:"/goodFriends/3",key:"3",child:[]},
		{id:uuid(),fName:"西门吹嘘",route:"/goodFriends/4",key:"4",child:[]}
	],
	allNoAddFriends:[
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:1},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
		{icon:'../src/assets/add.jpg',name:'王大大',key:uuid(),type:2},
	]
}



export default new Vuex.Store({
	state,
	mutations,
	getters
})
