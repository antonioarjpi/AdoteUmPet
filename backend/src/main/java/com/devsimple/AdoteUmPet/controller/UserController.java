package com.devsimple.AdoteUmPet.controller;


import com.devsimple.AdoteUmPet.model.User;
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
    public ResponseEntity<List<User>> listAll(){
        return ResponseEntity.ok(usuarioService.listAll());
    }

    @PostMapping
    public ResponseEntity<User> save(@RequestBody User usuario){
        return ResponseEntity.ok(usuarioService.save(usuario));
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findById(@PathVariable Long id){
        return ResponseEntity.ok(usuarioService.search(id));
    }
}
