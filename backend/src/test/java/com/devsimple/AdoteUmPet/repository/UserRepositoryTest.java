package com.devsimple.AdoteUmPet.repository;

import com.devsimple.AdoteUmPet.model.User;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

@DataJpaTest
@DisplayName("User Repository")
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    @DisplayName("Save user persist when successful")
    void Save_PersistUser_WhenSuccessful(){
        User userSaved = createUser();
        User userToSaved = userRepository.save(userSaved);

        Assertions.assertThat(userToSaved).isNotNull();

        Assertions.assertThat(userToSaved.getId()).isNotNull();

        Assertions.assertThat(userToSaved.getFirstName()).isEqualTo(userSaved.getFirstName());

        Assertions.assertThat(userToSaved.getLastName()).isEqualTo(userSaved.getLastName());

        Assertions.assertThat(userToSaved.getCity()).isEqualTo(userSaved.getCity());

        Assertions.assertThat(userToSaved.getState()).isEqualTo(userSaved.getState());

        Assertions.assertThat(userToSaved.getEmail()).isEqualTo(userSaved.getEmail());

        Assertions.assertThat(userToSaved.getPhone()).isEqualTo(userSaved.getPhone());

    }

    @Test
    @DisplayName("Save update Nick when successful")
    void save_UpdateNick_WhenSuccessful() {
        User userSaved = createUser();

        User userToSaved = userRepository.save(userSaved);

        userToSaved.setFirstName("José");
        userToSaved.setLastName("Araújo");
        userToSaved.setCity("Oeiras");
        userToSaved.setState("Ceará");
        userToSaved.setEmail("jose@gmail.com");
        userToSaved.setPhone("87-3121-2123");

        User updateNick = userRepository.save(userToSaved);

        Assertions.assertThat(updateNick).isNotNull();

        Assertions.assertThat(updateNick.getId()).isNotNull();

        Assertions.assertThat(updateNick.getFirstName()).isEqualTo(userToSaved.getFirstName());

        Assertions.assertThat(updateNick.getLastName()).isEqualTo(userToSaved.getLastName());

        Assertions.assertThat(updateNick.getCity()).isEqualTo(userToSaved.getCity());

        Assertions.assertThat(updateNick.getState()).isEqualTo(userToSaved.getState());

        Assertions.assertThat(updateNick.getEmail()).isEqualTo(userToSaved.getEmail());

        Assertions.assertThat(updateNick.getPhone()).isEqualTo(userToSaved.getPhone());

    }

    @Test
    @DisplayName("Delete nick when successful")
    void delete_RemovedNick_WhenSuccessful(){
        User userSaved = createUser();
        User userToSaved = userRepository.save(userSaved);

        userRepository.deleteById(userToSaved.getId());

        Optional<User> findById = userRepository.findById(userToSaved.getId());

        Assertions.assertThat(findById).isEmpty();

    }

    private User createUser() {
        return User.builder()
                .firstName("Antonio")
                .lastName("Sousa")
                .city("Teresina")
                .state("Piauí")
                .email("antonio@gmail.com")
                .phone("86-9594-9404")
                .build();
    }

}