<template>
    <div class="chapter">
        <div class="pointer to_left">
            <router-link to="/israel1">&lt;</router-link>
        </div>
        <div class="pointer to_right">
            <router-link to="/pal1">&gt;</router-link>
        </div>
        <div class="text_box">
            <h1>移住と先住</h1>
            <p>「一つの民族には一つの国家」そう唱えられ始めた19世紀後半、当時国家を持っていなかったユダヤ人も例外なく、自らの国家を求めるようになった。1世紀以降世界各地に離散していたユダヤ人は古の居住地であり聖地であってパレスチナこそユダヤ人国家に最適な地として移住する者が現れた。しかし、パレスチナには既にアラブ人が多数居住しており、アラブ人もまた自らの国家を渇望していた。
            <br>第一次世界大戦後、アラビア半島には統一されたアラブ人国家が誕生する予定だった。しかしそのような国家は生まれることはなく、その間にもパレスチナには迫害から逃れたユダヤ人が続々とやってきた。
            <br>パレスチナ問題という油に火種が入るのは時間の問題だった。
            </p>
        </div>
        <div class="images" @mouseover="imageDisc" @mouseout="imageDiscOut">
            <img id="img1" src="../assets/chap1_1.jpg" />
            <img id="img2" src="../assets/chap1_2.jpg" />
            <img id="img3" src="../assets/chap1_3.jpg" />
            <img id="img4" src="../assets/chap1_4.jpg" />
            <img id="img5" src="../assets/chap1_5.jpg" />
            <img id="img6" src="../assets/chap1_6.jpg" />
        </div>
        <div>
            <div class="discs" id="disc1"><p>ユダヤ人の入植地 (1940)</p></div>
            <div class="discs" id="disc2"><p>ユダヤ人を拒否する看板 カナダ (1930年代)</p></div>
            <div class="discs" id="disc3"><p>ナチスドイツに連行されるユダヤ人 (1943)</p></div>
            <div class="discs" id="disc4"><p>パレスチナ人の家族 (1910)</p></div>
            <div class="discs" id="disc5"><p>エルサレムの街の様子 (1910)</p></div>
            <div class="discs" id="disc6"><p>エルサレムのカフェ (1920)</p></div>
        </div>
    </div>
</template>
<style scoped>
.chapter{
    position: relative;
    height: 100vh;
    justify-content: center;
    align-content: center;
    text-align: center;
    display: block;
    margin: 0;
    background-color: #3a3a3a;
}
.pointer{
    position: absolute;
    top: 45vh;
    width: 10%;
    z-index: 10;
}
.pointer.to_right{
    right: 0vw;
}
.pointer.to_left{
    left: 0vw;
}
.pointer a{
    text-decoration: none;
    font-size: 500%;
    height: 100%;
}
.pointer.to_left a{
    color: #0071ba;
}
.pointer.to_right a{
    color: #0e8136;
}
.text_box{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50vh;
    left: 50vw;
    width: 25%;
    /* height: 80vh; */
    color: #e1e1e1;
    z-index: 1;
}
.text_box h1{
    font-size: 80px;
    border-bottom: 3px solid #e1e1e1;
    margin-bottom: 25px;
}
img{
    position: absolute;
    z-index: 2;
}
#img1, #disc1{
    top: 97%;
    left: 10%;
    width: 28%;
    transform: translateY(-100%);
}
#img2, #disc2{
    top: 5%;
    left: 17%;
    width: 21%;
}
#img3, #disc3{
    top: 65%;
    left: 9%;
    width: 22%;
    transform: translateY(-100%);
}
#img4, #disc4{
    top: 95%;
    right: 13%;
    width: 23%;
    transform: translateY(-100%);
}
#img5, #disc5{
    top: 5%;
    right: 15%;
    width: 22%;
}
#img6, #disc6{
    top: 63%;
    right: 7%;
    width: 15%;
    transform: translateY(-100%);
}
.discs{
    position: absolute;
    color: #e1e1e1;
    background-color: rgba(58,58,58,0.5);
    z-index: 3;    
    height: 50px;
    opacity: 0;
    transition: opacity .3s ease-in-out;
}
</style>
<script>
export default{
    methods:{
        imageDisc(event){
            var elID = parseInt(event.target.id.slice(3));
            var target = document.getElementById("disc"+elID);
            target.style.opacity = 1;
        },
        imageDiscOut(event){
            var elID = parseInt(event.target.id.slice(3));
            var target = document.getElementById("disc"+elID);
            target.style.opacity = 0;
        }
    }
}
</script>