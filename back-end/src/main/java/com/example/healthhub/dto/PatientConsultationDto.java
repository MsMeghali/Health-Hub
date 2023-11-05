package com.example.healthhub.dto;

import com.example.healthhub.entity.Consultation;
import com.example.healthhub.entity.Patient;
import com.example.healthhub.pojos.PatientConsultations;
import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PatientConsultationDto {
    private Patient patient;
    private List<PatientConsultations> patientConsultations;
}
