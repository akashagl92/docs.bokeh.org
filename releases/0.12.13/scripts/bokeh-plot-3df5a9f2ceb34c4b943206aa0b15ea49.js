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
      };var element = document.getElementById("5fa52c3c-ace0-4af0-8682-f2d373771e40");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5fa52c3c-ace0-4af0-8682-f2d373771e40' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.13.min.js"];
    
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
                    
                  var docs_json = '{"b8984fd7-0ee8-4690-b5e8-65607f39de8c":{"roots":{"references":[{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"0058937d-bab3-45cb-91bd-650ffb6deade","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3f32b43-bbd6-47fe-a55e-527ca3c009fa","type":"CategoricalTicker"}},"id":"ca8cf942-f3e2-404d-9384-b8224a136fd3","type":"Grid"},{"attributes":{},"id":"e951dc5a-a897-4e4a-a160-21f51e1ea4b9","type":"BasicTickFormatter"},{"attributes":{},"id":"95a2a52e-6f91-457b-83fa-f5bfd4ea4a94","type":"LinearScale"},{"attributes":{"formatter":{"id":"e951dc5a-a897-4e4a-a160-21f51e1ea4b9","type":"BasicTickFormatter"},"plot":{"id":"0058937d-bab3-45cb-91bd-650ffb6deade","subtype":"Figure","type":"Plot"},"ticker":{"id":"85d0ef56-f3ea-45c5-a73e-0e954dd56fbc","type":"BasicTicker"}},"id":"99b3985f-007f-4166-a074-895674c6e9d6","type":"LinearAxis"},{"attributes":{},"id":"d3f32b43-bbd6-47fe-a55e-527ca3c009fa","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"035a2d6b-08da-4d26-b6ac-8657f9160987","type":"CategoricalTickFormatter"},"plot":{"id":"0058937d-bab3-45cb-91bd-650ffb6deade","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3f32b43-bbd6-47fe-a55e-527ca3c009fa","type":"CategoricalTicker"}},"id":"4402f220-e2cc-47a0-90c7-a8d431f5e01f","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"e466707f-303f-454d-9c26-678201d89ae8","type":"VBar"},{"attributes":{},"id":"85d0ef56-f3ea-45c5-a73e-0e954dd56fbc","type":"BasicTicker"},{"attributes":{"data_source":{"id":"efce8023-144e-4efb-b93d-72f2d5f6e62d","type":"ColumnDataSource"},"glyph":{"id":"73d072c2-e50d-45bf-971e-d54081227d54","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e466707f-303f-454d-9c26-678201d89ae8","type":"VBar"},"selection_glyph":null,"view":{"id":"9421ec6c-9f46-4693-b0c8-0e5e64cce755","type":"CDSView"}},"id":"6d3e95f4-3718-43d8-95ba-c3369785c593","type":"GlyphRenderer"},{"attributes":{},"id":"fa07dafa-e129-4f4b-95a3-b11939c29045","type":"CategoricalScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"b53154e7-70a4-4e84-a133-b700486c79a3","type":"Toolbar"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"6d3e95f4-3718-43d8-95ba-c3369785c593","type":"GlyphRenderer"}]},"id":"31a9a1ec-3c70-4c96-b0c0-867ad5d9e555","type":"LegendItem"},{"attributes":{"source":{"id":"efce8023-144e-4efb-b93d-72f2d5f6e62d","type":"ColumnDataSource"}},"id":"9421ec6c-9f46-4693-b0c8-0e5e64cce755","type":"CDSView"},{"attributes":{},"id":"035a2d6b-08da-4d26-b6ac-8657f9160987","type":"CategoricalTickFormatter"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"ff85065b-c854-4e1b-b726-ba66bc08c894","type":"Title"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"a24f701f-75e9-4aca-88e5-4ec3f755e018","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["fruits","counts","color"],"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"efce8023-144e-4efb-b93d-72f2d5f6e62d","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"31a9a1ec-3c70-4c96-b0c0-867ad5d9e555","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"0058937d-bab3-45cb-91bd-650ffb6deade","subtype":"Figure","type":"Plot"}},"id":"fca1fe7d-5adf-47a6-91a7-af8d9c479caf","type":"Legend"},{"attributes":{"dimension":1,"plot":{"id":"0058937d-bab3-45cb-91bd-650ffb6deade","subtype":"Figure","type":"Plot"},"ticker":{"id":"85d0ef56-f3ea-45c5-a73e-0e954dd56fbc","type":"BasicTicker"}},"id":"926b9644-353d-4d71-b448-c67ece6d2d18","type":"Grid"},{"attributes":{"callback":null,"end":9},"id":"4db282b3-f432-4b7a-a4c0-291eea12362a","type":"Range1d"},{"attributes":{"below":[{"id":"4402f220-e2cc-47a0-90c7-a8d431f5e01f","type":"CategoricalAxis"}],"left":[{"id":"99b3985f-007f-4166-a074-895674c6e9d6","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"4402f220-e2cc-47a0-90c7-a8d431f5e01f","type":"CategoricalAxis"},{"id":"ca8cf942-f3e2-404d-9384-b8224a136fd3","type":"Grid"},{"id":"99b3985f-007f-4166-a074-895674c6e9d6","type":"LinearAxis"},{"id":"926b9644-353d-4d71-b448-c67ece6d2d18","type":"Grid"},{"id":"fca1fe7d-5adf-47a6-91a7-af8d9c479caf","type":"Legend"},{"id":"6d3e95f4-3718-43d8-95ba-c3369785c593","type":"GlyphRenderer"}],"title":{"id":"ff85065b-c854-4e1b-b726-ba66bc08c894","type":"Title"},"toolbar":{"id":"b53154e7-70a4-4e84-a133-b700486c79a3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a24f701f-75e9-4aca-88e5-4ec3f755e018","type":"FactorRange"},"x_scale":{"id":"fa07dafa-e129-4f4b-95a3-b11939c29045","type":"CategoricalScale"},"y_range":{"id":"4db282b3-f432-4b7a-a4c0-291eea12362a","type":"Range1d"},"y_scale":{"id":"95a2a52e-6f91-457b-83fa-f5bfd4ea4a94","type":"LinearScale"}},"id":"0058937d-bab3-45cb-91bd-650ffb6deade","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"73d072c2-e50d-45bf-971e-d54081227d54","type":"VBar"}],"root_ids":["0058937d-bab3-45cb-91bd-650ffb6deade"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"b8984fd7-0ee8-4690-b5e8-65607f39de8c","elementid":"5fa52c3c-ace0-4af0-8682-f2d373771e40","modelid":"0058937d-bab3-45cb-91bd-650ffb6deade"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
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