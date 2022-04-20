package com.devsimple.AdoteUmPet.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 2, max = 120, message = "Deve conter 2 a 120 caracteres!")
    private String nome;

    private String contato;

    @NotBlank
    @Size(max = 120, message = "Deve conter 5 a 120 caracteres!")
    private String cidade;

    @NotBlank
    @Size(max = 50, message = "Deve conter 5 a 120 caracteres!")
    private String estado;

    @Email
    @Size(max = 50, message = "Deve conter 5 a 120 caracteres!")
    private String email;
}
