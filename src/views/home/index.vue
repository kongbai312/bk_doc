<template>
  <div class="homeContainer">
    <div class="homeBox">
      <div class="title">Bkebi Genshin Cheat</div>
      <div class="btnBox">
        <div class="btnItem" @click="btnClick('release')">
          <p class="btnItemText btnItemLeft">RELEASE</p>
          <p class="btnItemText btnItemRight1">V1.0.3R</p>
        </div>
        <div class="btnItem" @click="btnClick('download')">
          <p class="btnItemText btnItemLeft">DOWNLOADS</p>
          <p class="btnItemText btnItemRight2">2.5K</p>
        </div>
        <div class="btnItem" @click="btnClick('discord')">
          <p class="btnItemText btnItemLeft">DISCORD</p>
          <p class="btnItemText btnItemRight3">985 ONLINE</p>
        </div>
      </div>
      <div class="downBox">
        <div class="downItem downItemDown" @click="btnClick('release')">立即获取  <i class="iconfont icon-xiazai"></i></div>
        <div class="downItem downItemDoc">文档 <i class="iconfont icon-shu"></i></div>
      </div>
      <a class="downArrow" @click="arrBtn">
        <div class="downArr"></div>
      </a>

    </div>
  </div>
  <div ref="docIntroduceRef" class="docIntroduce" :class="{darkThemeIntroduce:currTheme,darkThemeHeader:currTheme}">
    <div class="introHeader" :class="{darkThemeText:currTheme}">免费且功能强大</div>
    <div class="introMerit" :class="{darkThemeText:currTheme}">花费更少的时间与精力, 帮助您轻松完成工作, 改善稀烂的游戏体验, 痛苦号不再痛苦</div>
    <div class="introBox">
      <div class="introItem" v-for="introItem in introduceData" :key="introItem.title">
        <div class="introItemTitle">
          <i :class="introItem.icon"></i>
          <p :class="{darkThemeText:currTheme}">{{introItem.title}}</p>
        </div>
        <div class="introItemContent" :class="{darkThemeText:currTheme}">{{introItem.content}}</div>
      </div>
    </div>
  </div>

  <div class="interface" :class="{darkThemeIntroduce:currTheme}">
    <div class="interfaceHeader" :class="{darkThemeText:currTheme}">定制你喜欢的界面</div>
    <div class="interfaceContent" >
      <div class="interfaceContentItem">
        <div class="interfaceItemLeft" :class="{darkThemeText:currTheme}">
          <div class="interfaceItemLeftHeader">
            <i class="iconfont icon-yanliaotong" :class="{darkThemeText:currTheme}"></i>
            <p class="interfaceItemLeftHeaderText" :class="{darkThemeText:currTheme}">靛青</p>
          </div>
          <p>黑色占比 50%</p>
          <p>蓝色占比 45%</p>
          <p>灰色占比 5%</p>
        </div>
        <div class="interfaceItemRight">
          <img src="../../assets/images/dianqing.jpeg" alt="">
        </div>
      </div>
      <div class="interfaceContentItem">
        <div class="interfaceItemRight">
          <img src="../../assets/images/night.jpeg" alt="">
        </div>
        <div class="interfaceItemLeft">
          <div class="interfaceItemLeftHeader">
            <i class="iconfont icon-yueliang" :class="{darkThemeText:currTheme}"></i>
            <p class="interfaceItemLeftHeaderText" :class="{darkThemeText:currTheme}">夜晚</p>
          </div>
          <p>黑色占比 50%</p>
          <p>蓝色占比 40%</p>
          <p>灰色占比 10%</p>
        </div>
      </div>
      <div class="interfaceContentItem">
        <div class="interfaceItemLeft">
          <div class="interfaceItemLeftHeader" >
            <i class="iconfont icon-taiyang" :class="{darkThemeText:currTheme}"></i>
            <p class="interfaceItemLeftHeaderText" :class="{darkThemeText:currTheme}">日光</p>
          </div>
          <p>灰白色占比 50%</p>
          <p>白色占比 25%</p>
          <p>灰色占比 18%</p>
          <p>蓝色占比 7%</p>
        </div>
        <div class="interfaceItemRight">
          <img src="../../assets/images/morning.jpeg" alt="">
        </div>
      </div>
    </div>
  </div>

  <div class="bottomContainer" :class="{darkThemeFooter:currTheme}">
    <div class="bottomHeader">
      <el-switch
        size="large"
        v-model="switchValue"
        class="mb-2"
        style="--el-switch-on-color: #2C2C2C; --el-switch-off-color: #636363"
        active-text="白天"
        inactive-text="夜晚"
        :active-icon="Moon"
        :inactive-icon="Sunny"
        active-value="night"
        inactive-value="daytime"
        @change="switchChange"
      >
      </el-switch>
    </div>
    <div class="bottomMiddle">
      <div class="bottomMiddleItem">
        <p class="bottomMiddleItemHeader">链接</p>
        <p class="bottomMiddleItemcontent">
          <i class="iconfont icon-zhuye"></i>主页
        </p>
        <p class="bottomMiddleItemcontent">
          <i class="iconfont icon-bangzhu"></i>帮助
        </p>
      </div>
      <div class="bottomMiddleItem">
        <p class="bottomMiddleItemHeader">社区</p>
        <p class="bottomMiddleItemcontent">
          <i class="iconfont icon-zhuye"></i>Bkebi Discord
        </p>
      </div>
    </div>
    <div class="bottomBottom">
      <img class="bottomBottomLogo" src="../../assets/images/logo.svg" alt="">
      <p class="bottomBottomText">©2023 Bkebi Group.</p>
      <p class="bottomBottomText">All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
