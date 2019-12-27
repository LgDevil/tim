<template>
	<div>
		<div class="friends-mianban clearfix">
			<div class="friend-left fl" @click="addlist = 2">
				<div class="friend-tab">
					<span @click="friends = 1,groups =2,chatManyPeople = 2" :class="{ 'border-b':friends === 1,'border-none':friends === 2 }">&nbsp;好友&nbsp;</span>
					<span @click="groups = 1,friends = 2,chatManyPeople = 2" :class="{ 'border-b':groups === 1,'border-none':groups === 2  }">&nbsp;群&nbsp;</span>
					<span @click="chatManyPeople = 1,groups = 2,friends = 2" :class="{ 'border-b':chatManyPeople === 1,'border-none':chatManyPeople === 2  }">&nbsp;多人聊天&nbsp;</span>
				</div>
				<div class="groups twicesTbl" :class="{ 'visible':friends === 1,'hidden':friends === 2 }">
					<!-- 我的好友页面 -->
					<ul>
						<template v-for="goodFriend in goodFriends">
							<router-link :to="goodFriend.route" :key="goodFriend.id">
								<li>
									<img src="../assets/ceshi-2.jpg" alt="">
									<div class="friend-name">
										<p class="name">{{goodFriend.fName}}</p>
										<!-- <p class="message-message">{{chatUser.message[0]}}</p> -->
									</div>
								</li>
							</router-link>
						</template>
					</ul>
				</div>
				<div class="groups twicesTbl" :class="{ 'visible':groups === 1,'hidden':groups === 2 }">
					<!-- 群聊页面 -->
					<ul>
						<template v-for="timGroup in timGroups">
							<router-link :to="timGroup.route" :key="timGroup.id" :name="timGroup.key">
								<li>
									<img src="../assets/ceshi-1.jpg" alt="">
									<div class="friend-name">
										<p class="name">{{timGroup.groupName}}</p>
										<!-- <p class="message-message">{{chatUser.message[0]}}</p> -->
									</div>
								</li>
							</router-link>
						</template>
					</ul>
				</div>
				<div class="chatManyPeople twicesTbl" :class="{ 'visible':chatManyPeople === 1,'hidden':chatManyPeople === 2 }">
					<!--多人聊天页面-->
					<ul>
						<template v-for="people in manyPeople">
							<router-link :to="people.route" :key="people.id">
								<li>
									<img src="../assets/mayPeople.jpg" alt="">
									<div class="friend-name">
										<p class="name">{{people.pName}}</p>
										<!-- <p class="message-message">{{chatUser.message[0]}}</p> -->
									</div>
								</li>
							</router-link>
						</template>
					</ul>
				</div>
			</div>
			<span class="addFriends" @click="addlist = 1">
				<img src="../assets/addFirends.png" alt="">
			</span>
			<div class="addList" :class="{ 'visible':addlist === 1,'hidden':addlist === 2 }">
				<ul @click="addlist = 2">
					<router-link to="/addFriends"><li>加好友/加群</li></router-link>
					<li>创建群</li>
					<li>发起多人聊天</li>
				</ul>
			</div>
			<router-view></router-view>
			<!-- <div class="right-img fl" @click="addlist = 2">
				<img src="../assets/bg-friends.png" alt="">
			</div> -->
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				friends: 1,
				groups: 2,
				chatManyPeople: 2,
				addlist: 2
			}
		},
		computed: {
			...mapState(['timGroups', 'chatUsers', 'manyPeople','goodFriends'])
		}
	}
</script>

<style>
	.friends-mianban {
		width: 800px;
		height: 540px;
		overflow: hidden;
		box-shadow: 0 3px 9px #898989;
		position: relative;
		top: -4px;
	}

	.friend-left {
		width: 200px;
		height: 100%;
		background-color: #FAFAFA;
		border-right: 1px solid #E8E9EA;
		margin-top: 7px;
	}

	.friend-tab {
		border-bottom: 1px solid #E8E9EA;
		line-height: 40px;
		font-size: 13px;
		text-align: center;
	}

	.friend-tab span {
		margin: 0 10px;
		padding-bottom: 11px;
		cursor: pointer;
	}

	.friend-tab span:hover {
		border-bottom: 2px solid #4598FF;
	}

	.border-b {
		border-bottom: 2px solid #4598FF;
		color: #3A3A3A;
	}

	.border-none {
		border-bottom: 2px solid transparent;
		color: #767676;
	}

	.friend-list,
	.groups,
	.chatManyPeople {
		visibility: hidden;
		position: absolute;
		width: 200px;
		height: 540px;
	}

	.twicesTbl ul li {
		width: 200px;
		height: 60px;
		line-height: 60px;
	}

	.twicesTbl ul li img {
		width: 40px;
		height: 40px;
		border-radius: 40px;
		float: left;
		margin: 8px;
	}

	.hidden {
		visibility: hidden;
	}

	.visible {
		visibility: visible;
	}

	.right-img {
		width: 599px;
		height: 100%;
		text-align: center;
	}

	.right-img img {
		margin-top: 150px;
	}

	.friend-list {
		width: 200px;
	}

	.friend-list ul,
	.friend-list ul li {
		width: 100%;
	}

	.friend-list ul li {
		font-size: 14px;
		line-height: 28px;
	}

	.friend-list ul li i {
		margin-left: 10px;
		margin-right: 5px;
	}

	.friend-list ul ul li:hover {
		background-color: #EBEBEC;
	}

	.friend-list ul ul {
		margin-top: 3px;
	}

	.friends-box {
		padding: 3px 0;
		cursor: pointer;
	}

	.friends-box img {
		width: 42px;
		margin: 6px 10px;
	}

	.color-7f {
		color: #7F7F7F;
		font-size: 12px;
	}

	.addFriends {
		width: 30px;
		height: 30px;
		border-radius: 35px;
		background-color: #0188FB;
		text-align: center;
		position: absolute;
		bottom: 14px;
		left: 156px;
		display: block;
	}

	.addFriends img {
		width: 25px;
		margin: 2.5px;
	}

	.addList {
		position: absolute;
		bottom: 5px;
		border: 1px solid #d8d8d8;
		left: 2px;
		-webkit-box-shadow: 0 3px 9px #898989;
		box-shadow: 0 3px 9px #898989;
		font-size: 14px;
	}

	.addList ul li {
		margin: 3px 0;
		padding-left: 40px;
		padding-right: 10px;
		line-height: 30px;
	}

	.addList ul li:hover {
		background-color: #E6E9ED;
	}
</style>
