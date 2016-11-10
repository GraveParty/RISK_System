/**
 * Created by 传旺 on 2016/6/6.
 */

/**
 * 初始化选课模态框
 */
function loadChooseModal() {
    $('#chooseCourseModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var courseId = button.data('course-id') // Extract info from data-* attributes
        var courseName = button.data('course-name')
        var courseTeacher = button.data('course-teacher')
        var coursePlace = button.data('course-place')
        var courseCredits = button.data('course-credits')
        var courseDepartment = button.data('course-department')
        var modal = $(this)
        modal.find('.modal-title').html('跟踪 <span class="text-primary">' + courseName + '</span> 风险')
        modal.find('.modal-body input#course-teacher').val(courseTeacher)
        modal.find('.modal-body input#course-place').val(coursePlace)
        modal.find('.modal-body input#course-credits').val(courseCredits)
        $('#choose-btn')[0].onclick = function () {
            $.ajax({
                url:"/chooseCourse",
                type:"post",
                data:{
                    courseId:courseId,
                    department:courseDepartment
                },
                success:function (data) {
                    if(data){
                        alert("选课成功");
                        window.location.reload();
                    }else {
                        alert("选课失败");
                    }
                },
                error:function () {
                    alert("选课失败");
                }
            })
        }
    })
}

/**
 * 初始化退课模态框
 */
function loadDropModal() {
    $('#dropCourseModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var courseId = button.data('course-id') // Extract info from data-* attributes
        var courseName = button.data('course-name')
        var courseTeacher = button.data('course-teacher')
        var coursePlace = button.data('course-place')
        var courseCredits = button.data('course-credits')
        var courseDepartment = button.data('course-department')
        var modal = $(this)
        modal.find('.modal-title').html('确定退选 <span class="text-primary">' + courseName + '</span> 课程？')
        modal.find('.modal-body input#course-teacher').val(courseTeacher)
        modal.find('.modal-body input#course-place').val(coursePlace)
        modal.find('.modal-body input#course-credits').val(courseCredits)
        $('#drop-btn')[0].onclick = function () {
            $.ajax({
                url:"/dropCourse",
                type:"post",
                data:{
                    courseId:courseId,
                    department:courseDepartment
                },
                success:function (data) {
                    if(data){
                        alert("退课成功");
                        window.location.reload();
                    }else {
                        alert("退课失败");
                    }
                },
                error:function () {
                    alert("退课失败");
                }
            })
        }
    })
}

/**
 * 初始化添加风险态框
 */
function loadAddModal() {
    $('#addRiskModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        // var courseId = button.data('course-id') // Extract info from data-* attributes
        // var courseName = button.data('course-name')
        // var courseTeacher = button.data('course-teacher')
        // var coursePlace = button.data('course-place')
        // var courseCredits = button.data('course-credits')
        // var courseDepartment = button.data('course-department')
        var riskId = 0;
        var riskName= input.data('risk-name')
        var riskContent= input.data('risk-content')
        var riskPossibility= input.data('risk-possibility')
        var riskLevel= input.data('risk-level')
        var riskGate= input.data('risk-gate')


        var modal = $(this)
        modal.find('.modal-title').html('添加风险')
        // modal.find('.modal-body input#course-teacher').val(courseTeacher)
        // modal.find('.modal-body input#course-place').val(coursePlace)
        // modal.find('.modal-body input#course-credits').val(courseCredits)
        $('#drop-btn')[0].onclick = function () {
            $.ajax({
                url:"/addRisk",
                type:"post",
                data:{
                    riskId:riskId,
                    riskName:riskName,
                    riskContent:riskContent,
                    riskPossibility:riskPossibility,
                    riskLevel:riskLevel,
                    riskGate:riskGate
                },
                success:function (data) {
                    if(data){
                        alert("退课成功");
                        window.location.reload();
                    }else {
                        alert("退课失败");
                    }
                },
                error:function () {
                    alert("退课失败");
                }
            })
        }
    })
}




