package com.devsimple.AdoteUmPet.model;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Data @NoArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 2, max = 120, message = "Deve conter 2 a 120 caracteres!")
    private String nome;

    @NotNull
    @Size(min = 3, max = 120, message = "Deve conter 3 a 120 caracteres!")
    private String local;

    @NotNull
    @Size(min = 5, max = 120, message = "Deve conter 5 a 120 caracteres!")
    private String email;
}
