package com.example.healthhub.services;

import com.example.healthhub.dto.PatientConsultationDto;
import com.example.healthhub.entity.Consultation;
import com.example.healthhub.entity.Doctor;
import com.example.healthhub.entity.Patient;
import com.example.healthhub.pojos.PatientConsultations;
import com.example.healthhub.repository.ConsultationRepository;
import com.example.healthhub.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class PatientService {
    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private ConsultationRepository consultationRepository;

    public Patient findById(int id) {

        Optional<Patient> p = patientRepository.findById(id);
        Patient patient = p.isPresent() ? p.get() : null;
        return patient;

    }

    public PatientConsultationDto findByIdAndGroupByDoctor(int id) {
        Optional<Patient> p = patientRepository.findById(id);
        Patient patient = p.isPresent() ? p.get() : null;
        if (patient == null) {
            return null;
        }
        List<Consultation> consultations = consultationRepository.findByPatientId(id);
        HashMap<Doctor, List<Consultation>> map = new HashMap<>();
        consultations.stream().forEach((c) -> {
            if (map.containsKey(c.getDoctor())) {
                map.get(c.getDoctor()).add(c);
            } else {
                List<Consultation> list = new ArrayList<>();
                list.add(c);
                map.put(c.getDoctor(), list);
            }
        });
        List<PatientConsultations> patientConsultations = new ArrayList<>();
        for(Doctor d: map.keySet()){
            List<Consultation> c=map.get(d);
            for(Consultation c2:c){
                patientConsultations.add(new PatientConsultations(d,c2));
            }
        }
        return new PatientConsultationDto(patient, patientConsultations);
    }

    public Optional<Patient> getByEmailAndPassword(String email, String password) {
        return patientRepository.findByEmailAndPassword(email, password);
    }

    public String registerPatient(Patient p) {
        if (patientRepository.findById(p.getPid()).isPresent()
                || patientRepository.findByEmail(p.getEmail()).isPresent()
                || patientRepository.findByAadhar(p.getAadhar()).isPresent()
                || patientRepository.findByMobile(p.getMobile()).isPresent()) {
            return "Patient already Exist";
        } else {
            patientRepository.save(p);
            return "Successfully registered";
        }
    }
}
