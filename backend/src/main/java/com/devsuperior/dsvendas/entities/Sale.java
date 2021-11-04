package com.devsuperior.dsvendas.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


/* estas anotações com o @ ão o mapeamento da classe Sale */


@Entity // para dizer que esta o modele de entidae entites
@Table(name = "tb_sales") // faz referencia aos vendores INSERT INTO tb_sales na classe import.sql
public class Sale {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) /*significa que o banco de dados será alto incrementavel toda vez que alguem for adicionbado 
														ele incrementa o id sozinho automaticamente */
	private Long id;
	private Integer visited;
	private Integer deals;
	private Double amount;
	private LocalDate date;

	@ManyToOne /* muitos para um, um vendedor pode ter varias vendas */
	@JoinColumn(name = "seller_id")
	private Seller seller;

	public Sale() {

	}

	public Sale(Long id, Integer visited, Integer deals, Double amount, LocalDate date, Seller seller) {
		this.id = id;
		this.visited = visited;
		this.deals = deals;
		this.amount = amount;
		this.date = date;
		this.seller = seller;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getVisited() {
		return visited;
	}

	public void setVisited(Integer visited) {
		this.visited = visited;
	}

	public Integer getDeals() {
		return deals;
	}

	public void setDeals(Integer deals) {
		this.deals = deals;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public Seller getSeller() {
		return seller;
	}

	public void setSeller(Seller seller) {
		this.seller = seller;
	}

}
