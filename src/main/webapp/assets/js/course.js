/**
 * Created by 传旺 on 2016/6/6.
 */



/**
 * 初始化选课模态框
 */
// function loadChooseModal() {
//     $('#FollowAddModal').on('show.bs.modal', function (event) {
//         var button = $(event.relatedTarget) // Button that triggered the modal
//         var riskId = button.data('risk-id')// Extract. from data-* attributes
//         var riskName = button.data('risk-name')
//         var riskContent = button.data('risk-content')
//         var riskPossibility = button.data('risk-possibility')
//         var riskLevel = button.data('risk-level')
//         var riskGate = button.data('risk-gate')
//         var riskCreator = button.data('risk-creator')
//         var riskFollower = button.data('risk-follower')
//
//         alert(riskName);
//         var modal = $(this)
//         modal.find('.modal-title').html('跟踪 <span class="text-primary">' + " " + '</span> 风险')
//         modal.find('.modal-body input#showRisk-id').val(riskId)
//         modal.find('.modal-body input#showRisk-name').val(riskName)
//         modal.find('.modal-body input#showRisk-content').val(riskContent)
//         modal.find('.modal-body input#showRisk-possibility').val(riskPossibility)
//         modal.find('.modal-body input#showRisk-level').val(riskLevel)
//         modal.find('.modal-body input#showRisk-gate').val(riskGate)
//         modal.find('.modal-body input#showRisk-creator').val(riskCreator)
//         modal.find('.modal-body input#showRisk-follower').val(riskFollower)
//
//         // $('#follow-btn')[0].onclick = function () {
//         //     $.ajax({
//         //         url:"/chooseCourse",
//         //         type:"post",
//         //         data:{
//         //             courseId:courseId,
//         //             department:courseDepartment
//         //         },
//         //         success:function (data) {
//         //             if(data){
//         //                 alert("选课成功");
//         //                 window.location.reload();
//         //             }else {
//         //                 alert("选课失败------");
//         //             }
//         //         },
//         //         error:function () {
//         //             alert("选课失败-------------");
//         //         }
//         //     })
//         // }
//     })
// }

/**
 * 初始化退课模态框
 */
function loadDropModal() {
    $('#FollowAddModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var riskId = button.data('risk-id') // Extract info from data-* attributes
        var riskName = button.data('risk-name')
        var riskContent = button.data('risk-content')
        var riskPossibility = button.data('risk-possibility')
        var riskLevel = button.data('risk-level')
        var riskGate = button.data('risk-gate')
        var riskCreator = button.data('risk-creator')
        var riskFollower = button.data('risk-follower')


        var modal = $(this)
        modal.find('.modal-title').html('确定退选 <span class="text-primary">' + " " + '</span> 课程？')
        modal.find('.modal-body input#showRisk-id').val(riskId)
        modal.find('.modal-body input#showRisk-name').val(riskName)
        modal.find('.modal-body input#showRisk-content').val(riskContent)
        modal.find('.modal-body input#showRisk-possibility').val(riskPossibility)
        modal.find('.modal-body input#showRisk-level').val(riskLevel)
        modal.find('.modal-body input#showRisk-gate').val(riskGate)
        modal.find('.modal-body input#showRisk-creator').val(riskCreator)
        modal.find('.modal-body input#showRisk-follower').val(riskFollower)


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
            var riskId = 0
            var riskName= $("#risk-name").val()
            var riskContent= $("#risk-content").val()
            var riskPossibility= $("#risk-possibility").val()
            var riskLevel= $("#risk-level").val()
            var riskGate= $("#risk-gate").val()


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
                    alert("添加失败");
                }
            })


}



/**
 * 初始化添加风险态框
 */
function loadAddPlanModal() {
    $('#addRiskPlanModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var modal = $(this)
        modal.find('.modal-title').html('添加风险计划')

        $('#comfirm-addplan-btn')[0].onclick = function () {
            var riskPlanId = 0
            var riskPlanName= $("#riskplan-name").val()
            var riskPlanContent= $("#riskplan-content").val()
            $.ajax({
                url:"/addRiskPlan",
                type:"post",
                data:{
                    riskPlanId:riskPlanId,
                    riskPlanName:riskPlanName,
                    riskPlanContent:riskPlanContent
                },
                success:function() {
                    window.location.reload();
                },
                error:function () {
                    alert("添加失败");
                }
            })
        }
    })
}

