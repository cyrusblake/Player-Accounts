package com.player.player.controllers;

import com.player.player.models.Player;
import com.player.player.repositories.PlayerJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/players")
public class PlayerRestController {

    @Autowired
    private PlayerJpaRepository jpaRepository;

    @GetMapping("")
    public List<Player> ListPlayers(){
        return jpaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Player getPlayer(@PathVariable Long id){
        return jpaRepository.getReferenceById(id);
    }

    @PostMapping("")
    public Player createPlayer(@RequestBody Player player){
        return jpaRepository.save(player);
    }

    @PutMapping("/{id}")
    public Player updatePlayer(@RequestBody Player player, @PathVariable Long id){
        Player p = jpaRepository.getReferenceById(id);
        p.setName(player.getName());
        p.setRace(player.getRace());
        p.setPclass(player.getPclass());
        p.setLevel(player.getLevel());
        p.setServer(player.getServer());
        return jpaRepository.save(p);
    }

    @DeleteMapping("/{id}")
    public void deletePlayer(Long id){
        jpaRepository.deleteById(id);
    }

}
