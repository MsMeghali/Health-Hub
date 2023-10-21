package com.example.healthhub.services;

import com.example.healthhub.repository.ConsultationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConsultationService {
    @Autowired
    private ConsultationRepository consultationRepository;
}
