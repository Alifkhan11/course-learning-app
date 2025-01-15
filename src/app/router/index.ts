import { Router } from "express";
import { authRouter } from "../module/auth/auth.router";
import { courseRouter } from "../module/course/course.router";
import { lessionRouter } from "../module/lestionTopic/lession.router";
import { enrollCourseRouter } from "../module/enrollCourses/enroll.router";
import { TeacherRouter } from "../module/teacherLest/teacher.router";

const router = Router()

const moduleRouter=[
    {
        path:'/auth',
        router:authRouter
    },
    {
        path:'/course',
        router:courseRouter
    },
    {
        path:'/lession',
        router:lessionRouter
    },
    {
        path:'/enroll',
        router:enrollCourseRouter
    },
    {
        path:'/teacher',
        router:TeacherRouter
    },
]

moduleRouter.forEach(route=>{
    router.use(route.path,route.router)
})
export default router