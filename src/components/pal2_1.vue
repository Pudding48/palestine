<template>
<div id="section">
    <div id="pointer">
        <router-link to="/">&lt;</router-link>
    </div>
    <div class="fix">
            <div class="text_box">
                <h1>募る不信</h1>
                <p>国連分割案に対し、アラブ人側は断固拒否した。
                <br>多くのアラブ人はこの分割案をサイクスピコ協定と同様に捉え、民族自決に反するとして分割案に関して交渉は行わないとした。
                <br>事実、分割案はユダヤ人はなるべくユダヤ人国家に含むよう描かれたため多くのアラブ人がユダヤ人国家側に含まれることとなっていた。
                </p>
            </div>
            <div id="title_wrap">
                <p>地区ごと</p>
                <div class="map_title">人口分布</div>
                <p>1946</p>
                <label class="check_label"><input type="checkbox" id="border" @change="check">分割ライン</label>
            </div>
        <svg class="pal_map" viewBox="0 0 390.9882 780.0037" >
            <defs>
                <pattern id="stripes" width="28.4495" height="261.3334" patternTransform="translate(-14.0644 1508.6268) scale(0.8343)" patternUnits="userSpaceOnUse" viewBox="0 0 28.45 261.333">
                    <rect class="cls-1" width="28.4495" height="261.3334"/>
                    <rect class="cls-2" width="14.2248" height="261.3333"/>
                    <rect class="cls-3" x="14.2248" width="14.2248" height="261.3333"/>
                </pattern>
            </defs>
            <g id="レイヤー_1"  @mousemove="mouseOverEffect" @mouseout="mouseOffEffect">
                <polygon class="pal_lev3" id="BER" points="241.741 625.723 229.437 625.723 221.425 633.736 209.12 633.736 191.236 615.851 191.236 603.404 181.722 593.889 172.207 593.889 164.66 586.342 164.195 534.585 150.317 534.585 143.879 541.024 129.285 541.024 129.285 574.932 109.97 574.932 96.95 587.952 48.019 587.952 48.019 601.687 33.426 616.281 48.019 616.281 48.019 631.423 30.254 631.423 12.457 649.219 83.847 827.991 83.847 866.002 90.272 872.427 90.272 894.374 106.258 910.361 177.113 1134.845 183.412 1178.943 195.402 1166.953 204.242 1166.953 204.242 1144.092 212.675 1135.658 212.675 1105.379 223.039 1095.015 223.039 1077.945 229.542 1071.442 229.542 1037.302 240.312 1026.532 236.147 1022.366 252.505 1006.007 252.505 984.263 247.425 979.183 247.425 936.508 262.056 921.876 262.056 902.368 251.113 891.424 262.116 880.42 262.116 841.869 282.497 821.488 282.497 796.003 298.468 780.032 298.468 753.041 309.202 742.306 313.745 742.306 319.507 736.544 319.507 704.987 331.031 693.463 331.031 662.693 315.523 647.184 241.741 647.184 241.741 625.723"/><polygon class="pal_lev2"id="SAF" points="377.482 13.506 364.477 0.5 353.909 0.5 353.909 43.582 341.717 55.774 341.717 65.529 328.304 65.529 325.751 68.082 319.363 74.47 305.138 74.47 302.073 71.405 293.82 79.658 293.82 89.006 318.81 89.006 318.81 120.1 379.921 120.1 379.921 104.574 379.921 99.262 370.37 89.711 385.611 74.47 385.611 51.71 390.488 46.833 390.488 13.506 377.482 13.506"/><polygon class="pal_lev3" id="ACR" points="293.82 89.006 293.82 79.658 302.073 71.405 293.352 62.684 235.639 62.684 234.511 95.975 233.798 117.022 238.021 121.245 238.021 140.131 257.844 140.131 267.208 140.131 284.949 140.131 284.949 157.872 293.82 157.872 302.404 149.287 312.42 149.287 312.42 144.208 312.42 120.1 318.81 120.1 318.81 89.006 293.82 89.006"/><polygon class="pal_lev1" id="TIB" points="379.921 172.42 379.921 120.1 318.81 120.1 312.42 120.1 312.42 144.208 312.42 149.287 312.42 179.619 317.991 185.191 320.861 188.06 320.861 201.652 372.229 201.652 379.687 194.195 379.691 194.137 368.947 183.393 369.367 182.974 379.921 172.42"/><polygon class="pal_lev2" id="NAZ" points="317.991 185.191 312.42 179.619 312.42 149.287 302.404 149.287 293.82 157.872 284.949 157.872 284.949 140.131 267.208 140.131 267.208 173.324 246.033 194.499 246.033 206.088 256.192 206.088 257.877 207.774 272.645 222.541 304.121 222.541 316.712 222.541 316.712 222.381 316.712 201.652 320.861 201.652 320.861 188.06 317.991 185.191"/><polygon class="pal_lev1" id="HAF" points="257.877 207.774 256.192 206.088 246.033 206.088 246.033 194.499 267.208 173.324 267.208 140.131 257.844 140.131 238.021 140.131 238.021 121.245 233.798 117.022 233.064 138.686 220.872 150.879 214.64 144.647 198.382 144.647 179.696 264.238 176.23 286.422 217.618 263.283 226.003 258.596 237.735 258.596 237.735 222.541 272.645 222.541 257.877 207.774"/><polygon class="pal_lev3" id="JEN" points="315.496 243.215 304.121 243.215 304.121 222.541 272.645 222.541 237.735 222.541 237.735 258.596 226.003 258.596 226.003 265.845 241.615 281.456 241.615 298.275 244.561 301.221 249.292 305.952 249.292 307.129 259.561 307.129 264.633 312.201 288.288 312.201 331.162 269.326 331.162 262.234 331.162 258.882 315.496 243.215"/><polygon class="pal_lev1" id="BEI" points="362.038 238.261 362.038 211.843 372.229 201.652 320.861 201.652 316.712 201.652 316.712 222.381 316.712 222.541 304.121 222.541 304.121 243.215 315.496 243.215 331.162 258.882 331.162 262.234 331.162 269.326 339.604 277.768 362.241 277.768 362.241 266.5 362.241 251.064 355.738 244.561 362.038 238.261"/><polygon class="pal_lev2" id="TUK" points="244.561 301.221 241.615 298.275 241.615 281.456 226.003 265.845 226.003 258.596 217.618 263.283 176.23 286.422 173.997 300.716 163.053 332.994 160.275 341.188 170.204 351.117 184.13 351.117 194.05 361.037 194.05 368.852 196.678 369.033 207.533 369.779 209.693 369.927 209.693 363.898 227.5 363.898 227.5 351.374 249.292 329.582 249.292 307.129 249.292 305.952 244.561 301.221"/><polygon class="isr_lev1" id="JAF" points="207.533 369.779 196.678 369.033 194.05 368.852 194.05 361.037 184.13 351.117 170.204 351.117 160.275 341.188 148.781 375.088 137.441 408.537 144.451 408.537 153.131 417.217 162.955 417.217 162.955 425.515 170.586 425.515 170.586 414.854 191.951 414.854 191.951 394.421 186.992 389.461 186.992 376.107 194.05 376.107 209.693 376.107 209.693 369.927 207.533 369.779"/><polygon class="pal_lev3" id="RAA" points="316.33 442.684 316.33 413.306 316.33 402.1 301.974 402.1 294.692 394.818 286.952 387.079 236.116 387.079 231.44 391.755 219.422 391.755 219.422 410.063 232.394 423.035 232.394 431.754 232.394 434.291 219.326 447.358 230.2 458.232 238.498 448.121 247.941 448.121 252.615 452.795 259.673 452.795 259.673 446.309 292.294 446.309 303.74 457.755 320.146 457.755 320.146 446.5 316.33 442.684"/><polygon class="pal_lev3" id="NAB" points="339.604 277.768 331.162 269.326 288.288 312.201 264.633 312.201 259.561 307.129 249.292 307.129 249.292 329.582 227.5 351.374 227.5 363.898 209.693 363.898 209.693 369.927 209.693 376.107 209.693 391.755 216.146 391.755 219.422 391.755 231.44 391.755 236.116 387.079 286.952 387.079 294.692 394.818 301.974 402.1 316.33 402.1 316.33 413.306 324.152 413.306 330.638 406.82 353.469 406.82 353.469 386.134 353.469 357.176 362.241 348.404 362.241 334.179 362.241 277.768 339.604 277.768"/><polygon class="pal_lev3" id="HEB" points="313.842 622.913 335.959 600.797 335.959 586.092 311.99 586.092 293.534 567.635 300.115 561.054 300.115 543.456 280.228 543.456 270.356 533.584 270.356 526.716 249.467 526.716 249.467 516.844 240.167 516.844 217.991 494.668 191.154 494.668 191.154 483.446 184.511 476.803 180.887 476.803 180.887 483.889 170.109 494.668 166.484 494.668 166.484 508.975 152.535 522.925 164.195 534.585 164.66 586.342 172.207 593.889 181.722 593.889 191.236 603.404 191.236 615.851 209.12 633.736 221.425 633.736 229.437 625.723 241.741 625.723 241.741 647.184 315.523 647.184 313.842 645.504 313.842 622.913"/><polygon class="pal_lev1" id="JER" points="347.457 435.16 353.469 429.148 353.469 406.82 330.638 406.82 324.152 413.306 316.33 413.306 316.33 442.684 320.146 446.5 320.146 457.755 303.74 457.755 292.294 446.309 259.673 446.309 259.673 452.795 252.615 452.795 247.941 448.121 238.498 448.121 230.2 458.232 219.04 469.391 208.759 469.391 207.976 469.391 200.564 476.803 184.511 476.803 191.154 483.446 191.154 494.668 217.991 494.668 240.167 516.844 249.467 516.844 249.467 526.716 270.356 526.716 270.356 533.584 280.228 543.456 300.115 543.456 300.115 561.054 293.534 567.635 311.99 586.092 335.959 586.092 335.959 553.583 338.147 551.395 343.884 545.658 343.884 511.247 354.451 500.68 354.451 492.009 354.451 442.154 347.457 435.16"/><polygon class="pal_lev3" id="GAZ" points="166.484 494.668 161.811 494.668 161.811 482.173 158.67 479.032 152.177 472.539 142.353 472.539 122.479 452.666 120.348 458.953 64.328 547.825 64.328 555.751 0.587 619.492 12.457 649.219 30.254 631.423 48.019 631.423 48.019 616.281 33.426 616.281 48.019 601.687 48.019 587.952 96.95 587.952 109.97 574.932 129.285 574.932 129.285 541.024 143.879 541.024 150.317 534.585 164.195 534.585 152.535 522.925 166.484 508.975 166.484 494.668"/><polygon class="pal_lev2" id="RAM" points="219.422 410.063 219.422 391.755 216.146 391.755 209.693 391.755 209.693 376.107 194.05 376.107 186.992 376.107 186.992 389.461 191.951 394.421 191.951 414.854 170.586 414.854 170.586 425.515 162.955 425.515 162.955 417.217 153.131 417.217 144.451 408.537 137.441 408.537 125.382 444.106 122.479 452.666 142.353 472.539 152.177 472.539 158.67 479.032 161.811 482.173 161.811 494.668 166.484 494.668 170.109 494.668 180.887 483.889 180.887 476.803 184.511 476.803 200.564 476.803 207.976 469.391 208.759 469.391 219.04 469.391 230.2 458.232 219.326 447.358 232.394 434.291 232.394 431.754 232.394 423.035 219.422 410.063"/>
            </g>
            <g id="レイヤー_2">
                <path class="border" d="M251.9337,119.8266H265.817v23.5589l7.3047,7.3047-10.1455,10.1455s28.9485,28.1369,28.9485,28.9484v18.8031l-50.3893,50.3892V272.842l-11.532,11.532v46.0944L213.686,346.7856v58.3535l-24.4591,24.4592v20.3163h24.2989v8.6575l-12.4073,12.4073H180.5948l-12.464,12.464H156.5162l-17.7127-17.7127-.3922,1.1568M380.0635,294.35H359.425V270.9471l-35.4406-35.4406H300.041V196.9536h33.2773V157.3863H316.0709l14.8124-14.8125V125.2589h13.0314V96.4005h15.6446V73.8557M108.3654,901.875l31.7827-32.884V851.9466h24.3492v-33.683h22.8612V805.548L158.6805,776.87H128.7852L99.5661,700.9816H83.3333L54.25,649.8483V629.5575H67.2358V601.9617l33.5478-33.5478H112.25V550.6616l15.2544-15.2544V519.5079l31.1757-31.1757,7.44,13.7979-18.6677,18.6676v34.0889l32.06,32.06v58.3027h127.698V600.88l25.7019-25.7019h20.8948m-38.21-79.4506H305.1364v14.97H293.052l-8.0262,8.0262H277.18V494.4647l-5.05-5.05-1.4429-12.4451h9.0182l8.2066-8.2066h27.6859Z" transform="translate(-17.7281 -8.148)"/>
            </g>
        </svg>
        <svg id="ratio_legend" viewBox="0 0 275 537">
            <circle class="isr_lev3" cx="27.9321" cy="74.6554" r="27.4321"/><circle class="pal_lev3" cx="27.9321" cy="459.8863" r="27.4321"/><circle class="pal_lev2" cx="27.9321" cy="396.5903" r="27.4321"/><circle class="pal_lev1" cx="27.9321" cy="333.2943" r="27.4321"/><circle class="lev0" cx="27.9321" cy="267.2708" r="27.4321"/><circle class="isr_lev1" cx="27.9321" cy="201.2474" r="27.4321"/><circle class="isr_lev2" cx="27.9321" cy="137.9514" r="27.4321"/><text class="leg_text" transform="translate(74.2394 88.9816)">90%-</text><text class="leg_text" transform="translate(74.2394 475.2023)">90%-</text><text class="leg_text" transform="translate(74.2394 218.5285)">50%-</text><text class="leg_text" transform="translate(74.2394 280.7507)">両<tspan class="leg_text" x="29.8096" y="0">者</tspan><tspan x="67.0713" y="0">50％以下</tspan></text><text class="leg_text" transform="translate(0.5004 26.2323)">ユダヤ人</text><text class="leg_text" transform="translate(0.5004 531.6272)">アラブ人</text><text class="leg_text" transform="translate(74.2394 351.3068)">50%-</text><text class="leg_text" transform="translate(74.2394 154.0402)">75%-</text><text class="leg_text" transform="translate(74.2394 409.9074)">75%-</text>
        </svg>

        <div id="icon_pop">
            <h1></h1>
            <div class="row">
                <div class="banner" id="pal_banner">
                </div>
                <p></p>
            </div>
            <div class="row">
                <div class="banner" id="jew_banner">
                </div>
                <p></p>
            </div>
        </div>
    </div>

    <div id="logging"></div>
    <Pal2></Pal2>