//------------------------
function AddRiskToPlanModal() {


        $('#addtoplan-btn')[0].onclick = function () {
            var riskPlanId = 0
            var riskPlanName= $("#riskplan-name").val()
            var riskPlanContent= $("#riskplan-content").val()
            $.ajax({
                url:"/addRiskPlan",
                type:"post",
                data:{
                    riskPlanId:riskPlanId,
                    riskPlanName:riskPlanName,
                    riskPlanContent:riskPlanContent
                },
                success:function() {
                    window.location.reload();
                },
                error:function () {
                    alert("添加失败");
                }
            })
        }

}



function showchartrec() {
    var startTime=$("#startTime").val();
    var endTime=$("#endTime").val();


    $.ajax({
        url:"/getRecByTime",
        type:"post",
        data:{
            startTime:startTime,
            endTime:endTime
        },

        success:function (data) {
            console.log(data);

            var arr = new Array();
            var rec = new Array();
            for (var i = 0; i < data.length; i++){
                arr[i]=data[i]['riskId'];
                rec[i]=data[i]['riskRec'];
            }

            var myChart = echarts.init(document.getElementById('main'));

            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '各风险被识别次数'
                },
                tooltip: {},
                legend: {
                    data:['次数']
                },
                xAxis: {
                    data: arr
                },
                yAxis: {},
                series: [{
                    name: '次数',
                    type: 'bar',
                    data: rec
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);



        }

    });





}


function showchartchange() {
    $('#showchartchangeModal').on('show.bs.modal', function (event) {
        $('#ChangeRiskModal').modal('hide');
    })

    var startTime=$("#startTime").val();
    var endTime=$("#endTime").val();


    $.ajax({
        url:"/getChangeByTime",
        type:"post",
        data:{
            startTime:startTime,
            endTime:endTime
        },

        success:function (data) {
            console.log(data);

            var arr = new Array();
            var change = new Array();
            for (var i = 0; i < data.length; i++){
                arr[i]=data[i]['riskId'];
                change[i]=data[i]['riskChange'];
            }

            var myChart = echarts.init(document.getElementById('main2'));

            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '各风险演变成问题次数'
                },
                tooltip: {},
                legend: {
                    data:['次数']
                },
                xAxis: {
                    data: arr
                },
                yAxis: {},
                series: [{
                    name: '次数',
                    type: 'bar',
                    data: change
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }

    });





}


function findRec(){
    var startTime=$("#startTime").val();
    var endTime=$("#endTime").val();


    $.ajax({
        url:"/getRecByTime",
        type:"post",
        data:{
            startTime:startTime,
            endTime:endTime
        },

        success:function (data) {
            console.log(data);
            var courseList = $("#riskRec-list");
            courseList.html("");
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
                var riskRec=data[i]['riskRec'];
                var riskChange=data[i]['riskChange'];

                var content = '<tr>' +
                    '<th scope="row">' + riskId + '</th>' +
                    '<td>' + riskName + '</td>' +
                    '<td>' + riskRec + '</td>' +
                    '<td>' + riskChange + '</td>' ;

                content += '<td><a onclick="loadChooseRiskModal(this.id)" href="#" data-toggle="modal" data-target="#FollowAddModal" id=' + riskId + ':' + riskName + ':' + riskCreator + ':' + riskCreatedTime + ':' + riskContent + ':' + riskFollower + ':' + riskLevel + ':' + riskPossibility + ':' + riskGate +':' + riskRec +':' + riskChange +':' + riskChange +':' + riskChange +'>查看</a></td>';
                content += '<td><a onclick="loadDeleteRiskModal(this.id)" href="#" data-toggle="modal" data-target="#deleteRiskModal" id=' + riskId +':' + riskId +':' + riskId +'>删除</a></td>';

                content += '<td><label><input type="checkbox" id=' + (i+1000) +' , name=' + riskId +'></label></td>';


                content += '</tr>';
                courseList.append(content);

            }

        }

    });

}

