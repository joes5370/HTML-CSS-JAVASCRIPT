package ex_Exception;

public class Ex_Throws {
	public void sayNick(String nick){
		 try {
	            if("fool".equals(nick)) {
	                throw new FoolException(); // 예외를 강제로 발생
	            }
	            System.out.println("당신의 별명은 "+nick+" 입니다.");
	        }catch(FoolException e) {
	            System.err.println("FoolException이 발생했습니다.");
	        }
	}
	
	public void sayNick2(String nick) throws FoolException {
		// 호출한 곳에서 FoolException을 처리하도록 예외를 위로 던질 수 있는 방법
	    if("fool".equals(nick)) {
            throw new FoolException();
	    }
	    System.out.println("당신의 별명은 "+nick+" 입니다.");
	}
	
	public static void main(String[] args) {
		Ex_Throws ex_Throws = new Ex_Throws();
	  
    	try {
			ex_Throws.sayNick("fool");
			ex_Throws.sayNick("genious");
			// sayNick 메소드에서 예외를 처리하는 경우에는 다음의 두 문장이 모두 수행이된다.
			ex_Throws.sayNick2("fool");
			ex_Throws.sayNick2("genious");
			// 하지만 main 메소드에서 다음과 같이 예외 처리를 한 경우에는
			// 두번 째 문장인 test.sayNick("genious");가 수행되지 않을 것이다.
			// 이미 첫번 째 문장에서 예외가 발생하여 catch 문으로 빠져버리기 때문이다.
		} catch (FoolException e) {
	        System.err.println("FoolException이 발생했습니다.");
		}
    
	   
	}
}
