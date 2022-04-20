package com.devsimple.AdoteUmPet.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Data @NoArgsConstructor
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
    @Size(max = 255, message = "Deve conter 5 a 120 caracteres!")
    private String imagem;

    private boolean adotado;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "adotante_id")
    @JsonIgnore
    private Usuario adotante;

    public Pets(Long id, String nome, String tipo, String raca, Double peso, String imagem) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.raca = raca;
        this.peso = peso;
        this.imagem = imagem;
    }
}