function findChange(){
    var startTime=$("#startTime").val();
    var endTime=$("#endTime").val();
    $.ajax({
        url:"/getChangeByTime",
        type:"post",
        data:{
            startTime:startTime,
            endTime:endTime
        },

        success:function (data) {
            console.log(data);
            var courseList = $("#riskChange-list");
            courseList.html("");
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
                var riskRec=data[i]['riskRec'];
                var riskChange=data[i]['riskChange'];

                var content = '<tr>' +
                    '<th scope="row">' + riskId + '</th>' +
                    '<td>' + riskName + '</td>' +
                    '<td>' + riskRec + '</td>' +
                    '<td>' + riskChange + '</td>' ;

                content += '<td><a onclick="loadChooseRiskModal(this.id)" href="#" data-toggle="modal" data-target="#FollowAddModal" id=' + riskId + ':' + riskName + ':' + riskCreator + ':' + riskCreatedTime + ':' + riskContent + ':' + riskFollower + ':' + riskLevel + ':' + riskPossibility + ':' + riskGate +':' + riskRec +':' + riskChange +':' + riskChange +'>查看</a></td>';

                content += '<td><a onclick="loadDeleteRiskModal(this.id)" href="#" data-toggle="modal" data-target="#deleteRiskModal" id=' + riskId +':' + riskId +':' + riskId +':' + riskId +'>删除</a></td>';

                content += '<td><label><input type="checkbox" id=' + (i+5000) +' , name=' + riskId +'></label></td>';

                content += '</tr>';
                courseList.append(content);

            }

        }

    });
}


function addForPlan(){
    $.ajax({
        url:"/getAllRisks",
        type:"post",
        data:{

        },

        success:function (data) {
            console.log(data);
            var courseList = $("#risktoaddplan-list");
            courseList.html("");

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
                var riskRec=data[i]['riskRec'];
                var riskChange=data[i]['riskChange'];

                var content = '<tr>' +
                    '<th scope="row">' + riskId + '</th>' +
                    '<td>' + riskName + '</td>' ;

                content += '<td><a onclick="loadChooseRiskModal(this.id)" href="#" data-toggle="modal" data-target="#FollowAddModal" id=' + riskId + ':' + riskName + ':' + riskCreator + ':' + riskCreatedTime + ':' + riskContent + ':' + riskFollower + ':' + riskLevel + ':' + riskPossibility + ':' + riskGate +':' + riskRec +':' + riskChange +'>查看</a></td>';

                content += '<td><label><input type="checkbox" id=' + (i+3000) +' , name=' + riskId +'></label></td>';


                content += '</tr>';
                courseList.append(content);

            }

        }

    });

}


function addToThisPlan(){
    var plan_idlist= $("#showRiskPlan-id").val()

    var risk_idlist="";
    for (var i = 3000; i < 3010; i++){
        var selectrisk = document.getElementById(i);
        if(selectrisk!=null){
            if(selectrisk.checked==true) {
                risk_idlist = risk_idlist + selectrisk.name + ";";
            }
        }
    }

    $.ajax({
        url:"/addRiskToPlan",
        type:"post",
        data:{
            risk_idlist:risk_idlist,
            plan_idlist:plan_idlist

        },
        success:function() {
            alert("添加成功");
        },
        error:function () {
            alert("添加失败");
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
                var riskRec=data[i]['riskRec'];
                var riskChange=data[i]['riskChange'];

                var content = '<tr>' +
                    '<th scope="row">' + riskId + '</th>' +
                    '<td>' + riskName + '</td>' +
                    '<td>' + riskCreator + '</td>' +
                    '<td>' + riskCreatedTime + '</td>' ;

                content += '<td><a onclick="loadChooseRiskModal(this.id)" href="#" data-toggle="modal" data-target="#FollowAddModal" id=' + riskId + ':' + riskName + ':' + riskCreator + ':' + riskCreatedTime + ':' + riskContent + ':' + riskFollower + ':' + riskLevel + ':' + riskPossibility + ':' + riskGate +':' + riskRec +':' + riskChange +'>查看</a></td>';
                content += '<td><a onclick="loadDeleteRiskModal(this.id)" href="#" data-toggle="modal" data-target="#deleteRiskModal" id=' + riskId +'>删除</a></td>';


                content += '</tr>';
                courseList.append(content);

            }
        }

    });


}


