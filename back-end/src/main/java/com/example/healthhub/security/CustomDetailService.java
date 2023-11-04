//package com.example.healthhub.security;
//
//import com.example.healthhub.entity.Patient;
//import com.example.healthhub.repository.DoctorRepository;
//import com.example.healthhub.repository.PatientRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//@Service
//public class CustomDetailService implements UserDetailsService {
//    @Autowired
//    DoctorRepository dr;
//    @Autowired
//    PatientRepository pr;
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Patient p=pr.findByEmail(username).orElseThrow(()->new UsernameNotFoundException("Email not found"));
//
//        return new User(p.getEmail(),p.getPassword());
//    }
//
//}
