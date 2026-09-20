const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootji42mfjd/",
            name: "springbootji42mfjd",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootji42mfjd/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于SpringBoot半成品配菜平台设计与实现"
        } 
    }
}
export default base
