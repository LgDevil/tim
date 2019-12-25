export default {
	CHECK_LOGIN(state, {
		username,
		password
	}) {
		const arr = state.userArr.filter(s => {
			return s.username == username && s.password == password
		})
		if (arr.length === 0) {
			return false;
		} else {
			return true;
		}
	},
	saveChatMessage(state,{id,message}){
		//this.arr.splice(0,1,9); // 视图更新了，页面上是9，2，3
		console.log(id,message,state.chatUsers)
		const tempChatUser = state.chatUsers.find(todo => todo.id == id);
		tempChatUser.message.push(message);
		state.chatUsers.splice(state.chatUsers.findIndex(todo=>todo.id == id),1,tempChatUser)
	}
}
