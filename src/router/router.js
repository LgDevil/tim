import Vue from 'vue'
import VueRouter from 'vue-router'
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return routerPush.call(this, location).catch(error => error)
}


Vue.use(VueRouter)


const login = r => require.ensure([], () => r(require('../components/login')), 'login')
const mainMianBan = r => require.ensure([], () => r(require('../components/mainMianBan')), 'mainMianBan')
const Message = r => require.ensure([], () => r(require('../components/Message')), 'Message')
const messageChat = r => require.ensure([], () => r(require('../components/messageChat')), 'messageChat')
const onLineWord = r => require.ensure([], () => r(require('../components/onLineWord')), 'onLineWord')
const Friends = r => require.ensure([], () => r(require('../components/Friends')), 'Friends')
const messageChat2 = r => require.ensure([], () => r(require('../components/messageChat2')), 'messageChat2')
const timGroupsChat = r => require.ensure([], () => r(require('../components/timGroupsChat')), 'timGroupsChat')
const addFriends = r => require.ensure([], () => r(require('../components/addFriends')), 'addFriends')

const routes = [{
	path: "/",
	name: "login",
	component: login
}, {
	path: "/mainMianBan",
	name: "mainMianBan",
	redirect: "/Message",
	component: mainMianBan,
	children: [{
			path: '/Message',
			name: 'Message',
			// redirect:'/messageChat',
			component: Message,
			children: [{
				path: '/messageChat/:id',
				name: 'messageChat',
				component: messageChat,
				props: true
			}]
		},
		{
			path: '/Friends',
			name: 'Friends',
			component: Friends,
			children: [{
				path: '/timGroupsChat/:id',
				name: 'timGroupsChat',
				component: timGroupsChat,
				props: true
			},{
				path:'/addFriends',
				name:'addFriends',
				component:addFriends
			}]
		},
		{
			path: '/onLineWord',
			name: 'onLineWord',
			component: onLineWord
		},
	]
}]

export default new VueRouter({
	routes
})
