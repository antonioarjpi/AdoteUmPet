package com.devsimple.AdoteUmPet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor @NoArgsConstructor
@Data
public class Adotar {

    private Long petId;
    private String email;
    private String nome;
    private String local;
}
