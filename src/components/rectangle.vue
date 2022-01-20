<template>

<div class="wrap">
    <div class="container">
        <!-- <transition name="outing"> -->
        <svg class="rectangle" viewBox="0 0 265.5738 265.5738">
            <rect class="cls-1" width="265.5738" height="265.5738" />
        </svg>
        <!-- </transition> -->
    </div>
    <!-- <button  @click="enhance = !enhance">Enhance</button>
    <div>
        <svg class="rectangle" viewBox="0 0 265.5738 265.5738">
            <rect class="cls-1" width="265.5738" height="265.5738"  v-bind:class="{'cls-1':true, 'cls-2':enhance}" />
        </svg>
    </div> -->
</div>

</template>

<script>
export default{
    data(){
        return{
            enhance: false,
        }
    }
}
</script>

<style scoped>

.wrap{
  position: relative;
  padding: 50px;
}

.container{
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
    margin: auto;
    height: 100px;
    width: 100px;
}

.cls-1{
    /* fill: #7f7f7f; */
    transition: fill .5s ease-in-out;
}

/* .cls-1:hover{
    fill: red;
} */

.cls-2{
    fill: blue;
}

</style>