<template>
<div>
	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20240126/6e362446b0684fae9c8a28713f0bcbef.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form ref="loginForm" :model="loginForm" :style='{"border":"4px groove #333","padding":"40px 8% 30px 8%","boxShadow":"0px 26px 26px -30px #333","margin":"0 auto","alignItems":"center","flexDirection":"column","display":"flex","justifyContent":"center","minHeight":"500px","borderRadius":"20px","flexWrap":"wrap","background":"rgba(255,255,255,.5)","width":"45vw","position":"relative","height":"auto"}' :rules="rules">
			<div v-if="false" :style='{"width":"100%","margin":"0 0 10px 0","lineHeight":"44px","fontSize":"18px","color":"#333","textAlign":"center"}'>USER / LOGIN</div>
			<div v-if="true" :style='{"margin":"0 auto 20px","-webkit-text-stroke":"6px transparent","color":"#fff","textAlign":"center","background":"#000","-webkitTextFillColor":"#ffffff","width":"100%","letterSpacing":"6px","lineHeight":"44px","fontSize":"24px","fontWeight":"500","-webkitBackgroundClip":"text"}'>基于SpringBoot半成品配菜平台设计与实现登录</div>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"100%","margin":"0 auto 20px"}' prop="username">
				<div v-if="true" :style='{"color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","minWidth":"100px"}'>账号：</div>
				<input :style='{"padding":"0 10px","borderColor":"#ddd","color":"#666","borderRadius":"0px","borderWidth":"0 0 1px","background":"rgba(255,255,255,.9)","width":"calc(100% - 150px)","fontSize":"14px","minWidth":"300px","borderStyle":"solid","height":"40px"}' v-model="loginForm.username" placeholder="请输入账号">
			</el-form-item>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"100%","margin":"0 auto 20px"}' prop="password">
				<div v-if="true" :style='{"color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","minWidth":"100px"}'>密码：</div>
				<input :style='{"padding":"0 10px","borderColor":"#ddd","color":"#666","borderRadius":"0px","borderWidth":"0 0 1px","background":"rgba(255,255,255,.9)","width":"calc(100% - 150px)","fontSize":"14px","minWidth":"300px","borderStyle":"solid","height":"40px"}' v-model="loginForm.password" placeholder="请输入密码" type="password">
			</el-form-item>

			<el-form-item v-if="roles.length>1" class="list-type" :style='{"width":"100%","margin":"20px auto"}' prop="role">
				<el-radio v-model="loginForm.tableName" :label="item.tableName" v-for="(item, index) in roles" :key="index" @change.native="getCurrentRow(item)">{{item.roleName}}</el-radio>
			</el-form-item>

			  <div v-if="flag" class="mask" style="position: fixed;z-index: 998;top: 0;right: 0;left: 0;bottom: 0;background: rgba(0,0,0,.5);"></div>
			  <!-- option3 -->
			  <div v-if="flag" class="box" :style='{"padding":"0 24px 24px","transform":"translate3d(-50%,-50%,0)","top":"50%","borderRadius":"20px","left":"50%","background":"#fff","position":"fixed","zIndex":999}'>
			  	<span @click="flag = !flag" :style='{"cursor":"pointer","padding":"10px","top":"0","fontSize":"20px","position":"absolute","right":"0","zIndex":1}' class="icon iconfont guanbi icon-guanbi1"></span>
			  	<div :style='{"lineHeight":"40px","fontSize":"18px","color":"#000","textAlign":"center"}'>身份验证</div>
			  	<div :style='{"width":"300px","padding":"20px","height":"auto"}' id="option3" class="rotateverify-contaniner">
			  		<div :style='{"position":"relative"}' class="rotate-can-wrap">
			  			<canvas width="500" height="500" :style='{"width":"260px","height":"260px"}' class="rotateCan rotate-can"></canvas>
			  			<span :style='{"padding":"80px","backgroundColor":"rgba(0,0,0,.3)","color":"#fff","display":"none","top":0,"borderRadius":"100%","left":0,"width":"260px","fontSize":"100px","position":"absolute","backgroundPosition":"center center","backgroundRepeat":"no-repeat","height":"260px"}' class="icon iconfont statusBg"></span>
			  		</div>
			  		<div :style='{"margin":"10px 0 0","borderRadius":"40px","background":"#f7f7f7","clear":"both","width":"100%","position":"relative","height":"40px"}' class="control-wrap slideDragWrap">
			  			<div :style='{"width":"100%","position":"relative","height":"100%"}' class="control-tips">
			  				<p :style='{"overflow":"hidden","whiteSpace":"nowrap","top":0,"color":"#333","textAlign":"center","left":0,"width":"100%","lineHeight":"40px","fontSize":"16px","position":"absolute","textOverflow":"ellipsis","height":"40px"}' class="c-tips-txt cTipsTxt">滑动将图片转正</p>
			  			</div>
			  			<div :style='{"border":"1px solid transparent","top":0,"borderRadius":"40px","left":0,"width":"40px","position":"absolute","height":"40px"}' class="control-bor-wrap controlBorWrap"></div>
			  			<div :style='{"border":"1px solid #e0e0e0","top":0,"borderRadius":"40px","alignItems":"center","color":"#666","left":0,"background":"#fff","display":"flex","width":"40px","position":"absolute","justifyContent":"center","height":"40px"}' class="control-btn slideDragBtn">
			  				<span :style='{"color":"inherit","fontSize":"18px"}' class="icon iconfont icon-gengduo1"></span>
			  			</div>
			  		</div>
			  	</div>
			  </div>
			
			<el-form-item class="list-btn" :style='{"width":"100%","textAlign":"center","margin":"30px auto"}'>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 20px","margin":"0 5px","color":"#fff","borderRadius":"4px","background":"#C10D0C","width":"auto","letterSpacing":"4px","fontSize":"16px","minWidth":"120px","height":"36px"}' @click="submitForm('loginForm')">登录</el-button>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 24px","boxShadow":"0px 4px 0px #075c06","margin":"0 5px","color":"#fff","textAlign":"right","display":"none","letterSpacing":"4px","outline":"none","borderRadius":"4px","background":"#49c549","width":"auto","fontSize":"14px","height":"40px"}' @click="resetForm('loginForm')">重置</el-button>
			</el-form-item>
			<div :style='{"width":"100%","textAlign":"center","margin":"30px auto"}'>
			<router-link :style='{"cursor":"pointer","border":"1px solid #ffffff50","padding":"8px 8px","margin":"0 10px","color":"#333","borderRadius":"4px","background":"rgba(255,255,255,.0)","fontSize":"14px","textDecoration":"underline"}' :to="{path: '/register', query: {role: item.tableName,pageFlag:'register'}}" v-if="item.hasFrontRegister=='是'" v-for="(item, index) in roles" :key="index">注册{{item.roleName.replace('注册','')}}</router-link>
			</div>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
