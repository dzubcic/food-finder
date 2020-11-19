package com.tvz.foodfinder.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
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

}
