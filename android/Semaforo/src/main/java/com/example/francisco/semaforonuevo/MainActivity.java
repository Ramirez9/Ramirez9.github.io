package com.example.francisco.semaforonuevo;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import android.content.Intent;
import android.annotation.SuppressLint;
import android.content.Context;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.os.Handler;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import java.util.ArrayList;


public class MainActivity extends AppCompatActivity {

    int nivelActual;
    ArrayList<Integer> secuenciaParcial;
    ArrayList<Integer> secuenciaActual;

    SharedPreferences prefs;
    SharedPreferences.Editor editor;

    // Botones
    Button buttonMostrarRojo;
    Button buttonMostrarAmbar;
    Button buttonMostrarVerde;

    Button buttonRojo;
    Button buttonAmbar;
    Button buttonVerde;

    Button iniciarSecuencia;

    TextView nivelMaximo;
    TextView textNivelActual;

    boolean botonesElegirDeshabilitados;
    boolean botonIniciarDeshabilitado;

    @Override
    public void onSaveInstanceState(Bundle savedInstanceState) {
        // Save the user's current game state
        savedInstanceState.putIntegerArrayList("secuenciaActual", secuenciaActual);
        savedInstanceState.putIntegerArrayList("secuenciaParcial", secuenciaParcial);
        savedInstanceState.putInt("nivelActual", nivelActual);
        savedInstanceState.putBoolean("botonesElegirDeshabilitados", botonesElegirDeshabilitados);
        savedInstanceState.putBoolean("botonIniciarDeshabilitado", botonIniciarDeshabilitado);

        // Always call the superclass so it can save the view hierarchy state
        super.onSaveInstanceState(savedInstanceState);
    }

    @SuppressLint("CommitPrefEdits")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        prefs = getSharedPreferences("MejorPuntuacion", Context.MODE_PRIVATE);
        editor = prefs.edit();

        buttonMostrarRojo = findViewById(R.id.buttonMostrarRojo);
        buttonMostrarAmbar = findViewById(R.id.buttonMostrarAmbar);
        buttonMostrarVerde = findViewById(R.id.buttonMostrarVerde);
        buttonRojo = findViewById(R.id.buttonRojo);
        buttonAmbar = findViewById(R.id.buttonAmbar);
        buttonVerde = findViewById(R.id.buttonVerde);
        iniciarSecuencia = findViewById(R.id.buttonIniciarSecuencia);
        textNivelActual = findViewById(R.id.nivelActual);

        nivelMaximo = findViewById(R.id.nivelMaximo);
        nivelMaximo.setText(String.valueOf(getMaximaPuntuacion()));

        if (savedInstanceState != null) {
            nivelActual = savedInstanceState.getInt("nivelActual");

            secuenciaParcial = savedInstanceState.getIntegerArrayList("secuenciaParcial");
            secuenciaActual = savedInstanceState.getIntegerArrayList("secuenciaActual");
            botonesElegirDeshabilitados = savedInstanceState.getBoolean("botonesElegirDeshabilitados");
            botonIniciarDeshabilitado = savedInstanceState.getBoolean("botonIniciarDeshabilitado");
            mostrarBotones();

        } else {
            nivelActual = 0;
            resetearJuego();
        }

