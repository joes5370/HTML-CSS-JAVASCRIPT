package ex_Inheritance;

public class BClass extends AClass {
		
	public void doA2() { // AClass에 doA2 메소드 오버라이딩
		System.out.println("AA22-overriding");
	}
	
	public void doA3(String something) { // 메소드 오버로딩
		System.out.println("AA33-" + something);
	}
	
	public void doB() { // AClass에 없는 기능 추가
		System.out.println("BBB");
	}
	
	public static void main(String[] args) {
		BClass bclass = new BClass();
		bclass.doA1(); // 상속받은 그대로
		bclass.doA2(); // 메소드 오버라이딩한 것
		bclass.doA3(); // 상속받은 그대로
		bclass.doA3("overloading"); // 메소드 오버로딩한 것
		bclass.doB(); // 메소드 새롭게 추가한 것
	}
}
