package co.com.sofka.questions.model;

import javax.validation.constraints.NotBlank;

public class UserDTO {
    private String id;
    @NotBlank
    private String uid;
    private String name;
    private String lastname;
    @NotBlank
    private String email;
    private String pictureUrl;

    public UserDTO() {
    }

    public UserDTO(String id, String uid, String name, String lastname, String email, String pictureUrl) {
        this.id = id;
        this.uid = uid;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.pictureUrl = pictureUrl;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }
}
