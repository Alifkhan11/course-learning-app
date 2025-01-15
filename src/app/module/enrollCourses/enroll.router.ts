import e from "express";
import auth from "../../middlewere/auth";
import { enrollCourseController } from "./enroll.controller";
import validateRequest from "../../middlewere/vallidateRequest";
import { enrollValidation } from "./enroll.validation";

const router=e.Router()


router.post(
    '/create',
    auth("student"),
    validateRequest(enrollValidation.enrollCoursesValidationSchema),
    enrollCourseController.createEnrollCourses
)

router.post(
    '/progress',
    auth('student'),
    validateRequest(enrollValidation.studentProgresValidationSchema),
    enrollCourseController.createStudentProgres
)


export const enrollCourseRouter=router