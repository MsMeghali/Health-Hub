package com.example.healthhub.controller;

import com.example.healthhub.dto.ConsultationDto;
import com.example.healthhub.dto.DoctorConsultationDto;
import com.example.healthhub.dto.PatientConsultationDto;
import com.example.healthhub.entity.Consultation;
import com.example.healthhub.entity.Doctor;
import com.example.healthhub.entity.Patient;
import com.example.healthhub.repository.ConsultationRepository;
import com.example.healthhub.repository.PatientRepository;
import com.example.healthhub.services.DoctorService;
import com.example.healthhub.services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/consultation")
public class ConsultationController {
    @Autowired
    private PatientService patientService;
    @Autowired
    private DoctorService doctorService;

    @Autowired
    private ConsultationRepository repo;

    @GetMapping("/patient/{id}")
    public ResponseEntity<PatientConsultationDto> getPatientConsultation(@PathVariable("id") int id){
        return new ResponseEntity<>(patientService.findByIdAndGroupByDoctor(id),HttpStatus.OK);
    }

    @GetMapping("doctor/{id}")
    public ResponseEntity<DoctorConsultationDto> getDoctorConsultation(@PathVariable("id") int id){
        return new ResponseEntity<>(doctorService.findByIdAndGroupByPatient(id),HttpStatus.OK);
    }

    @PostMapping("/consult")
    public String consultPatient(@RequestBody ConsultationDto consultationDto){
        int pid=consultationDto.getPid();
        int did=consultationDto.getDid();
        if(patientService.findById(pid)!=null && doctorService.findById(did)!=null){

            String prognosis=consultationDto.getPrognosis();
            String diagnosis=consultationDto.getDiagnosis();
            String medicines=consultationDto.getMedicines();
            Consultation c=new Consultation( LocalDate.now(), diagnosis,prognosis
                    ,medicines,patientService.findById(pid),doctorService.findById(did));
            repo.save(c);
            return "Consulted successfully";
        }
        else{
            return "Consultation Failed";
        }
    }

}
