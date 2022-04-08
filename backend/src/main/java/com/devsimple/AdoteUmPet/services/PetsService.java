package com.devsimple.AdoteUmPet.services;

import com.devsimple.AdoteUmPet.model.Pets;
import com.devsimple.AdoteUmPet.repository.PetsRepository;
import com.devsimple.AdoteUmPet.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PetsService {

    @Autowired
    private PetsRepository petsRepository;

    @Transactional
    public Pets search(Long id){
        return petsRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException("Pet não encontrado!"));
    }

    @Transactional
    public Page<Pets> listAll(Pageable page){
        return petsRepository.findAll(page);
    }

    @Transactional
    public Pets save(Pets pet){
        return petsRepository.save(pet);
    }

    @Transactional
    public Pets adopt(Long id){
        Pets pets = search(id);
        pets.setAdotado(true);
        return petsRepository.save(pets);
    }

    @Transactional
    public void delete(Long id){
        try{
            petsRepository.deleteById(id);
        }catch (DataIntegrityViolationException e){
            throw new ObjectNotFoundException("Pet não encontrado");
        }
    }
}
