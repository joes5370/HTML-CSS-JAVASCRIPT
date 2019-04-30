package dataType;

public class DataType {
	public static void main(String[] args) {
		int i = 100;
		
		double d = 10.555;
		
		boolean b = true;
		
		char c = 'a';
		// char는 문자 한글자만 가능. 해당 문자를 ( ' ) 싱글쿼터로 감싸야 한다.
		
		String sentence = "i am david"; // 해당 변수를 사용하지 않으면 왼쪽에 경고알림이 뜬다.
		// String은 문자열이 가능. 해당 문자를 ( " ) 더블쿼터로 감싸야 한다.
		
		System.out.println(i);
		System.out.println(d);
		System.out.println(b);
		System.out.println(c);
		
		
		String e = "HELLO";
		String f = "hello";
		System.out.println(e);
		System.out.println(f);
		
		if(e.equalsIgnoreCase(f))//대소문자 구분없이 문자 확인
			System.out.println("동일한 값입니다.");	
		
	}
}
