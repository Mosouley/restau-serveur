package com.moh.restaurant.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.time.LocalDate;
import java.util.Collection;
@Entity
public class Appro {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    @Column(unique =true, nullable =false)
    private String approRef;

    private LocalDate dateAppro;
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "appro_id")
    @JsonManagedReference(value="appro-details")
    private Collection<TransactionLine> transactionLines;

    @ManyToOne
    private  User user;

    /**
     * @return the approRef
     */
    public String getApproRef() {
        return approRef;
    }
    /**
     * @param approRef the approRef to set
     */
    public void setApproRef(String approRef) {
        this.approRef = approRef;
    }
    public Long getId() {
        return id;
    }

    /**
     * @return the dateAppro
     */
    public LocalDate getDateAppro() {
        return dateAppro;
    }

    /**
     * @param dateAppro the dateAppro to set
     */
    public void setDateAppro(LocalDate dateAppro) {
        this.dateAppro = dateAppro;
    }

    public void setId(Long id) {
        this.id = id;
    }

   

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    /**
     * @return the transactionLines
     */
    public Collection<TransactionLine> getTransactionLines() {
        return transactionLines;
    }
 
    /**
     * @param transactionLines the transactionLines to set
     */
    public void setTransactionLines(Collection<TransactionLine> transactionLines) {
        this.transactionLines = transactionLines;
    }

}
