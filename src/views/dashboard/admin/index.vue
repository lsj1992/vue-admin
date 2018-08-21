<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="8">
      <el-col>
        <el-button @click="getUserMsg">获取用户信息</el-button>
        <el-select v-model="model.STREET_CODE" @change="onChange($event)" >
          <el-option v-for="item in townList" :key="item.TOWN_ID" :label="item.TOWN_NAME" :value="item.TOWN_ID"></el-option>
        </el-select>
        <el-select v-model="model.STREET_CODE" @change="onChange($event)" value-key="TOWN_ID">
          <el-option v-for="item in townList" :key="item.TOWN_ID" :label="item.TOWN_NAME" :value="item"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table></transaction-table>
      </el-col>
    </el-row>
  </div>
</template>


<script>

import TransactionTable from './components/TransactionTable'
import { getUserMsg } from '@/api/testApi'
// import func from './vue-temp/vue-editor-bridge';
export default {
  name: 'dashboard-admin',
  components: {
    TransactionTable
  },
  created() {
    console.log(this.$route.query.id)
    this.model['STREET_CODE'] = parseInt(this.$route.query.id)
  },
  data() {
    return {
      lineChartData: [],
      model: {
        STREET_CODE: 1
      },
      townList: [{ 'TOWN_ID': 530502001000, 'TOWN_NAME': '兰城街道办事处' }, { 'TOWN_ID': 530502002000, 'TOWN_NAME': '永昌街道办事处' }, { 'TOWN_ID': 530502003000, 'TOWN_NAME': '九隆街道办事处' }, { 'TOWN_ID': 530502004000, 'TOWN_NAME': '青华街道办事处' }, { 'TOWN_ID': 530502005000, 'TOWN_NAME': '河图街道办事处' }, { 'TOWN_ID': 530502006000, 'TOWN_NAME': '永盛街道办事处' }, { 'TOWN_ID': 530502101000, 'TOWN_NAME': '板桥镇' }, { 'TOWN_ID': 530502103000, 'TOWN_NAME': '汉庄镇' }, { 'TOWN_ID': 530502104000, 'TOWN_NAME': '蒲缥镇' }, { 'TOWN_ID': 530502105000, 'TOWN_NAME': '瓦窑镇' }, { 'TOWN_ID': 530502106000, 'TOWN_NAME': '潞江镇' }, { 'TOWN_ID': 530502201000, 'TOWN_NAME': '金鸡乡' }, { 'TOWN_ID': 530502202000, 'TOWN_NAME': '辛街乡' }, { 'TOWN_ID': 530502203000, 'TOWN_NAME': '西邑乡' }, { 'TOWN_ID': 530502204000, 'TOWN_NAME': '丙麻乡' }, { 'TOWN_ID': 530502205000, 'TOWN_NAME': '瓦渡乡' }, { 'TOWN_ID': 530502206000, 'TOWN_NAME': '水寨乡' }, { 'TOWN_ID': 530502207000, 'TOWN_NAME': '瓦马彝族白族乡' }, { 'TOWN_ID': 530502208000, 'TOWN_NAME': '瓦房彝族苗族乡' }, { 'TOWN_ID': 530502209000, 'TOWN_NAME': '杨柳白族彝族乡' }, { 'TOWN_ID': 530502210000, 'TOWN_NAME': '芒宽彝族傣族乡' }, { 'TOWN_ID': 530502401000, 'TOWN_NAME': '保山工贸园区' }, { 'TOWN_ID': 530502501000, 'TOWN_NAME': '保山市高黎贡山旅游渡假区' }]
    }
  },
  methods: {
    onChange(event) {
      console.log(event)
      console.log(this.model)
      // this.model.STREET_CODE = 0
    },
    getUserMsg() {
      getUserMsg().then(function(res) {
        this.$Message({
          type: 'success',
          message: res
        })
      }
      )
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
