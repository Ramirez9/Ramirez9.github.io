package com.example.merienda.merienda;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;
import android.widget.ImageView;
import android.widget.Button;
import android.view.View;


public class MainActivity extends AppCompatActivity {

    private Button boton;
    private TextView texto;
    private ImageView imagen;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        texto = (TextView) findViewById(R.id.mensaje);
        imagen = (ImageView) findViewById(R.id.imagen);
        boton = (Button) findViewById(R.id.boton);

        boton.setOnClickListener(new Button.OnClickListener(){
            public void onClick(View v){
                texto.setText("I'm so full");
                imagen.setImageResource(R.drawable.congalleta);
            }
        });

    }
}
