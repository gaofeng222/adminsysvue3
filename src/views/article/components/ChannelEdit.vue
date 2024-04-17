<template>
  <el-dialog v-model="articleFormVisible" title="添加文章分类" width="60%">
    <el-form ref="dialogForm" :model="form" :rules="rules" :label-width="formLabelWidth">
      <el-form-item label="分类名称：" prop="cate_name">
        <el-input v-model="form.cate_name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="分类别名：" prop="cate_alias">
        <el-input v-model="form.cate_alias" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="cancelForm">取消</el-button>
        <el-button type="primary" @click="confirmForm">确认</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup>
import { addCate, updateCate, deleteCate } from "@/api/article.js";
import { isEmptyObject } from "@/utils/obj";
//此处最好使用ref，方便数据的重置
const form = ref({
  cate_name: "",
  cate_alias: ""
});
const rules = {
  cate_name: [
    { required: true, message: "文章分类名不能为空", trigger: "blur" },
    {
      pattern: /^\S{1,10}$/,
      message: "文章分类名为1~10个字符",
      trigger: "blur"
    }
  ],
  cate_alias: [
    { required: true, message: "文章分类名不能为空", trigger: "blur" },
    {
      pattern: /^[a-zA-Z0-9]{1,15}$/,
      message: "文章分类名为1~15个字符",
      trigger: "blur"
    }
  ]
};
const $emits = defineEmits(["refreshTable"]);
const formLabelWidth = "140px";
const dialogForm = ref(null);
const confirmForm = async () => {
  let res = "";
  articleFormVisible.value = false;
  if (form.value.id) {
    res = await updateCate(form.value);
  } else {
    res = await addCate(form.value);
  }
  ElMessage.success(res.data.message);
  $emits("refreshTable");
};
const articleFormVisible = ref(false);
const openForm = async data => {
  articleFormVisible.value = true;
  form.value = { ...data };
};
const cancelForm = () => {
  articleFormVisible.value = false;
};
defineExpose({
  openForm
});
</script> 