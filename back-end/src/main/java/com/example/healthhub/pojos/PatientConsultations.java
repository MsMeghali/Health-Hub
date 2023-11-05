package com.example.healthhub.pojos;

import com.example.healthhub.entity.Consultation;
import com.example.healthhub.entity.Doctor;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PatientConsultations {
    private Doctor doctor;
    private Consultation consultation;
}

