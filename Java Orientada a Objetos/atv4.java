/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.mavenproject1;

/**
 *
 * @author monte
 */
public class atv4 {
    public static void main(String[] args) {
         int g[] = new int [100];
        for (int i=0; i <g.length; i++){
            try {
            g[i] = i;
            System.out.println(g[i]);
            } catch (ArrayIndexOutOfBoundsException e) {
                    System.out.println(i+ "esse merda n ta nos pareametros");
            }
        }
        
    }
}
