package mx.uv;

import static spark.Spark.*;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        get("/hello",
            (request, responde) -> "<h1>Hello World again</h1>"
        );
           get("/Bye",
            (request, responde) -> "<h1>Bye World again</h1>"
        );
           get("/Hola",
            (request, responde) -> "<h1>Hola World again</h1>"
        );
           get("/Adios",
            (request, responde) -> "<h1>Adios World again</h1>"
        );
        
    }
}
