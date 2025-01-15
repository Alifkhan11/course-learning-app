import e from "express";
import { lessionController } from "./lession.controller";
import auth from "../../middlewere/auth";
import validateRequest from "../../middlewere/vallidateRequest";
import { lessionvalivation } from "./lesson.validation";

const router = e.Router();

router.post(
    "/create", 
    auth('teacher'),
    validateRequest(lessionvalivation.lessionTopicValidationSchema),
    lessionController.createLessitionTopic

);
router.patch(
    "/updath/:id", 
    auth('teacher'),
    lessionController.updathLessionTopic

);
router.delete(
    "/delete/:id", 
    auth('teacher'),
    lessionController.deletedLessionTopic

);


router.post(
    "/engagement", 
    auth('student'),
    validateRequest(lessionvalivation.studentEngagementValidationSchema),
    lessionController.studentEngagement

);

router.post(
    "/follow", 
    auth('student'),
    validateRequest(lessionvalivation.studentFollowCourseValidationSchema),
    lessionController.studentFollowCourse

);


router.get(
    '/',
    auth('student','teacher'),
    lessionController.getLesson
)



export const lessionRouter = router;