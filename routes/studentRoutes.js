const express =require('express')
const multer=require('multer')
const {listStudents,approveStudent,rejectStudent}=require ('../controllers/studentController.js')

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/", listStudents);
router.post("/:id/approve", upload.single("certificate"), approveStudent);
router.post("/:id/reject", rejectStudent);

module.exports=router