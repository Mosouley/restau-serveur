package com.moh.restaurant;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.moh.restaurant.dao.RoleRepository;
import com.moh.restaurant.entities.Role;
import com.moh.restaurant.entities.RoleName;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;



@SpringBootApplication
@Controller
public class RestaurantApplication implements ErrorController{

	public static void main(String[] args) {
		 SpringApplication.run(RestaurantApplication.class, args);

  }

  // important pour permettre l'actualisation de la page sans perdre lURL'
  private static final String PATH = "/error";

    @RequestMapping(value = PATH)
    public String error() {
        return "forward:/index.html";
    }

    @Override
    public String getErrorPath() {
        return PATH;
    }

// 	@Component
// 	public class InitialDataLoader implements ApplicationListener<ContextRefreshedEvent> {

//    boolean alreadySetup = false;

//    @Autowired
//    private RoleRepository roleRepository;

//    @Override
//    @Transactional
//    public void onApplicationEvent(ContextRefreshedEvent event) {

//     Set<Role> listRoles = new HashSet<Role>();

//     listRoles.add(new Role(RoleName.ROLE_ADMIN));
//     listRoles.add(new Role(RoleName.ROLE_PM));
//     listRoles.add(new Role(RoleName.ROLE_USER));
//     for (Role var : listRoles) {
//         createRoleIfNotFound(var.getName());
//     }
//    }
//     @Transactional
//     private Role createRoleIfNotFound(RoleName name) {

//         Optional<Role> optRole = roleRepository.findByName(name);
//         Role role = optRole.orElse(null);
//         if(role == null)
//         roleRepository.save(new Role(name));
//         return role;
//     }

// }

@Component
public class InitialDataLoader implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        List<Role> listRoles = new ArrayList<>();
        listRoles.add(new Role(RoleName.ROLE_ADMIN));
        listRoles.add(new Role(RoleName.ROLE_PM));
        listRoles.add(new Role(RoleName.ROLE_USER));
        for (Role var : listRoles) {
            createRoleIfNotFound(var.getName());
        }
    }

    @Transactional
    private Role createRoleIfNotFound(RoleName name) {

        Optional<Role> optRole = roleRepository.findByName(name);
        Role role = optRole.orElse(null);
        if(role == null)
        roleRepository.save(new Role(name));
        return role;
    }

  }
}





