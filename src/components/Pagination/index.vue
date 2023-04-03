<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">
      上一页
    </button>
    <button v-if="isStart1" @click="$emit('getPageNo', 1)" :class="{active:pageNo==1}">1</button>
    <button v-if="isStart2">···</button>

    <template v-for="(page, index) in startNumAndEndNum.end">
      <button
        v-if="isStart3(page)"
        :key="index"
        @click="$emit('getPageNo', page)"
        :class="{active:pageNo==page}"
      >
        {{ page }}
      </button>
    </template>
    <!-- <button v-for="(page,index) in startNumAndEndNum.end" :key="index" v-if="isStart3(page)">{{ page }}</button> -->

    <button v-if="isEnd">···</button>
    <button v-if="isEnd2" @click="$emit('getPageNo', totalPage)"
    :class="{active:pageNo==totalPage}">
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo == totalPage"
      @click="$emit('getPageNo', pageNo + 1)"
    >
      下一页
    </button>
    <!-- {{ startNumAndEndNum }} -->

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      const { continues, pageNo, totalPage } = this;
      let start = 0;
      let end = 0;

      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        }
        if (end > totalPage) {
          end = totalPage;
          start = totalPage - continues + 1;
        }
      }
      return { start, end };
    },
    // getInt(){
    //     let res = new Array()

    //     for(let i = this.totalPage;i<=this.startNumAndEndNum.end;i++){
    //         let j = 0

    //         res[j] = i
    //         j++
    //         console.log(i);
    //     }
    //     return res
    // },
    isStart1() {
      return this.startNumAndEndNum.start > 1;
    },
    isStart2() {
      return this.startNumAndEndNum.start > 2;
    },
    isEnd() {
      return this.startNumAndEndNum.end < this.totalPage - 1;
    },
    isEnd2() {
      return this.startNumAndEndNum.end < this.totalPage;
    },
  },
  methods: {
    isStart3(page) {
      return page >= this.startNumAndEndNum.start;
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
.active {
    background: #409eff;
}
</style>