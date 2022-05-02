package com.devsimple.AdoteUmPet.services;

import com.devsimple.AdoteUmPet.dto.RegisterPetDTO;
import com.devsimple.AdoteUmPet.model.Nick;
import com.devsimple.AdoteUmPet.model.Pets;
import com.devsimple.AdoteUmPet.repository.PetsRepository;
import com.devsimple.AdoteUmPet.repository.NickRepository;
import com.devsimple.AdoteUmPet.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PetsService {

    @Autowired
    private PetsRepository petsRepository;

    @Autowired
    private UserService usuarioService;

    @Autowired
    private NickRepository usuarioRepository;

    @Transactional
    public Pets search(Long id){
        return petsRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException("Pet not found!"));
    }

    @Transactional
    public Page<Pets> listAll(Pageable page){
        return petsRepository.findAll(page);
    }

    @Transactional
    public Page<Pets> listAdopted(Boolean adopted, Pageable pageable){
        return petsRepository.findByAdopted(adopted, pageable);
    }

    @Transactional
    public Pets save(RegisterPetDTO petDTO){
        Pets pets = new Pets(null, petDTO.getName(), petDTO.getSpecies(),  petDTO.getBreed(),
                petDTO.getWeight(), petDTO.getImage(), petDTO.isAdopted());

        Nick nick = usuarioRepository.findByEmail(petDTO.getEmail());

        if (nick == null){
            Nick user = new Nick(null, petDTO.getFirstAdopter(), petDTO.getLastAdopter(), petDTO.getPhone(), petDTO.getCity(),
                    petDTO.getState(), petDTO.getEmail());
            pets.setUser(user);
            user = usuarioService.save(user);
        }else{
            pets.setUser(nick);
        }
        pets = petsRepository.save(pets);
        return pets;
    }

    @Transactional
    public Pets adopt(Nick usuario, Long PetId){
        Pets pets = search(PetId);
        Nick user = usuarioRepository.findByEmail(usuario.getEmail());
        if (user == null){
            user = new Nick();
            user.setEmail(usuario.getEmail());
            user.setFirstName(usuario.getFirstName());
            user.setLastName(usuario.getLastName());
            user.setState(usuario.getState());
            user.setCity(usuario.getCity());
            user.setPhone(usuario.getPhone());

            user = usuarioRepository.save(user);
        }
        pets.setAdopted(true);
        pets.setAdopter(user);

        return petsRepository.save(pets);
    }

    @Transactional
    public void delete(Long id){
        search(id);
        petsRepository.deleteById(id);
    }
}
