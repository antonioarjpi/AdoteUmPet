package com.devsimple.AdoteUmPet.services;

import com.devsimple.AdoteUmPet.dto.CadastrarPetDTO;
import com.devsimple.AdoteUmPet.model.Pets;
import com.devsimple.AdoteUmPet.model.Usuario;
import com.devsimple.AdoteUmPet.repository.PetsRepository;
import com.devsimple.AdoteUmPet.repository.UsuarioRepository;
import com.devsimple.AdoteUmPet.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PetsService {

    @Autowired
    private PetsRepository petsRepository;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Transactional
    public Pets search(Long id){
        return petsRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException("Pet não encontrado!"));
    }

    @Transactional
    public Page<Pets> listAll(Pageable page){
        return petsRepository.findAll(page);
    }

    @Transactional
    public Pets save(CadastrarPetDTO petDTO){
        Pets pets = new Pets(null, petDTO.getNome(), petDTO.getTipo(),  petDTO.getRaca(), petDTO.getPeso(), petDTO.getImagem());

        Usuario user = usuarioRepository.findByEmail(petDTO.getEmail());

        if (user == null){
            Usuario usuario = new Usuario(null, petDTO.getNomeAdotante(), petDTO.getContato(), petDTO.getCidade(),
                    petDTO.getEstado(), petDTO.getEmail());
            pets.setUsuario(usuario);
            usuario = usuarioService.save(usuario);
            pets = petsRepository.save(pets);

        }else{
            pets.setUsuario(user);
            pets = petsRepository.save(pets);
        }
        return pets;
    }

    @Transactional
    public Pets adopt(Usuario usuario, Long PetId){
        Pets pets = search(PetId);
        Usuario user = usuarioRepository.findByEmail(usuario.getEmail());
        if (user == null){
            user = new Usuario();
            user.setEmail(usuario.getEmail());
            user.setNome(usuario.getNome());
            user.setEstado(usuario.getEstado());
            user.setCidade(usuario.getCidade());
            user.setContato(usuario.getContato());

            user = usuarioRepository.save(user);
        }
        pets.setAdotado(true);
        pets.setAdotante(user);

        return petsRepository.save(pets);
    }

    @Transactional
    public void delete(Long id){
        try{
            petsRepository.deleteById(id);
        }catch (EmptyResultDataAccessException e){
            throw new ObjectNotFoundException("Pet não encontrado");
        }
    }
}
