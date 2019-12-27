<template>
	<div class="saveFriends">
		<div class="singleUser" v-for="allNoAddFriend in allNoAddFriends" :key="allNoAddFriend.key" @click="saveUsers(allNoAddFriend)">
			<img :src="allNoAddFriend.icon"/>
			<p>{{allNoAddFriend.name}}</p>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		name:"addFriends",
		computed:{
			...mapState(['allNoAddFriends'])
		},methods:{
			saveUsers(obj){
				//是群
				if(obj.type == 1){
					this.$store.commit('addTimGroupsMessage',obj)
				}
				//是人
				else{
					this.$store.commit('addGoodFriends',obj)
				}
			}
		}
	}
</script>

<style>
	.saveFriends{
		width: 599px;
		height: 100%;
		text-align: center;
		float: left;
		display: inline-block;
		margin-top: 20px;
		overflow: auto;
		background-color: ghostwhite;
	}
	.singleUser{
		width: 80px;
		height: 80px;
		float: left;
		padding: 5px;
	}
	.singleUser:hover{
		transition:all 1s;
		transform:scale(1.5)
	}
	.singleUser img{
		width: 50px;
		height: 50px;
		border-radius: 40px;
		float: left;
		margin: 2px;
	}
	.singleUser p{
		color: darkgray;
		width: 40px;
		height: 40px;
		border-radius: 40px;
		float: left;
		margin: 2px;
		font-size: 10px;
	}
	
</style>
