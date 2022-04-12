package com.devsimple.AdoteUmPet.controller;

import com.devsimple.AdoteUmPet.model.Pets;
import com.devsimple.AdoteUmPet.model.Usuario;
import com.devsimple.AdoteUmPet.services.PetsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/pets")
public class PetsController {

    @Autowired
    private PetsService petsService;

    @GetMapping
    public ResponseEntity<Page<Pets>> findAll(Pageable pageable){
        return ResponseEntity.ok(petsService.listAll(pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pets> findById(@PathVariable Long id){
        return ResponseEntity.ok(petsService.search(id));
    }

    @PostMapping
    public ResponseEntity<Pets> save(@RequestBody Pets pets){
        return ResponseEntity.ok(petsService.save(pets));
    }


    @PostMapping("/usuario/{usuarioId}/adotar/{PetId}")
    public ResponseEntity<Pets> adopt(@PathVariable Long usuarioId, @PathVariable Long PetId){
        return ResponseEntity.ok(petsService.adopt(usuarioId, PetId));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Pets> delete(@PathVariable Long id){
        petsService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
