package ex_Exception;

public class Ex_TryCatch {
	public void shouldBeRun() {
        System.out.println("ok thanks.");
    }
	
    public static void main(String[] args) {
    	Ex_TryCatch test = new Ex_TryCatch();
        int c;
        
        try {
            c = 4 / 0;
        } catch (ArithmeticException e) {
            c = -1;
        } finally {
            test.shouldBeRun(); // finally 구문은 try문장 수행 중 예외발생 여부에 상관없이 무조건 실행된다. 
        }
    }
    
	//try {
	//    ...
	//} catch(예외1) {
	//    ...
	//} catch(예외2) {
	//    ...
	//...
	//}
}
