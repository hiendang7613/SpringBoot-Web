package com.javaweb.newswebsite.api.output;

import java.util.ArrayList;
import java.util.List;

import com.javaweb.newswebsite.dto.CommentChildDTO;

public class CommentChildOutput {
	private int page;
	private int totalPage;
	private List<CommentChildDTO> listCommentchild = new ArrayList<>();
	private int totalCommentchild;
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
	public List<CommentChildDTO> getListCommentchild() {
		return listCommentchild;
	}
	public void setListCommentchild(List<CommentChildDTO> listCommentchild) {
		this.listCommentchild = listCommentchild;
	}
	public int getTotalCommentchild() {
		return totalCommentchild;
	}
	public void setTotalCommentchild(int totalCommentchild) {
		this.totalCommentchild = totalCommentchild;
	}
	
}
