var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function verReceta( id){
    let info = [
    { 'receta': `  <div>
                        <h3 style="color:rgb(143, 124, 17)">Pollo con verduras</h3>
                        <div class="text-center">
                            <img src="imagen/polloxd.jpg" alt="" width="300" height="300" >
                        
                        </div>
                        <div class="text-left"><br>
                            <strong>INGREDIENTES:</strong> <br>
                            1. 24 placas de lasaña (si son precocidas, solo tendrás que ponerlas en remojo).<br>
                            2. 1 cebolla grande. <br>
                            3. 1 calabacín.<br>
                            4. 1 berenjena.<br>
                            5. 2 zanahorias.<br>
                            6. 200 gr de brócoli.<br>
                            7. 200 ml de salsa de tomate.<br>
                            8. Queso para rallar, tipo emmental o mozzarella.<br>
                            9. Orégano.<br>
                            10. Aceite y sal.<br>
                            11. Para la salsa bechamel<br>
                            12. 1/2 litro de leche (el equivalente a un poco más de dos vasos de leche).
                            13. 2 cucharadas de harina.
                            14. 3 cucharadas de mantequilla.
                            15. Sal.
                            16. Especias al gusto (nuez moscada, pimienta, orégano…).



                        </div>
                        <div>
                            <br>
                            <strong>Como hacer pollo con verduras:</strong> <br>
                            <p style="color:black; font-size: 12px">
                                1. Vamos a preparar la bechamel, y para ello seguimos esta receta que explica cómo hacer bechamel casera y 
                                que aquí está resumida En un cazo a fuego suave, añade las dos cucharadas de mantequilla, y cuando la 
                                mantequilla se deshaga y se quede líquida, incorpora las cucharadas de harina y revuélvelo todo muy bien,
                                 para que se forme una pasta homogénea y no queden grumos de harina.
                                 A continuación, añade un poco de leche (medio vaso) y sigue mezclando bien. Cuando se haya integrado todo, añade el resto de la leche y no dejes de remover con unas varillas o una cuchara, para que no se te pegue en el fondo. Añade sal al gusto, y también especias, por ejemplo pimienta negra molida y orégano.
Cuando la salsa esté cremosa y con la textura adecuada, apártala del fuego y resérvala. Si en el momento de añadirla a la lasaña está un poco espesa, añade un chorrito de leche y remueve bien.
                            </P>
                        
                            <p style="color:black; font-size: 12px">
                                2. Si tus placas de lasaña son precocinadas, ponlas a remojo sumergiéndolas en un recipiente con agua, normalmente durante 10-15 minutos (te lo indicará el paquete). Remuévelas cada poco tiempo para evitar que se peguen. Si no son precocinadas, sigue las instrucciones del paquete para cocerlas.
                            </p>
                        
                            <p style="color:black; font-size: 12px">
                                3. Pela la cebolla y córtala pequeñita. Lava la berenjena, el calabacín y las zanahorias, y pártelas en cubitos pequeños. Lava el brécol, déjalo escurrir y pártelo en pequeños ramilletes.
                            </p>
                        
                            <p style="color:black; font-size: 12px">
                                4. Saltea cada verdura, de una en una, en la sartén a fuego medio, con un poquito de aceite y sal. Estarán listas cada una cuando empiecen a dorarse. Reserva.
                            </p>
                        </div>
                    </div>`, 
        'id': 0}, 
    { 'receta': `<div>
                    <h2 style="color:rgb(143, 124, 17)">Tacos	</h2>
                    <div class="text-center">
                        <img src="imagen/tacosxd.jpg" alt="" width="300" height="300" >
                    
                    </div><br>
                    <div class="text-left">
                        <strong>INGREDIENTES:</strong> <br>
                        1.(454 g.) 1 Libra Carne Molida De Res <br>
                        2.Sal y Pimienta al gusto <br>
                        3.(16 g.) 4 dientes Ajo Cortados finamente <br>
                        4.(75 g.) 1/2 Taza Cebolla Cortada finamente <br>
                        5.(5 ml.) 5 Cucharaditas Aceite De Maíz <br>
                        6.(3 g.) 1 Cucharadita Paprika <br>
                        7.(76 g.) 1 Sobre Crema De Tomate MAGGI® <br>
                        8.(500 ml.) 2 Tazas Agua <br>
                        9.(370 g.) 2 Tazas Tomate Cortado en cubos pequeños <br>
                        10.(90 g.) 3/4 Taza Cebolla Morada Cortada finamente <br>
                        11.(65 ml.) 1/4 Taza Jugo de limón <br>
                        12.(30 ml.) 2 Cucharadas Aceite De Oliva <br>
                        13.(9 g.) 1/2 Taza Cilantro Cortado finamente <br>
                        14.Sal y Pimienta al gusto <br>
                        15.(480 g.) 16 Tortillas De Trigo <br>
                        16.(172 g.) 1 1/2 Taza Queso Amarillo Tipo Americano <br>
                    </div>
                    <div>
                        <br>
                        <strong>Como hacer tacos:</strong> <br>
                        <p style="color:black; font-size: 12px">
                            1. En un tazón, combinar la carne molida con sal, pimienta y dejar marinar 5 minutos.
                        </P>
                        
                        <p style="color:black; font-size: 12px">
                            2. En una cacerola a fuego alto, verter el aceite y sofreír el ajo y la cebolla hasta que estén dorados.
                        </p>
                        
                        <p style="color:black; font-size: 12px">
                            3. Poner a fuego medio, agregar la carne, la paprika, y cocinar por 10 minutos revolviendo constantemente
                        </p>
                        
                        <p style="color:black; font-size: 12px">
                            4. En otro tazón, diluir la Crema de Tomate MAGGI® en el agua. Verter esta mezcla en la cacerola junto a la carne, revolver y cocinar por 15 minutos. Retirar del fuego y reservar.
                        </p>
                       
                        <p style="color:black; font-size: 12px">
                            5. En otro tazón, mezclar el tomate, la cebolla, el limón, el aceite, el cilantro, la sal, la pimienta y dejar marinar por 15 minutos en el refrigerador.  
                        </p>
                    </div>
                </div>
                `, 
        'id': 1},
        {
            'receta': `   <div>
                            <h2 style="color:rgb(143, 124, 17)">Lasaña de carne	</h2>
                            <div class="text-center">
                                <img src="imagen/lasañaxd.jpg" alt="" width="300" height="300" >
                            
                            </div><br>
                            <div class="text-left">
                                <strong>INGREDIENTES:</strong> <br>
                                • 3 1/2 libras de carne de res molida <br>
                                • 2 cucharaditas de ajo en polvo Ajo en polvo <br>
                                • 2 cucharadas de Caldo de Carne de Res MAGGI® <br>
                                • 1 cucharada de aceite vegetal <br>
                                • 1/3 taza de cebolla cortada finamente <br>
                                • 3 dientes de ajo cortados finamente <br>
                                • 1/2 taza de apio cortado finamente <br>
                                • 1 sobre de Salsa De Tomate Bolognesa MAGGI®  <br>
                                • 3/4 taza de agua <br>
                                • 4 hojas de laurel <br>
                                • 3/4 libra de pasta para lasaña cocida Pasta de lasaña precocida <br>
                                • 2 tazas de queso mozzarella rallado <br>
                                • Sal y pimienta al gusto <br>
                                • 1 taza de queso parmesano <br>
                                
                            </div>
                            <div>
                                <br>
                                <strong>Como hacer Lasaña:</strong> <br>
                                <p style="color:black; font-size: 12px">
                                    1. En un tazón, colocar la carne, el ajo en polvo, el Caldo de Carne de Res MAGGI® 2, la pimienta molida y marinar por 5 minutos.
                                </P>
                                
                                <p style="color:black; font-size: 12px">
                                    2. En una cacerola grande, colocar el aceite, la cebolla, el ajo, el apio y sofreír por 2 minutos
                                </p>
                                
                                <p style="color:black; font-size: 12px">
                                    3. Añadir la carne y cocinar por 10 minutos revolviendo constantemente.
                                    Cuando la carne adquiera una tonalidad gris clara, añadir la Salsa de Tomate MAGGI® estilo Boloñesa, el agua, las hojas de laurel, la sal y pimienta y cocinar a fuego medio por 15 minutos.
                                </p>
                                
                                <p style="color:black; font-size: 12px">
                                    4. Armado de la lasaña: Al momento de montar la lasaña, untar con un poco de aceite un recipiente refractario o la bandeja que utilice. Colocar una pequeña cantidad de salsa, cubrir el fondo de la bandeja con lascas de pasta precocida, verter una cantidad pequeña de carne, añadir el queso mozzarella y una mínima parte de queso parmesano.
                                </p>
                            
                                <p style="color:black; font-size: 12px">
                                    5. Repetir este procedimiento hasta rellenar el recipiente. Finalmente, colocar una capa de pasta precocida, la salsa que haya quedado y cubrir con los quesos. La lasaña tiene que tener una buena cantidad de líquido para que la pasta se cocine. Si está muy seca, se le puede agregar caldo de pollo.
                                </p>

                                <p style="color:black; font-size: 12px">
                                    6. Taparla con papel aluminio y llevar al horno a 150°C por 40 minutos.
                                </p>
                            </div>
                        </div>`,
            'id': 2
        }
    ];

   //alert(info[id].receta);
   document.getElementById("diverror").innerHTML=info[id].receta;
   modal.style.display = "block";
    
    

    
}

window.onclick = function(event) {
         if (event.target == modal) {
              modal.style.display = "none";
         }
}


span.onclick = function() {
modal.style.display = "none";
}

