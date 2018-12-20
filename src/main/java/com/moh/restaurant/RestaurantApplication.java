package com.moh.restaurant;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import javax.transaction.Transactional;

import com.moh.restaurant.dao.ClientRepository;
import com.moh.restaurant.dao.FournisseurRepository;
import com.moh.restaurant.dao.PrivilegeRepository;
import com.moh.restaurant.dao.ProduitRepository;
import com.moh.restaurant.dao.RoleRepository;
import com.moh.restaurant.dao.TransactionRepository;
import com.moh.restaurant.dao.UserRepository;
import com.moh.restaurant.entities.Client;
import com.moh.restaurant.entities.Fournisseur;
import com.moh.restaurant.entities.Privilege;
import com.moh.restaurant.entities.Produit;
import com.moh.restaurant.entities.Role;
import com.moh.restaurant.entities.Transaction;
import com.moh.restaurant.entities.User;
import com.moh.restaurant.util.TransactType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationListener;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class RestaurantApplication {

	public static void main(String[] args) {
		final Logger log = LoggerFactory.getLogger(RestaurantApplication.class);


		ConfigurableApplicationContext ctx = SpringApplication.run(RestaurantApplication.class, args);
	
		ClientRepository clientRepository = ctx.getBean(ClientRepository.class);
		FournisseurRepository fournisseurRepository = ctx.getBean(FournisseurRepository.class);
		ProduitRepository produitRepository = ctx.getBean(ProduitRepository.class);
		RoleRepository roleRepository = ctx.getBean(RoleRepository.class);
		TransactionRepository transactionRepository = ctx.getBean(TransactionRepository.class);
		UserRepository userRepository = ctx.getBean(UserRepository.class);

		clientRepository.save(new Client("client 1", "blabal2", "blabla"));
		clientRepository.save(new Client("client 2", "blabal2", "blabla"));
		clientRepository.save(new Client("client 3", "blabal2", "blabla"));
		clientRepository.save(new Client("client 4", "blabal2", "blabla"));

		fournisseurRepository.save(new Fournisseur("Fournisseur 1", "blabal2", "blabla"));
		fournisseurRepository.save(new Fournisseur("Fournisseur 2", "blabal2", "blabla"));
		fournisseurRepository.save(new Fournisseur("Fournisseur 3", "blabal2", "blabla"));
		fournisseurRepository.save(new Fournisseur("Fournisseur 4", "blabal2", "blabla"));

		transactionRepository.save(new Transaction(LocalDate.now(),"Description",TransactType.TYPE_IN,160.0f));
		transactionRepository.save(new Transaction(LocalDate.now(),"Description1",TransactType.TYPE_OUT,160.0f));
		transactionRepository.save(new Transaction(LocalDate.now(),"Description2",TransactType.TYPE_DEVIS,150.0f));

		produitRepository.save(new Produit("Beaufort", 20,100.5f,150.5f));
		produitRepository.save(new Produit("Beaufort", 20,100.0f,160.0f));
		produitRepository.save(new Produit("Beaufort", 20,100.5f,150.5f));
		produitRepository.save(new Produit("Beaufort", 20,100.0f,160.0f));
		produitRepository.save(new Produit("Beaufort", 20,100.5f,150.5f));
		produitRepository.save(new Produit("Beaufort", 20,100.0f,160.0f));

	// 	Role roleUser = new Role(RoleEnum.ROLE_USER);
	// 	Role roleAdmin = new Role(RoleEnum.ROLE_ADMIN);
	// 	// if(!roleRepository.findByName(roleUser.getName()).equals(roleUser)){
	// 			roleRepository.save(roleUser);
	// 			// log.debug("role found", roleUser.getName());
	// 	// }
	// 	// if(!roleRepository.findByName(roleAdmin.getName()).equals(roleAdmin)){
			
	// 			roleRepository.save(roleAdmin);
	// // }
	

	// 	User user = new User("user", "password1", true);
	// 	user.setRoles(Arrays.asList(roleUser));
		
	// 	userRepository.save(user);
		
	// 	User admin = new User("admin", "password2", true);
	// 	admin.setRoles(Arrays.asList(roleUser, roleAdmin));
		
	// 	userRepository.save(admin);
	}
	@Component
	public class InitialDataLoader implements ApplicationListener<ContextRefreshedEvent> {
 
    boolean alreadySetup = false;
 
    @Autowired
    private UserRepository userRepository;
  
    @Autowired
    private RoleRepository roleRepository;
  
    @Autowired
    private PrivilegeRepository privilegeRepository;
  
    @Autowired
    private PasswordEncoder passwordEncoder;
  
    @Override
    @Transactional
    public void onApplicationEvent(ContextRefreshedEvent event) {
  
        if (alreadySetup)
            return;
        Privilege readPrivilege
          = createPrivilegeIfNotFound("READ_PRIVILEGE");
        Privilege writePrivilege
          = createPrivilegeIfNotFound("WRITE_PRIVILEGE");
  
        List<Privilege> adminPrivileges = Arrays.asList(
          readPrivilege, writePrivilege);        
        createRoleIfNotFound("ROLE_ADMIN", adminPrivileges);
        createRoleIfNotFound("ROLE_USER", Arrays.asList(readPrivilege));
 
        Role adminRole = roleRepository.findByName("ROLE_ADMIN");
        User user = new User();
        user.setUsername("Admin");
        user.setLastName("System");
        user.setPassword(passwordEncoder.encode("admin"));
        user.setEmail("test@test.com");
        user.setRoles(Arrays.asList(adminRole));
        user.setEnable(true);
        userRepository.save(user);
 
        alreadySetup = true;
    }
 
    @Transactional
    private Privilege createPrivilegeIfNotFound(String name) {
  
        Privilege privilege = privilegeRepository.findByName(name);
        if (privilege == null) {
            privilege = new Privilege(name);
            privilegeRepository.save(privilege);
        }
        return privilege;
    }
 
    @Transactional
    private Role createRoleIfNotFound(
      String name, Collection<Privilege> privileges) {
  
        Role role = roleRepository.findByName(name);
        if (role == null) {
            role = new Role(name);
            role.setPrivileges(privileges);
            roleRepository.save(role);
        }
        return role;
    }
}


}

