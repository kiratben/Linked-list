(function () {

      var lInstances = {};
      var lDis = (function (q, d) {
            try {

                if (typeof q === 'number') q = lInstances[q];

                d = d || this === window;

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

        })();