function loadRiskForPlan() {
    var PlanId = $('#showRiskPlan-id').text()

    $.ajax({

        url:"/getRisksForPlan",
        type:"post",
        data:{
            PlanId:PlanId
        },

        success:function (data) {
            console.log(data);
            var courseList = $("#risk-list");
            courseList.html("");
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
                var riskRec=data[i]['riskRec'];
                var riskChange=data[i]['riskChange'];


                var content = '<tr>' +
                    '<th scope="row">' + riskId + '</th>' +
                    '<td>' + riskName + '</td>' +
                    '<td>' + riskCreator + '</td>' +
                    '<td>' + riskCreatedTime + '</td>' ;

                content += '<td><a onclick="loadChoosePlanModal(this.id)" href="#" data-toggle="modal" data-target="#FollowAddModal" id=' + riskId + ':' + riskName + ':' + riskCreator + ':' + riskCreatedTime + ':' + riskContent + ':' + riskFollower + ':' + riskLevel + ':' + riskPossibility + ':' + riskGate +':' + riskRec +':' + riskChange +'>查看</a></td>';
                content += '<td><a onclick="loadDeleteRiskModal(this.id)" href="#" data-toggle="modal" data-target="#deleteRiskModal" id=' + riskId +'>删除</a></td>';


                content += '</tr>';
                courseList.append(content);

            }
        }

    });


}



function loadPlan() {
    $.ajax({
        url:"/getAllRiskPlan",
        type:"post",
        data:{

        },

        success:function (data) {
            console.log(data);
            var courseList = $("#riskplan-list");
            courseList.html("");
            for (var i = 0; i < data.length; i++){
                var riskPlanId = data[i]['riskPlanId'];
                var riskPlanName = data[i]['riskPlanName'];
                var riskPlanCreator = data[i]['riskPlanCreator'];
                var riskPlanContent = data[i]['riskPlanContent'];
                var riskPlanCreatedTime=data[i]['riskPlanCreatedTime'];

                var content = '<tr>' +
                    '<th scope="row">' + riskPlanId + '</th>' +
                    '<td>' + riskPlanName + '</td>' +
                    '<td>' + riskPlanCreator + '</td>' +
                    '<td>' + riskPlanCreatedTime + '</td>' ;

                content += '<td><a onclick="loadChoosePlanModal(this.id)" href="#" data-toggle="modal" data-target="#ShowPlanModal" id=' + riskPlanId + ':' + riskPlanName + ':' + riskPlanCreator + ':'+ riskPlanContent + ':' + riskPlanCreatedTime + '>查看</a></td>';
                 //content += '<td><a onclick="loadDeleteRiskModal(this.id)" href="#" data-toggle="modal" data-target="#deleteRiskModal" id=' + riskId +'>删除</a></td>';


                content += '</tr>';
                courseList.append(content);

            }
        }

    });


}


function comfirmAddToPlan(){
    var plan_idlist="";
    for (var i = 100; i < 110; i++){
        var selectplan = document.getElementById(i);
        if(selectplan!=null){
            if(selectplan.checked==true){
                plan_idlist=plan_idlist+selectplan.name+";";
            }

        }
    }

    var risk_idlist="";
    for (var i = 1000; i < 1010; i++){
        var selectrisk = document.getElementById(i);
        if(selectrisk!=null){
            if(selectrisk.checked==true) {
                risk_idlist = risk_idlist + selectrisk.name + ";";
            }
        }
    }

    $.ajax({
        url:"/addRiskToPlan",
        type:"post",
        data:{
            risk_idlist:risk_idlist,
            plan_idlist:plan_idlist

        },
        success:function() {
            alert("添加成功～");
            window.location.reload();
        },
        error:function () {
            alert("添加失败");
        }
    })


}


