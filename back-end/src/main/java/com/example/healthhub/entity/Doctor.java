package com.example.healthhub.entity;


import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@JsonInclude(JsonInclude.Include.NON_EMPTY)
@Table(name="doctor")
public class Doctor extends Login{
    @Id
    @Column(name="doctor_id")
    private int did;
    private String name;
    @Column(unique = true)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String aadhar;
    private String address;
    @Column(unique = true)
    private String mobile;
    private String city;
    private String speciality;


    @OneToMany(mappedBy = "doctor")
    @JsonManagedReference(value="doctor_id")
    private List<Consultation> consultations;

}
