/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package cedjava.app;
import cedjava.objetos.aluno;
/**
 *
 * @author monte
 */
public class testealuno {
    public static void main(String args[]){
        aluno max = new aluno();
        max.setnome("Max");
        max.setendereço("rua admar manoel dos santos");
        String nomeatual;
        String endereçoat;
        nomeatual = max.getnome();
        endereçoat = max.getenreço();
        System.out.print(nomeatual);
        System.out.print(endereçoat);
    }
}
