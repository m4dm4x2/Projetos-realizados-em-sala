/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package cedjava.objetos;

/**
 *
 * @author monte
 */
public class empregado extends pessoa {
    
  public String getnome(){
      System.out.println("nome do empregado: "+nome);
      return nome;
  }
  public void setnome(String nome){
      this.nome = nome;
  }
}
