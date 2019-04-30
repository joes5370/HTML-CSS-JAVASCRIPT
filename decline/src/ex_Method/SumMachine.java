package ex_Method;

public class SumMachine {
	// 입력값O 리턴값O, 입력값O 리턴값X, 입력값X 리턴값O, 입력값X 리턴값X
	// 메소드는 위와 같이 크게 4가지 종류가 있다. 적절하게 활용하자.
	// 특별한 경우에 메소드를 빠져나가기를 원할 때 return만 단독으로 써서 메소드를 즉시 빠져나갈 수 있다.
	// 단, return 문만을 써서 메소드를 빠져나가는 이 방법은 리턴자료형이 void형인 메소드에만 해당된다.
	
	public void makeSum(int startValue, int endValue) { //파라미터 선언할 때 ',' 콤마로 구분
		int start = startValue;
		int end = endValue;
		int sum = 0;
		
		for(int i = start; i <= end ; i++){
			sum = sum + i;
		}
		
		System.out.println("시작값: " + start);
		System.out.println("종료값: " + end);
		System.out.println("총합: " + sum);
	}	
	
	
	public int makeSum2(int startValue, int endValue) { //return 활용
		int start2 = startValue;
		int end2 = endValue;
		int sum2 = 0;
		
		for(int i = start2; i <= end2 ; i++){
			sum2 = sum2 + i;
		}
		
		return sum2;
		
		
	}
	
	public static void main(String[] args) {
		SumMachine m = new SumMachine();
		m.makeSum(1, 0);
		m.makeSum(20, 200);
		m.makeSum(30, 300);
		
		System.out.println(m.makeSum2(1, 0));
		System.out.println(m.makeSum2(20, 200));
		System.out.println(m.makeSum2(30, 300));
		
	}
	
}
