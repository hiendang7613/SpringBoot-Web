package com.javaweb.newswebsite.dto;

import java.util.List;

public class UserDTO extends AbstractDTO<UserDTO> {
	private String userName;
	private String password;
	private String fullName;
	private String jobTitle;
	private String phone;
	private String imageUrl;
	private String intro;
	private Integer status;
	private String email;
	private List<RoleDTO> role;
	private String[] roleCode;
	private String registerRole;
	
	public String getRegisterRole() {
		return registerRole;
	}
	public void setRegisterRole(String registerRole) {
		this.registerRole = registerRole;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String[] getRoleCode() {
		return roleCode;
	}
	public void setRoleCode(String[] roleCode) {
		this.roleCode = roleCode;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getJobTitle() {
		return jobTitle;
	}
	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String getIntro() {
		return intro;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}
	
	public List<RoleDTO> getRole() {
		return role;
	}
	public void setRole(List<RoleDTO> role) {
		this.role = role;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	
	
}
