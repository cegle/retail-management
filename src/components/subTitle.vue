<template>
  <div class="subTitle">
    <div class="title">{{subTitle}}</div>
    <!-- <div class="refresh" @click="refresh">刷新</div> -->
  </div>
</template>

<script>
export default {
  name: "subTitle",
  props: {
    subTitle: String
  }
};
</script>

<style lang="scss" scoped>
.subTitle {
  background-color: #f2f2f2;
  height: 50px;
  line-height: 50px;
  color: #909399;
  position: relative;
  display: flex;
  border-bottom: 1px solid rgba(228, 228, 228, 1);
  .title {
    min-width: 1100px;
    border-left: 6px solid #5bc0bf;
    line-height: 21px;
    height: 21px;
    padding-left: 10px;
    position: relative;
    top: 14px;
  }
  .refresh {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border: 1px solid rgba(228, 228, 228, 1);
    text-align: center;
    position: relative;
    top: 8px;
    left: 100px;
    background-color: #ffffff;
    cursor: pointer;
    &:hover {
      background-color: #f2f2f2;
    }
  }
}
</style>