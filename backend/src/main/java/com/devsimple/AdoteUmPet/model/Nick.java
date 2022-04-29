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
import javax.validation.constraints.Size;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Nick {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "first name field cannot be blank")
    @Size(min = 2, max = 255)
    private String firstName;

    @NotBlank(message = "last name field cannot be blank")
    @Size(min = 2, max = 255)
    private String lastName;

    @NotBlank(message = "phone field cannot be blank")
    @Size(min = 2, max = 255)
    private String phone;

    @NotBlank(message = "city field cannot be blank")
    @Size(min = 2, max = 255)
    private String city;

    @NotBlank(message = "state field cannot be blank")
    @Size(min = 2, max = 255)
    private String state;

    @Email
    @NotBlank(message = "email field cannot be blank")
    @Size(min = 2, max = 255)
    private String email;

}
