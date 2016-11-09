package com.nju.service;

import com.nju.model.Student;

import java.util.List;

/**
 * Created by 传旺 on 2016/6/6.
 */

public interface StudentService {
    List<Student> getAllStudents();
    public String getStudentPass(String id);
}