function addToPlan(){
    $.ajax({
        url:"/getAllRiskPlan",
        type:"post",
        data:{

        },

        success:function (data) {
            console.log(data);
            var courseList = $("#SelectPlan-list");
            courseList.html("");
            for (var i = 0; i < data.length; i++){
                var riskPlanId = data[i]['riskPlanId'];
                var riskPlanName = data[i]['riskPlanName'];
                var riskPlanCreator = data[i]['riskPlanCreator'];
                var riskPlanContent = data[i]['riskPlanContent'];
                var riskPlanCreatedTime=data[i]['riskPlanCreatedTime'];

                var content = '<tr>' +
                    '<th scope="row">' + riskPlanId + '</th>' +
                    '<td>' + riskPlanName + '</td>' +
                    '<td>' + riskPlanCreator + '</td>' +
                    '<td>' + riskPlanCreatedTime + '</td>' ;

                content += '<td><a onclick="loadChoosePlanModal(this.id)" href="#" data-toggle="modal" data-target="#ShowPlanModal" id=' + riskPlanId + ':' + riskPlanName + ':' + riskPlanCreator + ':'+ riskPlanContent + ':' + riskPlanCreatedTime + '>查看</a></td>';
                content += '<td><label><input type="checkbox" id='+(i+100)+' , name='+riskPlanId+'></label></td>';

                content += '</tr>';
                courseList.append(content);

            }
        }

    });


}

function loadChoosePlanModal(str){
    var data = str.split(":")
    var modal = $('#ShowPlanModal')

    modal.find('.modal-title').html('风险计划详情')
    modal.find('.modal-body input#showRiskPlan-id').val(data[0])
    modal.find('.modal-body input#showRiskPlan-name').val(data[1])
    modal.find('.modal-body input#showRiskPlan-creator').val(data[2])
    modal.find('.modal-body input#showRiskPlan-createdtime').val(data[4])
    modal.find('.modal-body input#showRiskPlan-content').val(data[3])
    var PlanId = data[0]
    $.ajax({

        url:"/getRisksForPlan",
        type:"post",
        data:{
            PlanId:PlanId
        },

        success:function (data) {
            console.log(data);

            var courseList = $("#riskForPlan-list");
            courseList.html("");

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
                var riskRec=data[i]['riskRec'];
                var riskChange=data[i]['riskChange'];

                var content = '<tr>' +
                    '<th scope="row">' + riskId + '</th>' +
                    '<td>' + riskName + '</td>' +
                    '<td>' + riskCreator + '</td>' +
                    '<td>' + riskCreatedTime + '</td>' ;

                content += '<td><a onclick="loadChooseRiskModal(this.id)" href="#" data-toggle="modal" data-target="#FollowAddModal" id=' + riskId + ':' + riskName + ':' + riskCreator + ':' + riskCreatedTime + ':' + riskContent + ':' + riskFollower + ':' + riskLevel + ':' + riskPossibility + ':' + riskGate +':' + riskRec +':' + riskChange +'>查看</a></td>';
                content += '<td><a onclick="loadDeleteRiskModal(this.id)" href="#" data-toggle="modal" data-target="#deleteRiskModal" id=' + riskId +':' + riskId +'>删除</a></td>';


                content += '</tr>';
                courseList.append(content);

            }
        }

    });



}


