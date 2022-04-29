package com.devsimple.AdoteUmPet.controller;


import com.devsimple.AdoteUmPet.model.Nick;
import com.devsimple.AdoteUmPet.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UserController {

    @Autowired
    private UserService usuarioService;

    @GetMapping
    public ResponseEntity<List<Nick>> listAll(){
        return ResponseEntity.ok(usuarioService.listAll());
    }

    @PostMapping
    public ResponseEntity<Nick> save(@RequestBody Nick usuario){
        return ResponseEntity.ok(usuarioService.save(usuario));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Nick> findById(@PathVariable Long id){
        return ResponseEntity.ok(usuarioService.search(id));
    }
}
