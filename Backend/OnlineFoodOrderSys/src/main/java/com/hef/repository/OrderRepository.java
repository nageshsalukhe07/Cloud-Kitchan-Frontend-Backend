package com.hef.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hef.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

	public String deleteById(int oderId);
}
