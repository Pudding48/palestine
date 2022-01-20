<template>
<div id="section">
    <div id="sticky_box">
        <div id="pointer">
            <router-link to="/">&gt;</router-link>
        </div>
        <div class="text_wrap">
            <h1>イスラエルの戦力</h1>
            <p>開戦時のイスラエル軍はイギリスの支配下時に結成された民兵組織の後継であり正式な軍と呼ぶには装備や組織力に欠けていた。しかし迅速な改変や他国からの支援を経てイスラエル軍はその戦力を増していった。更には「自分たちの国を守る」という意識により戦意が高く、また多くの移民により戦力の補強も行うことが出来た。
            <br>第一次中東戦争が終結したころには、イスラエル軍は当初の3倍ほどにまでその戦力を増やしていた。
            </p>
        </div>
        <div id="right_box">
            <div class="indicator">
                <svg viewBox="0 50 800 700">
                    <circle id="visual" cx="400" cy="400" r="100" />
                </svg>
                <h1>29677</h1>
            </div>
            <div class="legend_box">
                <div class="legend" id="before">
                    開戦時
                </div>
                <div class="legend" id="after">
                    休戦時
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
#section{
    height: 200vh;
}
#sticky_box{
    position: sticky;
    top: 1vh;
    height: 100vh;
    width: 100%;
    bottom: 0;
}
#pointer{
    position: absolute;
    top: 45vh;
    width: 10%;
    z-index: 50;
    right: 1vw;
    float: right;
    height: 50px;
}
a{
text-decoration: none;
font-size: 500%;
color: #0071ba;
height: 100%;
}
.text_wrap{
    position: absolute;
    top: 15vh;
    left: 20%;
    width: 25%;
    z-index: 2;
}
.text_wrap h1{
    font-size: 80px;
    border-bottom: 3px solid #0071ba;
    margin-bottom: 25px;
}
#right_box{
    width: 40%;
    float: right;
    margin-right: 10vw;
    margin-top: 10vh;
}
.indicator{
    height: 100%;
    position: relative;
}
.indicator h1{
    position: absolute;
    transform: translate(-50%,-100%);
    top: 50%;
    left: 50%;
    color: #fff
}
#visual{
    fill: #80caf5;
}
.legend_box{
    width: 100%;
}
.legend{
    /* width: 50%; */
    float: left;
    font-size: 30px;
    /* text-align: center; */
}
.legend#before{
    width: 100%;
    display: block;
}
.legend#after{
    width: 0%;
    display: none;
}
</style>
<script>
export default{
    data(){
        return{
            min: 29677,
            max: 108300,
        }
    },
    methods: {
        getRatio(el){
            var par = el.parentNode;
            return(el.scrollTop || par.scrollTop) / (par.scrollHeight - par.clientHeight);
        },
        scrollAnimation(){
            var circle = document.getElementById("visual");
            var ratio = this.getRatio(document.body);
            var newVal = (this.max - this.min) * ratio + this.min;
            document.querySelector(".indicator h1").innerHTML = newVal.toFixed();
            circle.setAttribute("r",200*ratio+100);

            var legbf = document.getElementById("before");
            var legaf = document.getElementById("after");

            legbf.style.width = -100 *ratio + 100+'%';
            legbf.style.opacity = 1 - ( 1.25 * ratio - 0.125);
            legaf.style.width = 100 * ratio +'%';
            legaf.style.opacity = 1.25 * ratio - 0.125;
            this.displayChange(legbf);
            this.displayChange(legaf);
        },
        displayChange(el){
            if(el.style.opacity == -0.125){
                el.style.display = "none";
            } else {
                el.style.display = "block";
            }
        },
    },
    created(){
        document.addEventListener("scroll", this.scrollAnimation);
    }
}
</script>