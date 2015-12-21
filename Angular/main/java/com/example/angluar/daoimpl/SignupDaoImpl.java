package com.example.angluar.daoimpl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.angluar.dto.User;
import com.example.angluar.idao.ISignupDao;
import com.example.angluar.repository.SignupRepository;

@Repository

public class SignupDaoImpl implements ISignupDao {

	private static final Logger LOG = LoggerFactory.getLogger(SignupDaoImpl.class);

	@Autowired
	private SignupRepository signupRepository;

	@PersistenceContext
	private EntityManager entityManager;

	public User insert_user(User user) {
		LOG.info("Insert Dao has been called.!");
		return this.signupRepository.save(user);
	}

	public User update_user(User user) {
		return this.signupRepository.save(user);
	}

	public List<User> find_all_users() {
		return this.signupRepository.findAll();
	}

	public User find_user(Long userId) {
		return this.signupRepository.findOne(userId);
	}

	public void delete_user(long userId) {
		signupRepository.delete(userId);

	}

	public User performLogin(String emailAddress) {

		return this.signupRepository.performLogin(emailAddress);
	}

}
