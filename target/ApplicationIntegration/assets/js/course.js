/**
 * Created by 传旺 on 2016/6/6.
 */

/**
 * 初始化选课模态框
 */
function loadChooseModal() {
    $('#FollowAddModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var riskId = button.data('risk-id')// Extract. from data-* attributes
        var riskName = button.data('risk-name')
        var riskContent = button.data('risk-content')
        var riskPossibility = button.data('risk-possibility')
        var riskLevel = button.data('risk-level')
        var riskGate = button.data('risk-gate')
        var riskCreator = button.data('risk-creator')
        var riskFollower = button.data('risk-follower')

        alert(riskName);
        var modal = $(this)
        modal.find('.modal-title').html('跟踪 <span class="text-primary">' + " " + '</span> 风险')
        modal.find('.modal-body input#showRisk-id').val(riskId)
        modal.find('.modal-body input#showRisk-name').val(riskName)
        modal.find('.modal-body input#showRisk-content').val(riskContent)
        modal.find('.modal-body input#showRisk-possibility').val(riskPossibility)
        modal.find('.modal-body input#showRisk-level').val(riskLevel)
        modal.find('.modal-body input#showRisk-gate').val(riskGate)
        modal.find('.modal-body input#showRisk-creator').val(riskCreator)
        modal.find('.modal-body input#showRisk-follower').val(riskFollower)

        // $('#follow-btn')[0].onclick = function () {
        //     $.ajax({
        //         url:"/chooseCourse",
        //         type:"post",
        //         data:{
        //             courseId:courseId,
        //             department:courseDepartment
        //         },
        //         success:function (data) {
        //             if(data){
        //                 alert("选课成功");
        //                 window.location.reload();
        //             }else {
        //                 alert("选课失败------");
        //             }
        //         },
        //         error:function () {
        //             alert("选课失败-------------");
        //         }
        //     })
        // }
    })
}

/**
 * 初始化退课模态框
 */
function loadDropModal() {
    $('#FollowAddModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var riskId = button.data('risk-id') // Extract info from data-* attributes
        var riskCreator

        var modal = $(this)
        modal.find('.modal-title').html('确定退选 <span class="text-primary">' + courseName + '</span> 课程？')

        $('#follow-btn')[0].onclick = function () {
            $.ajax({
                url:"/getRisk",
                type:"post",
                data:{
                    risk_id:riskId,
                },
                success:function (data) {
                        alert("成功追踪");
                        window.location.reload();
                },
                error:function () {
                    alert("追踪失败");
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


        var modal = $(this)
        modal.find('.modal-title').html('添加风险')

        $('#comfirm-add-btn')[0].onclick = function () {
            var riskId = 0
            var riskName= $("#risk-name").val()
            var riskContent= $("#risk-content").val()
            var riskPossibility= $("#risk-possibility").val()
            var riskLevel= $("#risk-level").val()
            var riskGate= $("#risk-gate").val()
            alert(riskName);

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
                success:function() {
                    window.location.reload();
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
                var riskContent = data[i]['riskContent'];
                var riskFollower = data[i]['riskFollower'];
                var riskLevel = data[i]['riskLevel'];
                var riskPossibility = data[i]['riskPossibility'];
                var riskGate = data[i]['riskGate'];
                var riskCreatedTime=data[i]['riskCreatedTime'];

                var content = '<tr>' +
                    '<th scope="row">' + riskId + '</th>' +
                    '<td>' + riskName + '</td>' +
                    '<td>' + riskCreator + '</td>' +
                    '<td>' + riskCreatedTime + '</td>' ;

                content += '<td><a href="#" data-toggle="modal" data-target="#FollowAddModal" risk-id="' + riskId + '" risk-name="' + riskName + '" risk-creator="' + riskCreator + '" risk-createdTime="' + riskCreatedTime + '" risk-content="' + riskContent + '" risk-follower="' + riskFollower + '" risk-level="' + riskLevel + '" risk-possibility="' + riskPossibility + '" risk-gate="' + riskGate +'" >跟踪</a></td>';

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