import { nextTick, reactive, ref } from 'vue'
import introduceJson from '@/assets/data/introduce.json'
import { Sunny, Moon } from '@element-plus/icons-vue'
export default {
  name: 'Home',
  setup () {
    // 介绍数据
    const introduceData = introduceJson
    // 介绍
    const docIntroduceRef = ref()
    // 滚动到指定位置
    const arrBtn = () => {
      nextTick(() => {
        docIntroduceRef.value.scrollIntoView()
      })
    }

    // 切换昼夜状态
    const switchValue = ref('daytime')
    // 当前主题 false 白天 true黑夜
    const currTheme = ref(false)
    const switchChange = (val) => {
      currTheme.value = (val !== 'daytime')
    }

    const btnUrl = reactive({
      release: 'https://github.com/Bkebi-Group/Bkebi-GC-Release/releases/latest',
      download: 'https://github.com/Bkebi-Group/Bkebi-GC-Release/releases',
      discord: 'https://discord.gg/bkebi'
    })
    // 按钮点击
    const btnClick = (key) => {
      window.open(btnUrl[key], '_blank')
    }
    return {
      arrBtn,
      docIntroduceRef,
      introduceData,
      switchValue,
      Sunny,
      Moon,
      switchChange,
      currTheme,
      btnClick
    }
  }
}
</script>

