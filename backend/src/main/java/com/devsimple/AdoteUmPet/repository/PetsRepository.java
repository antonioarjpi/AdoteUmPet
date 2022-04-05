package com.devsimple.AdoteUmPet.repository;

import com.devsimple.AdoteUmPet.model.Pets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PetsRepository extends JpaRepository<Pets, Long> {
}
