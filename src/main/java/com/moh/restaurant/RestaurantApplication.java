package com.moh.restaurant;

import com.moh.restaurant.entities.Transactions;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
//import org.springframework.security.crypto.password.PasswordEncoder;


@SpringBootApplication
public class RestaurantApplication {

	public static void main(String[] args) {
		final Logger log = LoggerFactory.getLogger(RestaurantApplication.class);


		ConfigurableApplicationContext ctx = SpringApplication.run(RestaurantApplication.class, args);
	
		// ClientRepository clientRepository = ctx.getBean(ClientRepository.class);
		// FournisseurRepository fournisseurRepository = ctx.getBean(FournisseurRepository.class);
		// ProduitRepository produitRepository = ctx.getBean(ProduitRepository.class);
		// RoleRepository roleRepository = ctx.getBean(RoleRepository.class);
		// TransactionRepository transactionRepository = ctx.getBean(TransactionRepository.class);
		// UserRepository userRepository = ctx.getBean(UserRepository.class);

		// clientRepository.save(new Client("client 1", "blabal2"));
		// clientRepository.save(new Client("client 2", "blabal2"));
		// clientRepository.save(new Client("client 3", "blabal2"));
		// clientRepository.save(new Client("client 4", "blabal2"));

		// fournisseurRepository.save(new Fournisseur("Fournisseur 1", "blabal2", "blabla"));
		// fournisseurRepository.save(new Fournisseur("Fournisseur 2", "blabal2", "blabla"));
		// fournisseurRepository.save(new Fournisseur("Fournisseur 3", "blabal2", "blabla"));
		// fournisseurRepository.save(new Fournisseur("Fournisseur 4", "blabal2", "blabla"));

		// transactionRepository.save(new Transaction(LocalDate.now(),"Description",TransactType.TYPE_IN,160.0f));
		// transactionRepository.save(new Transaction(LocalDate.now(),"Description1",TransactType.TYPE_OUT,160.0f));
		// transactionRepository.save(new Transaction(LocalDate.now(),"Description2",TransactType.TYPE_DEVIS,150.0f));

		// produitRepository.save(new Produit("Beaufort", 20,100.5f,150.5f));
		// produitRepository.save(new Produit("Beaufort", 20,100.0f,160.0f));
		// produitRepository.save(new Produit("Beaufort", 20,100.5f,150.5f));
		// produitRepository.save(new Produit("Beaufort", 20,100.0f,160.0f));
		// produitRepository.save(new Produit("Beaufort", 20,100.5f,150.5f));
		// produitRepository.save(new Produit("Beaufort", 20,100.0f,160.0f));


	}
//	@Component
//	public class InitialDataLoader implements ApplicationListener<ContextRefreshedEvent> {
//
//    boolean alreadySetup = false;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private RoleRepository roleRepository;
//
//    @Autowired
//    private PrivilegeRepository privilegeRepository;
//
////    @Autowired
////    private PasswordEncoder passwordEncoder;
//
//    @Autowired
//    UserService service;
//
//    @Override
//    @Transactional
//    public void onApplicationEvent(ContextRefreshedEvent event) {
//
//        if (alreadySetup)
//            return;
//        Privilege readPrivilege
//          = createPrivilegeIfNotFound("READ_PRIVILEGE");
//        Privilege writePrivilege
//          = createPrivilegeIfNotFound("WRITE_PRIVILEGE");
//
//        List<Privilege> adminPrivileges = Arrays.asList(
//          readPrivilege, writePrivilege);
//        createRoleIfNotFound("ROLE_ADMIN", adminPrivileges);
//        createRoleIfNotFound("ROLE_USER", Arrays.asList(readPrivilege));
//
//        Role adminRole = roleRepository.findByName("ROLE_ADMIN");
//
//
//        User user = new User();
//        user.setUsername("Admin");
//        user.setLastName("System");
//        user.setPassword("admin");
//        user.setEmail("test@test.com");
//        user.setRoles(Arrays.asList(adminRole));
//        user.setEnable(true);
//        user.setTokenExpired(false);
//
//         if (userNameExist(user.getUsername())) {
//            return;
//                }
//                 userRepository.save(user);
//
//                alreadySetup = true;
//            }
//
//    @Transactional
//    private Privilege createPrivilegeIfNotFound(String name) {
//
//        Privilege privilege = privilegeRepository.findByName(name);
//        if (privilege == null) {
//            privilege = new Privilege(name);
//            privilegeRepository.save(privilege);
//        }
//        return privilege;
//    }
//
//    @Transactional
//    private Role createRoleIfNotFound(
//      String name, Collection<Privilege> privileges) {
//
//        Role role = roleRepository.findByName(name);
//        if (role == null) {
//            role = new Role(name);
//            role.setPrivileges(privileges);
//            roleRepository.save(role);
//        }
//        return role;
//    }
//
//
//    private boolean userNameExist(final String userName) {
//        return userRepository.findByUsername(userName) != null;
//	}
//}



}

