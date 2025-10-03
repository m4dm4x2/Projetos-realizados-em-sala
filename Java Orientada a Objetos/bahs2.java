/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author monte
 */
public class bahs2 {
    private String nome;
    private String endereco;
    private int idade;
    private double nmat;
    private double npot;
    private double ngeo;
    
    private static int contestud;
    
    //rotorna valor do nome
    public String getnome(){
        return nome;
    }
    //define ou altera o nome
    public void setnome(String temp){
        nome = temp;
    }
    //retorna valor endereço
      public String getendereco(){
        return endereco;
    }
      //define ou altera endereço
      public void setendereco(String temp){
        endereco = temp;
    }
      //retorna idade
        public int getidade(){
        return idade;
    }
        //define idade
        public void setidade(int temp){
        idade = temp;
    }
       //a mesma bosta que antes define ou altera a merda do valor
          public double getnmat(){
        return (double) nmat;
    }
    public void setnmat(double temp){
        nmat = temp;
    }
    public double getnpot(){
        return (double) npot;
    }
    public void setnpot(double temp){
        npot = temp;
    }
    public double getngeo(){
        return (double) ngeo;
    }
    public void setngeo(double temp){
        ngeo = temp; 
   }
    //e esse cu aq define e retorna a media 
    public double getmed(){
        double resultado = 0;
        resultado = (nmat + npot + ngeo) /3;
        return resultado;
    }
    //e essa merda retorna a quantidade de alunos
    public static int getqtdal(){
        return contestud;
    }

          public void imprimir(){
        System.out.println("Nome: "+nome);
        System.out.println("Nome: "+endereco);
        System.out.println("Nome: "+idade);
    }
        public void imp(double mnota, double pnota, double gnota){
        System.out.println("Nome: "+nome);
        System.out.println("Nota de matematica: "+mnota);
        System.out.println("Nota de portugues: "+pnota);
        System.out.println("Nota geografia: "+gnota);
    }
}
