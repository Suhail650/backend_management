const blogModel = require("../models/Blog");

const getAllBlogs = async () => {
  const blogs = await blogModel.find();
  return blogs;
};

const getBlogById = async (id) => {
  const blog = await blogModel.findById(id);
  if (!blog) {
    return res.status(400).json({ message: "Blog not found" });
  }
  return blog;
};

const createNewBlog = async (data) => {
  try {
    const newBlog = new blogModel(data);
    return newBlog;
  } catch (error) {
    return `message: ${error.message}`;
  }
};

const updateBlog = async (id, data) => {
  data.createdDateTime = Date.now();
  const updatedData = await blogModel.findByIdAndUpdate(id, data);
  if (!updatedData) {
    return res.status(404).json({ message: "Blog not found!" });
  }
  return updatedData;
};

const deleteBlog = async (id) => {
  await blogModel.findByIdAndDelete(id);
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createNewBlog,
  updateBlog,
  deleteBlog,
};
