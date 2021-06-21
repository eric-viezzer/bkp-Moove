/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.moove.projeto.moove.modelo;

/**
 *
 * @author Aluno
 */
public class DadosAPI {
    public Integer id;
    public String fkmaquina;
    public String cpu_load;
    public String memory_load;
    public String memory_available;
    public String memory_use;
    public String user_desktop;
    public String media_temp;
    public String disk_load;

    public String getDisk_load() {
        return disk_load;
    }

    public void setDisk_load(String disk_load) {
        this.disk_load = disk_load;
    }

    
    public String getFkmaquina() {
        return fkmaquina;
    }

    public void setFkmaquina(String fkmaquina) {
        this.fkmaquina = fkmaquina;
    }

    public String getMemory_use() {
        return memory_use;
    }

    public void setMemory_use(String memory_use) {
        this.memory_use = memory_use;
    }
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCpu_load() {
        return cpu_load;
    }

    public void setCpu_load(String cpu_load) {
        this.cpu_load = cpu_load;
    }

    public String getMemory_load() {
        return memory_load;
    }

    public void setMemory_load(String memory_load) {
        this.memory_load = memory_load;
    }

    public String getMemory_available() {
        return memory_available;
    }

    public void setMemory_available(String memory_available) {
        this.memory_available = memory_available;
    }

    public String getUser_desktop() {
        return user_desktop;
    }

    public void setUser_desktop(String user_desktop) {
        this.user_desktop = user_desktop;
    }

    public String getMedia_temp() {
        return media_temp;
    }

    public void setMedia_temp(String media_temp) {
        this.media_temp = media_temp;
    }

    
    
}
