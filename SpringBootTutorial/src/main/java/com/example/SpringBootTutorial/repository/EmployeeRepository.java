package com.example.SpringBootTutorial.repository;

import com.example.SpringBootTutorial.Model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {


}
