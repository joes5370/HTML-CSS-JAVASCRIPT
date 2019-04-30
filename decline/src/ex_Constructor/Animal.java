package ex_Constructor;

public class Animal {
    String name; // 객체 변수

    public void setName(String name) { //메소드 선언
        this.name = name;
    }
    
    public static void main(String[] args) {
        Animal cat = new Animal();
        System.out.println(cat.name);
        cat.setName("boby");
        System.out.println(cat.name);
        
        Animal dog = new Animal();
        dog.setName("happy");
        System.out.println(dog.name);
    }
}
