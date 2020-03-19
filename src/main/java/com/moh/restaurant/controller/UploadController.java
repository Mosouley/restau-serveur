package com.moh.restaurant.controller;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;


import com.moh.restaurant.service.CompanyService;
import com.moh.restaurant.service.impl.StorageService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;



@RestController
@RequestMapping("/api/storage")
public class UploadController{

    @Autowired
    StorageService storageService;

    // @Autowired ServletContext context;

    List<String> files = new ArrayList<String>();

    @PostMapping("/upload")
    public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file) {
        // Initialize the direwctory creation
        storageService.init();
        String message = "";
        try {
         String name = storageService.upload(file);
            // files.add( file.getOriginalFilename());
          // company.setLogoCompany(file.getOriginalFilename());
          // System.out.println(company);
          // companyService.update(company);
            // message = "You successfully uploaded " +file.getOriginalFilename() + "!";
            // return ResponseEntity.status(HttpStatus.OK).body(message);
            String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
            .path("/uploads/")
            .path(name)
            .build().toString();
             return ResponseEntity.ok().body( fileDownloadUri);
        } catch (Exception e) {
            message = "You failed to upload " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
        }

    }

    @GetMapping("/all")
    public ResponseEntity<List<String>> getListFiles(Model model){

        List<String> fileNames = files.stream()
        .map(filename -> MvcUriComponentsBuilder
        .fromMethodName(UploadController.class, "getFile", filename)
        .build().toString())
        .collect(Collectors.toList());

        return ResponseEntity.ok().body(fileNames);

      //    model.addAttribute("files", storageService.loadAll()
      //             .map(
      //             path -> ServletUriComponentsBuilder.fromCurrentContextPath()
      //             .path("/uploads/")
      //             .path(path.getFileName().toString())
      //             .toUriString())
      //     .collect(Collectors.toList()));

      // return model.getClass().getField("files");
    }

    @GetMapping("/files/{filename:.+}")
  //  @ResponseBody
    public ResponseEntity<Resource> getFile(@PathVariable String filename){

        Resource file = storageService.loadFile(filename);
        return ResponseEntity.ok()
        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
        .body(file);
    }

    @PostMapping("/upload-multiple-files")
    @ResponseBody
    public List<ResponseEntity<String>> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
        return Arrays.stream(files)
                .map(file -> handleFileUpload(file))
                .collect(Collectors.toList());
    }
}
