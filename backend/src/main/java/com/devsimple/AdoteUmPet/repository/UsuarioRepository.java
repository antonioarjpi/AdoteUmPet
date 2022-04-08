package com.devsimple.AdoteUmPet.repository;

import com.devsimple.AdoteUmPet.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
