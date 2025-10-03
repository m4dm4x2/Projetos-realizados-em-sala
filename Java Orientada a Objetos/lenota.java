package com.mycompany.mavenproject1;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author monte
 */
import java.util.Scanner;

public class lenota {
    Scanner sc =  new Scanner(System.in);
    public double lenota(String mensagem) {
        double nota;
        do {
            System.out.println(mensagem);
            nota = sc.nextDouble();
            if (nota <  0 || nota > 10) {
                System.out.println("nota invalida digite entre 0 e 10");
                
            }
        } while (nota < 0 || nota > 10);
        return nota;
    } 
}
