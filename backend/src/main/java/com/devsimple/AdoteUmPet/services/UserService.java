package com.devsimple.AdoteUmPet.services;

import com.devsimple.AdoteUmPet.model.Nick;
import com.devsimple.AdoteUmPet.repository.NickRepository;
import com.devsimple.AdoteUmPet.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private NickRepository usuarioRepository;

    @Transactional
    public Nick search(Long id){
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException("User not found!"));
    }

    @Transactional
    public List<Nick> listAll(){
        return usuarioRepository.findAll();
    }

    @Transactional
    public Nick save(Nick user){
        return usuarioRepository.save(user);
    }

    @Transactional
    public void delete(Long id){
        usuarioRepository.deleteById(id);
    }
}
