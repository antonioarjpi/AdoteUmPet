package com.devsimple.AdoteUmPet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor @NoArgsConstructor @Data
public class CadastrarPetDTO {

    private Long id;
    private String nome;
    private String tipo;
    private String raca;
    private Double peso;
    private String cidade;
    private String estado;
    private String imagem;
    private boolean adotado;
    private String nomeAdotante;
    private String email;
    private String contato;

}
