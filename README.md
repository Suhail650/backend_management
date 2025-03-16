# backend_management

#login 
POST /api/auth/login

#institutions
GET /api/institution
GET /api/institution/id
PUT /api/institution/id - status only update

#institution students
GET /api/instituition/students 
POST /api/students/{id}/approve when a student passed 
POST /api/students/{id}/rejected when a student failed

#Blog/articls
GET /api/blogs
GET /api/blogs/id
POST /api/blogs
PUT /api/blogs/id
DELETE  /api/blogs/id

#Voucher
GET /api/vouchers
POST /api/voucher/{id}/approve
POST /api/voucher/{id}/rejected