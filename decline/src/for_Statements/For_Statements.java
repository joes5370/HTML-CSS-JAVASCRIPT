package for_Statements;

public class For_Statements {
	public static void main(String[] args) {
//		for (초기치; 조건문; 증가치)
		int[] marks = {90, 25, 67, 45, 80};
		for(int i=0; i<marks.length; i++) {
		    if (marks[i] >= 60) {
		        System.out.println((i+1)+"번 학생은 합격입니다.");
		    }else {
		        System.out.println((i+1)+"번 학생은 불합격입니다.");
		    }
		}
		
		for(int i=2; i<10; i++) {
		    for(int j=1; j<10; j++) {
		        System.out.print(i*j+" ");
		    }
		    System.out.println("");
		}
	}
}
