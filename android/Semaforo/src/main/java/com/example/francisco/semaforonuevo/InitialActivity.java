package com.example.francisco.semaforonuevo;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
public class InitialActivity extends AppCompatActivity {

    private Button btn;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setTitle("");
        setContentView(R.layout.activity_initial);

        btn = (Button) findViewById(R.id.btnInicio);

        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent mainActivity = new Intent(getApplicationContext(), MainActivity.class);
                startActivity(mainActivity);
            }
        });

    }
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu, menu);
        return true;
    }
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();

        if(id == R.id.menuAbout){

            Intent acercaDe = new Intent(getApplicationContext(), About.class);
            startActivity(acercaDe);

            return true;
        }else if (id == R.id.menuSendMessage) {

            Intent sendIntent = new Intent();
            sendIntent.setAction(Intent.ACTION_SEND);
            sendIntent.putExtra(Intent.EXTRA_TEXT, "Estoy jugando al semáforo!!!");
            sendIntent.setType("text/plain");
            startActivity(sendIntent);

        }
        return super.onOptionsItemSelected(item);
    }
}