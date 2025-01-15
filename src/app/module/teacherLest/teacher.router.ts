import e from "express";
import auth from "../../middlewere/auth";
import { TeacherLestController } from "./teacher.controller";
import validateRequest from "../../middlewere/vallidateRequest";
import { teacherValidation } from "./teacher.validation";

const router=e.Router()

router.post(
    '/create',
    auth('teacher'),
    validateRequest(teacherValidation.teacherLestValidationSchema),
    TeacherLestController.createTeacherLest
)

router.patch(
    '/like/teacher/:id',
    auth('student'),
    TeacherLestController.studentLikeTeacher
)



export const TeacherRouter=router