const blogService = require("../services/blogService");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getBlogById = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await blogService.getBlogById(id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createNewBlog = async (req, res) => {
  const data = req.body;
  try {
    const newBlog = await blogService.createNewBlog(data);
    newBlog.save();
    res.status(201).json({ message: "Created New Blog", newBlog });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const updateBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const data = req.body;
    const updatedData = await blogService.updateBlog(id, data);
    res.status(201).json({ message: "Updated Successfully", updatedData });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await blogService.deleteBlog(id);
    res.status(204).json({ message: "Blog deleted Successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createNewBlog,
  updateBlog,
  deleteBlog,
};
