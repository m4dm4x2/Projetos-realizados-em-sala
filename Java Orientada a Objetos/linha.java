/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package cedjava.interfaces;

/**
 *
 * @author monte
 */
public abstract class linha implements relacao {
    private final double x1;
    private final double x2;
    private final double y1;
    private final double y2;
    
    public linha(double x1, double x2, double y1, double y2){
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
    }
    
    public double getcomprimento(){
        double comprimento = Math.sqrt ((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        return comprimento;
    }
    
    public boolean maiorque(Object a, Object b){
        double acomp = ((linha)a).getcomprimento();
        double bcomp = ((linha)b).getcomprimento();
        return (acomp > bcomp);
    }
    
        public boolean menorque(Object a, Object b){
        double acomp = ((linha)a).getcomprimento();
        double bcomp = ((linha)b).getcomprimento();
        return (acomp < bcomp);
        }
        
        public boolean igual(Object a, Object b){
        double acomp = ((linha)a).getcomprimento();
        double bcomp = ((linha)b).getcomprimento();
        return (acomp == bcomp);
        }
}
