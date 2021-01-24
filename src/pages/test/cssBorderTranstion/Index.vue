<template>
    <section class="css-border-transtion">
        <div>
            <div class="css-1"></div>
        </div>
        <div>
            <div class="css-2"></div>
        </div>
        <div>
            <div class="css-3"></div>
        </div>
        <div>
            <div class="css-4"></div>
        </div>
        <div>
            <!-- <div class="conic"></div> -->
            <div class="conic conic-demo"></div>
        </div>
        <div>
            <div class="css-6">hello</div>
        </div>
        <div>
            <div class="css-7"></div>
        </div>
        <div>
            <div class="skulls"></div>
        </div>
        <div>
            <div class="border-image-clip-path"></div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {};
    },
    created() {},
    methods: {},
    components: {},
};
</script>

<style lang="less" scoped>
.css-border-transtion {
    background-color: #fff;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1px;
    & > div {
        width: 20%;
        height: 200px;
        background: #fff;
        border: 1px solid #f0f0f0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .css-1 {
        position: relative;
        width: 140px;
        height: 64px;
        margin: auto;
        border: 1px solid #03a9f3;
        cursor: pointer;

        &::before,
        &::after {
            content: "";
            position: absolute;
            width: 20px;
            height: 20px;
            transition: 0.3s ease-in-out;
        }
        &::before {
            top: -5px;
            left: -5px;
            border-top: 1px solid #03a9f3;
            border-left: 1px solid #03a9f3;
        }

        &::after {
            right: -5px;
            bottom: -5px;
            border-bottom: 1px solid #03a9f3;
            border-right: 1px solid #03a9f3;
        }

        &:hover::before,
        &:hover::after {
            width: calc(100% + 9px);
            height: calc(100% + 9px);
        }
    }

    .css-2 {
        position: relative;
        width: 140px;
        height: 64px;
        margin: auto;
        cursor: pointer;
        background: linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
            linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
            linear-gradient(0deg, #333 50%, transparent 0) repeat-y,
            linear-gradient(0deg, #333 50%, transparent 0) repeat-y;
        background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
        background-position: 0 0, 0 100%, 0 0, 100% 0;

        &:hover {
            animation: linearGradientMove 0.3s infinite linear;
        }

        @keyframes linearGradientMove {
            100% {
                background-position: 4px 0, -4px 100%, 0 -4px, 100% 4px;
            }
        }
    }

    .css-3 {
        position: relative;
        width: 140px;
        height: 64px;
        margin: auto;
        cursor: pointer;
        border: 1px solid #333;
        &:hover {
            border: none;
            background: linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
                linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
                linear-gradient(0deg, #333 50%, transparent 0) repeat-y,
                linear-gradient(0deg, #333 50%, transparent 0) repeat-y;
            background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
            background-position: 0 0, 0 100%, 0 0, 100% 0;
            animation: linearGradientMove 0.3s infinite linear;
        }
        @keyframes linearGradientMove {
            100% {
                background-position: 4px 0, -4px 100%, 0 -4px, 100% 4px;
            }
        }
    }

    @keyframes rotate {
        100% {
            transform: rotate(1turn);
        }
    }

    .css-4 {
        position: relative;
        z-index: 0;
        width: 140px;
        height: 100px;
        border-radius: 10px;
        overflow: hidden;
        padding: 2rem;

        &::before {
            content: "";
            position: absolute;
            z-index: -2;
            left: -50%;
            top: -50%;
            width: 200%;
            height: 200%;
            background-color: #399953;
            background-repeat: no-repeat;
            background-size: 50% 50%, 50% 50%;
            background-position: 0 0, 100% 0, 100% 100%, 0 100%;
            background-image: linear-gradient(#399953, #399953),
                linear-gradient(#fbb300, #fbb300),
                linear-gradient(#d53e33, #d53e33),
                linear-gradient(#377af5, #377af5);
            animation: rotate 4s linear infinite;
        }

        &::after {
            content: "";
            position: absolute;
            z-index: -1;
            left: 6px;
            top: 6px;
            width: calc(100% - 12px);
            height: calc(100% - 12px);
            background: white;
            border-radius: 5px;
            animation: opacityChange 3s infinite alternate;
        }
    }

    @keyframes opacityChange {
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0.5;
        }
    }

    @keyframes rotate {
        100% {
            transform: rotate(1turn);
        }
    }

    .conic {
        position: relative;
        z-index: 0;
        width: 200px;
        height: 120px;
        margin: 20px;
        border-radius: 10px;
        overflow: hidden;
        padding: 2rem;

        &::before {
            content: "";
            position: absolute;
            z-index: -2;
            left: -50%;
            top: -50%;
            width: 200%;
            height: 200%;
            background-color: #1a232a;
            background-repeat: no-repeat;
            background-position: 0 0;
            background-image: conic-gradient(
                transparent,
                rgba(168, 239, 255, 1),
                transparent 30%
            );
            animation: rotate 4s linear infinite;
        }

        &::after {
            content: "";
            position: absolute;
            z-index: -1;
            left: 6px;
            top: 6px;
            width: calc(100% - 12px);
            height: calc(100% - 12px);
            background: #000;
            border-radius: 5px;
        }
    }

    .conic-demo::after {
        animation: opacityChange 5s infinite linear;
    }

    @keyframes opacityChange {
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }

    .css-6 {
        position: relative;
        margin: auto;
        width: 120px;
        line-height: 64px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        border: 2px solid gold;
        border-radius: 10px;
        background: gold;
        transition: all 0.3s;
        cursor: pointer;

        &:hover {
            filter: contrast(1.1);
        }

        &:active {
            filter: contrast(0.9);
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            border: 2px solid gold;
            transition: all 0.5s;
            animation: clippath 3s infinite linear;
            border-radius: 10px;
        }

        &::after {
            animation: clippath 3s infinite -1.5s linear;
        }
    }

    @keyframes clippath {
        0%,
        100% {
            clip-path: inset(0 0 98% 0);
        }

        25% {
            clip-path: inset(0 98% 0 0);
        }
        50% {
            clip-path: inset(98% 0 0 0);
        }
        75% {
            clip-path: inset(0 0 0 98%);
        }
    }

    .bg::before {
        background: rgba(255, 215, 0, 0.5);
    }

    .css-7 {
        position: relative;
        margin: auto;
        width: 140px;
        height: 64px;
        display: flex;
        align-items: center;
        text-align: center;
        overflow: hidden;

        &::after {
            content: "Hover Me";
            position: absolute;
            top: 4px;
            bottom: 4px;
            right: 4px;
            left: 4px;
            line-height: 55px;
            font-size: 24px;
            background: #fff;
            // border-radius: 50%;
            border: 2px solid yellowgreen;
            cursor: pointer;
            color: yellowgreen;
        }

        &::before {
            content: "";
            position: absolute;
            top: 0px;
            bottom: 0px;
            right: -20px;
            left: 0px;
            background: green;
            //border-radius: 50%;
            transform: rotateZ(-90deg) translate(-100%, -100%);
            transform-origin: top left;
            transition: transform 0.3s;
            transition-timing-function: linear;
        }

        &:hover {
            filter: contrast(1.2);
        }

        &:hover::before {
            transform: rotateZ(0deg) translate(0%, -0%);
        }
    }

    .css-7:nth-child(2) {
        overflow: unset;

        &::after {
            content: "";
        }
    }

    .css-7:nth-child(1):hover ~ div:nth-child(2)::before {
        transform: rotateZ(0deg) translate(0%, -0%);
    }

    .skulls {
        position: relative;
        width: 140px;
        height: 64px;
        margin: 0 auto;
        border: 24px solid;
        border-image: url(https://skullctf.com/images/skull-border.svg);
        border-image-slice: 32;
        border-image-repeat: round;
    }
    .border-image-clip-path {
        width: 140px;
        height: 64px;
        margin: auto;
        border: 10px solid;
        border-image: linear-gradient(45deg, gold, deeppink) 1;
        clip-path: inset(0px round 10px);
        animation: huerotate 6s infinite linear;
        filter: hue-rotate(360deg);
    }

    @keyframes huerotate {
        0% {
            filter: hue-rotate(0deg);
        }
        100% {
            filter: hue-rorate(360deg);
        }
    }
}
</style>
