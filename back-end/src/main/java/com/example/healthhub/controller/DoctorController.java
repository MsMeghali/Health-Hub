package com.example.healthhub.controller;

import com.example.healthhub.entity.Doctor;
import com.example.healthhub.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/doctor")
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @GetMapping("/{id}")
    public ResponseEntity<Doctor> findDoctorById(@PathVariable("id") int id){
        return new ResponseEntity<>(doctorService.findById(id), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Doctor>> findByCityAndSpeciality(@RequestParam("city") String city, @RequestParam("speciality") String speciality){
        return new ResponseEntity<>(doctorService.getDoctorByCityAndSpeciality(city,speciality),HttpStatus.OK);
    }


}
