/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.moove.projeto.moove.programas;

import Conexoes.ConexaoBanco;
import javax.swing.JOptionPane;
import Conexoes.ConexaoBancoAzure;

/**
 *
 * @author Aluno
 */
public class CadastroMoove extends javax.swing.JFrame {

    ConexaoBanco conexaoLocal = new ConexaoBanco();
    ConexaoBancoAzure conexaoAzure = new ConexaoBancoAzure();
    LoginMoove login = new LoginMoove();
 

    /**
     * Creates new form CadastroMoove
     */
    public CadastroMoove() {
        initComponents();
        setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);

    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        buttonGroup1 = new javax.swing.ButtonGroup();
        jPanel1 = new javax.swing.JPanel();
        jLabel1 = new javax.swing.JLabel();
        jSeparator1 = new javax.swing.JSeparator();
        TFnome = new javax.swing.JTextField();
        jLabel2 = new javax.swing.JLabel();
        BTcadastrar = new javax.swing.JButton();
        jLabel4 = new javax.swing.JLabel();
        jLabel5 = new javax.swing.JLabel();
        TFemail = new javax.swing.JTextField();
        jLabel6 = new javax.swing.JLabel();
        TFsenha = new javax.swing.JPasswordField();
        jLabel7 = new javax.swing.JLabel();
        RBDev = new javax.swing.JRadioButton();
        RBAnalista = new javax.swing.JRadioButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jPanel1.setBackground(new java.awt.Color(0, 0, 0));
        jPanel1.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jLabel1.setBackground(new java.awt.Color(0, 102, 255));
        jLabel1.setFont(new java.awt.Font("Berlin Sans FB", 0, 24)); // NOI18N
        jLabel1.setForeground(new java.awt.Color(33, 230, 193));
        jLabel1.setText("copyright © 2020 todos os direitos reservados");
        jPanel1.add(jLabel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(90, 420, 450, 30));

        jSeparator1.setBackground(new java.awt.Color(33, 230, 193));
        jPanel1.add(jSeparator1, new org.netbeans.lib.awtextra.AbsoluteConstraints(80, 70, 450, 30));
        jPanel1.add(TFnome, new org.netbeans.lib.awtextra.AbsoluteConstraints(250, 130, 210, 30));

        jLabel2.setBackground(new java.awt.Color(0, 102, 255));
        jLabel2.setFont(new java.awt.Font("Berlin Sans FB", 0, 36)); // NOI18N
        jLabel2.setForeground(new java.awt.Color(33, 230, 193));
        jLabel2.setText("Moove");
        jPanel1.add(jLabel2, new org.netbeans.lib.awtextra.AbsoluteConstraints(260, 20, 100, 50));

