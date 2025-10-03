/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.mavenproject1;

/**
 *
 * @author monte
 */
import java.util.Scanner;
public class Aluno {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
         String aluno = "";
         int contalu = 0;
         int aluapro = 0;
         int alucon = 0;
         int alure = 0;
         double medtot = 0;
         
         System.out.println("qual nome do aluno?");
            aluno = sc.next();
        
        while (!"exit".equals(aluno)) {
        System.out.println("digite sua 1° nota: ");
        double var1 = sc.nextDouble();
        while (var1 > 10) {
            System.out.println("genio a nota ta errada faz de novo");
            System.out.println("digite sua 1° nota: ");
            var1 = sc.nextDouble();
        }
        System.out.println("digite sua 2° nota: ");
        double var2 = sc.nextDouble();
        while (var2 > 10) {
            System.out.println("genio a nota ta errada faz de novo");
            System.out.println("digite sua 2° nota: ");
            var2 = sc.nextDouble();
        }
        System.out.println("digite sua 3° nota: ");
        double var3 = sc.nextDouble();
        while (var3 > 10) {
            System.out.println("genio a nota ta errada faz de novo");
            System.out.println("digite sua 3° nota: ");
            var3 = sc.nextDouble();
        }
        
        double med; 
        med = (var1 + var2 + var3) /3;
        
        System.out.println(med);
        
        if (med >= 7) {
             System.out.println(aluno+ " está aprovado");
             aluapro = aluapro + 1;
        }
             else if (med >= 5 & med < 7 ) {
          System.out.println(aluno+ " está em conselho de classe");
          alucon = alucon + 1;
    }
        if (med < 5) {
           System.out.println(aluno+ " está reprovado");
           alure = alure + 1;
        }
        contalu  = contalu +1;
        medtot = medtot + med;
        medtot = medtot / contalu;
        System.out.println("qual nome do aluno?");
            aluno = sc.next();
           
    }
        System.out.println("a quantidade de alunos processados foi de " +contalu);
        System.out.println("a quantidade de alunos aprovados foram de " +aluapro);
        System.out.println("a quantidade de alunos em conselho são de " +alucon);
        System.out.println("a quantidade de alunos reprovados foram de " +alure);
        System.out.println("a media dos alunos foram de " +medtot);
}
}

