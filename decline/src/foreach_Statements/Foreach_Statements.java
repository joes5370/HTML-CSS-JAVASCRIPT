package foreach_Statements;

import java.util.ArrayList;

public class Foreach_Statements {
	public static void main(String[] args) {
			
		String[] numbers = {"one", "two", "three"}; 
		for(int i=0; i<numbers.length; i++) { // 일반적인 for 문
		    System.out.println(numbers[i]);
		}
		
		for(String number: numbers) {
		    System.out.println(number);
		}
		
		//	for (type var: iterate) {
		//	    body-of-loop
		//	}
		// 위 iterate는 루프를 돌릴 객체이고 iterate 객체에서 한개씩 순차적으로 
		// var에 대입되어 for문을 수행하게 된다. iterate부분에 들어가는 타입은
		// 루프를 돌릴수 있는 형태인 배열 및 ArrayList등이 가능하다.
		// 단, foreach문은 따로 반복회수를 명시적으로 주는 것이 불가능하고
		// 1스탭씩 순차적으로 반복될때만 사용가능하다는 제약이 있다.
		
		ArrayList<String> numbers2 = new ArrayList<String>();
		numbers2.add("one");
		numbers2.add("two");
		numbers2.add("three");
	
		for(String number: numbers2) {
		    System.out.println(number);
		}
	}
}