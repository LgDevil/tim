export default {
	
	getTargetChatUser:(state,getters) => (id)=>{
		return state.chatUsers.find(todo => todo.id == id)
	}
	
}