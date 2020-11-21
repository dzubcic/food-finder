package com.tvz.foodfinder.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column(name = "title")
    private String name;

    @Column
    private String address;

    @Column
    private String description;

    @Column
    private String contact;

    @Column
    private String workTime;

    @Column
    @Enumerated(EnumType.STRING)
    private Categories category;

    @Column(columnDefinition = "CLOB")
    private String image;

    @ManyToOne
    @CreatedBy
    @JoinColumn(name = "user_id")
    private User createdBy;

    @Column
    @CreatedDate
    private LocalDateTime createdAt;

}
