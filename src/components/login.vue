<template>
	<div>
		<div class="login">
			<div class="login-top">
				<div class="button">
					<i class="fa fa-minus"></i>
					<i class="fa fa-close"></i>
				</div>
				<img src="../assets/logo.png" alt="" class="logo-size">
			</div>
			<div class="login-bottom clearfix">
				<div class="touxiang fl">
					<div class="green"></div>
				</div>
				<div class="login-input fl">
					<!-- <el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<span>注册账号</span><br>
					<el-input placeholder="请输入密码" v-model="input" show-password></el-input> -->
					<!-- <span>找回密码</span> -->
					<input type="text" class="zhanghao" v-model="user.username" ><i class="fa fa-angle-down" style="margin: 0 4px"></i><span>注册账号</span><br>
					<input type="password" class="mima" v-model="user.password" ><i class="fa fa-keyboard-o" style="top: -5px;"></i><span>找回密码</span>
				</div>
				<div class="checkbox clearfix">
					<input type="checkbox" :checked="isChecked" @click="changeCheck"><span class="remberPassword">记住密码</span>
					<input type="checkbox"><span>自动登录</span>
				</div>
				<div class="login-bt1">
					<i class="fa fa-address-book-o i-icon-1"></i>
					<!-- <router-link to="/mainMianBan"> -->
					<!-- <span class="error">你输入的帐号或密码不正确，请重新输入.</span> -->
					<span @click="login"><i class="fa fa-shield"></i>&nbsp;&nbsp;&nbsp;&nbsp; 安 全 登 录 </span>
					<!-- </router-link> -->
					<i class="fa fa-qrcode i-icon-2"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	import {setStore,getStore,removeStore} from '../util/mUtils'
	export default {
		name: "login",
		data() {
			return {
				user: {
					username: "",
					password: ""
				},
				userOptions: [{
					value: 'admin',
					label: 'admin'
				}],
				isChecked:false,
				isShow: true
			}
		},
		methods: {
			...mapMutations([
				'CHECK_LOGIN'
			]),
			login() {
				if (this.$store.state.userArr.filter(s => {
						return s.username == this.user.username && s.password == this.user.password
					})[0]) {
					setStore("user",this.user);	
					this.$router.push("/mainMianBan")
					if(this.isChecked){
						setStore("isChecked",this.isChecked)
						setStore("user",this.user)
					}else{
						removeStore("user")
						removeStore("isChecked")
					}
				} else {
					alert("登录失败")
				}
			},
			changeCheck(){
				this.isChecked = !this.isChecked
				setStore("isChecked",this.isChecked)
			}
		},
		mounted() {
		    const localUser = getStore("user");
			const isChecked = getStore("isChecked");
			console.log("====>",localUser);
			console.log("=======>",isChecked)
			if(localUser) this.user = JSON.parse(localUser)
			if(isChecked) this.isChecked = isChecked
		}
	}
</script>

<style>
	.block {
		display: inline-block;
		width: inherit;
	}

	.login {
		width: 430px;
		margin-top: 150px;
		margin-left: auto;
		margin-right: auto;
		background-color: #EBF2F9;
		height: 332px;
		border-bottom-right-radius: 4px;
		border-bottom-left-radius: 4px;
		box-shadow: 0 0 15px #888888;
	}

	.login-top {
		background-image: url("../assets/bg-login.png");
		border-top-right-radius: 4px;
		border-top-left-radius: 4px;
		text-align: center;
	}

	.login-bottom {
		padding-bottom: 20px;
	}

	.button {
		margin-left: 380px;
	}

	.button i {
		opacity: 0.3;
		color: #FFF;
		cursor: pointer;
		line-height: 40px;
		margin-right: 7px;
	}

	.button i:hover {
		opacity: 1;
	}

	.logo-size {
		width: 50%;
		margin: 20px 0 55px 60px;
	}

	.touxiang {
		background-image: url("../assets/touxiang.jpg");
		background-position: center;
		background-size: cover;
		margin-top: 13px;
		margin-left: 42px;
		width: 80px;
		height: 80px;
		border-radius: 80px;
		border: 1px solid #EEEEEE;
	}

	.green {
		z-index: -1;
		width: 15px;
		height: 15px;
		border-radius: 15px;
		background-color: #70ED3A;
		margin: 65px 0 0 65px;
	}

	.login-input {
		margin-top: 13px;
		margin-left: 10px;
	}

	.login-input .zhanghao {
		border-bottom: 1px solid transparent;
		border-top-right-radius: 3px;
		border-top-left-radius: 3px;
		font-size: 15px;
	}

	.login-input .mima {
		border-bottom-right-radius: 3px;
		border-bottom-left-radius: 3px;
		font-size: 25px;
	}

	.login-input input {
		padding: 0 7px;
		height: 30px;
		line-height: 30px;
		border: 1px solid #D1D1D1;
		width: 180px;
		outline: none;
	}

	.login-input input:hover {
		border: 1px solid #1583DD;
	}

	.login-input i {
		color: #C3C8CC;
		position: relative;
		left: -22px;
	}

	.login-input span {
		font-size: 12px;
		color: #2685E3;
		cursor: pointer;
		position: relative;
		top: -4px;
	}

	.checkbox span {
		font-size: 12px;
		color: #656565;
	}

	.checkbox {
		margin-left: 10px;
	}

	.checkbox input {
		position: relative;
		top: 2px;
		margin-right: 5px;
	}

	.remberPassword {
		margin-right: 60px;
	}

	.login-bt1 span {
		cursor: pointer;
		padding: 9px 55px;
		background-color: #00A3FF;
		color: #FFFFFF;
		border-radius: 5px;
		position: relative;
		top: 11px;
		left: 15px;
		font-size: 12px;
	}

	.login-bt1 span i {
		color: #C8F4A5;
	}

	.i-icon-1 {
		color: #7F8393;
		position: relative;
		left: 10px;
		top: 15px;
		font-size: 20px;
	}

	.i-icon-2 {
		position: relative;
		color: #7F8393;
		left: 27px;
		top: 15px;
		font-size: 20px;
	}
</style>
