package operatorType;

public class OperatorType {
	public static void main(String[] args) {
		boolean a = (5==5 || 4<1);
		boolean b = (5==5 && 4<1);
		boolean c = !(5==5);
		boolean d = "3".equals("2");
		//		x || y - x와 y 둘 중 적어도 하나가 참이면 참이다
		//		x && y - x와 y 모두 참이어야 참이다
		//		!x - x가 거짓이면 참이다
		System.out.println(a+"  "+b+"  "+c+"  "+d);
	
		double e = (double)500;
		//500은 int형 정수이지만, 캐스트 연산을 통해 double 형 값을 대입하게 된다.
		//		x < y	x가 y보다 작다
		//		x > y	x가 y보다 크다
		//		x == y	x와 y가 같다
		//		x != y	x와 y가 같지 않다
		//		x >= y	x가 y보다 크거나 같다
		//		x <= y	x가 y보다 작거나 같다
		
		
	}
}
