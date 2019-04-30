package ex_Constructor;

public class Ex_Constructor extends Animal{
	
	int num;
	
	public Ex_Constructor(String name) {
        this.setName(name);
    }
	
	public Ex_Constructor(int num) {
        this.num=num;
    }
	// 위 메소드처럼 메소드명이 클래스명과 동일하고 리턴 자료형이 없는 메소드를 생성자(Constructor)라고 말한다.
	//
	// 생성자의 규칙
	// 1.클래스명과 메소드명이 동일하다.
	// 2.리턴타입을 정의하지 않는다.
	// 생성자는 객체가 생성될 때 호출된다. 객체가 생성될 때는 new라는 키워드로 객체가 만들어질 때이다.
	// 즉, 생성자는 다음과 같이 new라는 키워드가 사용될 때 호출된다.

	public static void main(String[] args) {
		Ex_Constructor test = new Ex_Constructor("Test");
        System.out.println(test.name);
        
        Ex_Constructor test2 = new Ex_Constructor(123);
        System.out.println(test2.num);
    }
}
