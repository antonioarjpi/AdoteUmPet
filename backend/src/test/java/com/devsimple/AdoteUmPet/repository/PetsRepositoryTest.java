package com.devsimple.AdoteUmPet.repository;

import com.devsimple.AdoteUmPet.model.Pets;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

@DataJpaTest
@DisplayName("Pet Repository")
class PetsRepositoryTest {

    @Autowired
    private PetsRepository petsRepository;

    @Test
    @DisplayName("Save Persist pets when successful")
    void save_PersistPets_WhenSuccessful() {
        Pets petsToSaved = createPets();

        Pets petsSave = petsRepository.save(petsToSaved);

        Assertions.assertThat(petsSave).isNotNull();

        Assertions.assertThat(petsSave.getId()).isNotNull();

        Assertions.assertThat(petsSave.getName()).isEqualTo(petsToSaved.getName());

        Assertions.assertThat(petsSave.getSpecies()).isEqualTo(petsToSaved.getSpecies());

        Assertions.assertThat(petsSave.getBreed()).isEqualTo(petsToSaved.getBreed());

        Assertions.assertThat(petsSave.getWeight()).isEqualTo(petsToSaved.getWeight());

        Assertions.assertThat(petsSave.isAdopted()).isFalse();

    }

    @Test
    @DisplayName("Save update pets when successful")
    void save_UpdatePets_WhenSuccessful() {
        Pets petsToSaved = createPets();

        Pets petsSave = petsRepository.save(petsToSaved);

        petsSave.setName("Mel");
        petsSave.setSpecies("Gato");
        petsSave.setBreed("Vira-lata");
        petsSave.setWeight(5.0);
        petsSave.setImage("https://i.ibb.co/7yQR6Cw/viralata.jpg");
        petsSave.setAdopted(true);

        Pets updatePets = petsRepository.save(petsSave);

        Assertions.assertThat(updatePets).isNotNull();

        Assertions.assertThat(updatePets.getId()).isNotNull();

        Assertions.assertThat(updatePets.getName()).isEqualTo(petsSave.getName());

        Assertions.assertThat(updatePets.getSpecies()).isEqualTo(petsSave.getSpecies());

        Assertions.assertThat(updatePets.getBreed()).isEqualTo(petsSave.getBreed());

        Assertions.assertThat(updatePets.getWeight()).isEqualTo(petsSave.getWeight());

        Assertions.assertThat(updatePets.isAdopted()).isTrue();

    }

    @Test
    @DisplayName("Delete pets when successful")
    void delete_RemovedPets_WhenSuccessful(){
        Pets createdPets = createPets();

        Pets petsSaved = petsRepository.save(createdPets);

        petsRepository.deleteById(petsSaved.getId());

        Optional<Pets> findById = petsRepository.findById(petsSaved.getId());

        Assertions.assertThat(findById).isEmpty();
    }

    @Test
    @DisplayName("Find By Adopted returns page when successful")
    void findByAdopted_RemovedPets_WhenSuccessful(){
        Pets createdPets = createPets();
        Pets petsSaved = petsRepository.save(createdPets);
        Boolean pets = createdPets.isAdopted();
        Page<Pets> petsPage = petsRepository.findByAdopted(pets, Pageable.unpaged());

        Assertions.assertThat(petsPage).isNotEmpty();
        Assertions.assertThat(petsPage).contains(petsSaved);
    }

    private Pets createPets(){
        return Pets.builder()
                .name("Nina")
                .species("Cachorro")
                .breed("Rottweiler")
                .weight(12.0)
                .image("https://i.ibb.co/F32zXZ7/rottweiler1.jpg")
                .adopted(false)
                .build();
    }

}