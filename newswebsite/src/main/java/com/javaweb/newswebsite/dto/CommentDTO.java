package com.javaweb.newswebsite.dto;

import java.util.List;

public class CommentDTO extends AbstractDTO<CommentDTO> {
	private String content;
	private String status;
	private Long likes;
	private Long newId;
	private List<CommentChildDTO> commentchild;

	
	public List<CommentChildDTO> getCommentchild() {
		return commentchild;
	}
	public void setCommentchild(List<CommentChildDTO> commentchild) {
		this.commentchild = commentchild;
	}

	public Long getLikes() {
		return likes;
	}

	public void setLikes(Long likes) {
		this.likes = likes;
	}

	public Long getNewId() {
		return newId;
	}

	public void setNewId(Long newId) {
		this.newId = newId;
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
