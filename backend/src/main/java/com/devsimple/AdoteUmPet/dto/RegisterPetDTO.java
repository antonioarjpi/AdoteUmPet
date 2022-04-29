package com.devsimple.AdoteUmPet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor @NoArgsConstructor @Data
public class RegisterPetDTO {

    private Long id;
    private String name;
    private String species;
    private String breed;
    private Double weight;
    private String image;
    private boolean adopted;
    private String firstAdopter;
    private String lastAdopter;
    private String email;
    private String phone;
    private String city;
    private String state;

}
