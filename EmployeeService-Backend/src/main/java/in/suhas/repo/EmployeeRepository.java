package in.suhas.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import in.suhas.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>
{

	@Modifying
	@Query("UPDATE Employee SET empName=:ename WHERE empId=:eid")
	int updateEmployeeName(String ename, Long eid);
}
