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
      };var element = document.getElementById("93c62678-41f0-43b4-9295-c45db034dfc9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '93c62678-41f0-43b4-9295-c45db034dfc9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"2f7c1d53-41c9-46c2-bf61-6745d45b1b27":{"roots":{"references":[{"attributes":{"below":[{"id":"673bbfd7-3831-4452-9be1-0e380cdd6e5b","type":"CategoricalAxis"}],"left":[{"id":"69c26256-94f1-4069-8e5b-893f61fdf200","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"673bbfd7-3831-4452-9be1-0e380cdd6e5b","type":"CategoricalAxis"},{"id":"85c05136-fa64-40b9-a13d-8c3e433be38d","type":"Grid"},{"id":"69c26256-94f1-4069-8e5b-893f61fdf200","type":"LinearAxis"},{"id":"726536a0-ea86-4f26-a484-cc947a647bd6","type":"Grid"},{"id":"2dad2395-b393-462a-bf4e-9727bd85a4c1","type":"GlyphRenderer"}],"title":{"id":"66c7cec8-6849-4401-8ee8-5f9c497d79e0","type":"Title"},"toolbar":{"id":"0ecf39f6-b500-4df4-9b1c-0132fd2550f4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"633bf8f7-67ec-43db-b6dc-9b4b7d86dd52","type":"FactorRange"},"x_scale":{"id":"077713ff-bdd2-4a72-93de-dc6919466d6a","type":"CategoricalScale"},"y_range":{"id":"72fd1499-e59b-4651-aca3-a4cfd22ff3a5","type":"DataRange1d"},"y_scale":{"id":"6692f638-e515-451c-9e4e-50bebec3f2e5","type":"LinearScale"}},"id":"0aec7cf7-ad0b-4abb-861c-864bd4369b82","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6692f638-e515-451c-9e4e-50bebec3f2e5","type":"LinearScale"},{"attributes":{},"id":"5fd3de76-adc5-4966-8e77-237a9f55dff8","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"start":0},"id":"72fd1499-e59b-4651-aca3-a4cfd22ff3a5","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"66c7cec8-6849-4401-8ee8-5f9c497d79e0","type":"Title"},{"attributes":{"formatter":{"id":"5fd3de76-adc5-4966-8e77-237a9f55dff8","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"0aec7cf7-ad0b-4abb-861c-864bd4369b82","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ba87621-d130-4a52-b236-b70112a4eeb1","type":"CategoricalTicker"}},"id":"673bbfd7-3831-4452-9be1-0e380cdd6e5b","type":"CategoricalAxis"},{"attributes":{},"id":"4ba87621-d130-4a52-b236-b70112a4eeb1","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"0ecf39f6-b500-4df4-9b1c-0132fd2550f4","type":"Toolbar"},{"attributes":{"end":2,"factors":["2015","2016","2017"],"palette":["#c9d9d3","#718dbf","#e84d60"],"start":1},"id":"e5897fe6-61ec-425a-a440-3731137c4cbf","type":"CategoricalColorMapper"},{"attributes":{},"id":"077713ff-bdd2-4a72-93de-dc6919466d6a","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"c0d0599e-c939-457f-a1bf-478a8d3de824","type":"BasicTickFormatter"},"plot":{"id":"0aec7cf7-ad0b-4abb-861c-864bd4369b82","subtype":"Figure","type":"Plot"},"ticker":{"id":"d618c1cf-7845-4b82-b369-0563bc95810e","type":"BasicTicker"}},"id":"69c26256-94f1-4069-8e5b-893f61fdf200","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"cbd85045-4579-4539-afca-669dfc16e046","type":"VBar"},{"attributes":{"source":{"id":"5c8a7318-2168-46ce-9226-66e8242a9e91","type":"ColumnDataSource"}},"id":"dc661f33-d818-4575-80a7-b49ce76d751c","type":"CDSView"},{"attributes":{},"id":"c0d0599e-c939-457f-a1bf-478a8d3de824","type":"BasicTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"0aec7cf7-ad0b-4abb-861c-864bd4369b82","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ba87621-d130-4a52-b236-b70112a4eeb1","type":"CategoricalTicker"}},"id":"85c05136-fa64-40b9-a13d-8c3e433be38d","type":"Grid"},{"attributes":{"fill_color":{"field":"x","transform":{"id":"e5897fe6-61ec-425a-a440-3731137c4cbf","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"51ee115b-3a11-431e-9554-1afccc379302","type":"VBar"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"5c8a7318-2168-46ce-9226-66e8242a9e91","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"0aec7cf7-ad0b-4abb-861c-864bd4369b82","subtype":"Figure","type":"Plot"},"ticker":{"id":"d618c1cf-7845-4b82-b369-0563bc95810e","type":"BasicTicker"}},"id":"726536a0-ea86-4f26-a484-cc947a647bd6","type":"Grid"},{"attributes":{},"id":"d618c1cf-7845-4b82-b369-0563bc95810e","type":"BasicTicker"},{"attributes":{"data_source":{"id":"5c8a7318-2168-46ce-9226-66e8242a9e91","type":"ColumnDataSource"},"glyph":{"id":"51ee115b-3a11-431e-9554-1afccc379302","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cbd85045-4579-4539-afca-669dfc16e046","type":"VBar"},"selection_glyph":null,"view":{"id":"dc661f33-d818-4575-80a7-b49ce76d751c","type":"CDSView"}},"id":"2dad2395-b393-462a-bf4e-9727bd85a4c1","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"633bf8f7-67ec-43db-b6dc-9b4b7d86dd52","type":"FactorRange"}],"root_ids":["0aec7cf7-ad0b-4abb-861c-864bd4369b82"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"2f7c1d53-41c9-46c2-bf61-6745d45b1b27","elementid":"93c62678-41f0-43b4-9295-c45db034dfc9","modelid":"0aec7cf7-ad0b-4abb-861c-864bd4369b82"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