<style lang="less" scoped>
  .homeContainer{
    width: 100%;
    height: 90vh;
    background-image: url('../../assets/images/background.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .homeBox{
      display: flex;
      flex-direction: column;
      .title{
        color: #fff;
        font-size: 0.42rem;
      }

      //中间的按钮盒子
      .btnBox{
        display: flex;
        .btnItem{
          display: flex;
          .btnItemText{
            color: #fff;
            padding: 5px 10px;
            font-size: 0.1rem;
            line-height: 0.2rem;
            letter-spacing: 1px;
            cursor: pointer;
          }
          .btnItemLeft{
            background-color: #555555;
          }
          .btnItemRight1{
            background-color: #007EC6;
            margin-right: 10px;
          }
          .btnItemRight2{
            background-color: #44CC11;
            margin-right: 10px;
          }
          .btnItemRight3{
            background-color: #8A2BE2;
          }
        }
      }

      //下面的按钮盒子
      .downBox{
        display: flex;
        margin-top: 0.2rem;
        .downItem{
          box-sizing: border-box;
          border-radius: 0.1rem;
          width: 180px;
          padding: 0.2rem 0.25rem;
          text-transform: uppercase;
          font-size: 0.14rem;
          background: 0 0;
          cursor: pointer;
          transition: box-shadow .4s, transform .2s, background .4s, color .4s;
          font-family: SimHei;
          text-align: center;
          font-weight: 700;
        }
        .downItemDown{
          color: #fea44c;
          box-shadow: inset 0 0 0 0.15em #fea44c, 0 2px 20px #563719;
          text-shadow: 0 2px 5px #563719;
        }
        .downItemDown:hover{
          color: #fff;
          background: #fea44c;
          box-shadow: 0 0 10px #fea44c;
          transform: translateY(2px)scaleY(.95);
        }
        .downItemDoc{
          margin-left: 0.1rem;
          text-shadow: 0 2px 5px rgb(0 0 0 / 25%);
          box-shadow: inset 0 -0.43em rgb(0 0 0 / 20%), 0 2px 20px #1b51ad;
          background: #367BF0;
          color: #fff;
        }
        .downItemDoc:hover{
          box-shadow: inset 0 -3px rgba(0, 0, 0, .2), 0 0 10px #367BF0;
          transform: translateY(2px)scaleY(.95);
        }
      }

      //箭头
      .downArrow{
        position: absolute;
        bottom: 70px;
        right: 50%;
        animation: bounce 1s cubic-bezier(.5, .05, 1, .5)infinite alternate;
        transform-origin: right bottom;
        .downArr{
          display: block;
          width: 15px;
          height: 15px;
          transform: rotate(45deg);
          border-right: 3px solid #fff;
          border-bottom: 3px solid #fff;
          margin: 0 0 3px 10px;
          cursor: pointer;
        }
      }

    }

  }

  // 介绍页
  .docIntroduce{
    box-sizing: border-box;
    padding: 1rem 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F9F9F9;
    .introHeader{
      font-size: 0.45rem;
      font-weight: 700;
      margin-bottom: 0.2rem;
    }
    .introMerit{
      font-size: 0.26rem;
      max-width: 7rem;
      text-align: center;
      line-height: normal;
    }
    .introBox{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .introItem{
        box-sizing: border-box;
        padding: 0.1rem 0.2rem;
        width: 28%;
        .introItemTitle{
          display: flex;
          font-size: 0.2rem;
          color: #242738;
          align-items: center;
          i{
            font-size: 0.3rem;
            color: #367BF0;
            margin-right: 0.1rem;
          }
        }
        .introItemContent{
          font-size: 0.15rem;
          color: #636363;
          text-align: justify;
          line-height: 0.26rem;
        }
      }
    }
  }

  //界面
  .interface{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0.8rem;
    .interfaceHeader{
      font-weight: 700;
      font-size: 0.45rem;
      color: #242738;
    }
    .interfaceContent{
      width: 100%;
      .interfaceContentItem{
        margin-top: 0.7rem;
        display: flex;
        justify-content: space-around;
        // 左
        .interfaceItemLeft{
          .interfaceItemLeftHeader{
            display: flex;
            align-items: center;
            i{
              font-size: 0.26rem;
              margin-right: 0.1rem;
            }
            .interfaceItemLeftHeaderText{
              font-size: 0.26rem;
              font-weight: 700;
              color: #242738;
            }
          }
          p{
            font-size: 0.16rem;
            line-height: 0.26rem;
            color: #636363;
          }
        }
        // 右
        .interfaceItemRight{
          img{
            height: 370px;
            align-self: flex-start;
            border-radius: 6px;
            box-shadow: 0 10px 50px rgb(0 0 0 / 40%);
            transition: transform .4s;
          }
        }
      }

    }
  }

  //底部
  .bottomContainer{
    box-sizing: border-box;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    padding: 0.3rem 0.1rem;
    .bottomMiddle{
      width: 50%;
      display: flex;
      justify-content: space-around;
      .bottomMiddleItem{
        .bottomMiddleItemHeader{
          font-weight: 700;
          font-size: 0.2rem;
        }
        .bottomMiddleItemcontent{
          cursor: pointer;
          i{
            margin-right: 0.1rem;
          }
        }
        .bottomMiddleItemcontent:hover{
          color: #367BF0;
        }
      }
    }
    .bottomBottom{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 4rem;
      .bottomBottomLogo{
        max-width: 60%;
        margin-bottom: 0.1rem;
      }
      .bottomBottomText{
        margin:0;
        margin-top: 0.05rem;
        font-size: 0.14rem;
      }
    }
  }

  .darkThemeIntroduce{
    background-color: #121212;
  }

  .darkThemeText{
    color: #fff !important;
  }

  .darkThemeHeader{
    box-shadow: 0px 10px 9px rgb(54 123 240 / 50%) inset;
  }
  .darkThemeFooter{
    box-shadow: 0 30px 80px #367BF0;
  }
</style>
