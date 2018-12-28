<template>
  <div class="pagination">
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      layout="total, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "pagination",
  props: {
    total: Number,
    pageSize: Number
  },
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {
    handleCurrentChange($event) {
      this.$emit("next", $event);
    }
  }
};
</script>


<style lang="scss" scoped>
.pagination {
  margin-top: 20px;
  text-align: center;
}
</style>