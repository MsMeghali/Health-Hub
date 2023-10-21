package com.example.healthhub.dto;

import com.example.healthhub.entity.Consultation;
import com.example.healthhub.entity.Patient;
import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PatientConsultationDto {
    private Patient patient;
    private List<Consultation> consultations;
}
