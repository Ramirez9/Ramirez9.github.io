package com.example.francisco.balocensto;

import android.content.DialogInterface;
import android.content.pm.ActivityInfo;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private TextView contadorLocal;
    private TextView contadorVisitante;
    private TextView contadorLocalFaltas;
    private TextView contadorVisitanteFaltas;
    private Button botonReset;
    private Button sumar1Local;
    private Button sumar2Local;
    private Button sumar3Local;
    private Button sumar1Visitante;
    private Button sumar2Visitante;
    private Button sumar3Visitante;
    private Button botonRestarLocal;
    private Button botonRestarVisitante;
    private Button botonFaltas1;
    private Button botonFaltas2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);

        contadorLocal = (TextView) findViewById(R.id.contadorLocal);
        contadorVisitante = (TextView) findViewById(R.id.contadorVisitante);

        contadorLocalFaltas = (TextView) findViewById(R.id.contadorLocalFaltas);
        contadorVisitanteFaltas = (TextView) findViewById(R.id.contadorVisitanteFaltas);

        botonReset = (Button) findViewById(R.id.reset);
        sumar1Local = (Button) findViewById(R.id.button1Local);
        sumar2Local = (Button) findViewById(R.id.button2Local);
        sumar3Local = (Button) findViewById(R.id.button3Local);
        botonFaltas1 = (Button) findViewById(R.id.button4Local);

        sumar1Visitante = (Button) findViewById(R.id.button1Visitante);
        sumar2Visitante = (Button) findViewById(R.id.button2Visitante);
        sumar3Visitante = (Button) findViewById(R.id.button3Visitante);
        botonFaltas2 = (Button) findViewById(R.id.button4Visitante);

        botonRestarLocal = (Button) findViewById(R.id.buttonRestarLocal);
        botonRestarVisitante = (Button) findViewById(R.id.buttonRestarVisitante);


        /**
         * Sumas del equipo local
         */
        sumar1Local.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorLocal.getText().toString());
                contador++;
                contadorLocal.setText(String.valueOf(contador));
            }
        });

        sumar2Local.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorLocal.getText().toString());
                contador += 2;
                contadorLocal.setText(String.valueOf(contador));
            }
        });

        sumar3Local.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorLocal.getText().toString());
                contador += 3;
                contadorLocal.setText(String.valueOf(contador));
            }
        });

        botonFaltas1.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorLocalFaltas.getText().toString());
                contador += 1;
                contadorLocalFaltas.setText(String.valueOf(contador));
                if(contador == 5)
                    contador = 0;
                contadorLocalFaltas.setText(String.valueOf(contador));
            }
        });

        sumar1Visitante.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorVisitante.getText().toString());
                contador++;
                contadorVisitante.setText(String.valueOf(contador));
            }
        });

        sumar2Visitante.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorVisitante.getText().toString());
                contador += 2;
                contadorVisitante.setText(String.valueOf(contador));
            }
        });

        sumar3Visitante.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorVisitante.getText().toString());
                contador += 3;
                contadorVisitante.setText(String.valueOf(contador));
            }
        });


        botonFaltas2.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorVisitanteFaltas.getText().toString());
                contador += 1;
                contadorVisitanteFaltas.setText(String.valueOf(contador));
                if(contador == 5)
                    contador = 0;
                contadorVisitanteFaltas.setText(String.valueOf(contador));
            }
        });


        botonReset.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                AlertDialog.Builder builder = new AlertDialog.Builder(v.getContext());
                builder.setMessage("¿Seguro que desea borrar los marcadores?");

                builder.setPositiveButton("Continuar", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        contadorVisitante.setText("0");
                        contadorLocal.setText("0");
                        contadorLocalFaltas.setText("0");
                        contadorVisitanteFaltas.setText("0");
                    }
                });
                builder.setNegativeButton("Cancelar", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {

                    }
                });
                AlertDialog dialog = builder.create();
                builder.show();


            }

        });

        botonRestarLocal.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorLocal.getText().toString());
                if (contador <= 0) {
                    return;
                }
                contador = contador - 1;
                contadorLocal.setText(String.valueOf(contador));
            }
        });

        botonRestarVisitante.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorVisitante.getText().toString());
                if (contador <= 0) {
                    return;
                }
                contador = contador - 1;
                contadorVisitante.setText(String.valueOf(contador));
            }
        });
    }
}