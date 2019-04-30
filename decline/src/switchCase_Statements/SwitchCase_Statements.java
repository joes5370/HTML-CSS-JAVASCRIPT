package switchCase_Statements;

public class SwitchCase_Statements {
	public static void main(String[] args) {
		int odd = 10%3;
		
		switch(odd) {
			case 0:
				System.out.println("나머지는 0");
			break;
			case 1:
			System.out.println("나머지는 1");
			break;
			default:
			System.out.println("나머지는 2");
			break;
		}
	}
}
