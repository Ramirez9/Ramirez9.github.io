package com.example.eventos.operacionesaritmeticas;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Button;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    private EditText textoEditado1;
    private EditText textoEditado2;
    private TextView resultadoTexto;
    private Button botonSuma;
    private Button botonResta;
    private Button botonMultiplicacion;
    private Button botonDivision;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        textoEditado1 = (EditText) findViewById(R.id.numero1);
        textoEditado2 = (EditText) findViewById(R.id.numero2);

        botonSuma = (Button) findViewById(R.id.botonSuma);
        botonResta = (Button) findViewById(R.id.botonResta);
        botonDivision = (Button) findViewById(R.id.botonDivision);
        botonMultiplicacion = (Button) findViewById(R.id.botonMultiplicacion);

        resultadoTexto = (TextView) findViewById(R.id.resultado);

        botonSuma.setOnClickListener(new Button.OnClickListener(){

            public void onClick(View view){

                int resultado = Integer.valueOf(textoEditado1.getText().toString()) +
                        Integer.valueOf(textoEditado2.getText().toString());

                resultadoTexto.setText("Resultado = " + resultado);
            }

        });
        botonResta.setOnClickListener(new Button.OnClickListener(){

            public void onClick(View view){

                int resultado = Integer.valueOf(textoEditado1.getText().toString()) -
                        Integer.valueOf(textoEditado2.getText().toString());

                resultadoTexto.setText("Resultado = " + resultado);
            }

        });
        botonMultiplicacion.setOnClickListener(new Button.OnClickListener(){

            public void onClick(View view){

                int resultado = Integer.valueOf(textoEditado1.getText().toString()) *
                        Integer.valueOf(textoEditado2.getText().toString());

                resultadoTexto.setText("Resultado = " + resultado);
            }

        });
        botonDivision.setOnClickListener(new Button.OnClickListener(){

            public void onClick(View view){

                int resultado = Integer.valueOf(textoEditado1.getText().toString()) /
                        Integer.valueOf(textoEditado2.getText().toString());

                resultadoTexto.setText("Resultado = " + resultado);
            }

        });
    }
}
