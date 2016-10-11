(function () {

      var lInstances = {}; //Le stockage pour chaque instance 
      //Destructeur
      var lDis = (function (q, d) {
            try {
                //S'assurer des instances Liste
                if (typeof q === 'number') q = lInstances[q];
                //Déterminer si l'événement a été appelé
                d = d || this === window;
                //Retirer l'instance 
                lInstances[q.key] = null;
                delete lInstances[q.key];

                if (d && Object.keys(lInstances).length === 0) {
                    (function () {
                        setTimeout((function () {
                            List = null;
                            return delete List;
                        }), 0);
                    })();
                }

            } catch (e) { }
        });


   function List() {
       var typ = undefined;
       var lArray = [];
        if (arguments[0] && arguments[0] instanceof List) {
            typ = arguments[0].type; 
            lArray = arguments[0].array; 
        } else if (arguments[0] && arguments[0].length) {
            try {
                typ = arguments[0][0].constructor; 
                arguments[1] = arguments[1] || arguments[0]; 
            } catch (e) { }
        };
   }


        })();