        textNivelActual.setText(String.valueOf(nivelActual));
        iniciarSecuencia.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View view) {
                nivelActual += 1;
                if(getMaximaPuntuacion() < nivelActual)
                    setMaximaPuntuacion(nivelActual);

                nivelMaximo.setText(String.valueOf(getMaximaPuntuacion()));


                secuenciaActual = getSecuenciaAleatoria(nivelActual);
                System.out.println(secuenciaActual);

                textNivelActual.setText(String.valueOf(nivelActual));

                try {
                    secuenciaParcial = new ArrayList<>();
                    mostrarSecuencia(secuenciaActual);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });

        buttonRojo.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View view) {
                pulsar(0);
            }
        });
        buttonAmbar.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View view) {
                pulsar(1);
            }
        });
        buttonVerde.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View view) {
                pulsar(2);
            }
        });


    }

    private void mostrarBotones() {
        if(botonIniciarDeshabilitado)
            deshabilitarBotonIniciarSecuencia();
        else
            habilitarBotonIniciarSecuencia();
        if(botonesElegirDeshabilitados)
            deshabilitarBotonesElegir();
        else
            habilitarBotonesElegir();
    }




    private void pulsar(int i) {
        secuenciaParcial.add(i);
        if(!comparaSecuencias(secuenciaActual, secuenciaParcial)){
            Toast toast1 = Toast.makeText(getApplicationContext(),"¡¡Has perdido!!", Toast.LENGTH_SHORT);
            toast1.show();
            resetearJuego();
            return;
        }
        if(secuenciaActual.size() == secuenciaParcial.size()){
            botonIniciarDeshabilitado = false;
            botonesElegirDeshabilitados = true;
            mostrarBotones();

            //deshabilitarBotonesElegir();
            //habilitarBotonIniciarSecuencia();
            Toast toast1 = Toast.makeText(getApplicationContext(),"Muy bien. Pasas al siguiente nivel.", Toast.LENGTH_SHORT);
            toast1.show();
        }
    }


    private ArrayList<Integer> getSecuenciaAleatoria(int numero) {
        ArrayList<Integer> secuencia = new ArrayList<>();
        for (int i = 0; i < numero; i++){
            secuencia.add((int)(Math.random() * 3));
        }
        return secuencia;
    }



    private boolean comparaSecuencias(ArrayList<Integer> secuenciaCompleta, ArrayList<Integer> secuenciaParcial) {
        for (int i = 0; i < secuenciaParcial.size(); i++)
            if (secuenciaCompleta.get(i) != secuenciaParcial.get(i))
                return false;
        return true;
    }

    private void resetearJuego() {
        resetearColores();
        secuenciaActual = new ArrayList<>();
        secuenciaParcial = new ArrayList<>();
        nivelActual = 0;

        botonesElegirDeshabilitados = true;
        botonIniciarDeshabilitado = false;
        mostrarBotones();
    }

    private void mostrarColor(int numero) {
        if(numero == 0)
            buttonMostrarRojo.setBackgroundColor(Color.parseColor("#e74c3c"));
        else if(numero == 1)
            buttonMostrarAmbar.setBackgroundColor(Color.parseColor("#f1c40f"));
        else if(numero == 2)
            buttonMostrarVerde.setBackgroundColor(Color.parseColor("#2ecc71"));


    }

    private void resetearColores(){
        buttonMostrarRojo.setBackgroundColor(Color.parseColor("#7f8c8d"));
        buttonMostrarAmbar.setBackgroundColor(Color.parseColor("#7f8c8d"));
        buttonMostrarVerde.setBackgroundColor(Color.parseColor("#7f8c8d"));
    }

    private void habilitarBotonesElegir(){
        buttonRojo.setEnabled(true);
        buttonAmbar.setEnabled(true);
        buttonVerde.setEnabled(true);
    }

    private void deshabilitarBotonesElegir(){
        buttonRojo.setEnabled(false);
        buttonAmbar.setEnabled(false);
        buttonVerde.setEnabled(false);
    }

    private void habilitarBotonIniciarSecuencia(){
        iniciarSecuencia.setEnabled(true);
    }
    private void deshabilitarBotonIniciarSecuencia(){
        iniciarSecuencia.setEnabled(false);
    }

    private int getMaximaPuntuacion(){
        return prefs.getInt("puntuacion",0);
    }

    private void setMaximaPuntuacion(int puntuacion){
        editor.putInt("puntuacion", puntuacion);
        editor.commit();
    }



    private void mostrarSecuencia(final ArrayList<Integer> secuencia) {

        botonIniciarDeshabilitado = true;
        botonesElegirDeshabilitados = true;
        mostrarBotones();

        Handler handler=new Handler();
        for(int i=0;i<secuencia.size();i++){
            final int finalI = i;
            Runnable r=new Runnable() {
                public void run() {
                    mostrarColor(secuencia.get(finalI));
                }
            };
            handler.postDelayed(r, 2000*i);

            Runnable r2=new Runnable() {
                public void run() {
                    resetearColores();
                }
            };
            handler.postDelayed(r2, 2000*i+1000);
        }
        Runnable r3=new Runnable() {
            public void run() {
                botonesElegirDeshabilitados = false;
                mostrarBotones();
            }
        };
        handler.postDelayed(r3, 2000*secuencia.size());

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.menu, menu);
        return true;
    }

    public boolean onOptionsItemSelected(MenuItem item){
        int id = item.getItemId();
        if(id == R.id.menuAbout){

            Intent acercaDe = new Intent(getApplicationContext(), About.class);
            startActivity(acercaDe);

            return true;
        }else if (id == R.id.menuSendMessage) {
            Intent sendIntent = new Intent();
            sendIntent.setAction(Intent.ACTION_SEND);
            sendIntent.putExtra(Intent.EXTRA_TEXT, "Estoy jugando al semáforo!!");
            sendIntent.setType("text/plain");
            startActivity(sendIntent);
        }
        return super.onOptionsItemSelected(item);
    }


}