function twRequeteVariable(sVariable) {
    // Éliminer le "?"
    var sReq = window.location.search.substring(1);
    // Matrice de la requête
    var aReq = sReq.split("&");
    // Boucle les variables
    for (var i=0;i<aReq.length;i++) {
      // Matrice de la variables / valeur
      var aVar = aReq[i].split("=");
      // Retourne la valeur si la variable 
      // demandée = la variable de la boucle
      if(aVar[0] == sVariable){return aVar[1];}
    }
    // Aucune variable de trouvée.
    return(false);
  }

  var name = document.getElementById("name");
  var namevalue = twRequeteVariable("name"); 
  document.write(twRequeteVariable("name") + "\n");
  document.write(twRequeteVariable("Forename") + "\n");
  document.write(twRequeteVariable("tel") + "\n");
  document.write(twRequeteVariable("integer") + "\n");
  document.write(twRequeteVariable("text") + "\n");