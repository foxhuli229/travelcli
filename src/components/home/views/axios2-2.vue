<template>
    <div>
        axios 页面
    </div>
</template>

<script>
/**
 *  axios 请求方式get、post、put、patch、delete
 *  get：获取数据
 *  post：提交数据（表单提交+文件上传）
 *  put：更新数据（所有数据推送到后端）
 *  patch：更新数据（只将修改的数据推送到后端）
 *  delete：删除数据
 * 
 */
export default {
    name: 'axios2-2',
    components: {
        
    },
    created() {
        this.getinfo()
    },
    methods: {
        getinfo() {
//http://localhost:8080/index.json
        this.axios.get("/static/mock/index.json",{
            params: {
                id: 12
            }
        }).then((res)=>{
            console.log(res)
        })

        this.axios({
            method: 'get',
            url: '/static/mock/index.json',
            params: {
                id: 12
            }
        }).then(res=>{
            console.log(res)
        })
        }
        
    }
    
}
</script>

<style scoped>

</style>

