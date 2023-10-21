package com.example.healthhub.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@JsonInclude(JsonInclude.Include.NON_EMPTY)
@Table(name="consultation")
public class Consultation {
    @Id
    @Column(name="consultation_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cid;
    @JsonFormat(pattern="yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;
    @NonNull
    private String diagnosis;
    @NonNull
    private String prognosis;
    @NonNull
    private String medicines;

    @ManyToOne()
    @JsonBackReference(value="doctor_id")
    @JoinColumn(name="doctor_id")
    private Doctor doctor;

    @ManyToOne()
    @JsonBackReference(value="patient_id")
    @JoinColumn(name="patient_id")
    private Patient patient;

    public Consultation(LocalDate date, String prognosis, String medicines, String diagnosis, Patient patient,
                        Doctor doctor) {
        super();
        this.date = date;
        this.prognosis = prognosis;
        this.medicines = medicines;
        this.diagnosis = diagnosis;
        this.patient = patient;
        this.doctor = doctor;
    }

}
