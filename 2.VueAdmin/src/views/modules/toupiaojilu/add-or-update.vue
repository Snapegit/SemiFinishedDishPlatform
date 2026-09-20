<template>
	<div class="addEdit-block" :style='{"padding":"85px 30px 30px","fontSize":"14px","color":"#666","background":"none"}'>
		<el-form
			:style='{"border":"1px solid #e3e3e3","padding":"30px 30px 20px","borderRadius":"8px","alignItems":"flex-start","flexWrap":"wrap","background":"rgba(255,255,255,1)","display":"flex","fontSize":"inherit"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="150px"
		>
			<template >
				<el-form-item :style='{"border":"0px solid #eee","padding":"0px 0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="投票名称" prop="toupiaomingcheng">
					<el-input v-model="ruleForm.toupiaomingcheng" placeholder="投票名称" clearable  :readonly="ro.toupiaomingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0px 0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="投票名称" prop="toupiaomingcheng">
					<el-input v-model="ruleForm.toupiaomingcheng" placeholder="投票名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0px 0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","background":"none","width":"100%","fontSize":"inherit"}' class="upload" v-if="type!='info' && !ro.toupiaotupian" label="投票图片" prop="toupiaotupian">
					<file-upload
						tip="点击上传投票图片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.toupiaotupian?ruleForm.toupiaotupian:''"
						@change="toupiaotupianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0px 0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","background":"none","width":"100%","fontSize":"inherit"}' class="upload" v-else-if="ruleForm.toupiaotupian" label="投票图片" prop="toupiaotupian">
					<img v-if="ruleForm.toupiaotupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.toupiaotupian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.toupiaotupian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0px 0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","background":"none","width":"100%","fontSize":"inherit"}' class="select" v-if="type!='info'"  label="投票票数" prop="toupiaopiaoshu">
					<el-select :disabled="ro.toupiaopiaoshu" v-model="ruleForm.toupiaopiaoshu" placeholder="请选择投票票数" >
						<el-option
							v-for="(item,index) in toupiaopiaoshuOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0px 0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="投票票数" prop="toupiaopiaoshu">
					<el-input v-model="ruleForm.toupiaopiaoshu"
						placeholder="投票票数" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0px 0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","background":"none","width":"100%","fontSize":"inherit"}' class="date" v-if="type!='info'" label="投票时间" prop="toupiaoshijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.toupiaoshijian" 
						type="datetime"
						:readonly="ro.toupiaoshijian"
						placeholder="投票时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0px 0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-else-if="ruleForm.toupiaoshijian" label="投票时间" prop="toupiaoshijian">
					<el-input v-model="ruleForm.toupiaoshijian" placeholder="投票时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0px 0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="信息备注" prop="xinxibeizhu">
					<el-input v-model="ruleForm.xinxibeizhu" placeholder="信息备注" clearable  :readonly="ro.xinxibeizhu"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0px 0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="信息备注" prop="xinxibeizhu">
					<el-input v-model="ruleForm.xinxibeizhu" placeholder="信息备注" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0px 0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="账号" prop="zhanghao">
					<el-input v-model="ruleForm.zhanghao" placeholder="账号" clearable  :readonly="ro.zhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0px 0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="账号" prop="zhanghao">
					<el-input v-model="ruleForm.zhanghao" placeholder="账号" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item :style='{"padding":"10px 0 20px","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"30px 0","alignItems":"center","textAlign":"center","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","display":"flex","width":"100%","perspective":"320px","-webkitPerspective":"320px","fontSize":"48px","justifyContent":"flex-start"}' class="btn">
				<el-button class="btn3"  v-if="type!='info'" type="success" @click="onSubmit">
					<span class="icon iconfont icon-tijiao16" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					保存
				</el-button>
				<el-button class="btn4" v-if="type!='info'" type="success" @click="back()">
					<span class="icon iconfont icon-quxiao09" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					取消
				</el-button>
				<el-button class="btn5" v-if="type=='info'" type="success" @click="back()">
					<span class="icon iconfont icon-fanhui01" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					返回
				</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
