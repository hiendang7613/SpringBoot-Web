package com.javaweb.newswebsite.dto;

import java.util.List;

public class CommentDTO extends AbstractDTO<CommentDTO> {
	private String content;
	private String status;
	private Long newCode;
	private List<CommentChildDTO> commentchild;
	
	public List<CommentChildDTO> getCommentchild() {
		return commentchild;
	}
	public void setCommentchild(List<CommentChildDTO> commentchild) {
		this.commentchild = commentchild;
	}
	public Long getNewCode() {
		return newCode;
	}
	public void setNewCode(Long newCode) {
		this.newCode = newCode;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
}
