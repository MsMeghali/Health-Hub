package com.example.healthhub.controller;

import com.example.healthhub.entity.Doctor;
import com.example.healthhub.entity.Login;
import com.example.healthhub.entity.Patient;
import com.example.healthhub.services.DoctorService;
import com.example.healthhub.services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@CrossOrigin
public class HomeController {
    @Autowired
    PatientService patientService;

    @Autowired
    DoctorService doctorService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Login details) {
        String email = details.getEmail();
        String password = details.getPassword();
        Optional<Patient> patient = patientService.getByEmailAndPassword(email, password);
        Optional<Doctor> doctor = doctorService.getByEmailAndPassword(email, password);
        if (patient.isPresent()) {
            return new ResponseEntity<Patient>(patient.get(), HttpStatus.OK);
        }
        if (doctor.isPresent()) {
            return new ResponseEntity<Doctor>(doctor.get(),HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }

    @PostMapping("/register/doctor")
    @ResponseBody
    public String doctorRegistration(@RequestBody Doctor details) {
        Doctor doctor = new Doctor(details.getDid(), details.getName(), details.getAadhar(), details.getAddress(), details.getMobile(), details.getCity(), details.getSpeciality(), new ArrayList<>());
        doctor.setEmail(details.getEmail());
        doctor.setPassword(details.getPassword());
        return doctorService.registerDoctor(doctor);
    }

    @PostMapping("/register/patient")
    @ResponseBody
    public String patientRegistration(@RequestBody Patient details) {
        Patient patient = new Patient(details.getPid(), details.getName(), details.getMobile(), details.getAadhar(), details.getDob(), details.getAddress(), details.getCity(), new ArrayList<>());
        patient.setEmail(details.getEmail());
        patient.setPassword(details.getPassword());
        return patientService.registerPatient(patient);
    }
}
