package com.devsimple.AdoteUmPet.repository;

import com.devsimple.AdoteUmPet.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    @Transactional
    Usuario findByEmail(String email);
}
