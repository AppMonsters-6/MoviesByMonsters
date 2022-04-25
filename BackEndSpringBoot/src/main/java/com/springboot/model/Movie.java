package com.springboot.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.springboot.util.JsonDate;

@Entity
@Table(name = "MOVIEPROJECT")
public class Movie implements Serializable {
	private static final long serialVersionUID = 1;
	@Id
	@Column(name = "movie_id", length = 100)
	@GeneratedValue(generator = "MOVIEPROJECT_SEQ")
	@SequenceGenerator(name = "MOVIEPROJECT_SEQ", sequenceName = "MOVIEPROJECT_SEQ", allocationSize = 1)
	private Integer id; // id of the movie which is self generated

	@Column(name = "movie_name", length = 40)
	private String movieName; // name of the movie

	@Column(name = "rating", length = 2)
	private float rating; // IMDb rating of the movie

	@Column(name = "genre", length = 10)
	private String genre; // genre of the movie

	@Column(name = "overview", length = 1000)
	private String overview; // the summary of the movie

	@Column(name = "duration", length = 15)
	private String duration; // in A hr B min or just in minutes

	@Column(name = "quality", length = 6)
	private String quality; // whether it is 2D or 3D

	@Column(name = "image_path", length = 50)
	private String imagePath;

	@Column(name = "release_date")
	// @Temporal(TemporalType.DATE)
	// @JsonFormat(pattern = "dd-MM-yyyy")
	@JsonDeserialize(using = JsonDate.class)
	private Date releaseDate;

	public Movie() {
		super();
	}

	public Movie(String movieName, float rating, String genre, String overview, String duration,
			String quality, String imagePath, Date releaseDate) {
		super();
		this.movieName = movieName;
		this.rating = rating;
		this.genre = genre;
		this.overview = overview;
		this.duration = duration;
		this.quality = quality;
		this.imagePath = imagePath;
		this.releaseDate = releaseDate;
	}

	public Movie(Integer id, String movieName, float rating, String genre, String overview,
			String duration, String quality, String imagePath, Date releaseDate) {
		super();
		this.id = id;
		this.movieName = movieName;
		this.rating = rating;
		this.genre = genre;
		this.overview = overview;
		this.duration = duration;
		this.quality = quality;
		this.imagePath = imagePath;
		this.releaseDate = releaseDate;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}
	
	public String getgenre() {
		return genre;
	}

	public void setgenre(String genre) {
		this.genre = genre;
	}

	public String getOverview() {
		return overview;
	}

	public void setOverview(String overview) {
		this.overview = overview;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getQuality() {
		return quality;
	}

	public void setQuality(String quality) {
		this.quality = quality;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public Date getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}

	@Override
	public String toString() {
		return "Movie [id=" + id + ", movieName=" + movieName + ", rating=" + rating + ", genre=" + genre
				+ ", overview=" + overview + ", duration=" + duration + ", quality=" + quality + ", imagePath="
				+ imagePath + ", releaseDate=" + releaseDate + "]";
	}
	
	

}
