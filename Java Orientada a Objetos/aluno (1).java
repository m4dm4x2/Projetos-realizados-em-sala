/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package cedjava.objetos;

/**
 *
 * @author monte
 */
public class aluno extends pessoa{
    int nota;
    
    public int getnota(){
        return nota;
    }
    public void setnota(int nota){
        this.nota = nota;
    }
    
    public String getnome(){
        System.out.println("nome do empregado: "+nome);
        return nome;
    }
    public void setnome(String nome){
        this.nome = nome;
    }
}
