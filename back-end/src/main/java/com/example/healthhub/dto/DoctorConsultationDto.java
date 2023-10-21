package com.example.healthhub.dto;

import com.example.healthhub.entity.Consultation;
import com.example.healthhub.entity.Doctor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DoctorConsultationDto {
    private Doctor doctor;
    private List<Consultation> consultations;
}
