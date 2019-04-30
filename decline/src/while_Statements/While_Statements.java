package while_Statements;

public class While_Statements {
	public static void main(String[] args) {
//		while (조건문) {
//		    <수행할 문장1>
//		    <수행할 문장2>
//		    <수행할 문장3>
//		    ...
//		}
		
		int coffee = 10;
		int money = 300;

		while (money > 0) {
		    System.out.println("돈을 받았으니 커피를 줍니다.");
		    coffee--;
		    System.out.println("남은 커피의 양은 " + coffee + "입니다.");
		    if (coffee == 0) {
		        System.out.println("커피가 다 떨어졌습니다. 판매를 중지합니다.");
		        break; // while문을 강제로 멈추게 하는 것을 가능하게 해 주는 것이 바로 break이다.
		    }
		}
		
		int a = 0;
		while (a < 10) {
		    a++;
		    if (a % 2 == 0) {
		        continue; // ontinue문은 while문의 맨 처음(조건문: a<10)으로 돌아가게 하는 명령어이다.
		    }
		    System.out.println(a);
		}
	}
}
