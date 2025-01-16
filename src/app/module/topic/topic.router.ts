import e from "express";
import auth from "../../middlewere/auth";
import validateRequest from "../../middlewere/vallidateRequest";
import { TopicValidation } from "./topic.validation";
import { TopicController } from "./topic.controller";

const router=e.Router()


router.post(
    '/create',
    auth('teacher'),
    validateRequest(TopicValidation.createTopicValidationSchema),
    TopicController.createTopic
)

router.get(
    '/:id',
    auth('student','teacher'),
    TopicController.getTopicByLesson
)

router.get(
    '/',
    auth('teacher','student'),
    TopicController.getAllTopic
)

export const TopicRouter=router