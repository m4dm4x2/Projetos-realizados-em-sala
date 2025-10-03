/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package cedjava.objetos;

/**
 *
 * @author monte
 */
public class pessoa {
        protected String nome;
        protected String endereço;
        
        public String getnome(){
            return nome;
        }
        public void setnome(String nome){
            this.nome = nome;
        }
         public String getenreço(){
            return endereço;
        }
        public void setendereço(String endereço){
            this.endereço = endereço;
        }
}
