package com.javaweb.newswebsite.repo;

import com.javaweb.newswebsite.entity.UserEntity;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity,Long> {
	void deleteUserById(Long id);
    Optional<UserEntity> findUserById(Long id);
    @Query(value = "SELECT * FROM user u WHERE u.username LIKE %?1%"
            + " OR u.fullname LIKE %?1%"
            + " OR u.phone LIKE %?1%",
            countQuery = "SELECT count(*) FROM user u WHERE u.username LIKE %?1%"
                    + " OR u.fullname LIKE %?1%"
                    + " OR u.phone LIKE %?1%",
            nativeQuery = true )
    Page<UserEntity> search(String keyword,Pageable pageable);
    List<UserEntity> findAllByCreatedDateBetween(Date startDate, Date endDate);
    Optional<UserEntity> findUserByUserNameAndPassword(String username, String password);
}
