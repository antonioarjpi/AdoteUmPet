package com.devsimple.AdoteUmPet.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

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
