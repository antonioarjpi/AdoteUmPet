package com.devsimple.AdoteUmPet.services;

import com.devsimple.AdoteUmPet.model.Usuario;
import com.devsimple.AdoteUmPet.repository.UsuarioRepository;
import com.devsimple.AdoteUmPet.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Transactional
    public Usuario search(Long id){
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException("Usuário não encontrado!"));
    }

    @Transactional
    public List<Usuario> listAll(){
        return usuarioRepository.findAll();
    }

    @Transactional
    public Usuario save(Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    @Transactional
    public void delete(Long id){
        usuarioRepository.deleteById(id);
    }
}
