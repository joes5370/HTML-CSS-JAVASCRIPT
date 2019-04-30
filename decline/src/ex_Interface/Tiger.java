package ex_Interface;

public class Tiger extends Animal implements Predator {

	@Override
	public String getFood() {
		
		return "apple";
    }
}