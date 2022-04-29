package com.devsimple.AdoteUmPet.repository;

import com.devsimple.AdoteUmPet.model.Pets;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface PetsRepository extends JpaRepository<Pets, Long> {

    @Transactional
    Page<Pets> findByAdopted(Boolean adopted, Pageable pageable);
}