function loadCourses() {
    $.ajax({
        url:"/getAllRisks",
        type:"post",
        data:{

        },

        success:function (data) {
            console.log(data);
            var courseList = $("#risk-list");
            for (var i = 0; i < data.length; i++){
                var riskId = data[i]['riskId'];
                var riskName = data[i]['riskName'];
                var riskCreator = data[i]['riskCreator'];
                var riskCreatedTime = data[i]['riskCreatedTime'];
                var content = '<tr>' +
                    '<th scope="row">' + riskId + '</th>' +
                    '<td>' + riskName + '</td>' +
                    '<td>' + riskCreator + '</td>' +
                    '<td>' + riskCreatedTime + '</td>' ;
                // if(data[i]['isShared'] == 2){
                //     content += '<td>已选</td>';
                // }else {
                //     content += '<td><a href="#" data-toggle="modal" data-target="#chooseCourseModal" data-course-id="' + courseId + '" data-course-name="' + courseName + '" data-course-place="' + coursePlace + '" data-course-teacher="' + courseTeacher + '" data-course-credits="' + courseCredits + '" data-course-department="B">选课</a></td>';
                // }
                content += '<td><a href="#" data-toggle="modal" data-target="#chooseCourseModal" data-course-id="' + riskId + '" data-course-name="' + riskName + '" data-course-place="' + riskCreator + '" data-course-teacher="' + riskCreatedTime + '" >跟踪</a></td>';

                content += '<td><a href="#" data-toggle="modal" data-target="#dropCourseModal" data-course-id="' + riskId + '" data-course-name="' + riskName + '" data-course-place="' + riskCreator + '" data-course-teacher="' + riskCreatedTime +  '">删除</a></td>';


                content += '</tr>';
                courseList.append(content);

            }
        }

    });


}

function getMyCourses() {
    $.ajax({
        url:"/getMyCourses",
        type:"post",
        success:function (data) {
            var courseList = $("#course-list");
            for (var i = 0; i < data.length; i++){
                var courseId = data[i]['courseId'];
                var courseName = data[i]['courseName'];
                var courseTeacher = data[i]['teacherName'];
                var coursePlace = data[i]['coursePlace'];
                var courseCredits = data[i]['coursePoint'];
                var courseDepartment;
                if(courseId > 3000){
                    courseDepartment = "C";
                }else if(courseId > 2000){
                    courseDepartment = "B";
                }else {
                    courseDepartment = "A";
                }
                var content = '<tr>' +
                    '<th scope="row">' + courseId + '</th>' +
                    '<td>' + courseName + '</td>' +
                    '<td>' + courseTeacher + '</td>' +
                    '<td>' + coursePlace + '</td>' +
                    '<td>' + courseCredits + '</td>' +
                    '<td>' + courseDepartment + '</td>';
                content += '<td><a href="#" data-toggle="modal" data-target="#dropCourseModal" data-course-id="' + courseId + '" data-course-name="' + courseName + '" data-course-place="' + coursePlace + '" data-course-teacher="' + courseTeacher + '" data-course-credits="' + courseCredits + '" data-course-department="' + courseDepartment + '">退课</a></td>';
                content += '</tr>';
                courseList.append(content);
            }
        }
    });
}

function getAllStudents() {
    $.ajax({
        url:"/getAllStudents",
        type:"post",
        success:function (data) {
            var studentList = $("#student-list");
            for (var i = 0; i < data.length; i++){
                var content = '<tr>' +
                    '<th scope="row">' + data[i]['studentId'] + '</th>' +
                    '<td>' + data[i]['studentName'] + '</td>' +
                    '<td>' + data[i]['studentSex'] + '</td>' +
                    '<td>' + data[i]['studentDepartment'] + '</td>' +
                    '</tr>';
                studentList.append(content);
            }
        }
    });
}