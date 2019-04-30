package arrayType;

import java.util.ArrayList;
import java.util.Arrays;

public class ArrayType {
	public static void main(String[] args) {
		int[] arr = {1,2,3,4,5};
		int[] temp = {1,2,0,0,0};
		
		// 배열복사 방법
		System.arraycopy(arr, 2, temp, 2, 3);
//		System.arraycopy(src, srcPos, dest, destPos, length);
//						전송원배열, 소스배열의 개시 위치, 전송처 배열, 전송처 데이터내의 게시 위치, 카피되는 배열 요소의 수
		System.out.println(Arrays.toString(arr));
		System.out.println(Arrays.toString(temp));
	
		char array1[] = {'1', '2', '3', '4', '5'};
		char array2[] = {'A', 'B', 'C', 'D', 'E'};
		char array3[] = {'A', 'B', 'C', 'D', 'E'};
	
		System.out.println(array2);
		
		System.arraycopy (array1, 0, array2, 0, array1.length);
		//array1의 0번 값을 array2의 0번 값부터 array1의 길이만큼 복사
		System.out.println(array2);

		System.arraycopy (array1, 0, array3, 2, 2);
		//array1의 0번 값을 array3의 2번 값부터 2개 길이만큼 복사
		System.out.println(array3);
		
		
		
		//배열의 값 찾는 메소드 활용법
		ArrayList<String> pocket = new ArrayList<String>();
		pocket.add("paper");
		pocket.add("handphone");
		pocket.add("money");

		if (pocket.contains("money")) {
		    System.out.println("택시를 타고 가라");
		}else {
		    System.out.println("걸어가라");
		}
	}

}
