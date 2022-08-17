package com.devsimple.AdoteUmPet.services;

import com.devsimple.AdoteUmPet.model.User;
import com.devsimple.AdoteUmPet.repository.UserRepository;
import com.devsimple.AdoteUmPet.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository usuarioRepository;

    @Transactional
    public User search(Long id){
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException("User not found!"));
    }

    @Transactional
    public List<User> listAll(){
        return usuarioRepository.findAll();
    }

    @Transactional
    public User save(User user){
        return usuarioRepository.save(user);
    }

    @Transactional
    public void delete(Long id){
        usuarioRepository.deleteById(id);
    }
}
