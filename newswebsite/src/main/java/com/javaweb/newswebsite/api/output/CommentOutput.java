package com.javaweb.newswebsite.api.output;

import java.util.ArrayList;
import java.util.List;

import com.javaweb.newswebsite.dto.CommentDTO;

public class CommentOutput {
	private int page;
	private int totalPage;
	private List<CommentDTO> listComment = new ArrayList<>();
	private int totalComment;
	
	public int getTotalComment() {
		return totalComment;
	}
	public void setTotalComment(int totalComment) {
		this.totalComment = totalComment;
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
	public List<CommentDTO> getListComment() {
		return listComment;
	}
	public void setListComment(List<CommentDTO> listUser) {
		this.listComment = listUser;
	}
	
	
}
