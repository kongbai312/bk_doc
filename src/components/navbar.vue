<template>
  <div class="navContainer">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <div class="logoBox">
          <img id="logo" src="../assets/images/logo.svg" >
        </div>
      </el-menu-item>
      <div class="flex-grow"></div>
      <el-menu-item index="1">GitHub Organization</el-menu-item>
      <el-sub-menu index="2">
        <template v-slot:title>获取坐标配置文件</template>
        <el-menu-item index="2-1">Genshin_Impact_Teleport@Sam5440</el-menu-item>
        <el-menu-item index="2-2">Json_Integration@Xcating</el-menu-item>
        <el-menu-item index="2-3">Sleep_TP@SDK-China</el-menu-item>
        <el-menu-item index="2-4">Teyvat_TP_Json@持青伞</el-menu-item>
        <el-menu-item index="2-5">AXC00_JSON@AXC00</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>社区</template>
        <el-menu-item index="3-1">Bkebi Discord</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>主贡献者</template>
        <el-menu-item index="4-1">HK-Yuuri#1153</el-menu-item>
        <el-menu-item index="4-2">CN-360NENZ#1837</el-menu-item>
        <el-menu-item index="4-3">CN-Alukym#0615</el-menu-item>
        <el-menu-item index="4-4">CN-TomyJan#5501</el-menu-item>
        <el-menu-item index="4-5">HK-Small_Ku#1462</el-menu-item>
        <el-menu-item index="4-6">CN-KyuubiRan#0766</el-menu-item>
        <el-menu-item index="4-7">CN-x3zFLoveU#0946</el-menu-item>
        <el-menu-item index="4-8">CN-Migita^Rin#0001</el-menu-item>
        <el-menu-item index="4-9">RainAfterDark</el-menu-item>
        <el-menu-item index="4-10">CN-gktwo#4158</el-menu-item>
        <el-menu-item index="4-11">TW-xTaiwanPingLord#9960</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>发行版本</template>
        <el-menu-item index="5-1" style="justifyContent: center;">
          <div class="versions">
            <p class="versionsText versionsLeft">RELEASE</p>
            <p class="versionsText versionsRight">V1.0.3R</p>
          </div>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  name: 'Nav',
  setup () {
    // 默认激活导航
    const activeIndex = ref('2')
    const urlPath = reactive({
      0: 'index.html',
      1: 'https://github.com/Bkebi-Group',
      '2-1': 'https://github.com/Sam5440/Genshin_Impact_Teleport',
      '2-2': 'https://github.com/Xcating/Json_Integration',
      '2-3': 'https://wwzb.lanzouf.com/invXS0lwy0yh',
      '2-4': 'https://github.com/chiqingsan/Teyvat_TP_Json',
      '2-5': 'https://github.com/AXC00/json',
      '3-1': 'https://discord.gg/bkebi',
      '4-1': 'https://github.com/GodLeaveMe',
      '4-2': 'https://github.com/360NENZ',
      '4-3': 'https://github.com/Alukym',
      '4-4': 'https://github.com/TomyJan',
      '4-5': 'https://github.com/Small-Ku',
      '4-6': 'https://github.com/KyuubiRan',
      '4-7': 'https://github.com/GashByte',
      '4-8': 'https://github.com/NctimeAza',
      '4-9': 'https://github.com/RainAfterDark',
      '4-10': 'https://github.com/Gktwo',
      '4-11': 'https://github.com/xTaiwanPingLord',
      '5-1': 'https://github.com/Bkebi-Group/Bkebi-GC-Release/releases/latest'
    })
    const handleSelect = (key) => {
      // 防止点标题菜单
      if (key === '2' || key === '3' || key === '4' || key === '5') { return }
      window.open(urlPath[key], '_blank')
    }
    return {
      activeIndex,
      handleSelect
    }
  }
}
</script>

<style lang="less" >

  .flex-grow{
    flex-grow: 1;
  }
  //logo
  .logoBox{
    height: 0.58rem;
    display: flex;
    align-items: center;
    #logo{
      width: 100px;
      height: 100%;
    }
  }
  //版本
  .versions{
    display: flex;
    justify-content: center;
    .versionsText{
      color: #fff;
      padding: 5px 10px;
      font-size: 0.1rem;
      line-height: 0.2rem;
      letter-spacing: 1px;
      cursor: pointer;
    }
    .versionsLeft{
      background-color: #555;
    }
    .versionsRight{
      background-color: #007EC6;
    }
  }
</style>
