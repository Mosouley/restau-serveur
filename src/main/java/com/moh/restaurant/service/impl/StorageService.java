package com.moh.restaurant.service.impl;


import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.stream.Stream;

import com.moh.restaurant.exception.StorageException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;



@Service
public class StorageService{

    Logger logger = LoggerFactory.getLogger(this.getClass().getName());
    @Value("${moh.app.upload.dir:${user.home}}")
    private Path rootLocation; // = Paths.get("upload-dir");

    public String upload(MultipartFile file) {

      String filename = StringUtils.cleanPath(file.getOriginalFilename());

      try {
        if (file.isEmpty()) {
            throw new StorageException("Failed to store empty file " + filename);
        }
        if (filename.contains("..")) {
            // This is a security check
            throw new StorageException(
                    "Cannot store file with relative path outside current directory "
                            + filename);
        }
        try (InputStream inputStream = file.getInputStream()) {
            Files.copy(inputStream, this.rootLocation.resolve(filename),
                    StandardCopyOption.REPLACE_EXISTING);
        }
    }
    catch (IOException e) {
        throw new StorageException("Failed to store file " + filename, e);
    }

        // try {
        //   Path copyLocation = Paths.get(rootLocation + File.separator + filename);
        //     Files.copy(file.getInputStream(), copyLocation , StandardCopyOption.REPLACE_EXISTING);
        //   return filename;
        //   } catch (Exception e) {
        //     e.printStackTrace();
        //     throw  new RuntimeException("Could not store file " + file.getOriginalFilename()
        //     + ". Please try again!");

        // }


        return filename;
    }

    public Stream<Path> loadAll() {
      try {
        return Files.walk(this.rootLocation, 1)
                .filter(path -> !path.equals(this.rootLocation))
                .map(this.rootLocation::relativize);
          }
          catch (IOException e) {
              throw new StorageException("Failed to read stored files", e);
          }

    }

    public Resource loadFile(String filename) {

        try {
            Path file = rootLocation.resolve(filename);

            logger.info("fichier" + file);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
                } else {
                throw  new RuntimeException("Fail to load file");
                }
            } catch (MalformedURLException e) {
                throw  new RuntimeException("Could not read file: " + filename);
            }
    }

    public void deleteAll(){
         FileSystemUtils.deleteRecursively(rootLocation.toFile()) ;
    }

    public void init() {
        try {
            Files.createDirectories(rootLocation);
        } catch (IOException e) {
            throw new RuntimeException("Could not initialize storage!");
        }
    }
}
