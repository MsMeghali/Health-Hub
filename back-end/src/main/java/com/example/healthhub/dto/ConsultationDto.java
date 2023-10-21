package com.example.healthhub.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ConsultationDto {

    private int did;
    private int pid;
    private LocalDate date;
    private String diagnosis;
    private String prognosis;
    private String medicines;
}
