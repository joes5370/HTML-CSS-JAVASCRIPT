package ex_Casting;

public class ex_Casting {

	public static void main(String[] args) {
		
	String s_num = "10";
	
	// 문자에서 숫자로 바꿀 때는
	// 숫자형.parse숫자형(String값)
	// 숫자형.valueOf(String값)
	int i_num = Integer.parseInt(s_num);
	int i_num2 = Integer.valueOf(s_num);
	
	double d_num = Double.parseDouble(s_num);
	double d_num2 = Double.valueOf(s_num);
	
	float f_num = Float.parseFloat(s_num);
	float f_num2 = Float.valueOf(s_num);
	
	long l_num = Long.parseLong(s_num);
	long l_num2 = Long.valueOf(s_num);
	
	short sh_num = Short.parseShort(s_num);
	short sh_num2 = Short.valueOf(s_num);
	
	
	
	
	// 숫자형에서 문자로 바꾸어줄 때는
	// 숫자형.toString(숫자값);
	// String.valueOf(숫자값);
	float f_num3 =  (float) 10.11;
	double d_num3 = 10.10;
	
	String s_num2;
	
	s_num2 = Float.toString(f_num3);
	s_num2 = String.valueOf(f_num3);
	s_num2 = Double.toString(d_num3);
	s_num2 = String.valueOf(d_num3);
	
	
	
	
	// 숫자끼리 타입변환 
	
	float f_num4 = (float) 10.1010;
	double d_num4 = 10.101010;
	
	int i_num3 = (int)f_num4;
	int i_num4 = (int)d_num4;
	
	int i_num5 = 10;
	
	float f_num5 = (float) i_num5;
	double d_num5 = (double) i_num5;
	
	}
}
