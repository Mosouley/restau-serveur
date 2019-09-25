package com.moh.restaurant.controller;

import javax.validation.Valid;

import com.moh.restaurant.dao.InvoiceRepository;
import com.moh.restaurant.entities.Invoice;
import com.moh.restaurant.entities.TransactionLine;
import com.moh.restaurant.service.InvoiceService;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/invoice")
// @CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
public class InvoiceController extends CrudController<Invoice> {

    // private InvoiceService invoiceService;
    // public InvoiceController(InvoiceService invoiceService){
    //     this.invoiceService = invoiceService;
    // }
//     @Override
//     @PostMapping 
//     public void add( @Valid  @RequestBody Invoice inv){
//         if(inv.getTransactionLines() !=null){
//             for (TransactionLine tx : inv.getTransactionLines()) {
//                 tx.setInvoice(inv);
//             }
//              this.invoiceService.add( inv);  
//         }
             
// }
//     @PostMapping ("/{invoiceId}/transax")
//     public void addTransactionLine(@PathVariable(value = "invoiceId") Long invoiceId, @Valid  @RequestBody TransactionLine transax){
     
//         this.invoiceService.addTansactionLine(invoiceId, transax);        
// }
}