function loadChooseRiskModal(str){

    $('#ShowPlanModal').modal('hide')
    $('#RecRiskModal').modal('hide')
    $('#ChangeRiskModal').modal('hide')

    var data = str.split(":")


    var modal = $('#FollowAddModal')
    modal.find('.modal-title').html('查看 <span class="text-primary">' + data[0] + '</span> 风险')
    modal.find('.modal-body input#showRisk-id').val(data[0])
    modal.find('.modal-body input#showRisk-name').val(data[1])
    modal.find('.modal-body input#showRisk-creator').val(data[2])

    modal.find('.modal-body input#showRisk-possibility').val(data[7])
    modal.find('.modal-body input#showRisk-level').val(data[6])
    modal.find('.modal-body input#showRisk-gate').val(data[8])

    modal.find('.modal-body input#showRisk-follower').val(data[5])
    modal.find('.modal-body input#showRisk-content').val(data[4]) 
    modal.find('.modal-body input#showRisk-rec').val(data[9])
    modal.find('.modal-body input#showRisk-change').val(data[10])

    $('#FollowAddModal').on('hidden.bs.modal', function () {
        $('#ShowPlanModal').modal('show')
        if(data.length==12){
            $('#ChangeRiskModal').modal('show')
        }
        else if(data.length==13){
            $('#RecRiskModal').modal('show')
        }

    })
}

function loadDeleteRiskModal(str){
    var strlist=str.split(":");
    if (strlist.length==2){
        $('#deleteRiskSpan').text(strlist[1]);
        $('#ShowPlanModal').modal('hide');
    }
    else if (strlist.length==3){
        $('#deleteRiskSpan').text(strlist[1]);
        $('#RecRiskModal').modal('hide');
    }

    else if (strlist.length==4){
        $('#deleteRiskSpan').text(strlist[1]);
        $('#ChangeRiskModal').modal('hide');
    }



    else{
        $('#deleteRiskSpan').text(str);
    }

}

function deleteRisk(){
    $('#comfirm-delete-btn')[0].onclick = function () {
        var riskId = $('#deleteRiskSpan').text()
        $('#ShowPlanModal').modal('show');
        $.ajax({
            url:"/deleteRisk",
            type:"post",
            data:{
                risk_id:riskId
            },
            success:function() {
                alert("删除成功");
                window.location.reload();
            },
            error:function () {
                alert("删除失败");
            }
        })
    }
}

function followRisk() {
    $('#follow-btn')[0].onclick = function () {
        var riskId= $("#showRisk-id").val()
            $.ajax({
                url:"/followRisk",
                type:"post",
                data:{
                    risk_id:riskId
                },
                success:function (data) {
                    if(data){
                        alert("追踪成功");
                        window.location.reload();
                    }else {
                        alert("追踪失败");
                    }
                },
                error:function () {
                    alert(riskId);
                }
            })
        }

    $('#rec-btn')[0].onclick = function () {
        var riskId= $("#showRisk-id").val()
        $.ajax({
            url:"/recRisk",
            type:"post",
            data:{
                risk_id:riskId
            },
            success:function (data) {
                if(data){
                    alert("记录成功");
                    window.location.reload();
                }else {
                    alert("记录失败");
                }
            },
            error:function () {
                alert(riskId);
            }
        })
    }

    $('#change-btn')[0].onclick = function () {
        var riskId= $("#showRisk-id").val()
        $.ajax({
            url:"/changeRisk",
            type:"post",
            data:{
                risk_id:riskId
            },
            success:function (data) {
                if(data){
                    alert("记录成功");
                    window.location.reload();
                }else {
                    alert("记录失败");
                }
            },
            error:function () {
                alert(riskId);
            }
        })
    }


    $('#update-btn')[0].onclick = function () {
        var riskId= $("#showRisk-id").val()
        var risName= $("#showRisk-name").val()
        var riskContent= $("#showRisk-content").val()
        var riskPossibility= $("#showRisk-possibility").val()
        var riskLevel= $("#showRisk-level").val()
        var riskGate= $("#showRisk-gate").val()


        $.ajax({
            url:"/updateRisk",
            type:"post",
            data:{
                risk_id:riskId,
                risk_name:risName,
                risk_content:riskContent,
                risk_possibility:riskPossibility,
                risk_level:riskLevel,
                risk_gate:riskGate,


            },
            success:function (data) {
                if(data){
                    alert("修改成功");
                    window.location.reload();
                }else {
                    alert("修改失败");
                }
            },
            error:function () {
                alert(riskId);
            }
        })
    }


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