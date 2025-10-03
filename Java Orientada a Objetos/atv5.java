/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.mavenproject1;

/**
 *
 * @author monte
 */
public class atv5 {
     public static void main(String[] args) {
        String[] dias = {"Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"};

        System.out.println("Usando while:");
        int i = 0;
        while (i < dias.length) {
            System.out.println(dias[i]);
            i++;
        }

        System.out.println("\nUsando do-while:");
        int j = 0;
        do {
            System.out.println(dias[j]);
            j++;
        } while (j < dias.length);

        System.out.println("\nUsando for:");
        for (int k = 0; k < dias.length; k++) {
            System.out.println(dias[k]);
        }
    }
}


