(function () {

      var lInstances = {}; //Le stockage pour chaque instance 
      var lCreated;
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
       var k = lCreated;
        if (arguments[0] && arguments[0] instanceof List) {
            typ = arguments[0].type; 
            lArray = arguments[0].array; 
        } else if (arguments[0] && arguments[0].length) {
            try {
                typ = arguments[0][0].constructor; 
                arguments[1] = arguments[1] || arguments[0]; 
            } catch (e) { }
        };


         if (Object.defineProperty) {
                Object.defineProperty(List.prototype, 'array',
           {
               
               enum: true, 
               conf: true, 
               get: function () {
                   return lArray;
               },
               set: function (v) {
                   if (v instanceof Array) {
                       if (v.length) {
                           v.forEach(function (val) { if (val.constructor !== typ) throw "ms : "; });
                       }
                       lArray = v;
                   }
               }
           });

            Object.defineProperty(List.prototype, 'key',
           {
               config: true,
               get: function () {
                   return k;
               }
           });
            Object.defineProperty(List.prototype, 'type',
           {
               enum: true,
               config: true,
               get: function () {
                   return typ;
               }
           });
         } else {

            this.$type = typ;         
            this.array = lArray;
            this.$key = k;
        }
   }
 function validate(o) {
            if (!typ) {
                typ = o.constructor;
            }
            else if (o.constructor !== typ) {
                throw "exp :";
            }
           }



   function select(q) {
            var sList = new List();
            lArray.forEach(function (t) {
                with (t)
                    if (eval(q))
                        sList.Add(t);
            });
            return sList;
        }



        })();