</div>
</template>

<script>
import menu from '@/config/menu'
export default {
	//数据集合
	data() {
		return {
            baseUrl: this.$config.baseUrl,
            loginType: 1,
			roleMenus: [],
			loginForm: {
				username: '',
				password: '',
				tableName: '',
				code: '',
			},
			role: '',
            roles: [],
			rules: {
				username: [
					{ required: true, message: '请输入账号', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			},
			codes: [{
				num: 1,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 2,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 3,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 4,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}],
			flag: false,
			verifyCheck2: false,
		}
	},
  components: {
  },
	created() {
		this.roleMenus = menu.list()
		for(let item in this.roleMenus) {
		    if(this.roleMenus[item].hasFrontLogin=='是') {
		        this.roles.push(this.roleMenus[item]);
		    }
		}
		
	},
	mounted() {
	},
    //方法集合
    methods: {
		randomString() {
			var len = 4;
			var chars = [
			  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
			  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			  'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
			  'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
			  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2',
			  '3', '4', '5', '6', '7', '8', '9'
			]
			var colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
			var sizes = ['14', '15', '16', '17', '18']
			
			var output = []
			for (var i = 0; i < len; i++) {
			  // 随机验证码
			  var key = Math.floor(Math.random() * chars.length)
			  this.codes[i].num = chars[key]
			  // 随机验证码颜色
			  var code = '#'
			  for (var j = 0; j < 6; j++) {
			    var key = Math.floor(Math.random() * colors.length)
			    code += colors[key]
			  }
			  this.codes[i].color = code
			  // 随机验证码方向
			  var rotate = Math.floor(Math.random() * 45)
			  var plus = Math.floor(Math.random() * 2)
			  if (plus == 1) rotate = '-' + rotate
			  this.codes[i].rotate = 'rotate(' + rotate + 'deg)'
			  // 随机验证码字体大小
			  var size = Math.floor(Math.random() * sizes.length)
			  this.codes[i].size = sizes[size] + 'px'
			}
		},
      getCurrentRow(row) {
        this.role = row.roleName;
      },
      submitForm(formName) {
        if (this.roles.length!=1) {
            if (!this.role) {
                this.$message.error("请选择登录用户类型");
                return false;
            }
        } else {
            this.role = this.roles[0].roleName;
            this.loginForm.tableName = this.roles[0].tableName;
        }

		this.flag = true
		this.$nextTick(()=>{
			this.setVerify(formName)
		})
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
	  loginPost(formName) {
		this.$refs[formName].validate((valid) => {
		  if (valid) {
		    this.$http.get(`${this.loginForm.tableName}/login`, {params: this.loginForm}).then(res => {
		      if (res.data.code === 0) {
		        localStorage.setItem('frontToken', res.data.token);
		        localStorage.setItem('UserTableName', this.loginForm.tableName);
		        localStorage.setItem('username', this.loginForm.username);
		        // localStorage.setItem('adminName', this.loginForm.username);
		        localStorage.setItem('frontSessionTable', this.loginForm.tableName);
		        localStorage.setItem('frontRole', this.role);
		        localStorage.setItem('keyPath', 0);
		        this.$router.push('/');
		        this.$message({
		          message: '登录成功',
		          type: 'success',
		          duration: 1500,
		        });
		      } else {
		        this.$message.error(res.data.msg);
		      }
		    });
		  } else {
		    return false;
		  }
		});
	  },
	  setVerify(formName) {
		// option3
		new RotateVerify('#option3', {
			initText: '滑动将图片转正',
			slideImage: [{"name":"图11.jpg","uid":1696646757202,"url":"http://codegen.caihongy.cn/20231007/71678076c42b49f897f450150675b96a.jpg","status":"success"},{"name":"图12.jpg","uid":1696646759714,"url":"http://codegen.caihongy.cn/20231007/917742917d4d44d59abde2a14eaf4e08.jpg","status":"success"},{"name":"图13.jpg","uid":1696646762507,"url":"http://codegen.caihongy.cn/20231007/70c7a1325c8148ca8c4f1c2d80100156.jpg","status":"success"}].map((item)=>{return item.url}),
			slideAreaNum: 10,
			getSuccessState: () => {
				setTimeout(()=>{
				  this.flag = false
				  this.loginPost(formName)
				},2500)
		  }
		})
	  },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20240126/6e362446b0684fae9c8a28713f0bcbef.jpg);
		
		.el-form-item {
		  & ::v-deep .el-form-item__content {
		    width: 100%;
		  }
		}
		
		.list-item ::v-deep .el-form-item__content {
			display: flex;
			width: 100%;
		}

		.list-code ::v-deep .el-form-item__content {
			display: flex;
			width: 100%;
		}

		.list-type ::v-deep .el-form-item__content {
			padding: 0 0 0 150px;
			margin: 20px 0 0;
			display: flex;
		}

		.list-btn ::v-deep .el-form-item__content {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
		}
		
		.list-item ::v-deep .el-input .el-input__inner {
			border-radius: 0px;
			padding: 0 10px;
			color: #666;
			background: rgba(255,255,255,.9);
			width: calc(100% - 150px);
			font-size: 14px;
			border-color: #ddd;
			border-width: 0 0 1px;
			border-style: solid;
			min-width: 300px;
			height: 40px;
		}
		
		.list-code ::v-deep .el-input .el-input__inner {
			border-radius: 0px;
			padding: 0 10px;
			color: #666;
			background: rgba(255,255,255,.9);
			display: inline-block;
			vertical-align: middle;
			width: calc(100% - 250px);
			font-size: 14px;
			border-color: #ddd;
			border-width: 0 0 1px;
			border-style: solid;
			height: 40px;
		}

		.list-type ::v-deep .el-radio__input .el-radio__inner {
			background: rgba(255,255,255,.5);
			border-color: #666;
		}
		.list-type ::v-deep .el-radio__input.is-checked .el-radio__inner {
			background: #C10D0C;
			border-color: #C10D0C;
		}
		.list-type ::v-deep .el-radio__label {
			color: #333;
			font-size: 14px;
		}
		.list-type ::v-deep .el-radio__input.is-checked+.el-radio__label {
			color: #C10D0C;
			font-size: 14px;
		}
	}

	#option3 ::v-deep .control-bor-wrap {
				border: 1px solid transparent;
				border-radius: 40px;
				top: 0;
				left: 0;
				width: 40px;
				position: absolute;
				height: 40px;
			}
	
	#option3 ::v-deep .control-bor-wrap.control-bor-active {
				border: 1px solid #1a91ed;
			}
	
	#option3 ::v-deep .control-bor-wrap.control-bor-suc {
				border: 1px solid rgb(92, 184, 92);
			}
	
	#option3 ::v-deep .control-bor-wrap.control-bor-err {
				border: 1px solid red;
			}
	
	#option3 ::v-deep .control-btn-wrap {
				border: 1px solid #e0e0e0;
				border-radius: 40px;
				top: 0;
				color: #666;
				left: 0;
				background: #fff;
				display: flex;
				width: 40px;
				justify-content: center;
				align-items: center;
				position: absolute;
				height: 40px;
			}
	
	#option3 ::v-deep .control-btn-wrap.control-btn-active {
				color: #fff;
				background: #1a91ed;
			}
	
	#option3 ::v-deep .control-btn-wrap.control-btn-suc {
				color: #fff;
				background: rgb(92, 184, 92);
			}
	
	#option3 ::v-deep .control-btn-wrap.control-btn-err {
				color: #fff;
				background: red;
			}
</style>
