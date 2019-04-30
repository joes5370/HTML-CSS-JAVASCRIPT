package ex_AbstractClass;

public class RunClass {
	public static void main(String[] args) {
		Lion lion = new Lion();
		Tiger tiger = new Tiger();

		System.out.println(lion.getFood());
		// Predator(추상화클래스)의 추상화메소드 -> Lion이 상속받아 override한 후에 사용
		System.out.println(tiger.getFood());
		// Predator(추상화클래스)의 추상화메소드 -> Tiger가 상속받아 override한 후에 사용
		
		lion.setName("leo");
		// Animal Method -> Predator 상속받음 -> Lion이 다시 상속받음
		tiger.setName("nero");
		// Animal Method -> Predator 상속받음 -> Tiger가 다시 상속받음
		System.out.println(lion.name);
		System.out.println(tiger.name);
	}
}