</div>
</template>
<style scoped>
#section{
    height: 200vh;
}
.fix{
    margin-top: 0;
    position: relative;
    display: block;
    height: 100vh;
}
#pointer{
  position: sticky;
  float: left;
  top: 50vh;
  width: 10%;
  z-index: 10;
}
a{
  text-decoration: none;
  font-size: 500%;
  color: #0e8136;
  height: 100%;
  /* background-color: red; */
}
.text_box{
  position: absolute;
  top: 17vh;
  left: 19vw;
  width: 25%;
}
.text_box h1{
  font-size: 80px;
  border-bottom: 3px solid #0e8316;
  margin-bottom: 25px;
}

.pal_map{
    position: absolute;
    height: 75%;
    top: 15vh;
    right: 25vw;;
}
.pal_lev3,.pal_lev2,.pal_lev1,.isr_lev1,.isr_lev2,.isr_lev3,.lev0,.border{
    stroke-miterlimit:10;
    stroke: #fff;
}
.pal_lev3{
    fill:#0e8516;
}
 .pal_lev2{
    fill:#38ad3b;
}
.pal_lev1, .cls-3{
    fill:#aaf280;
}
.lev0{
    fill:url(#stripes);
}
.isr_lev1, .cls-2{
    fill:#80caf5;
} 
.isr_lev2{
    fill:#49a0c7;
}
.isr_lev3{
    fill:#0071ba;
}
.border{
    stroke:red;
    stroke-width:4px;
    fill: none;
    visibility: hidden;
}
.cls-1{
    fill:none;
}
.leg_text{
    font-size:29.8097px;
    fill: #e1e1e1;
    font-family:VDL-V7Gothic-Bold-90ms-RKSJ-H, VDL-V7Gothic;
}
#ratio_legend{
    position: absolute;
    height: 400px;
    top: 45vh;
    right: 10vw;
}
#icon_pop{
    position: absolute;
    height: 250px;
    width: 300px;
    background-color: #eee;
    border: 3px solid #333;
    border-radius: 15px;
    transform: translate(33%,-45%);
    display: none;
    font-size: 25px;
    color: #333;
    margin-left: 49%;
}
#icon_pop .row{
    position: relative;
    margin: 0 10px;
    height: 50px;
}
#icon_pop .row p{
    position: relative;
    text-align: left;
    margin: 0 10px;
    padding: 5px;
    color: #333;
    z-index: 2;
}
#icon_pop .row .banner{
    position: absolute;
    top: 0;
    height: 80%;
    z-index: 1;
    transition: width .3s ease-in-out;
}
#pal_banner{
    background-color: #0e8316;
    opacity: 0.5;
    width: 100%;
}
#jew_banner{
    background-color: #0071be;
    opacity: 0.5;
    width: 100%;
}
.map_title{
    font-size: 100px;
}
#title_wrap{
    position: absolute;
    top: 60vh;
    left: 23vw;
}
#title_wrap p{
    font-size: 25px;
    margin: -25px;
    text-align: left;
    margin-left: 8px;
}
#border{
    height: 30px;
    width: 30px;
    margin-top: 50px;
}
.check_label{
    font-size: 25px;
}
</style>
<script>
import Pal2 from './pal2_2.vue'
export default{
    components: {
        Pal2,
    },
    data(){
        return{
            isChecked: false,
            districts: [
                {id: 'BER', name:'ベエルシェバ', pal: 99, jew: 1},
                {id: 'SAF', name:'ツファット', pal: 87, jew: 13},
                {id: 'ACR', name:'アッコ', pal: 96, jew: 4},
                {id: 'TIB', name:'ティベリア', pal: 67, jew: 33},
                {id: 'NAZ', name:'ナザレ', pal: 84, jew: 16},
                {id: 'HAF', name:'ハイファ', pal: 53, jew: 47},
                {id: 'JEN', name:'ジェニン', pal: 100, jew: 0},
                {id: 'BEI', name:'ベトシェアン', pal: 70, jew: 30},
                {id: 'TUK', name:'トゥルカーム', pal: 83, jew: 17},
                {id: 'JAF', name:'ヤッファ', pal: 29, jew: 71},
                {id: 'RAA', name:'ラマッラ', pal: 100, jew: 0},
                {id: 'NAB', name:'ナーブルス', pal: 100, jew: 0},
                {id: 'HEB', name:'ヘブロン', pal: 99.9, jew: 0.1},
                {id: 'JER', name:'エルサレム', pal: 62, jew: 38},
                {id: 'GAZ', name:'ガザ', pal: 98, jew: 2},
                {id: 'RAM', name:'ラムラ', pal: 78, jew: 22},
            ]
        }
    },
    methods: {
        check(){
            this.isChecked = !this.isChecked;
            var obj = document.getElementsByClassName("border");
            // console.log(this.isChecked);
            if(this.isChecked == true){
                for(var i = 0; i < obj.length; i++){
                    obj[i].style.visibility="visible";
                }
            } else {
                for(var i = 0; i < obj.length; i++){
                    obj[i].style.visibility="hidden";
                }
            }
        },
        mouseOverEffect(event){
            var icon = document.getElementById("icon_pop");
            // console.log(icon.style);
            icon.style.display = "block";
            var tmp = this.districts.filter(element => {
                return element.id == event.target.id;
            });
            if(tmp.length == 1){
                var width = event.offsetX;
                icon.style.left = width+'px';
                icon.style.top = event.offsetY+'px';

                icon.children[0].innerHTML = tmp[0].name
                icon.children[1].children[1].innerHTML = 'アラブ人 '+tmp[0].pal+'%';
                icon.children[2].children[1].innerHTML = 'ユダヤ人 '+tmp[0].jew+'%';

                var pal_ban = document.getElementById("pal_banner");
                var jew_ban = document.getElementById("jew_banner");
                pal_ban.style.width = tmp[0].pal+'%';
                jew_ban.style.width = tmp[0].jew+'%';

            } else {
                document.getElementById("logging").innerHTML = "error in ID detected "+tmp.length;
            }
            // console.log(this.districts[0].pal);
        },
        mouseOffEffect(){
            var icon = document.getElementById("icon_pop");
            icon.style.display = "none";
        }
    }
}
</script>