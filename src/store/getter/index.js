export default {
	
	getTargetChatUser:(state,getters) => (id)=>{
		return state.chatUsers.find(todo => todo.id == id)
	},
	
	getTarGetTimGroups:(state,getters) =>(key)=>{
		return state.timGroups.find(todo => todo.key == key)
	}
	
}