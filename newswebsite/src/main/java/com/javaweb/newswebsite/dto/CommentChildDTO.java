package com.javaweb.newswebsite.dto;

public class CommentChildDTO extends AbstractDTO<CommentChildDTO> {
	 private String content;
	 private String status;
	 private Long commentCode;
	 
	
	public Long getCommentCode() {
		return commentCode;
	}
	public void setCommentCode(Long commentCode) {
		this.commentCode = commentCode;
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
