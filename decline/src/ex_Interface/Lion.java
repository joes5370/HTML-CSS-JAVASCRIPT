package ex_Interface;

public class Lion extends Animal implements Predator {

	@Override
	public String getFood() {
		
		return "banana";
	}

}
