package com.example.healthhub.repository;

import com.example.healthhub.entity.Doctor;
import com.example.healthhub.entity.Patient;
import com.example.healthhub.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
    @Query(value = "select * from Doctor where lower(city) like %:city% and lower(speciality) like %:speciality%", nativeQuery = true)
    List<Doctor> findByCityAndSpecialityIgnoreCasePartialMatch(@Param("city") String city,@Param("speciality") String speciality);

    Optional<Doctor> findByEmailAndPassword(String email, String password);
}