        BTcadastrar.setBackground(new java.awt.Color(255, 255, 255));
        BTcadastrar.setText("Cadastrar");
        BTcadastrar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                BTcadastrarActionPerformed(evt);
            }
        });
        jPanel1.add(BTcadastrar, new org.netbeans.lib.awtextra.AbsoluteConstraints(230, 380, 200, -1));

        jLabel4.setBackground(new java.awt.Color(0, 102, 255));
        jLabel4.setFont(new java.awt.Font("Berlin Sans FB", 0, 36)); // NOI18N
        jLabel4.setForeground(new java.awt.Color(33, 230, 193));
        jLabel4.setText("Senha");
        jPanel1.add(jLabel4, new org.netbeans.lib.awtextra.AbsoluteConstraints(150, 230, 100, 30));

        jLabel5.setBackground(new java.awt.Color(0, 102, 255));
        jLabel5.setFont(new java.awt.Font("Berlin Sans FB", 0, 36)); // NOI18N
        jLabel5.setForeground(new java.awt.Color(33, 230, 193));
        jLabel5.setText("Nome");
        jPanel1.add(jLabel5, new org.netbeans.lib.awtextra.AbsoluteConstraints(150, 130, 100, 30));
        jPanel1.add(TFemail, new org.netbeans.lib.awtextra.AbsoluteConstraints(250, 180, 210, 30));

        jLabel6.setBackground(new java.awt.Color(0, 102, 255));
        jLabel6.setFont(new java.awt.Font("Berlin Sans FB", 0, 36)); // NOI18N
        jLabel6.setForeground(new java.awt.Color(33, 230, 193));
        jLabel6.setText("Email");
        jPanel1.add(jLabel6, new org.netbeans.lib.awtextra.AbsoluteConstraints(150, 180, 100, 30));

        TFsenha.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                TFsenhaActionPerformed(evt);
            }
        });
        jPanel1.add(TFsenha, new org.netbeans.lib.awtextra.AbsoluteConstraints(250, 230, 210, 30));

        jLabel7.setBackground(new java.awt.Color(0, 102, 255));
        jLabel7.setFont(new java.awt.Font("Berlin Sans FB", 0, 36)); // NOI18N
        jLabel7.setForeground(new java.awt.Color(33, 230, 193));
        jLabel7.setText("Tipo usuario");
        jPanel1.add(jLabel7, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 280, 190, 30));

        RBDev.setBackground(new java.awt.Color(0, 0, 0));
        buttonGroup1.add(RBDev);
        RBDev.setFont(new java.awt.Font("Berlin Sans FB", 0, 18)); // NOI18N
        RBDev.setForeground(new java.awt.Color(0, 204, 204));
        RBDev.setText("Desenvolvedor");
        RBDev.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                RBDevActionPerformed(evt);
            }
        });
        jPanel1.add(RBDev, new org.netbeans.lib.awtextra.AbsoluteConstraints(250, 280, -1, 40));

        RBAnalista.setBackground(new java.awt.Color(0, 0, 0));
        buttonGroup1.add(RBAnalista);
        RBAnalista.setFont(new java.awt.Font("Berlin Sans FB", 0, 18)); // NOI18N
        RBAnalista.setForeground(new java.awt.Color(0, 204, 204));
        RBAnalista.setText("Analista");
        RBAnalista.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                RBAnalistaActionPerformed(evt);
            }
        });
        jPanel1.add(RBAnalista, new org.netbeans.lib.awtextra.AbsoluteConstraints(390, 280, 90, 40));

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, 623, javax.swing.GroupLayout.PREFERRED_SIZE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );

        setSize(new java.awt.Dimension(639, 452));
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void BTcadastrarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_BTcadastrarActionPerformed

        String nome = TFnome.getText();
        String email = TFemail.getText();
        String senha = TFsenha.getText();
        String analista = RBAnalista.getText();
        String dev = RBDev.getText();

        if (analista.isEmpty() || dev.isEmpty() || senha.isEmpty()
                || email.isEmpty() || nome.isEmpty()) {
            JOptionPane.showMessageDialog(null, "Campos em branco!");
        } else if (senha.length() < 8) {
            JOptionPane.showMessageDialog(null, "Senha deve conter 8 caracteres ");
        } else {
            if (RBAnalista.isSelected()) {
                conexaoAzure.jdbcTemplate.update(
                        "insert into dbo.usuarios (nome,email,senha,tipousuario) values (?,?,?,?)",
                        nome, email, senha, analista);
                JOptionPane.showMessageDialog(null, "Cadastro realizado com sucesso");

            } else {
                conexaoAzure.jdbcTemplate.update(
                        "insert into dbo.usuarios (nome,email,senha,tipousuario) values (?,?,?,?)",
                        nome, email, senha, dev);
                JOptionPane.showMessageDialog(null, "Cadastro realizado com sucesso");
                  
            }
                login.setVisible(true);
                dispose();
        }
    }//GEN-LAST:event_BTcadastrarActionPerformed

    private void TFsenhaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_TFsenhaActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_TFsenhaActionPerformed

    private void RBDevActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_RBDevActionPerformed
        // TODO add your handling code here:

    }//GEN-LAST:event_RBDevActionPerformed

    private void RBAnalistaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_RBAnalistaActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_RBAnalistaActionPerformed

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
            java.util.logging.Logger.getLogger(CadastroMoove.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(CadastroMoove.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(CadastroMoove.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(CadastroMoove.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new CadastroMoove().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton BTcadastrar;
    private javax.swing.JRadioButton RBAnalista;
    private javax.swing.JRadioButton RBDev;
    private javax.swing.JTextField TFemail;
    private javax.swing.JTextField TFnome;
    private javax.swing.JPasswordField TFsenha;
    private javax.swing.ButtonGroup buttonGroup1;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JSeparator jSeparator1;
    // End of variables declaration//GEN-END:variables
}
