package com.devsimple.AdoteUmPet.controller;

import com.devsimple.AdoteUmPet.model.Pets;
import com.devsimple.AdoteUmPet.services.PetsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pets")
public class PetsController {

    @Autowired
    private PetsService petsService;

    @GetMapping
    public ResponseEntity<List<Pets>> findAll(){
        return ResponseEntity.ok(petsService.listAll());
    }

    @PostMapping
    public ResponseEntity<Pets> save(Pets pets){
        return ResponseEntity.ok(petsService.save(pets));
    }
}
