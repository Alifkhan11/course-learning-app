import { User } from "../auth/auth.model";
import { Courses } from "../course/course.models";
import { Lession } from "../lestion/lession.model";
import { TEnrollCourse, TStudentProgress } from "./enroll.interface";
import { EnrollCourse, StudentPregress } from "./enroll.model";

const createEnrollCouresFromDB = async (data: TEnrollCourse) => {


    const course = await Courses.findById(data.courseID)
    if (!course || course.status !== 'active') {
        throw new Error('Course not found')
    }

    const existingEnrollCourse = await EnrollCourse.findOne({
        studentEmail: data.studentEmail,
        courseID: data.courseID,
        status: 'ongoing'
    })
    console.log(existingEnrollCourse);

    if (existingEnrollCourse) {
        throw new Error('Course already enrolled')
    }

    const student = await User.findOne({
        email: data.studentEmail,
        isDeleted: false,
        role: 'student'
    })
    if (!student) {
        throw new Error('Student not found')
    }





    const enrollCourse = await EnrollCourse.create(data)
    return enrollCourse
}


const createStudentProgresFromDB = async (data: TStudentProgress) => {

    const student = await User.findById(data.studentID)

    if (!student) {
        throw new Error('Student Not found')
    }
    const deletedStudent = student.isDeleted
    if (deletedStudent) {
        throw new Error('Student is Deleted')
    }
    if (student.role !== 'student') {
        throw new Error('You are not a student')
    }
    const lesson = data.progress[0].lessonID
    const exisitLession=await Lession.findById(lesson)
    if(!exisitLession){
        throw new Error('This Lession is not Found')
    }
    


    const resualt = await StudentPregress.create(data)
    return resualt
}



export const enrollServices = {
    createEnrollCouresFromDB,
    createStudentProgresFromDB
}