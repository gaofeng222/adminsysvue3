import request from "../utils/require.js";
//获取文章分类
export const getCateList = () => {
  return request.get("/my/cate/list");
};

export const addCate = (data) => {
  return request.post("/my/cate/add", data);
};

//update
export const updateCate = (data) => {
  return request.put("/my/cate/info", data);
};

//delete
export const deleteCate = (id) => {
  return request.delete(`/my/cate/del?id=${id}`);
};
