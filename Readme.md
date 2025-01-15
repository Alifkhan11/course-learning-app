 ```
 Registration : POST

 http://localhost:5000/api/v1/auth/register
```
```
# Login : POST


# http://localhost:5000/api/v1/auth/register
```
```
# Course Create :POST

# http://localhost:5000/api/v1/course/create
```

```
# Course Updath :PATCH

# http://localhost:5000/api/v1/course/updath/6785f8018ed67f3b949050b5
```
```
# Course Delete :DELETE

# http://localhost:5000/api/v1/course/delete/6785f8018ed67f3b949050b5
```
```
# How many people view This Course : PATCH

# http://localhost:5000/api/v1/course/views/6785f8018ed67f3b949050b5
```
```
# How many people Like This Course : PATCH

# http://localhost:5000/api/v1/course/likes/6785f8018ed67f3b949050b5
```
```
# How many student Feedback This Course : POST

# http://localhost:5000/api/v1/course/feedback
```
```
# Get single Course by id : GET

# http://localhost:5000/api/v1/course/:id
```
```
# Get All Course : GET

# http://localhost:5000/api/v1/course

# Note : ?searchTerm=Master&limit=2&page=2 use this
```
```
# Feedback Replay only teacher : PATCH

# http://localhost:5000/api/v1/course/feedback/replay/:id

```
```
# Enroll Courses : POST

# http://localhost:5000/api/enroll/create
```
```
# Progress : POST

# http://localhost:5000/api/enroll/progress
```
```
# Lesson Create  : POST

# http://localhost:5000/api/v1/lession/create
```
```
# Lesson Updath  : PATCH

# http://localhost:5000/api/v1/lession/updath/:id
```
```
# Lesson Delete  : DELETE

# http://localhost:5000/api/v1/lession/delete/:id
```
```
# Lesson Engagement  : POST

# http://localhost:5000/api/v1/lession/engagement
```
```
# Flow Cource  : POST

# http://localhost:5000/api/v1/lession/follow
```
```
# Get All Lession  : POST

# http://localhost:5000/api/v1/lession
```
```
# Get All Lession  : POST

# http://localhost:5000/api/v1/lession
```
```
# Get All Lession  : POST

# http://localhost:5000/api/v1/lession
```
```
# Teacher Lest Created : POST

# http://localhost:5000/api/v1/teacher/create
```
```
# Flow any course any student : PATCH

# http://localhost:5000/api/v1/teacher/like/:id
```