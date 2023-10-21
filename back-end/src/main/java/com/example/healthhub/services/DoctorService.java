package com.example.healthhub.services;

import com.example.healthhub.dto.DoctorConsultationDto;
import com.example.healthhub.dto.PatientConsultationDto;
import com.example.healthhub.entity.Consultation;
import com.example.healthhub.entity.Doctor;
import com.example.healthhub.entity.Patient;
import com.example.healthhub.repository.ConsultationRepository;
import com.example.healthhub.repository.DoctorRepository;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;
    @Autowired
    private ConsultationRepository consultationRepository;
    public Doctor findById(int id){
        Optional<Doctor> d=doctorRepository.findById(id);
        Doctor doctor=d.isPresent()?d.get():null;
        return doctor;
    }
    public List<Doctor> getDoctorByCityAndSpeciality(String city, String speciality){
        return doctorRepository.findByCityAndSpecialityIgnoreCasePartialMatch(city.trim().toLowerCase(),speciality.trim().toLowerCase());
    }
    public DoctorConsultationDto findByIdAndGroupByPatient(int id){
        Optional<Doctor> d=doctorRepository.findById(id);
       Doctor doctor=d.isPresent()?d.get():null;
        if(doctor==null){
            return null;
        }
        List<Consultation> consultations= consultationRepository.findByPatientId(id);
        HashMap<Patient, List<Consultation>> map=new HashMap<>();
        consultations.stream().forEach((c)->{
            if(map.containsKey(c.getPatient())){
                map.get(c.getPatient()).add(c);
            }
            else{
                List<Consultation> list=new ArrayList<>();
                list.add(c);
                map.put(c.getPatient(),list);
            }
        });
        List<Consultation> doctorConsultations=new ArrayList<>();
        for (Patient p: map.keySet() ){
            doctorConsultations.addAll(map.get(p));
        }
        return new DoctorConsultationDto(doctor,doctorConsultations);
    }

    public Optional<Doctor> getByEmailAndPassword(String email, String password){
        return doctorRepository.findByEmailAndPassword(email,password);
    }

    public String registerDoctor(Doctor d){
        if(doctorRepository.findById(d.getDid()).isPresent()){
            return "Doctor already Exist";
        }
        else{

            doctorRepository.save(d);
            return "Successfully registered";
        }
    }

}
