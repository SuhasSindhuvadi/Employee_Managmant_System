package in.suhas.custom.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import in.suhas.exception.EmployeeNotFoundException;

@RestControllerAdvice
public class MyCustomExceptionHandler {

	@ExceptionHandler(EmployeeNotFoundException.class)
	public ResponseEntity<String> handleEmployeeNotFoundException(
			EmployeeNotFoundException e
			) 
	{
		System.out.println(e.getMessage());
		
		return new ResponseEntity<String>(
				
				e.getMessage(),
				HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
