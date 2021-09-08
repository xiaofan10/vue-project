<template>
    <div class="F-slider-wrap">
        {{cur}}
        <div class="F-slider" @mouseenter="stopPlay()" @mouseleave="autoPlay()">
            <div
                ref="scrollLine"
                class="F-slider-box"
                :data-i="`translate3d(${-cur * width},0,0)`"
            >
                <img
                    v-for="(item, index) in imgs"
                    :key="`${item}-${index}`"
                    :class="{'F-slider-img': true, 'F-animate': isAnimate}"
                    :style="[cur == index ? showCss : hideCss, {'width': `${width}px`, 'height': `${height}px`}]"
                    :src="item"
                    alt=""
                />
            </div>
            <div class="F-slider-direction">
                <span class="F-direction-button" @click="prev()"> &lt; </span>
                <span class="F-direction-button" @click="next()"> &gt; </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Slider',
        props: {
            isAnimate: Boolean,
            src: String
        },
        data() {
            return {
                timer: null,
                cur: 0,
                width: 400,
                height: 300,
                imgs: [
                    require('../../assets/img/1.jpeg'),
                    require('../../assets/img/2.jpeg'),
                    require('../../assets/img/3.jpeg'),
                    require('../../assets/img/1.jpeg'),
                ],
                isFirst: true,
                showCss: 'z-index: 10;opacity: 1',
                hideCss: 'z-index: 9;opacity: 0',
                // position: `translate3d(${-this.cur * this.width},0,0)`
            }
        },
        mounted() {
          this.autoPlay()
            this.$refs.scrollLine.addEventListener('webkitTransitionEnd',  () => {
                if(this.cur == this.imgs.length - 1) {
                    // this.$refs.scrollLine.style = `width:${this.width * this.imgs.length}px; transform: translate3d(0, 0, 0);transition-duration: 0s;`
                    this.cur = 0
                }
            })
        },
        computed: {
          position () {
              return -this.cur * this.width
          }
        },
        methods: {
            calPosition() {
                // let prev,
                //     cur,
                //     next;
                // prev = - cur * this.width;
                // cur = 0;
                // next = cur * this.width
            },
            autoPlay() {
                if(!this.timer) {
                    this.timer = setInterval(() => {
                        console.log(new Date(),this.cur)
                        this.cur = this.cur + 1 == this.imgs.length  ? 0 : this.cur + 1
                        this.$nextTick(() => {
                            this.$refs.scrollLine.style = `width:${this.width * this.imgs.length}px; transform: translate3d(0, 0, 0);`

                        })
                        this.$refs.scrollLine.style = `width:${this.width * this.imgs.length}px; transform: translate3d(${this.position}px, 0, 0);transition-duration: .3s;`

                        // this.isFirst = !this.isFirst
                    }, 3000)
                }
            },
            prev() {
                this.cur = this.cur - 1
                this.$refs.scrollLine.style = `width:${this.width * this.imgs.length}px; transform: translate3d(${this.position}px, 0, 0);transition-duration: .3s;`
            },
            next() {
                this.cur = this.cur + 1 == this.imgs.length  ? 0 : this.cur + 1
                this.$refs.scrollLine.style = `width:${this.width * this.imgs.length}px; transform: translate3d(${this.position}px, 0, 0);transition-duration: .3s;`
            },
            stopPlay() {
                if(this.timer) {
                    clearInterval(this.timer)
                    this.timer = null
                }
            },
        },
        destroyed() {
            this.$refs.scrollLine.removeEventListener('webkitTransitionEnd')
        }
    }
</script>

<style scoped>
    .F-slider-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        background: #f00;
    }

    .F-slider {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        backface-visibility: hidden;
    }

    .F-slider-box {
        position: absolute;
        transform: translate3d(0,0,0);
        left: 0;
    }

    .F-slider-img {
        /*position: absolute;*/
        float: left;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .F-animate {
        transition: all ease-in .5s;
    }

    .F-hide {

    }

    .F-show {

    }

    .F-slider-direction {
        position: absolute;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        display: flex;
        justify-content: space-between;
        width: 100%;
        z-index: 5;
    }

    .F-direction-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        font-size: 30px;
        font-weight: bold;
        background: rgba(225, 225, 225, .7);
        cursor: pointer;
    }

</style>