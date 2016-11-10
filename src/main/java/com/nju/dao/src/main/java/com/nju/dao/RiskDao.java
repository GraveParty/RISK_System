package com.nju.dao;

import com.nju.model.Risk;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.rmi.RemoteException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Zongyi on 2016/11/10.
 */

@Repository
public class RiskDao {
    @Autowired
    private SessionFactory sessionFactory;

    public RiskDao(){
        System.out.println("--=-=-=-=-=-=999");
        try {

            String url = "jdbc:mysql://localhost:3306/YYJC_Depart_B?"
                    + "&useUnicode=true&characterEncoding=UTF8";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(url, "root", "Zy502600129");
            stmt = conn.createStatement();
            System.out.println(stmt.isClosed());
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    Connection conn = null;
    Statement stmt = null;

    public List<Risk> getAllRisks() {
        System.out.println("111");
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

                Risk r = new Risk(riskId, riskName, riskContent, riskLevel, riskPossibility, riskGate, riskCreator,riskFollower,riskCreatedTime);

                res.add(r);
            }
            return res;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;

    }
}
