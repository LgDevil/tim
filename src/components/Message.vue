<template>
	<div>
		<div class="message clearfix">
			<div class="left-message">
				<ul>
					<template v-for="chatUser in chatUsers" >
						<router-link :to="chatUser.route" :key="chatUser.chatName">
						  <li>
						    <img src="../assets/ceshi-2.jpg" alt="">
						    <div class="friend-name">
						      <p class="name">{{chatUser.chatName}}</p>
						      <p class="message-message">{{chatUser.message[0]}}</p>
						    </div>
						  </li>
						</router-link>
					</template>
				</ul>
			</div>
			<router-view></router-view>
			<div class="right-message">
				<img src="../assets/bg-chat.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		name: "",
		data() {
			return {}
		},
		methods: {
		},
		computed:{
			...mapState(['chatUsers'])
		},created() {
		}
	}
</script>
<style>
	.message {
		width: 800px;
		height: 540px;
		overflow: hidden;
		box-shadow: 0 3px 9px #898989;
		position: relative;
		top: -4px;
	}

	.left-message {
		width: 200px;
		float: left;
		background-color: #FAFAFA;
		height: 540px;
		margin-top: 7px
	}

	.left-message ul li:nth-child(1) {
		margin-top: 3px;
	}

	.left-message ul li {
		width: 200px;
		height: 60px;
		;
	}

	.left-message ul li img {
		width: 40px;
		height: 40px;
		border-radius: 40px;
		float: left;
		margin: 8px;
	}

	.left-message ul li div {
		padding-top: 8px;
	}

	.message-message {
		color: #767676;
		font-size: 12px;
	}

	.right-message {
		height: 540px;
		width: 600px;
		text-align: center;
		float: right;
		z-index: -1;
		position: absolute;
		left: 200px;
	}

	.right-message img {
		margin-top: 244px;
	}

	.left-message .router-link-active li {
		background-color: #EBEBEC;
	}
</style>
