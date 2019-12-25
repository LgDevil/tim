<template>
	<div class="chat">
		<div class="chat-top clearfix">
			<span class="fl">{{chatUser.chatName}}</span>
			<div class="fl chat-top-icon">
				<i class="fa fa-desktop"></i>
				<i class="fa fa-phone"></i>
				<i class="fa fa-comments"></i>
				<i class="fa fa-cog"></i>
			</div>
		</div>
		<div class="chat-body">
			<p v-for="(msg,index) in chatUser.message" :key="index">
				{{msg}}
			</p>
		</div>
		<div class="chat-box clearfix">
			<div class="icon fl">
				<i class="fa fa-font fa-fw"></i>
				<i class="fa fa-meh-o fa-fw"></i>
				<span>
					<i class="fa fa-scissors fa-rotate-270 fa-fw"></i>
					<i class="fa fa-caret-down small-icon"></i>
				</span>
				<i class="fa fa-mobile-phone fa-fw"></i>
				<i class="fa fa-microphone fa-fw"></i>
				<i class="fa fa-picture-o fa-fw"></i>
				<span>
					<i class="fa fa-folder-o fa-fw"></i>
					<i class="fa fa-caret-down small-icon"></i>
				</span>
				<i class="fa fa-envelope-open-o fa-fw"></i>
			</div>
			<div class="history-message fl">
				<i class="fa fa-caret-down small-icon"></i>
			</div>
			<br>
			<textarea class="input-chat" v-model="chatMessage"></textarea>
			<button class="fasong" @click="saveChatMessage">发送(<u>s</u>)&nbsp;<i class="fa fa-caret-down fasong-icon"></i></button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				chatUser: {},
				chatMessage: ""
			}
		},
		beforeRouteUpdate(to, from, next) {
			console.log("this.params", to.params.id)
			this.chatUser = this.$store.getters.getTargetChatUser(to.params.id)
			console.log("chatUser", this.$store.state.chatUsers)
			next()
		},
		methods: {
			saveChatMessage() {
				this.$store.commit('saveChatMessage', {
					id: this.chatUser.id,
					message: this.chatMessage
				})
				this.chatMessage = "";
			}
		}
	}
</script>

<style>
	.chat {
		height: 540px;
		width: 600px;
		float: right;
	}

	.chat-top {
		line-height: 35px;
		font-size: 18px;
		border-bottom: 1px solid #EAEAEA;
		width: 100%;
		margin-left: 5px;
	}

	.chat-top span {
		margin-left: 10px;
		color: #001B2F;
	}

	.chat-top-icon {
		position: absolute;
		left: 665px;
		font-size: 17px;
	}

	.chat-top-icon i {
		color: #777777;
		margin-right: 2px;
		padding: 5px;
	}

	.chat-top-icon i:hover {
		background-color: #F2F2F2;
	}

	.chat-body {
		height: 350px;
		width: 600px;
		margin-left: 5px;
		background-color: #FFF;
		border-bottom: 1px solid #EAEAEA;
		text-align: left;
	}

	.icon {
		color: #A3A3A3;
		font-size: 18px;
		margin-top: 3px;
	}

	.icon i {
		padding: 2.5px;
		cursor: pointer;
	}

	.icon .small-icon {
		padding: 0;
		margin-left: -5px;
		font-size: 10px;
	}

	.icon i:hover {
		background-color: #F2F2F2;
	}

	.icon span i:hover {
		background-color: #F2F2F2;
	}

	.history-message {
		position: relative;
		left: 250px;
		font-size: 11px;
		line-height: 40px;
		color: #767676;
		cursor: pointer;
	}

	.history-message i {
		margin-left: 3px;
	}

	.input-chat {
		border: none;
		outline: none;
		padding: 0 8px;
		font-size: 13.5px;
		resize: none;
		width: 600px;
		overflow-y: hidden;
		font-family: 微软雅黑;
	}

	.fasong-icon {
		color: #FFF;
		padding: 3px;
	}

	.fasong-icon:hover {
		background-color: #7EC3FF;
		padding: 3px;
		border-radius: 3px;
	}

	.fasong {
		position: absolute;
		right: 10px;
		bottom: 10px;
		border: none;
		background-color: #0188FB;
		color: #FFFFFF;
		padding: 3px 4px;
		border-radius: 3px;
	}

	.fasong:hover {
		background-color: #279BFE;
	}
</style>
