package com.devsimple.AdoteUmPet.repository;

import com.devsimple.AdoteUmPet.model.Nick;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public interface UsuarioRepository extends JpaRepository<Nick, Long> {

    @Transactional
    Nick findByEmail(String email);
}
