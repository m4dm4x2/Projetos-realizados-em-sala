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
public class testealuno3 {
    public static void main(String[] args){
        pessoa ref;
        
        aluno alu = new aluno();
        alu.setnome("beatriz");
        
        empregado emp = new empregado();
        emp.setnome("carlos");
        
        ref = alu;
        ref.getnome();
        
        ref = emp;
        ref.getnome();
    }
    
}
