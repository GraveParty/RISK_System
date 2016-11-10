package com.nju.controller;

import com.nju.model.Course;
import com.nju.model.Risk;
import com.nju.model.Student;
import com.nju.service.CourseService;
import com.nju.service.StudentService;
import com.nju.service.RiskService;
import com.nju.service.impl.RiskServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.Enumeration;
import java.util.List;
import java.util.Map;

/**
 * Created by 传旺 on 2016/5/23.
 */

@Controller
public class AuthController {

    @Autowired
    private CourseService courseService;
    @Autowired
    private StudentService studentService;

    @Autowired
    private RiskService riskService;

    @RequestMapping(value = "/login" , method = RequestMethod.GET)
    public String login(){
        courseService.getCourses(1);
        return "/login";
    }

    @RequestMapping(value = "/login" , method = RequestMethod.POST)
    public String postlogin(@RequestParam  String username, @RequestParam String password, HttpSession session){
        System.out.println(username);
        System.out.println(password);
        if(password.equals(studentService.getStudentPass(username))){
            session.setAttribute("id", username);
            return "redirect:/index";
        }
        return "/login";
    }

    @RequestMapping(value = "/logout" , method = RequestMethod.GET)
    public String logout(HttpSession session){
        Enumeration<String> em = session.getAttributeNames();
        while (em.hasMoreElements()) {
            session.removeAttribute(em.nextElement().toString());
        }
        return "/login";
    }

    @RequestMapping(value = "/getCourses", method = RequestMethod.POST)
    @ResponseBody
    public List<Course> getCourses(HttpSession session){
        int id = Integer.parseInt(session.getAttribute("id").toString());
        return courseService.getCourses(id);
    }

    @RequestMapping(value = "/getOtherCourses", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, List<Course>> getOtherCourse(HttpSession session){
        int id = Integer.parseInt(session.getAttribute("id").toString());
        return courseService.getOtherCourses(id);
    }

    @RequestMapping(value = "/getMyCourses", method = RequestMethod.POST)
    @ResponseBody
    public List<Course> getMyCourses(HttpSession session){
        int id = Integer.parseInt(session.getAttribute("id").toString());
        return courseService.getMyCourses(id);
    }

    @RequestMapping(value = "/getAllStudents", method = RequestMethod.POST)
    @ResponseBody
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

    @RequestMapping(value = "/chooseCourse", method = RequestMethod.POST)
    @ResponseBody
    public boolean chooseCourse(@RequestParam int courseId, @RequestParam String department, HttpSession session){
        int studentId = Integer.parseInt(session.getAttribute("id").toString());
        return courseService.chooseCourse(studentId, courseId, department);
    }

    @RequestMapping(value = "/dropCourse", method = RequestMethod.POST)
    @ResponseBody
    public boolean dropCourse(@RequestParam int courseId, @RequestParam String department, HttpSession session){
        int studentId = Integer.parseInt(session.getAttribute("id").toString());
        return courseService.dropCourse(studentId, courseId, department);
    }

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index(HttpSession session){
        if(session.getAttribute("id") == null) {
            return "/login";
        }
        return "/index";
    }

    @RequestMapping(value = "/course", method = RequestMethod.GET)
    public String course(){
        return "/course";
    }

    @RequestMapping(value = "/students", method = RequestMethod.GET)
    public String students(){
        return "/students";
    }

    @RequestMapping(value = "/getAllRisks", method = RequestMethod.POST)
    @ResponseBody
    public List<Risk> getAllRisks(){
        return riskService.getAllRisks();
    }
}
