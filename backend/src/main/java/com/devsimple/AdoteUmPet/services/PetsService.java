package com.devsimple.AdoteUmPet.services;

import com.devsimple.AdoteUmPet.model.Pets;
import com.devsimple.AdoteUmPet.repository.PetsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PetsService {

    @Autowired
    private PetsRepository petsRepository;

    @Transactional
    public List<Pets> listAll(){
        return petsRepository.findAll();
    }

    @Transactional
    public Pets save(Pets pet){
        return petsRepository.save(pet);
    }
}
