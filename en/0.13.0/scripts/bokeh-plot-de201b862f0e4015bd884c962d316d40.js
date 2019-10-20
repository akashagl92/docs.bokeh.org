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
      };var element = document.getElementById("35078e2e-7231-4873-b71a-9aa9173d5bf2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '35078e2e-7231-4873-b71a-9aa9173d5bf2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"7ef1d858-42b1-4669-ba1b-1d391f998d98":{"roots":{"references":[{"attributes":{"callback":null,"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"3647c59f-0bdf-4df5-82a1-f5bb9a7d0877","type":"Selection"},"selection_policy":{"id":"13ae1af8-d171-4336-ba0f-9972a8693fc9","type":"UnionRenderers"}},"id":"ff727b7b-8968-4e91-a755-164582fb4549","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"1a562758-d0ec-4c09-a1a4-a5e33d06ba78","type":"CategoricalTickFormatter"},"plot":{"id":"850b468e-ea5e-43d6-8bec-f84d37cc0b0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"9eb2a7f4-77c9-4b4a-a9a9-b5c9a2ca45d7","type":"CategoricalTicker"}},"id":"1a055c62-d3fe-445b-98e7-3d35630ebf00","type":"CategoricalAxis"},{"attributes":{"callback":null,"end":9},"id":"e9eca5ca-d499-4811-b7c8-545d7ad6d46d","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"5c27250e-d5a9-4071-a405-35ea2f8288e7","type":"VBar"},{"attributes":{"formatter":{"id":"3bd8200c-8344-4ec0-8cba-ef3a8e0c2844","type":"BasicTickFormatter"},"plot":{"id":"850b468e-ea5e-43d6-8bec-f84d37cc0b0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"96f34f76-be82-4d8a-87ab-dc042655ce0f","type":"BasicTicker"}},"id":"29849219-f8f1-4d9b-8c20-0ae9e3b2870e","type":"LinearAxis"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"17197c2c-6129-450d-9473-554fa53e84b2","type":"VBar"},{"attributes":{},"id":"1a562758-d0ec-4c09-a1a4-a5e33d06ba78","type":"CategoricalTickFormatter"},{"attributes":{"below":[{"id":"1a055c62-d3fe-445b-98e7-3d35630ebf00","type":"CategoricalAxis"}],"left":[{"id":"29849219-f8f1-4d9b-8c20-0ae9e3b2870e","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"1a055c62-d3fe-445b-98e7-3d35630ebf00","type":"CategoricalAxis"},{"id":"3e10ebd0-79c3-4c5a-88b4-923e11c59c99","type":"Grid"},{"id":"29849219-f8f1-4d9b-8c20-0ae9e3b2870e","type":"LinearAxis"},{"id":"1e17b0e1-4cb0-429e-b743-6461a732a56e","type":"Grid"},{"id":"862a2ac9-e4f0-4049-a518-c9a0bcb73ae6","type":"Legend"},{"id":"ea6a4573-aeaa-42e7-8439-77b2b669717b","type":"GlyphRenderer"}],"title":{"id":"3f046a2b-9dac-4dcf-ab6c-7e8fe5a9d19f","type":"Title"},"toolbar":{"id":"81d631e1-0d6f-4243-8394-ea819328a4ab","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"724b0755-1548-4d73-93fe-b9a3dbfe9bd8","type":"FactorRange"},"x_scale":{"id":"bdbb2bf8-12b7-46fc-970a-f3dfc8fe6da4","type":"CategoricalScale"},"y_range":{"id":"e9eca5ca-d499-4811-b7c8-545d7ad6d46d","type":"Range1d"},"y_scale":{"id":"73166eaa-a7de-4efb-9877-15ef8fed9b57","type":"LinearScale"}},"id":"850b468e-ea5e-43d6-8bec-f84d37cc0b0f","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"ff727b7b-8968-4e91-a755-164582fb4549","type":"ColumnDataSource"}},"id":"38be2283-a700-421f-beec-3cfa0a1987ad","type":"CDSView"},{"attributes":{},"id":"13ae1af8-d171-4336-ba0f-9972a8693fc9","type":"UnionRenderers"},{"attributes":{"items":[{"id":"3f583af6-ad5c-4bb5-8c26-9c052fbb4390","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"850b468e-ea5e-43d6-8bec-f84d37cc0b0f","subtype":"Figure","type":"Plot"}},"id":"862a2ac9-e4f0-4049-a518-c9a0bcb73ae6","type":"Legend"},{"attributes":{},"id":"bdbb2bf8-12b7-46fc-970a-f3dfc8fe6da4","type":"CategoricalScale"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"3f046a2b-9dac-4dcf-ab6c-7e8fe5a9d19f","type":"Title"},{"attributes":{},"id":"3bd8200c-8344-4ec0-8cba-ef3a8e0c2844","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"724b0755-1548-4d73-93fe-b9a3dbfe9bd8","type":"FactorRange"},{"attributes":{},"id":"73166eaa-a7de-4efb-9877-15ef8fed9b57","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"850b468e-ea5e-43d6-8bec-f84d37cc0b0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"96f34f76-be82-4d8a-87ab-dc042655ce0f","type":"BasicTicker"}},"id":"1e17b0e1-4cb0-429e-b743-6461a732a56e","type":"Grid"},{"attributes":{},"id":"96f34f76-be82-4d8a-87ab-dc042655ce0f","type":"BasicTicker"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"ea6a4573-aeaa-42e7-8439-77b2b669717b","type":"GlyphRenderer"}]},"id":"3f583af6-ad5c-4bb5-8c26-9c052fbb4390","type":"LegendItem"},{"attributes":{},"id":"9eb2a7f4-77c9-4b4a-a9a9-b5c9a2ca45d7","type":"CategoricalTicker"},{"attributes":{},"id":"3647c59f-0bdf-4df5-82a1-f5bb9a7d0877","type":"Selection"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"850b468e-ea5e-43d6-8bec-f84d37cc0b0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"9eb2a7f4-77c9-4b4a-a9a9-b5c9a2ca45d7","type":"CategoricalTicker"}},"id":"3e10ebd0-79c3-4c5a-88b4-923e11c59c99","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"81d631e1-0d6f-4243-8394-ea819328a4ab","type":"Toolbar"},{"attributes":{"data_source":{"id":"ff727b7b-8968-4e91-a755-164582fb4549","type":"ColumnDataSource"},"glyph":{"id":"17197c2c-6129-450d-9473-554fa53e84b2","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5c27250e-d5a9-4071-a405-35ea2f8288e7","type":"VBar"},"selection_glyph":null,"view":{"id":"38be2283-a700-421f-beec-3cfa0a1987ad","type":"CDSView"}},"id":"ea6a4573-aeaa-42e7-8439-77b2b669717b","type":"GlyphRenderer"}],"root_ids":["850b468e-ea5e-43d6-8bec-f84d37cc0b0f"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"7ef1d858-42b1-4669-ba1b-1d391f998d98","roots":{"850b468e-ea5e-43d6-8bec-f84d37cc0b0f":"35078e2e-7231-4873-b71a-9aa9173d5bf2"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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