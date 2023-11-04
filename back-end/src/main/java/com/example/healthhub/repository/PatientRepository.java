package com.example.healthhub.repository;

import com.example.healthhub.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PatientRepository extends JpaRepository<Patient, Integer> {


    Optional<Patient> findByEmailAndPassword(String email, String password);

    Optional<Patient> findByEmail(String email);

    Optional<Object> findByAadhar(String aadhar);

    Optional<Object> findByMobile(String mobile);
}
