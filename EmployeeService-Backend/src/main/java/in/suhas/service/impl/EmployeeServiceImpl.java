package in.suhas.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import in.suhas.entity.Employee;
import in.suhas.exception.EmployeeNotFoundException;
import in.suhas.repo.EmployeeRepository;
import in.suhas.service.IEmployeeService;

@Service
public class EmployeeServiceImpl 
	implements IEmployeeService
{

	@Autowired
	private EmployeeRepository repo; 

	@Override
	public Long createEmployee(Employee employee) {
		employee = repo.save(employee);
		return employee.getEmpId();
	}

	@Override
	public List<Employee> findAllEmployees() {
		List<Employee> list = repo.findAll();
		return list;
	}
	
	@Override
	public Employee findOneEmployee(Long id) {
		Optional<Employee> opt = repo.findById(id);
		if(opt.isPresent()) 
			return opt.get();
		else
			throw new EmployeeNotFoundException("Employee '"+id+"' Not exist");
		
	}
	
	@Override
	public void deleteOneEmployee(Long id) {
		repo.delete(findOneEmployee(id));
	}
	
	@Override
	public void updateEmployee(Employee emp) {
		Long id = emp.getEmpId();
		if(id!=null && repo.existsById(id)) {
			repo.save(emp);
		} else {
			throw new EmployeeNotFoundException("Employee '"+id+"' Not exist");
		}
	}

	@Override
	@Transactional
	public int updateEmployeeName(String ename, Long id) {
		if(id!=null && repo.existsById(id)) {
			return repo.updateEmployeeName(ename, id);
		} else {
			throw new EmployeeNotFoundException("Employee '"+id+"' Not exist");
		}
	}
	
}
