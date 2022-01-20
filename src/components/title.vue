<template>
<div id="section">
    <div id="buffer"></div>
    <div id="sticky_box">
        <div id="title">
            <h1>パレスチナ問題</h1>
        </div>
    </div>
    <div class="text_box">
        <p>パレスチナ問題は現在も続いている国際問題だ。
        <br>ニュースでは度々ロケットや空爆による報復攻撃が行われていることが報じられている。パレスチナ問題は遠くの出来事であり複雑で理解し辛い問題である。しかし、グローバル化が進む中で、我々はこのような問題から目を背けることは難しくなっており、一定の理解を得ることが重要である。
        <br>そもそもなぜ、このような問題が起きたのか。なぜお互い譲歩しようとしないのか。ここでは、パレスチナ問題の根っこ部分を見ていく。
        </p>
    </div>
</div>
</template>
<style scoped>
#section{
    background-color: #3a3a3a;
    position: relative;
    height: 300vh;
    margin: 0;
    text-align: center;
    justify-content: center;
}
#buffer{
    height: 1vh;
    background-color: #3a3a3a;
    z-index: -1;
}
#sticky_box{
    position: sticky;
    height: 125vh;
    top: 10vh;
    bottom: 100vh;
}
#title{
    margin-top: 35vh;
    background-color: #3a3a3a;
}
#title h1{
    font-size: 150px;
    margin: 0;
}
.text_box{
    width: 25%;
    margin-top: 50vh;
    margin-left: auto;
    margin-right: auto;
}
</style>
<script>
</script>