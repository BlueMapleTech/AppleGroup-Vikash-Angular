package com.example.angluar.icontroller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.angluar.controllerimpl.ISignupController;
import com.example.angluar.dto.User;
import com.example.angluar.iservice.ISignupService;

@Controller
@RequestMapping(value = "/signup")
public class SignupController implements ISignupController {

	private static final Logger LOG = LoggerFactory.getLogger(SignupController.class);

	@Autowired
	private ISignupService signupService;

	public ISignupService getSignupService() {
		return signupService;
	}

	public void setSignupService(ISignupService signupService) {
		this.signupService = signupService;
	}

	@RequestMapping(value = "/createUser", method = RequestMethod.POST, headers = "Accept=application/json")
	@ResponseBody
	public User insert_user(@RequestBody User user) {
		System.out.println(user.getAddress());
		System.out.println(user.getEmailAddress());

		LOG.info("create user service has been called.!");
		return this.signupService.insert_user(user);
	}
	@RequestMapping(value = "/updateUserDetail", method = RequestMethod.POST, headers = "Accept=application/json")
	@ResponseBody
	public User update_user(@RequestBody User user) {
		System.out.println("update details"+user);
		return this.signupService.update_user(user);
	}

	/**
	 * 
	 * 
	 * 
	 * @author SanthoshPC
	 * 
	 */
	@RequestMapping(value = "/find_all_user", method = RequestMethod.POST, headers = "Accept=application/json")
	@ResponseBody
	public List<User> find_all_users() {

		System.out.println("hiiiiiiiiiiii");
		List<User> user = signupService.find_all_users();
		System.out.println(user);
		return user;
	}

	@RequestMapping(value = "/updateUser", method = RequestMethod.GET)
	@ResponseBody
	public User find_user(@RequestParam("userId") Long userId) {

		System.out.println("find user method");

		System.out.println(userId);

		User user = signupService.find_user(userId);
		System.out.println(user);
		return user;
	}

	@RequestMapping(value = "/deleteUser", method = RequestMethod.POST, headers = "Accept=application/json")
	@ResponseBody
	public void delete_user(@RequestParam("userId") Long userId) {
		System.out.println("delete method");

		System.out.println(userId);
		signupService.delete_user(userId);
	}

	@RequestMapping(value = "/performLogin", method = RequestMethod.POST, headers = "Accept=application/json")
	@ResponseBody
	public User performLogin(@RequestParam("emailAddress") String emailAddress,
			@RequestParam("password") String password) {
		// System.out.println(emailAddress+password);
		if (emailAddress == null || emailAddress.isEmpty() || password == null || password.isEmpty()) {
			LOG.debug("Invalid username/password, please try again!");
			return null;
		}

		User user = signupService.performLogin(emailAddress);
		System.out.println(user.getEmailAddress());
		if (user != null) {
			if (user.getEmailAddress().equals(emailAddress) && user.getPassword().equals(password)) {

				return user;
			}
		}

		return null;
	}
}
