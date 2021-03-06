<%--
<%--
  Created by IntelliJ IDEA.
  User: Zongyi
  Date: 2016/11/19
  Time: 下午9:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>风险管理</title>
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <style>
        body { padding-top: 100px; }
        .user-icon {
            width: 30px;
            height: 30px;
        }
    </style>
</head>
<body>
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">风险管理系统</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><a href="/index">风险条目 </a></li>
                <li class="active"><a href="/plan">风险计划 <span class="sr-only">(current)</span></a></li>
                <%--<li><a href="/course">我的选课</a></li>--%>
                <%--<li><a href="/students">所有学生</a></li>--%>
            </ul>
            <form class="navbar-form navbar-left" role="search">
                <%--<div class="form-group">--%>
                <%--<input type="text" class="form-control" placeholder="Search">--%>
                <%--</div>--%>
                <a class="btn btn-default" href="#" data-toggle="modal" data-target="#addRiskPlanModal">添加计划</a>
            </form>
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img
                            src="/assets/img/user.jpg" alt="用户" class="user-icon"> <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">个人中心</a></li>
                        <li><a href="/logout">退出</a></li>
                    </ul>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>

<div class="container-fluid">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <!-- Default panel contents -->
                <div class="panel-heading">风险列表</div>
                <!-- Table -->
                <table class="table table-striped" id="resourcePlanTable">
                    <thead>
                    <tr>
                        <th>风险计划编号</th>
                        <th>风险计划名称</th>
                        <th>创建者</th>
                        <th>创建时间</th>
                        <th>查看</th>
                    </tr>
                    </thead>
                    <tbody id="riskplan-list">
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>






<%--增加计划--%>
<div class="modal fade" id="addRiskPlanModal" tabindex="-1" role="dialog" aria-labelledby="dropCourseModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="dropCourseModalLabel">添加风险计划</h4>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="riskplan-name" class="control-label">风险计划名称:</label>
                        <input type="text" class="form-control"  id="riskplan-name">
                    </div>
                    <div class="form-group">
                        <label for="riskplan-content" class="control-label">风险计划内容:</label>
                        <input type="text" class="form-control"  id="riskplan-content">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary" id="comfirm-addplan-btn">确认</button>
            </div>
        </div>
    </div>
</div>


<%--删除风险--%>
<div class="modal fade" id="deleteRiskModal" tabindex="-1" role="dialog" aria-labelledby="dropCourseModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="deleteRiskModalLabel"> 确认删除风险<sapn id="deleteRiskSpan"></sapn></h4>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary" id="comfirm-delete-btn">确认</button>
            </div>
        </div>
    </div>
</div>


<%--选课模态框--%>
<div class="modal fade" id="FollowAddModal" tabindex="-1" role="dialog" aria-labelledby="chooseCourseModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="FollowAddModalLabel">查看风险</h4>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="showRisk-id" class="control-label">风险编号:</label>
                        <input type="text" class="form-control" readonly="readonly" id="showRisk-id">
                    </div>
                    <div class="form-group">
                        <label for="showRisk-name" class="control-label">风险名称:</label>
                        <input type="text" class="form-control"  id="showRisk-name">
                    </div>
                    <div class="form-group">
                        <label for="showRisk-content" class="control-label">风险内容:</label>
                        <input type="text" class="form-control"  id="showRisk-content">
                    </div>
                    <div class="form-group">
                        <label for="showRisk-possibility" class="control-label">可能性（高中低）:</label>
                        <input type="text" class="form-control"  id="showRisk-possibility">
                    </div>
                    <div class="form-group">
                        <label for="showRisk-level" class="control-label">影响程度（高中低）:</label>
                        <input type="text" class="form-control"  id="showRisk-level">
                    </div>
                    <div class="form-group">
                        <label for="showRisk-gate" class="control-label">触发器/阈值:</label>
                        <input type="text" class="form-control"  id="showRisk-gate">
                    </div>
                    <div class="form-group">
                        <label for="showRisk-creator" class="control-label">提交者:</label>
                        <input type="text" class="form-control" readonly="readonly" id="showRisk-creator">
                    </div>
                    <div class="form-group">
                        <label for="showRisk-follower" class="control-label">跟踪者:</label>
                        <input type="text" class="form-control" readonly="readonly" id="showRisk-follower">
                    </div>




                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" id="follow-btn">跟踪</button>
                <button type="button" class="btn btn-primary" id="rec-btn">识别</button>
                <button type="button" class="btn btn-primary" id="change-btn">演变</button>
                <button type="button" class="btn btn-primary" id="update-btn">修改</button>
            </div>
        </div>
    </div>
</div>






<%--选课模态框--%>
<div class="modal fade" id="ShowPlanModal" tabindex="-1" role="dialog" aria-labelledby="ShowPlanModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="ShowPlanModalLabel">风险计划详情</h4>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="showRiskPlan-id" class="control-label">风险计划编号:</label>
                        <input type="text" class="form-control" readonly="readonly" id="showRiskPlan-id">
                    </div>
                    <div class="form-group">
                        <label for="showRiskPlan-name" class="control-label">风险计划名称:</label>
                        <input type="text" class="form-control" readonly="readonly" id="showRiskPlan-name">
                    </div>
                    <div class="form-group">
                        <label for="showRiskPlan-content" class="control-label">风险计划内容:</label>
                        <input type="text" class="form-control" readonly="readonly" id="showRiskPlan-content">
                    </div>

                    <div class="form-group">
                        <label for="showRiskPlan-creator" class="control-label">创建者:</label>
                        <input type="text" class="form-control" readonly="readonly" id="showRiskPlan-creator">
                    </div>

                    <div class="form-group">
                        <label for="showRiskPlan-createdtime" class="control-label">创建时间:</label>
                        <input type="text" class="form-control" readonly="readonly" id="showRiskPlan-createdtime">
                    </div>


                    <div class="form-group">
                        <div class="panel panel-default">
                            <!-- Default panel contents -->
                            <div class="panel-heading">风险列表</div>
                            <!-- Table -->
                            <table class="table table-striped" id="RiskForPlanTable">
                                <thead>
                                <tr>
                                    <th>编号</th>
                                    <th>名称</th>
                                    <th>创建者</th>
                                    <th>创建时间</th>
                                    <th>查看</th>
                                    <th>删除</th>
                                </tr>
                                </thead>
                                <tbody id="riskForPlan-list">
                                </tbody>
                            </table>
                        </div>
                    </div>

                </form>




            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" id="addriskforplan-btn"  onclick="addForPlan()"  href="#" data-toggle="modal" data-target="#SelectRiskModal">添加风险</button>

            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="SelectRiskModal" tabindex="-1" role="dialog" aria-labelledby="SelectRiskModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="ShowRiskModalLabel">风险条目列表</h4>
            </div>
            <div class="modal-body">

                <table class="table table-striped" id="addRiskForPlanTable">
                    <thead>
                    <tr>
                        <th>编号</th>
                        <th>名称</th>
                        <th>查看</th>
                        <th>选择</th>
                    </tr>
                    </thead>
                    <tbody id="risktoaddplan-list">
                    </tbody>
                </table>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" id="addtoplan-btn" onclick="addToThisPlan()"  >导入到此计划</button>

            </div>
        </div>
    </div>
</div>


<script type="text/javascript" src="/assets/js/jquery.min.js"></script>
<script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/assets/js/course.js"></script>
<script>
    followRisk();
    loadPlan();
    loadAddPlanModal();
    loadRiskForPlan();
    deleteRisk();

</script>
</body>
</html>
