package com.codewithnisaf.fullstackbackend.repository;

import com.codewithnisaf.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}
