(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("d2d79a62-f1c3-4f7d-98da-130966e82df5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd2d79a62-f1c3-4f7d-98da-130966e82df5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.14.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"0602d3ca-7880-4e08-87f0-acee2379f024":{"roots":{"references":[{"attributes":{},"id":"31e0f2eb-4455-44af-a946-f8e43a6ea448","type":"LinearScale"},{"attributes":{},"id":"11117905-7f6b-4c0f-b226-4de6d685bc39","type":"BasicTickFormatter"},{"attributes":{"callback":null,"start":0},"id":"941465d6-eb85-4d16-a2a4-7ab659eb4c30","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"d50109ae-f588-4c9f-ab2e-3d1b624aeb39","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"5070ce95-fd94-4f9f-a5c2-e73be6f6f0b5","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"10b87f3c-800d-4792-87e5-cc3c12481855","type":"Toolbar"},{"attributes":{},"id":"83aaa27b-de87-4132-9ceb-002630957067","type":"CategoricalScale"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"225e1467-ee95-4089-a7d8-117d0c653123","type":"FactorRange"},{"attributes":{"formatter":{"id":"11117905-7f6b-4c0f-b226-4de6d685bc39","type":"BasicTickFormatter"},"plot":{"id":"ada1ec5e-e43c-42a2-8b9c-8fc04076ad11","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed4abce5-eb12-4d07-9804-3ccc8be3cdad","type":"BasicTicker"}},"id":"f5ecca4d-852c-40ae-8987-928c1ffdca56","type":"LinearAxis"},{"attributes":{"formatter":{"id":"2ef4d2d8-8b39-4e61-8650-113b853acb91","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"ada1ec5e-e43c-42a2-8b9c-8fc04076ad11","subtype":"Figure","type":"Plot"},"ticker":{"id":"f03ad4de-f8cf-4f0e-a3f1-2d8be73bf453","type":"CategoricalTicker"}},"id":"e521b768-b86f-44c3-84dc-77b0bf11617c","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"4c524fa1-7b81-4239-9ca2-89ce3382d345","type":"ColumnDataSource"},"glyph":{"id":"5070ce95-fd94-4f9f-a5c2-e73be6f6f0b5","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3ca43f2e-b6f5-42db-9f87-1a62ec5def2b","type":"VBar"},"selection_glyph":null,"view":{"id":"2fe12a02-3d75-4f69-be4c-06f250588f4a","type":"CDSView"}},"id":"005234e8-4a52-4217-8705-3bfea459bf16","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"4c524fa1-7b81-4239-9ca2-89ce3382d345","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"ada1ec5e-e43c-42a2-8b9c-8fc04076ad11","subtype":"Figure","type":"Plot"},"ticker":{"id":"f03ad4de-f8cf-4f0e-a3f1-2d8be73bf453","type":"CategoricalTicker"}},"id":"d6e2d468-238f-4c86-ab11-c67f272ed673","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"ada1ec5e-e43c-42a2-8b9c-8fc04076ad11","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed4abce5-eb12-4d07-9804-3ccc8be3cdad","type":"BasicTicker"}},"id":"61a2ba50-87b6-42fe-a8e8-9aa94d6be0cb","type":"Grid"},{"attributes":{"below":[{"id":"e521b768-b86f-44c3-84dc-77b0bf11617c","type":"CategoricalAxis"}],"left":[{"id":"f5ecca4d-852c-40ae-8987-928c1ffdca56","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"e521b768-b86f-44c3-84dc-77b0bf11617c","type":"CategoricalAxis"},{"id":"d6e2d468-238f-4c86-ab11-c67f272ed673","type":"Grid"},{"id":"f5ecca4d-852c-40ae-8987-928c1ffdca56","type":"LinearAxis"},{"id":"61a2ba50-87b6-42fe-a8e8-9aa94d6be0cb","type":"Grid"},{"id":"005234e8-4a52-4217-8705-3bfea459bf16","type":"GlyphRenderer"}],"title":{"id":"d50109ae-f588-4c9f-ab2e-3d1b624aeb39","type":"Title"},"toolbar":{"id":"10b87f3c-800d-4792-87e5-cc3c12481855","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"225e1467-ee95-4089-a7d8-117d0c653123","type":"FactorRange"},"x_scale":{"id":"83aaa27b-de87-4132-9ceb-002630957067","type":"CategoricalScale"},"y_range":{"id":"941465d6-eb85-4d16-a2a4-7ab659eb4c30","type":"DataRange1d"},"y_scale":{"id":"31e0f2eb-4455-44af-a946-f8e43a6ea448","type":"LinearScale"}},"id":"ada1ec5e-e43c-42a2-8b9c-8fc04076ad11","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ed4abce5-eb12-4d07-9804-3ccc8be3cdad","type":"BasicTicker"},{"attributes":{"source":{"id":"4c524fa1-7b81-4239-9ca2-89ce3382d345","type":"ColumnDataSource"}},"id":"2fe12a02-3d75-4f69-be4c-06f250588f4a","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"3ca43f2e-b6f5-42db-9f87-1a62ec5def2b","type":"VBar"},{"attributes":{},"id":"f03ad4de-f8cf-4f0e-a3f1-2d8be73bf453","type":"CategoricalTicker"},{"attributes":{},"id":"2ef4d2d8-8b39-4e61-8650-113b853acb91","type":"CategoricalTickFormatter"}],"root_ids":["ada1ec5e-e43c-42a2-8b9c-8fc04076ad11"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"0602d3ca-7880-4e08-87f0-acee2379f024","elementid":"d2d79a62-f1c3-4f7d-98da-130966e82df5","modelid":"ada1ec5e-e43c-42a2-8b9c-8fc04076ad11"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();