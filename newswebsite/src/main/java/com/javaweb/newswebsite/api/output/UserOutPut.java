package com.javaweb.newswebsite.api.output;

import java.util.ArrayList;
import java.util.List;

import com.javaweb.newswebsite.dto.UserDTO;

public class UserOutPut {
	private int page;
	private int totalPage;
	private List<UserDTO> listUser = new ArrayList<>();
	private String sortName;
	private String sortBy;
	private int totalUser;
	
	public String getSortName() {
		return sortName;
	}
	public void setSortName(String sortName) {
		this.sortName = sortName;
	}
	public String getSortBy() {
		return sortBy;
	}
	public void setSortBy(String sortBy) {
		this.sortBy = sortBy;
	}
	public int getTotalUser() {
		return totalUser;
	}
	public void setTotalUser(int totalUser) {
		this.totalUser = totalUser;
	}
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public int getTotalPage() {
		return totalPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}
	public List<UserDTO> getListUser() {
		return listUser;
	}
	public void setListUser(List<UserDTO> listUser) {
		this.listUser = listUser;
	}
	
	
}
