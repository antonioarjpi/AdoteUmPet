package com.devsimple.AdoteUmPet.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Data @NoArgsConstructor @Builder @AllArgsConstructor
public class Pets {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 2, max = 120, message = "Deve conter 2 a 120 caracteres!")
    private String name;

    @NotBlank
    @Size(max = 120, message = "Deve conter 2 a 120 caracteres!")
    private String species;

    @NotBlank
    private String breed;

    private Double weight;

    @NotBlank
    @Size(max = 255, message = "Deve conter 5 a 120 caracteres!")
    private String image;

    private boolean adopted;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Nick user;

    @ManyToOne
    @JoinColumn(name = "adopter_id")
    private Nick adopter;

    public Pets(Long id, String name, String species, String breed, Double weight, String image, boolean adopted) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.breed = breed;
        this.weight = weight;
        this.image = image;
        this.adopted = adopted;
    }
}
