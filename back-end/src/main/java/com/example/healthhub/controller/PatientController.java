package com.example.healthhub.controller;

import com.example.healthhub.entity.Patient;
import com.example.healthhub.repository.PatientRepository;
import com.example.healthhub.services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/patient")
public class PatientController {
    @Autowired
    PatientService patientService;

    @GetMapping("/{id}")
    public ResponseEntity<Patient> findPatientById(@PathVariable("id") int id){
        return new ResponseEntity<>(patientService.findById(id), HttpStatus.OK);
    }

}
