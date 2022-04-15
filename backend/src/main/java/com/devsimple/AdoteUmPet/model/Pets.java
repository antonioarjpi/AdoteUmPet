package com.devsimple.AdoteUmPet.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Pets {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 2, max = 120, message = "Deve conter 2 a 120 caracteres!")
    private String nome;

    @NotBlank
    @Size(max = 120, message = "Deve conter 2 a 120 caracteres!")
    private String tipo;

    @NotBlank
    private String raca;

    private Double peso;

    @NotBlank
    @Size(max = 120, message = "Deve conter 5 a 120 caracteres!")
    private String local;

    @NotBlank
    @Size(max = 255, message = "Deve conter 5 a 120 caracteres!")
    private String imagem1;
    private String imagem2;
    private String imagem3;
    private boolean adotado;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    @JsonIgnore
    private Usuario usuario;

}
