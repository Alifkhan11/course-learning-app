import e from "express";
import { courseController } from "./course.controller";
import auth from "../../middlewere/auth";
import validateRequest from "../../middlewere/vallidateRequest";
import { courseValidation } from "./course.validation";

const router = e.Router();

router.post(
    "/create",
    auth('teacher'),
    validateRequest(courseValidation.courseValidationSchema),
    courseController.createCourse
);
router.patch(
    "/updath/:id",
    auth('teacher'),
    courseController.updateCourse
);

router.delete(
    "/delete/:id",
    auth('teacher'),
    courseController.deleteCourse
);

router.patch(
    "/views/:id",
    courseController.incrementViews
);

router.patch(
    "/likes/:id",
    courseController.incrementLikes
);

router.post(
    "/feedback",
    auth('student'),
    validateRequest(courseValidation.feedbackValidationSchema),
    courseController.createFeedback
);

router.get(
    "/",
    auth('student','teacher'),
    courseController.getAllCourses
);

router.get(
    "/:id",
    auth('student','teacher'),
    courseController.getSingleCourses
);

router.patch(
    '/feedback/replay/:id',
    auth('teacher'),
    courseController.createFeedbackReplay
)

export const courseRouter = router;