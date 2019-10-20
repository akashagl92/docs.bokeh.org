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
      };var element = document.getElementById("bafb477e-256a-4309-a696-6dd7369ebd68");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bafb477e-256a-4309-a696-6dd7369ebd68' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"56677337-bc40-4c25-a3a5-1fc3a4d55d48":{"roots":{"references":[{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"21769","subtype":"Figure","type":"Plot"},"ticker":{"id":"21780","type":"CategoricalTicker"}},"id":"21782","type":"Grid"},{"attributes":{},"id":"21775","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"21797","type":"CategoricalTickFormatter"},"plot":{"id":"21769","subtype":"Figure","type":"Plot"},"ticker":{"id":"21780","type":"CategoricalTicker"}},"id":"21779","type":"CategoricalAxis"},{"attributes":{"callback":null,"end":10},"id":"21773","type":"Range1d"},{"attributes":{"data_source":{"id":"21767","type":"ColumnDataSource"},"glyph":{"id":"21818","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21819","type":"VBar"},"selection_glyph":null,"view":{"id":"21821","type":"CDSView"}},"id":"21820","type":"GlyphRenderer"},{"attributes":{},"id":"21799","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"21820","type":"GlyphRenderer"}]},"id":"21829","type":"LegendItem"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"21814","type":"Selection"},"selection_policy":{"id":"21813","type":"UnionRenderers"}},"id":"21767","type":"ColumnDataSource"},{"attributes":{},"id":"21777","type":"LinearScale"},{"attributes":{"range":{"id":"21771","type":"FactorRange"},"value":0.25},"id":"21816","type":"Dodge"},{"attributes":{},"id":"21784","type":"BasicTicker"},{"attributes":{"data_source":{"id":"21767","type":"ColumnDataSource"},"glyph":{"id":"21791","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21792","type":"VBar"},"selection_glyph":null,"view":{"id":"21794","type":"CDSView"}},"id":"21793","type":"GlyphRenderer"},{"attributes":{},"id":"21780","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"21767","type":"ColumnDataSource"},"glyph":{"id":"21804","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21805","type":"VBar"},"selection_glyph":null,"view":{"id":"21807","type":"CDSView"}},"id":"21806","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"21771","type":"FactorRange"},{"attributes":{},"id":"21814","type":"Selection"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"21793","type":"GlyphRenderer"}]},"id":"21801","type":"LegendItem"},{"attributes":{"formatter":{"id":"21799","type":"BasicTickFormatter"},"plot":{"id":"21769","subtype":"Figure","type":"Plot"},"ticker":{"id":"21784","type":"BasicTicker"}},"id":"21783","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"21769","subtype":"Figure","type":"Plot"},"ticker":{"id":"21784","type":"BasicTicker"}},"id":"21787","type":"Grid"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"21768","type":"Title"},{"attributes":{"range":{"id":"21771","type":"FactorRange"}},"id":"21802","type":"Dodge"},{"attributes":{"source":{"id":"21767","type":"ColumnDataSource"}},"id":"21794","type":"CDSView"},{"attributes":{},"id":"21813","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"21789","type":"Dodge"}}},"id":"21792","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"21788","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"21789","type":"Dodge"}}},"id":"21791","type":"VBar"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"21816","type":"Dodge"}}},"id":"21818","type":"VBar"},{"attributes":{"source":{"id":"21767","type":"ColumnDataSource"}},"id":"21807","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"21816","type":"Dodge"}}},"id":"21819","type":"VBar"},{"attributes":{"range":{"id":"21771","type":"FactorRange"},"value":-0.25},"id":"21789","type":"Dodge"},{"attributes":{"source":{"id":"21767","type":"ColumnDataSource"}},"id":"21821","type":"CDSView"},{"attributes":{},"id":"21797","type":"CategoricalTickFormatter"},{"attributes":{"below":[{"id":"21779","type":"CategoricalAxis"}],"left":[{"id":"21783","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"21779","type":"CategoricalAxis"},{"id":"21782","type":"Grid"},{"id":"21783","type":"LinearAxis"},{"id":"21787","type":"Grid"},{"id":"21800","type":"Legend"},{"id":"21793","type":"GlyphRenderer"},{"id":"21806","type":"GlyphRenderer"},{"id":"21820","type":"GlyphRenderer"}],"title":{"id":"21768","type":"Title"},"toolbar":{"id":"21788","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"21771","type":"FactorRange"},"x_scale":{"id":"21775","type":"CategoricalScale"},"y_range":{"id":"21773","type":"Range1d"},"y_scale":{"id":"21777","type":"LinearScale"}},"id":"21769","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"21802","type":"Dodge"}}},"id":"21805","type":"VBar"},{"attributes":{"items":[{"id":"21801","type":"LegendItem"},{"id":"21815","type":"LegendItem"},{"id":"21829","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"21769","subtype":"Figure","type":"Plot"}},"id":"21800","type":"Legend"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"21802","type":"Dodge"}}},"id":"21804","type":"VBar"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"21806","type":"GlyphRenderer"}]},"id":"21815","type":"LegendItem"}],"root_ids":["21769"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"56677337-bc40-4c25-a3a5-1fc3a4d55d48","roots":{"21769":"bafb477e-256a-4309-a696-6dd7369ebd68"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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