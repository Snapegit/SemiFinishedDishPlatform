<template>
<div :style='{"minHeight":"500px","padding":"20px 20px 40px","margin":"0px auto","borderColor":"#d3d3d3","background":"#fff","borderWidth":"0 1px","width":"980px","position":"relative","borderStyle":"solid"}'>
    <el-form
	  :style='{"border":"0px solid #eee","padding":"0px 0 50px","alignItems":"flex-start","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","position":"relative"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="150px"
    >
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="优惠券id" prop="couponid">
            <el-input v-model="ruleForm.couponid" 
                placeholder="优惠券id" clearable :disabled=" false  ||ro.couponid"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="名称" prop="name">
            <el-input v-model="ruleForm.name" 
                placeholder="名称" clearable :disabled=" false  ||ro.name"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="券编号" prop="couponnumber">
            <el-input v-model="ruleForm.couponnumber" 
                placeholder="券编号" clearable :disabled=" false  ||ro.couponnumber"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="满额" prop="fullamount">
			<el-input-number v-model="ruleForm.fullamount" placeholder="满额" :disabled=" false ||ro.fullamount"></el-input-number>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="优惠额" prop="discountamount">
			<el-input-number v-model="ruleForm.discountamount" placeholder="优惠额" :disabled=" false ||ro.discountamount"></el-input-number>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="生效时间" prop="startime">
              <el-date-picker
				  :disabled=" false  ||ro.startime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.startime" 
                  type="datetime"
                  placeholder="生效时间">
              </el-date-picker>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="过期时间" prop="endtime">
              <el-date-picker
				  :disabled=" false  ||ro.endtime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.endtime" 
                  type="datetime"
                  placeholder="过期时间">
              </el-date-picker>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="优惠券类型" prop="type">
            <el-input v-model="ruleForm.type" 
                placeholder="优惠券类型" clearable :disabled=" false  ||ro.type"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="备注" prop="remark">
            <el-input v-model="ruleForm.remark" 
                placeholder="备注" clearable :disabled=" false  ||ro.remark"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}'  label="状态" prop="status">
            <el-select v-model="ruleForm.status" placeholder="请选择状态" :disabled=" false  ||ro.status" >
              <el-option
                  v-for="(item,index) in statusOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>

      <el-form-item :style='{"width":"100%","padding":"0","margin":"20px 0 0","textAlign":"center"}'>
        <el-button :style='{"border":"0px solid #eccc19","cursor":"pointer","padding":"0","margin":"0 20px 0 0","color":"#fff","borderRadius":"4px","background":"#C20C0C","width":"100px","lineHeight":"34px","fontSize":"14px","height":"34px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"1px solid #ccc","cursor":"pointer","padding":"0","margin":"0","color":"#666","borderRadius":"4px","background":"none","width":"100px","lineHeight":"34px","fontSize":"14px","height":"34px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
	  let self = this
      return {
        id: '',
        baseUrl: '',
        ro:{
				userid : false,
				couponid : false,
				name : false,
				couponnumber : false,
				fullamount : false,
				discountamount : false,
				startime : false,
				endtime : false,
				type : false,
				remark : false,
				status : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          userid: '',
          couponid: '',
          name: '',
          couponnumber: '',
          fullamount: '',
          discountamount: '',
          startime: '',
          endtime: '',
          type: '',
          remark: '',
          status: '',
        },
        statusOptions: [],


        rules: {
          userid: [
            { required: true, message: '用户id不能为空', trigger: 'blur' },
          ],
          couponid: [
            { required: true, message: '优惠券id不能为空', trigger: 'blur' },
          ],
          name: [
            { required: true, message: '名称不能为空', trigger: 'blur' },
          ],
          couponnumber: [
            { required: true, message: '券编号不能为空', trigger: 'blur' },
          ],
          fullamount: [
            { required: true, message: '满额不能为空', trigger: 'blur' },
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          discountamount: [
            { required: true, message: '优惠额不能为空', trigger: 'blur' },
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          startime: [
          ],
          endtime: [
          ],
          type: [
          ],
          remark: [
          ],
          status: [
          ],
        },
		centerType: false,
      };
    },
    computed: {



    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='userid'){
              this.ruleForm.userid = obj[o];
              this.ro.userid = true;
              continue;
            }
            if(o=='couponid'){
              this.ruleForm.couponid = obj[o];
              this.ro.couponid = true;
              continue;
            }
            if(o=='name'){
              this.ruleForm.name = obj[o];
              this.ro.name = true;
              continue;
            }
            if(o=='couponnumber'){
              this.ruleForm.couponnumber = obj[o];
              this.ro.couponnumber = true;
              continue;
            }
            if(o=='fullamount'){
              this.ruleForm.fullamount = obj[o];
              this.ro.fullamount = true;
              continue;
            }
            if(o=='discountamount'){
              this.ruleForm.discountamount = obj[o];
              this.ro.discountamount = true;
              continue;
            }
            if(o=='startime'){
              this.ruleForm.startime = obj[o];
              this.ro.startime = true;
              continue;
            }
            if(o=='endtime'){
              this.ruleForm.endtime = obj[o];
              this.ro.endtime = true;
              continue;
            }
            if(o=='type'){
              this.ruleForm.type = obj[o];
              this.ro.type = true;
              continue;
            }
            if(o=='remark'){
              this.ruleForm.remark = obj[o];
              this.ro.remark = true;
              continue;
            }
            if(o=='status'){
              this.ruleForm.status = obj[o];
              this.ro.status = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        this.statusOptions = "可使用,已使用,已过期".split(',')

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`mycoupon/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {
			//更新跨表属性
			var crossuserid;
			var crossrefid;
			var crossoptnum;
			this.$refs["ruleForm"].validate(valid => {
				if(valid) {
					if(this.type=='cross'){
						var statusColumnName = localStorage.getItem('statusColumnName');
						var statusColumnValue = localStorage.getItem('statusColumnValue');
						if(statusColumnName && statusColumnName!='') {
							var obj = JSON.parse(localStorage.getItem('crossObj'));
							if(!statusColumnName.startsWith("[")) {
								for (var o in obj){
									if(o==statusColumnName){
										obj[o] = statusColumnValue;
									}
								}
								var table = localStorage.getItem('crossTable');
								this.$http.post(table+'/update', obj).then(res => {});
							} else {
								crossuserid=Number(localStorage.getItem('frontUserid'));
								crossrefid=obj['id'];
								crossoptnum=localStorage.getItem('statusColumnName');
								crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
							}
						}
					}
					if(crossrefid && crossuserid) {
						this.ruleForm.crossuserid=crossuserid;
						this.ruleForm.crossrefid=crossrefid;
						var params = {
							page: 1,
							limit: 10,
							crossuserid:crossuserid,
							crossrefid:crossrefid,
						}
						this.$http.get('mycoupon/list', {
							params: params
						}).then(res => {
							if(res.data.data.total>=crossoptnum) {
								this.$message({
									message: localStorage.getItem('tips'),
									type: 'error',
									duration: 1500,
								});
								return false;
							} else {
								// 跨表计算


								this.$http.post(`mycoupon/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
									if (res.data.code == 0) {
										this.$message({
											message: '操作成功',
											type: 'success',
											duration: 1500,
											onClose: () => {
												this.$router.go(-1);
											}
										});
									} else {
										this.$message({
											message: res.data.msg,
											type: 'error',
											duration: 1500
										});
									}
								});
							}
						});
					} else {


						this.$http.post(`mycoupon/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
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
			this.$router.go(-1);
		},
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item ::v-deep .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 150px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item ::v-deep .el-form-item__content {
	  margin-left: 150px;
	}
	
	.add-update-preview .el-input ::v-deep .el-input__inner {
	  border: 1px solid #ddd;
	  padding: 0 12px;
	  color: #666;
	  font-size: 14px;
	  border-color: #ddd;
	  border-radius: 0px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  background: none;
	  width: auto;
	  border-width: 1px;
	  border-style: solid;
	  min-width: 200px;
	  height: 40px;
	}
	.add-update-preview .el-input-number ::v-deep .el-input__inner {
		text-align: left;
	  border: 1px solid #ddd;
	  padding: 0 12px;
	  color: #666;
	  font-size: 14px;
	  border-color: #ddd;
	  border-radius: 0px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  background: none;
	  width: auto;
	  border-width: 1px;
	  border-style: solid;
	  min-width: 200px;
	  height: 40px;
	}
	.add-update-preview .el-input-number ::v-deep .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number ::v-deep .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select ::v-deep .el-input__inner {
	  border-radius: 0px;
	  padding: 0 10px;
	  color: #666;
	  background: none;
	  width: auto;
	  font-size: 14px;
	  border-color: #ddd;
	  border-width: 1px;
	  border-style: solid;
	  min-width: 250px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor ::v-deep .el-input__inner {
	  border-radius: 0px;
	  padding: 0 10px 0 30px;
	  color: #666;
	  background: none;
	  width: auto;
	  font-size: 14px;
	  border-color: #ddd;
	  border-width: 1px;
	  border-style: solid;
	  min-width: 250px;
	  height: 40px;
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
	  color: #999;
	  font-size: 24px;
	  border-color: #ddd;
	  line-height: 54px;
	  border-radius: 2px;
	  background: none;
	  width: auto;
	  border-width: 1px;
	  border-style: solid;
	  text-align: center;
	  min-width: 150px;
	  height: 54px;
	}
	
	.add-update-preview ::v-deep .el-upload-list .el-upload-list__item {
	  cursor: pointer;
	  color: #999;
	  font-size: 24px;
	  border-color: #ddd;
	  line-height: 54px;
	  border-radius: 2px;
	  background: none;
	  width: auto;
	  border-width: 1px;
	  border-style: solid;
	  text-align: center;
	  min-width: 150px;
	  height: 54px;
	}
	
	.add-update-preview ::v-deep .el-upload .el-icon-plus {
	  cursor: pointer;
	  color: #999;
	  font-size: 24px;
	  border-color: #ddd;
	  line-height: 54px;
	  border-radius: 2px;
	  background: none;
	  width: auto;
	  border-width: 1px;
	  border-style: solid;
	  text-align: center;
	  min-width: 150px;
	  height: 54px;
	}
	
	.add-update-preview .el-textarea ::v-deep .el-textarea__inner {
	  border: 1px solid #ddd;
	  border-radius: 0px;
	  padding: 12px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #666;
	  background: none;
	  width: 96%;
	  font-size: 14px;
	  height: 120px;
	}
</style>
