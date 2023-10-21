package com.example.healthhub.repository;

import com.example.healthhub.entity.Consultation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ConsultationRepository extends JpaRepository<Consultation, Integer> {
    //@Query(value = "select * from Consultation where patient_id =:id", nativeQuery = true)
    //List<Consultation> findAllByPid(@Param("id") int patient_id);
    @Query(value = "select * from Consultation where patient_id=:id" ,nativeQuery = true)
    List<Consultation> findByPatientId(@Param("id") int id);
}
