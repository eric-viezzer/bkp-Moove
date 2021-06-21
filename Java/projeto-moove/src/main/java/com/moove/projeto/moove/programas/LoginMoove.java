/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.moove.projeto.moove.programas;
import Conexoes.ConexaoBanco;
import Conexoes.ConexaoBancoAzure;
import com.moove.projeto.moove.modelo.CadastroAzure;
import com.moove.projeto.moove.modelo.CadastroLocal;
import java.util.List;
import javax.swing.JOptionPane;
import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;


/**
 *
 * @author Aluno
 */
public class LoginMoove extends javax.swing.JFrame {
    ConexaoBanco conexaoLocal = new ConexaoBanco();
    ConexaoBancoAzure conexaoAzure = new ConexaoBancoAzure();
    Integer cont = 3;
    
    public LoginMoove() {
        initComponents();
    }
    
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jLabel1 = new javax.swing.JLabel();
        jSeparator1 = new javax.swing.JSeparator();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        TFemail = new javax.swing.JTextField();
        BTentrar = new javax.swing.JButton();
        jLabel4 = new javax.swing.JLabel();
        TFsenha = new javax.swing.JPasswordField();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jPanel1.setBackground(new java.awt.Color(0, 0, 0));
        jPanel1.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jLabel1.setBackground(new java.awt.Color(0, 102, 255));
        jLabel1.setFont(new java.awt.Font("Berlin Sans FB", 0, 24)); // NOI18N
        jLabel1.setForeground(new java.awt.Color(33, 230, 193));
        jLabel1.setText("copyright © 2020 todos os direitos reservados");
        jPanel1.add(jLabel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(90, 390, 450, 30));

        jSeparator1.setBackground(new java.awt.Color(33, 230, 193));
        jPanel1.add(jSeparator1, new org.netbeans.lib.awtextra.AbsoluteConstraints(80, 70, 450, 30));

        jLabel2.setBackground(new java.awt.Color(0, 102, 255));
        jLabel2.setFont(new java.awt.Font("Berlin Sans FB", 0, 36)); // NOI18N
        jLabel2.setForeground(new java.awt.Color(33, 230, 193));
        jLabel2.setText("Moove");
        jPanel1.add(jLabel2, new org.netbeans.lib.awtextra.AbsoluteConstraints(260, 20, 100, 50));

        jLabel3.setBackground(new java.awt.Color(0, 102, 255));
        jLabel3.setFont(new java.awt.Font("Berlin Sans FB", 0, 36)); // NOI18N
        jLabel3.setForeground(new java.awt.Color(33, 230, 193));
        jLabel3.setText("Email");
        jPanel1.add(jLabel3, new org.netbeans.lib.awtextra.AbsoluteConstraints(150, 160, 100, 30));
        jPanel1.add(TFemail, new org.netbeans.lib.awtextra.AbsoluteConstraints(250, 160, 210, 30));

        BTentrar.setBackground(new java.awt.Color(255, 255, 255));
        BTentrar.setText("Entrar");
        BTentrar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                BTentrarActionPerformed(evt);
            }
        });
        jPanel1.add(BTentrar, new org.netbeans.lib.awtextra.AbsoluteConstraints(230, 290, 200, -1));

        jLabel4.setBackground(new java.awt.Color(0, 102, 255));
        jLabel4.setFont(new java.awt.Font("Berlin Sans FB", 0, 36)); // NOI18N
        jLabel4.setForeground(new java.awt.Color(33, 230, 193));
        jLabel4.setText("Senha");
        jPanel1.add(jLabel4, new org.netbeans.lib.awtextra.AbsoluteConstraints(150, 210, 100, 30));
        jPanel1.add(TFsenha, new org.netbeans.lib.awtextra.AbsoluteConstraints(250, 210, 210, 30));

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, 601, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );

        setSize(new java.awt.Dimension(617, 488));
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void BTentrarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_BTentrarActionPerformed
        
        String email = TFemail.getText();
        String senha = TFsenha.getText();
        
     
         List<CadastroAzure> consultaCadastro = conexaoAzure.jdbcTemplate.query(
                "Select * from dbo.usuarios where email = ? and senha = ?",
               new BeanPropertyRowMapper(CadastroAzure.class),
               email, senha);
         
        if(consultaCadastro.isEmpty()){
                cont--;
                JOptionPane.showMessageDialog
        (null,"Email e/ou senha incorreto. Você tem " +cont+ " tentantivas");
                if(cont == 0){
                    JOptionPane.showMessageDialog
                    (null,"Sistema Bloqueado - procure o suporte");
                    BTentrar.setVisible(false);
                }
            }
        if(!consultaCadastro.isEmpty()){
            for(CadastroAzure users : consultaCadastro){
                    JOptionPane.showMessageDialog
                        (null,"Login efetuado com sucesso.Bem vindo(a) "
                                +users.getNome());
                if(users.getTipoUsuario().equals("Desenvolvedor")){
                    new TelaDesenvolvedor().setVisible(true);
                    dispose();
                }else{
                    new TelaAnalista().setVisible(true);
                    dispose();
                }
            }          
        }
    }//GEN-LAST:event_BTentrarActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(LoginMoove.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(LoginMoove.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(LoginMoove.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(LoginMoove.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new LoginMoove().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton BTentrar;
    private javax.swing.JTextField TFemail;
    private javax.swing.JPasswordField TFsenha;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JSeparator jSeparator1;
    // End of variables declaration//GEN-END:variables
}
