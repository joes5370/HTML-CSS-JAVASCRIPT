package ex_Interface;

public class ZooKeeper {
	public void feed(Predator predator) {
        System.out.println("feed "+predator.getFood());
	}
	
//	  인터페이스 적용 전 방법	
//    public void feed(Tiger tiger) {
//        System.out.println("feed apple");
//    }
//
//    public void feed(Lion lion) {
//        System.out.println("feed banana");
//    }
//
    public static void main(String[] args) {
        ZooKeeper zooKeeper = new ZooKeeper();
        Tiger tiger = new Tiger();
        Lion lion = new Lion();
        zooKeeper.feed(tiger);
        zooKeeper.feed(lion);
    }
}
