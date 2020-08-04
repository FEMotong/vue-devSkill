<template functional>
    <div>
        姓名: {{ props.name }}
        年龄: {{ props.age }}
    </div>
</template>

<script>
    // 函数化组件，高度依赖外部传递数据
    // 没有实例化，没有this上下文，数据无响应式，没有生命周期
    // 渲染速度快

    export default {
        name: "Introduction"
    }
</script>

<style scoped>

</style>
