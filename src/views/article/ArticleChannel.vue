<template>
  <page-container title="文章管理">
    <template #extra>
      <el-button type="primary" @click="goAddArticle">添加分类</el-button>
    </template>
    <el-config-provider :locale="zhCn">
      <el-table :data="channelList" style="width: 100%" border>
        <el-table-column type="index" width="60" label="序号" />
        <el-table-column prop="cate_name" label="分类名称"></el-table-column>
        <el-table-column prop="cate_alias" label="分类别名"></el-table-column>
        <el-table-column prop="actions" label="操作" width="200" align="center">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-popconfirm title="确定删除该条数据吗?" @confirm="handleDelete(scope.$index, scope.row)">
              <template #reference>
                <el-button size="small" type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-config-provider>
    <ChannelEdit ref="channelEditForm" @refreshTable="refreshTableHandler"></ChannelEdit>
  </page-container>
</template>

<script setup>
// import PageContainer from "@/components/PageContainer/index.vue";
import { deleteCate } from "@/api/article.js";
import ChannelEdit from "./components/ChannelEdit.vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import { getCateList } from "@/api/article.js";
const channelList = ref([]);
const router = useRouter();
const getChannelLists = async () => {
  const res = await getCateList();
  channelList.value = res.data.data;
};
getChannelLists();

const handleEdit = (index, row) => {
  channelEditForm.value.openForm(row);
};
const handleDelete = async (index, row) => {
  console.log(index, row);
  const res = await deleteCate(row.id);
  ElMessage.success(res.data.message);
  getChannelLists();
};
const channelEditForm = ref(null);
const goAddArticle = () => {
  channelEditForm.value.openForm({});
};
const refreshTableHandler = () => {
  getChannelLists();
};
</script>