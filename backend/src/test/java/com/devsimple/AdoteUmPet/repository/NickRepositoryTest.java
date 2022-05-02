package com.devsimple.AdoteUmPet.repository;

import com.devsimple.AdoteUmPet.model.Nick;
import com.devsimple.AdoteUmPet.model.Nick;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

@DataJpaTest
@DisplayName("Nick Repository")
class NickRepositoryTest {

    @Autowired
    private NickRepository nickRepository;

    @Test
    @DisplayName("Save user persist when successful")
    void Save_PersistUser_WhenSuccessful(){
        Nick userSaved = createUser();
        Nick nickSaved = nickRepository.save(userSaved);

        Assertions.assertThat(nickSaved).isNotNull();

        Assertions.assertThat(nickSaved.getId()).isNotNull();

        Assertions.assertThat(nickSaved.getFirstName()).isEqualTo(userSaved.getFirstName());

        Assertions.assertThat(nickSaved.getLastName()).isEqualTo(userSaved.getLastName());

        Assertions.assertThat(nickSaved.getCity()).isEqualTo(userSaved.getCity());

        Assertions.assertThat(nickSaved.getState()).isEqualTo(userSaved.getState());

        Assertions.assertThat(nickSaved.getEmail()).isEqualTo(userSaved.getEmail());

        Assertions.assertThat(nickSaved.getPhone()).isEqualTo(userSaved.getPhone());

    }

    @Test
    @DisplayName("Save update Nick when successful")
    void save_UpdateNick_WhenSuccessful() {
        Nick userSaved = createUser();

        Nick nickSaved = nickRepository.save(userSaved);

        nickSaved.setFirstName("José");
        nickSaved.setLastName("Araújo");
        nickSaved.setCity("Oeiras");
        nickSaved.setState("Ceará");
        nickSaved.setEmail("jose@gmail.com");
        nickSaved.setPhone("87-3121-2123");

        Nick updateNick = nickRepository.save(nickSaved);

        Assertions.assertThat(updateNick).isNotNull();

        Assertions.assertThat(updateNick.getId()).isNotNull();

        Assertions.assertThat(updateNick.getFirstName()).isEqualTo(nickSaved.getFirstName());

        Assertions.assertThat(updateNick.getLastName()).isEqualTo(nickSaved.getLastName());

        Assertions.assertThat(updateNick.getCity()).isEqualTo(nickSaved.getCity());

        Assertions.assertThat(updateNick.getState()).isEqualTo(nickSaved.getState());

        Assertions.assertThat(updateNick.getEmail()).isEqualTo(nickSaved.getEmail());

        Assertions.assertThat(updateNick.getPhone()).isEqualTo(nickSaved.getPhone());

    }

    @Test
    @DisplayName("Delete nick when successful")
    void delete_RemovedNick_WhenSuccessful(){
        Nick userSaved = createUser();
        Nick nickSaved = nickRepository.save(userSaved);

        nickRepository.deleteById(nickSaved.getId());

        Optional<Nick> findById = nickRepository.findById(nickSaved.getId());

        Assertions.assertThat(findById).isEmpty();

    }

    private Nick createUser() {
        return Nick.builder()
                .firstName("Antonio")
                .lastName("Sousa")
                .city("Teresina")
                .state("Piauí")
                .email("antonio@gmail.com")
                .phone("86-9594-9404")
                .build();
    }

}