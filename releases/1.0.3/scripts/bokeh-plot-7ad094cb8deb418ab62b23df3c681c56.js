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
      };var element = document.getElementById("a196cc1d-7b23-4766-8db0-c082ca8e8470");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a196cc1d-7b23-4766-8db0-c082ca8e8470' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"84aebf98-65ee-4f1a-ba56-748af4d0232e":{"roots":{"references":[{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"21823","type":"GlyphRenderer"}]},"id":"21832","type":"LegendItem"},{"attributes":{},"id":"21799","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"21771","type":"Title"},{"attributes":{},"id":"21780","type":"LinearScale"},{"attributes":{},"id":"21816","type":"Selection"},{"attributes":{"data_source":{"id":"21770","type":"ColumnDataSource"},"glyph":{"id":"21807","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21808","type":"VBar"},"selection_glyph":null,"view":{"id":"21810","type":"CDSView"}},"id":"21809","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"21816","type":"Selection"},"selection_policy":{"id":"21817","type":"UnionRenderers"}},"id":"21770","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"21805","type":"Dodge"}}},"id":"21808","type":"VBar"},{"attributes":{"source":{"id":"21770","type":"ColumnDataSource"}},"id":"21810","type":"CDSView"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"21805","type":"Dodge"}}},"id":"21807","type":"VBar"},{"attributes":{},"id":"21787","type":"BasicTicker"},{"attributes":{"range":{"id":"21774","type":"FactorRange"}},"id":"21805","type":"Dodge"},{"attributes":{"formatter":{"id":"21801","type":"CategoricalTickFormatter"},"plot":{"id":"21772","subtype":"Figure","type":"Plot"},"ticker":{"id":"21783","type":"CategoricalTicker"}},"id":"21782","type":"CategoricalAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"21791","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"21819","type":"Dodge"}}},"id":"21822","type":"VBar"},{"attributes":{"callback":null,"end":10},"id":"21776","type":"Range1d"},{"attributes":{},"id":"21817","type":"UnionRenderers"},{"attributes":{},"id":"21801","type":"CategoricalTickFormatter"},{"attributes":{},"id":"21778","type":"CategoricalScale"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"21796","type":"GlyphRenderer"}]},"id":"21804","type":"LegendItem"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"21772","subtype":"Figure","type":"Plot"},"ticker":{"id":"21783","type":"CategoricalTicker"}},"id":"21785","type":"Grid"},{"attributes":{"range":{"id":"21774","type":"FactorRange"},"value":-0.25},"id":"21792","type":"Dodge"},{"attributes":{"dimension":1,"plot":{"id":"21772","subtype":"Figure","type":"Plot"},"ticker":{"id":"21787","type":"BasicTicker"}},"id":"21790","type":"Grid"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"21809","type":"GlyphRenderer"}]},"id":"21818","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"21819","type":"Dodge"}}},"id":"21821","type":"VBar"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"21792","type":"Dodge"}}},"id":"21794","type":"VBar"},{"attributes":{"source":{"id":"21770","type":"ColumnDataSource"}},"id":"21824","type":"CDSView"},{"attributes":{"range":{"id":"21774","type":"FactorRange"},"value":0.25},"id":"21819","type":"Dodge"},{"attributes":{"data_source":{"id":"21770","type":"ColumnDataSource"},"glyph":{"id":"21821","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21822","type":"VBar"},"selection_glyph":null,"view":{"id":"21824","type":"CDSView"}},"id":"21823","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"21770","type":"ColumnDataSource"},"glyph":{"id":"21794","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21795","type":"VBar"},"selection_glyph":null,"view":{"id":"21797","type":"CDSView"}},"id":"21796","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"21782","type":"CategoricalAxis"}],"left":[{"id":"21786","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"21782","type":"CategoricalAxis"},{"id":"21785","type":"Grid"},{"id":"21786","type":"LinearAxis"},{"id":"21790","type":"Grid"},{"id":"21803","type":"Legend"},{"id":"21796","type":"GlyphRenderer"},{"id":"21809","type":"GlyphRenderer"},{"id":"21823","type":"GlyphRenderer"}],"title":{"id":"21771","type":"Title"},"toolbar":{"id":"21791","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"21774","type":"FactorRange"},"x_scale":{"id":"21778","type":"CategoricalScale"},"y_range":{"id":"21776","type":"Range1d"},"y_scale":{"id":"21780","type":"LinearScale"}},"id":"21772","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"21799","type":"BasicTickFormatter"},"plot":{"id":"21772","subtype":"Figure","type":"Plot"},"ticker":{"id":"21787","type":"BasicTicker"}},"id":"21786","type":"LinearAxis"},{"attributes":{"items":[{"id":"21804","type":"LegendItem"},{"id":"21818","type":"LegendItem"},{"id":"21832","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"21772","subtype":"Figure","type":"Plot"}},"id":"21803","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"21792","type":"Dodge"}}},"id":"21795","type":"VBar"},{"attributes":{"source":{"id":"21770","type":"ColumnDataSource"}},"id":"21797","type":"CDSView"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"21774","type":"FactorRange"},{"attributes":{},"id":"21783","type":"CategoricalTicker"}],"root_ids":["21772"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"84aebf98-65ee-4f1a-ba56-748af4d0232e","roots":{"21772":"a196cc1d-7b23-4766-8db0-c082ca8e8470"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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