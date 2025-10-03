/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package cedjava.app;
import cedjava.objetos.pessoa;
import cedjava.objetos.aluno;
import cedjava.objetos.empregado;
/**
 *
 * @author monte
 */
public class testealuno2 {
    public static void main(String args[]){
        pessoa max = new pessoa();
        max.setnome("max");
        max.getnome();
        
        aluno bitelo = new aluno();
        bitelo.setnome("bitelo");
        bitelo.getnome();
        
        empregado mario = new empregado();
        mario.setnome("mario");
        mario.getnome();
    }
}