import { 
	isIntNumer,
} from "@/utils/validate";
export default {
	data() {
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				toupiaomingcheng : false,
				toupiaotupian : false,
				toupiaopiaoshu : false,
				toupiaoshijian : false,
				xinxibeizhu : false,
				zhanghao : false,
				crossuserid : false,
				crossrefid : false,
				shhf : false,
			},
			
			
			ruleForm: {
				toupiaomingcheng: '',
				toupiaotupian: '',
				toupiaopiaoshu: '',
				toupiaoshijian: '',
				xinxibeizhu: '',
				zhanghao: '',
				crossuserid: '',
				crossrefid: '',
				shhf: '',
			},
		
			toupiaopiaoshuOptions: [],

			
			rules: {
				toupiaomingcheng: [
				],
				toupiaotupian: [
				],
				toupiaopiaoshu: [
					{ required: true, message: '投票票数不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				toupiaoshijian: [
				],
				xinxibeizhu: [
				],
				zhanghao: [
				],
				crossuserid: [
				],
				crossrefid: [
				],
				shhf: [
				],
			},
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
		this.ruleForm.toupiaoshijian = this.getCurDateTime()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='toupiaomingcheng'){
							this.ruleForm.toupiaomingcheng = obj[o];
							this.ro.toupiaomingcheng = true;
							continue;
						}
						if(o=='toupiaotupian'){
							this.ruleForm.toupiaotupian = obj[o];
							this.ro.toupiaotupian = true;
							continue;
						}
						if(o=='toupiaopiaoshu'){
							this.ruleForm.toupiaopiaoshu = obj[o];
							this.ro.toupiaopiaoshu = true;
							continue;
						}
						if(o=='toupiaoshijian'){
							this.ruleForm.toupiaoshijian = obj[o];
							this.ro.toupiaoshijian = true;
							continue;
						}
						if(o=='xinxibeizhu'){
							this.ruleForm.xinxibeizhu = obj[o];
							this.ro.xinxibeizhu = true;
							continue;
						}
						if(o=='zhanghao'){
							this.ruleForm.zhanghao = obj[o];
							this.ro.zhanghao = true;
							continue;
						}
						if(o=='crossuserid'){
							this.ruleForm.crossuserid = obj[o];
							this.ro.crossuserid = true;
							continue;
						}
						if(o=='crossrefid'){
							this.ruleForm.crossrefid = obj[o];
							this.ro.crossrefid = true;
							continue;
						}
				}
				this.ruleForm.toupiaopiaoshu = 0
				this.ro.toupiaopiaoshu = false;
			}
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					var json = data.data;
					if(this.$storage.get("role")!="管理员") {
						this.ro.toupiaoshijian = true;
					}
					if(((json.zhanghao!=''&&json.zhanghao) || json.zhanghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.zhanghao = json.zhanghao
						this.ro.zhanghao = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
            this.toupiaopiaoshuOptions = "1".split(',')
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `toupiaojilu/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
	if(this.ruleForm.toupiaotupian!=null) {
		this.ruleForm.toupiaotupian = this.ruleForm.toupiaotupian.replace(new RegExp(this.$base.url,"g"),"");
	}
var objcross = this.$storage.getObj('crossObj');
      var table = this.$storage.getObj('crossTable');
      if(objcross!=null) {
		  if(!this.ruleForm.toupiaopiaoshu){
			  this.$message.error("投票票数不能为空");
			  return
		  }
	      objcross.toupiaopiaoshu = parseFloat(objcross.toupiaopiaoshu) + parseFloat(this.ruleForm.toupiaopiaoshu)
                }
      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                              this.$http({
                                  url: `${table}/update`,
                                  method: "post",
                                  data: objcross
                                }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
		this.$refs["ruleForm"].validate(valid => {
			if (valid) {
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid = crossuserid;
					this.ruleForm.crossrefid = crossrefid;
					let params = { 
						page: 1, 
						limit: 10, 
						crossuserid:this.ruleForm.crossuserid,
						crossrefid:this.ruleForm.crossrefid,
					} 
				this.$http({ 
					url: "toupiaojilu/page", 
					method: "get", 
					params: params 
				}).then(({ 
					data 
				}) => { 
					if (data && data.code === 0) { 
						if(data.data.total>=crossoptnum) {
							this.$message.error(this.$storage.get('tips'));
							return false;
						} else {
							this.$http({
								url: `toupiaojilu/${!this.ruleForm.id ? "save" : "update"}`,
								method: "post",
								data: this.ruleForm
							}).then(({ data }) => {
								if (data && data.code === 0) {
									this.$message({
										message: "操作成功",
										type: "success",
										duration: 1500,
										onClose: () => {
											this.parent.showFlag = true;
											this.parent.addOrUpdateFlag = false;
											this.parent.toupiaojiluCrossAddOrUpdateFlag = false;
											this.parent.search();
											this.parent.contentStyleChange();
										}
									});
									this.$http({
										url: `${table}/update`,
										method: "post",
										data: objcross
									}).then(({ data }) => {});
								} else {
									this.$message.error(data.msg);
								}
							});

						}
					} else { 
				} 
			});
		} else {
			this.$http({
				url: `toupiaojilu/${!this.ruleForm.id ? "save" : "update"}`,
				method: "post",
			   data: this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$http({
						url: `${table}/update`,
						method: "post",
						data: objcross
					}).then(({ data }) => {});
					this.$message({
						message: "操作成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.parent.showFlag = true;
							this.parent.addOrUpdateFlag = false;
							this.parent.toupiaojiluCrossAddOrUpdateFlag = false;
							this.parent.search();
							this.parent.contentStyleChange();
						}
					});
				} else {
					this.$message.error(data.msg);
			   }
			});
		 }
         }
		});
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.toupiaojiluCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    toupiaotupianUploadChange(fileUrls) {
	    this.ruleForm.toupiaotupian = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item ::v-deep .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #333;
	  	  font-weight: 500;
	  	  display: inline-block;
	  	  width: 150px;
	  	  font-size: inherit;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item ::v-deep .el-form-item__content {
	  margin-left: 150px;
	}
	
	.add-update-preview .el-input ::v-deep .el-input__inner {
	  	  padding: 0 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #e3e3e3;
	  	  border-radius: 3px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: none;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 39px;
	  	}
	.add-update-preview .el-input-number ::v-deep .el-input__inner {
		text-align: left;
	  	  padding: 0 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #e3e3e3;
	  	  border-radius: 3px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: none;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 39px;
	  	}
	.add-update-preview .el-input-number ::v-deep .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number ::v-deep .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select ::v-deep .el-input__inner {
	  	  border-radius: 3px;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  color: inherit;
	  	  background: none;
	  	  width: auto;
	  	  font-size: 14px;
	  	  border-color: #e3e3e3;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 39px;
	  	}
	
	.add-update-preview .el-date-editor ::v-deep .el-input__inner {
	  	  border-radius: 3px;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  color: inherit;
	  	  background: none;
	  	  width: auto;
	  	  font-size: 14px;
	  	  border-color: #e3e3e3;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 39px;
	  	}
	
	.add-update-preview ::v-deep .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview ::v-deep .upload .upload-img {
	  	  cursor: pointer;
	  	  color: #bbb;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #e3e3e3;
	  	  line-height: 60px;
	  	  border-radius: 3px;
	  	  background: none;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  min-width: 150px;
	  	  height: 60px;
	  	}
	
	.add-update-preview ::v-deep .el-upload-list .el-upload-list__item {
	  	  cursor: pointer;
	  	  color: #bbb;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #e3e3e3;
	  	  line-height: 60px;
	  	  border-radius: 3px;
	  	  background: none;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  min-width: 150px;
	  	  height: 60px;
	  	}
	
	.add-update-preview ::v-deep .el-upload .el-icon-plus {
	  	  cursor: pointer;
	  	  color: #bbb;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #e3e3e3;
	  	  line-height: 60px;
	  	  border-radius: 3px;
	  	  background: none;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  min-width: 150px;
	  	  height: 60px;
	  	}
	
	.add-update-preview .el-textarea ::v-deep .el-textarea__inner {
	  	  border-radius: 3px;
	  	  padding: 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  color: inherit;
	  	  background: none;
	  	  width: auto;
	  	  font-size: 14px;
	  	  border-color: #e3e3e3;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 400px;
	  	  height: auto;
	  	}
	
	.add-update-preview .btn .btn1 {
				border: 1px solid #f09a2b;
				cursor: pointer;
				padding: 0 10px;
				margin: 0px 10px;
				color: #fff;
				display: inline-block;
				font-size: 14px;
				line-height: 24px;
				transition: all 0.5s;
				border-radius: 3px;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
				background: linear-gradient(to bottom, #FE962B 0%,#FEAE46 100%);
				width: auto;
				height: 32px;
			}
	
	.add-update-preview .btn .btn1:hover {
				transform: translate3d(-10px, 0px, 0px);
			}
	
	.add-update-preview .btn .btn2 {
				border: 1px solid #719e37;
				cursor: pointer;
				padding: 0 10px;
				margin: 0px 10px;
				color: #fff;
				font-size: 14px;
				line-height: 24px;
				transition: all 0.5s;
				border-radius: 3px;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
				background: linear-gradient(to bottom, #9bc747 0%,#82bd42 100%);
				width: auto;
				height: 32px;
			}
	
	.add-update-preview .btn .btn2:hover {
				transform: translate3d(-10px, 0px, 0px);
			}
	
	.add-update-preview .btn .btn3 {
				border: 1px solid #0f70ad;
				cursor: pointer;
				padding: 0 20px;
				margin: 0px 10px;
				color: #fff;
				font-size: 14px;
				line-height: 24px;
				transition: all 0.5s;
				border-radius: 3px;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
				background: linear-gradient(to bottom, #208ed3 0%,#0272bd 100%);
				width: auto;
				min-width: 78px;
				height: 32px;
			}
	
	.add-update-preview .btn .btn3:hover {
				transform: translate3d(-10px, 0px, 0px);
			}
	
	.add-update-preview .btn .btn4 {
				border: 1px solid #af2b1b;
				cursor: pointer;
				padding: 0 20px;
				margin: 0px 10px;
				color: #fff;
				font-size: 14px;
				line-height: 24px;
				transition: all 0.5s;
				border-radius: 3px;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
				background: linear-gradient(to bottom, #bc3423 0%,#cd4433 100%);
				width: auto;
				min-width: 78px;
				height: 32px;
			}
	
	.add-update-preview .btn .btn4:hover {
				transform: translate3d(-10px, 0px, 0px);
			}
	
	.add-update-preview .btn .btn5 {
				border: 1px solid #323537;
				cursor: pointer;
				padding: 0 20px;
				margin: 0 10px;
				color: #fff;
				font-size: 14px;
				line-height: 24px;
				transition: all 0.5s;
				border-radius: 3px;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
				background: linear-gradient(to bottom, #4b4f51 0%,#414547 100%);
				width: auto;
				min-width: 78px;
				height: 32px;
			}
	
	.add-update-preview .btn .btn5:hover {
				transform: translate3d(-10px, 0px, 0px);
			}
</style>
