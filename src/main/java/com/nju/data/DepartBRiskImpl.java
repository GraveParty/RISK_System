package com.nju.data;


import com.nju.model.Risk;
import com.nju.model.RiskPlan;
import java.rmi.RemoteException;
import java.sql.*;
import java.util.*;

/**
 * Created by Zongyi on 2016/11/10.
 */
public class DepartBRiskImpl implements RiskService{
    Connection conn = null;
    Statement stmt = null;
    RequireService req = null;


    public DepartBRiskImpl(){

        try {

            String url = "jdbc:mysql://localhost:3306/YYJC_Depart_B?"
                    + "&useUnicode=true&characterEncoding=UTF8";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(url, "root", "Zy502600129");
            stmt = conn.createStatement();


        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    public List<Risk> getAllRisks() {
        List<Risk> res = new ArrayList<Risk>();
        //res.addAll(req.getMyOtherCourses(studentId));
        String sql = "select * from risk ";
        try {
            ResultSet rs = stmt.executeQuery(sql);
            while(rs.next()){


                int riskId = rs.getInt(1);
                String riskName = rs.getString(2);
                String riskContent = rs.getString(3);
                String riskLevel = rs.getString(4);
                String riskPossibility = rs.getString(5);
                String riskGate = rs.getString(6);
                String riskCreator = rs.getString(7);
                String riskFollower = rs.getString(8);
                String riskCreatedTime = rs.getString(9);
                int riskRec = rs.getInt(10);
                int riskChange = rs.getInt(11);

                Risk r = new Risk(riskId, riskName, riskContent, riskLevel, riskPossibility, riskGate, riskCreator, riskFollower, riskCreatedTime,riskRec,riskChange);

                res.add(r);
            }
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return res;

    }


    public List<RiskPlan> getAllRiskPlan() {
        List<RiskPlan> res = new ArrayList<RiskPlan>();

        String sql = "select * from riskplan ";
        try {
            ResultSet rs = stmt.executeQuery(sql);
            while(rs.next()){


                int riskPlanId = rs.getInt(1);
                String riskPlanName = rs.getString(2);
                String riskPlanCreator = rs.getString(3);
                String riskPlanContent = rs.getString(4);
                String riskPlanCreatedTime = rs.getString(5);
                RiskPlan r = new RiskPlan(riskPlanId,riskPlanName,riskPlanCreator,riskPlanContent,riskPlanCreatedTime);
                res.add(r);
            }
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return res;

    }



    public void addRisk(Risk risk) {

        //res.addAll(req.getMyOtherCourses(studentId));
        String sql = "insert into risk values (0,'"+risk.getRiskName()+"','"+risk.getRiskContent()+"','"+risk.getRiskLevel()+"','"+risk.getRiskPossibility()+"','" +
                risk.getRiskGate()+"','"+risk.getRiskCreator()+"','"+risk.getRiskFollower()+"','"+risk.getRiskCreatedTime()+"',0,0)";

        try {
            boolean rs = stmt.execute(sql);


        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }


    }

    public void addRiskPlan(RiskPlan riskplan) {

        //res.addAll(req.getMyOtherCourses(studentId));
        String sql = "insert into riskplan values (0,'"+riskplan.getRiskPlanName()+"','"+ riskplan.getRiskPlanCreator()+"','"+riskplan.getRiskPlanContent()+"','"+riskplan.getRiskPlanCreatedTime()+"')";
        System.out.println(sql);
        try {
            boolean rs = stmt.execute(sql);


        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    public void addRiskRec(int risk_id,String createdtime) {


        String sql = "insert into riskwarning values (0,'"+risk_id+"','"+ createdtime+"')";
        System.out.println(sql);
        try {
            boolean rs = stmt.execute(sql);


        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }


    }




    public void addRiskToPlan(String risk_idlist,String plan_idlist) {
        String[] risklist=risk_idlist.split(";");
        String[] planlist=plan_idlist.split(";");

        for(int i=0;i<risklist.length;i++){
            for(int j=0;j<planlist.length;j++){

                String sql = "insert into risktoplan values (0,'"+risklist[i]+"','"+ planlist[j]+"')";
                System.out.println(sql);
                try {
                    boolean rs = stmt.execute(sql);
                    stmt=conn.createStatement();
                } catch (SQLException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }


            }
        }






    }




    public void addRiskChange(int risk_id,String createdtime) {

        //res.addAll(req.getMyOtherCourses(studentId));
        String sql = "insert into riskproblem values (0,'"+risk_id+"','"+ createdtime+"')";

        try {
            boolean rs = stmt.execute(sql);


        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }


    }


    public Risk getRisk(int risk_id) {
        String sql = "select * from risk where risk_id = "+ risk_id ;
        try {

            ResultSet rs = stmt.executeQuery(sql);
            while(rs.next()) {
                int riskId = rs.getInt(1);
                String riskName = rs.getString(2);
                String riskContent = rs.getString(3);
                String riskLevel = rs.getString(4);
                String riskPossibility = rs.getString(5);
                String riskGate = rs.getString(6);
                String riskCreator = rs.getString(7);
                String riskFollower = rs.getString(8);
                String riskCreatedTime = rs.getString(9);
                int riskRec = rs.getInt(10);
                int riskChange = rs.getInt(11);

                Risk r = new Risk(riskId, riskName, riskContent, riskLevel, riskPossibility, riskGate, riskCreator, riskFollower, riskCreatedTime,riskRec,riskChange);
                return r;
            }
            rs.close();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    public List<Risk> getRecByTime(String startTime,String endTime){
        startTime=startTime.split(" ")[0]+"_"+startTime.split(" ")[1];
        endTime=endTime.split(" ")[0]+"_"+endTime.split(" ")[1];

        List<Risk>realList=getRecChange(startTime,endTime);

        Collections.sort(realList, new Comparator() {
            @Override
            public int compare(Object o1, Object o2) {
                if(((Risk)o1).getRiskRec()>((Risk)o2).getRiskRec())
                    return -1;
                else{
                    return 1;
                }
            }
        });

        return realList;


    }

    public List<Risk> getRecChange(String startTime,String endTime){
        String sql = "select * from riskwarning where createdtime >= '"+ startTime+"' and createdtime <= '"+ endTime+"'" ;
        List<Risk> recList = new ArrayList<Risk>();
        try {

            ResultSet rs = stmt.executeQuery(sql);

            while(rs.next()) {
                int riskId = rs.getInt(2);
                String riskName = "";
                String riskContent = "";
                String riskLevel = "";
                String riskPossibility ="";
                String riskGate = "";
                String riskCreator = "";
                String riskFollower = "";
                String riskCreatedTime = "";
                int riskRec = 0;
                int riskChange = 0;
                Risk r = new Risk(riskId, riskName, riskContent, riskLevel, riskPossibility, riskGate, riskCreator, riskFollower, riskCreatedTime,riskRec,riskChange);
                recList.add(r);
            }
            rs.close();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }


        String sql3 = "select * from riskproblem where createdtime >= '"+ startTime+"' and createdtime <= '"+ endTime+"'" ;
        List<Risk> changeList = new ArrayList<Risk>();
        try {

            ResultSet rs = stmt.executeQuery(sql3);

            while(rs.next()) {
                int riskId = rs.getInt(2);
                String riskName = "";
                String riskContent = "";
                String riskLevel = "";
                String riskPossibility ="";
                String riskGate = "";
                String riskCreator = "";
                String riskFollower = "";
                String riskCreatedTime = "";
                int riskRec = 0;
                int riskChange = 0;
                Risk r = new Risk(riskId, riskName, riskContent, riskLevel, riskPossibility, riskGate, riskCreator, riskFollower, riskCreatedTime,riskRec,riskChange);
                changeList.add(r);
            }
            rs.close();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        List<Risk> realList = new ArrayList<Risk>();
        String sql2 = "select * from risk" ;
        try {
            stmt=conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql2);

            while(rs.next()) {
                int riskId = rs.getInt(1);
                String riskName = rs.getString(2);
                String riskContent = rs.getString(3);
                String riskLevel = rs.getString(4);
                String riskPossibility = rs.getString(5);
                String riskGate = rs.getString(6);
                String riskCreator = rs.getString(7);
                String riskFollower = rs.getString(8);
                String riskCreatedTime = rs.getString(9);
                int riskRec = 0;
                int riskChange = 0;
                Risk r = new Risk(riskId, riskName, riskContent, riskLevel, riskPossibility, riskGate, riskCreator, riskFollower, riskCreatedTime,riskRec,riskChange);
                realList.add(r);
            }
            rs.close();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }


        for(int i=0;i<realList.size();i++){
            for(int j=0;j<recList.size();j++){
                if(realList.get(i).getRiskId()==recList.get(j).getRiskId()){
                    realList.get(i).setRiskRec( realList.get(i).getRiskRec()+1   );
                }
            }
        }

        for(int i=0;i<realList.size();i++){
            for(int j=0;j<changeList.size();j++){
                if(realList.get(i).getRiskId()==changeList.get(j).getRiskId()){
                    realList.get(i).setRiskChange( realList.get(i).getRiskChange()+1   );
                }
            }
        }

        return realList;

    }

    public List<Risk> getChangeByTime(String startTime,String endTime){
        startTime=startTime.split(" ")[0]+"_"+startTime.split(" ")[1];
        endTime=endTime.split(" ")[0]+"_"+endTime.split(" ")[1];

        List<Risk>realList=getRecChange(startTime,endTime);

        Collections.sort(realList, new Comparator() {
            @Override
            public int compare(Object o1, Object o2) {
                if(((Risk)o1).getRiskChange()>((Risk)o2).getRiskChange())
                    return -1;
                else{
                    return 1;
                }
            }
        });


        for(int i=0;i<realList.size();i++){
            System.out.println(realList.get(i).getRiskId()+" "+realList.get(i).getRiskChange());
        }

        return realList;
    }



    public List<Risk> getRiskForPlan(int riskplan_id) {
        String sql = "select * from risk where risk_id in (select risk_id from risktoplan where riskplan_id = "+ riskplan_id +")" ;
        try {
            ResultSet rs = stmt.executeQuery(sql);
            List<Risk> result= new ArrayList<Risk>();
            while(rs.next()) {
                int riskId = rs.getInt(1);
                String riskName = rs.getString(2);
                String riskContent = rs.getString(3);
                String riskLevel = rs.getString(4);
                String riskPossibility = rs.getString(5);
                String riskGate = rs.getString(6);
                String riskCreator = rs.getString(7);
                String riskFollower = rs.getString(8);
                String riskCreatedTime = rs.getString(9);
                int riskRec = rs.getInt(10);
                int riskChange = rs.getInt(11);

                Risk r = new Risk(riskId, riskName, riskContent, riskLevel, riskPossibility, riskGate, riskCreator, riskFollower, riskCreatedTime,riskRec,riskChange);
                result.add(r);
            }
            rs.close();
            System.out.println(result.size());
            return result;

        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }


    public void deleteRisk(int  risk_id) {

        //res.addAll(req.getMyOtherCourses(studentId));
        String sql = "delete  from risk where risk_id = "+ risk_id ;
        try {
            boolean rs = stmt.execute(sql);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }


    }


    public void followRisk(int risk_id,String follower_id){
        String sql = "select * from risk where risk_id = "+ risk_id ;

        try {

            ResultSet rs = stmt.executeQuery(sql);
            while(rs.next()) {
                int riskId = rs.getInt(1);
                String riskName = rs.getString(2);
                String riskContent = rs.getString(3);
                String riskLevel = rs.getString(4);
                String riskPossibility = rs.getString(5);
                String riskGate = rs.getString(6);
                String riskCreator = rs.getString(7);
                String riskFollower = rs.getString(8);
                String riskCreatedTime = rs.getString(9);
                int riskRec = rs.getInt(10);
                int riskChange = rs.getInt(11);

                Risk r = new Risk(riskId, riskName, riskContent, riskLevel, riskPossibility, riskGate, riskCreator, riskFollower, riskCreatedTime,riskRec,riskChange);
                r.setRiskFollower(r.getRiskFollower() +  follower_id+";") ;
                Statement stmt2 = conn.createStatement();
                String sql_update = " UPDATE risk SET risk_follower = '" + r.getRiskFollower() + "' WHERE risk_id = " +risk_id ;
                System.out.println(sql_update);
                boolean rs_update = stmt2.execute(sql_update);

            }
            rs.close();

        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }


    public void RiskRec(int risk_id){
        String sql = "select * from risk where risk_id = "+ risk_id ;

        try {

            ResultSet rs = stmt.executeQuery(sql);
            while(rs.next()) {
                int riskRec = rs.getInt(10);
                Statement stmt2 = conn.createStatement();
                String sql_update = " UPDATE risk SET risk_rec = '" + (riskRec+1) + "' WHERE risk_id = " +risk_id ;
                System.out.println(sql_update);
                stmt2.execute(sql_update);

            }
            rs.close();

        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }







    public void RiskChange(int risk_id){
        String sql = "select * from risk where risk_id = "+ risk_id ;

        try {

            ResultSet rs = stmt.executeQuery(sql);
            while(rs.next()) {
                int riskChange = rs.getInt(11);
                Statement stmt2 = conn.createStatement();
                String sql_update = " UPDATE risk SET risk_change = '" + (riskChange+1) + "' WHERE risk_id = " +risk_id ;
                System.out.println(sql_update);
                boolean rs_update = stmt2.execute(sql_update);

            }
            rs.close();

        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }







    public void updateRisk(int risk_id, String risk_name, String risk_content, String risk_gate, String risk_level,String risk_possibility){
        String sql = "select * from risk where risk_id = "+ risk_id ;

        try {

            ResultSet rs = stmt.executeQuery(sql);
            while(rs.next()) {
                int riskId = rs.getInt(1);
                String riskName = rs.getString(2);
                String riskContent = rs.getString(3);
                String riskLevel = rs.getString(4);
                String riskPossibility = rs.getString(5);
                String riskGate = rs.getString(6);
                String riskCreator = rs.getString(7);
                String riskFollower = rs.getString(8);
                String riskCreatedTime = rs.getString(9);

                Statement stmt2 = conn.createStatement();
                String sql_update = " UPDATE risk SET risk_name ='" + risk_name + "',risk_content ='"+risk_content +"',risk_gate ='"+risk_gate +"',risk_level='"+risk_level +"',risk_possibility ='"+risk_possibility +"'WHERE risk_id = " +risk_id ;

                System.out.println(sql_update);
                boolean rs_update = stmt2.execute(sql_update);

            }
            rs.close();

        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }



}
