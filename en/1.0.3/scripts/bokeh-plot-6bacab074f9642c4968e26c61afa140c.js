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
      };var element = document.getElementById("566a9358-c557-4ff6-a1e4-97a108c9e8b9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '566a9358-c557-4ff6-a1e4-97a108c9e8b9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"52c9a347-0dda-4494-ad9f-8bacc3745d16":{"roots":{"references":[{"attributes":{},"id":"19514","type":"BasicTickFormatter"},{"attributes":{},"id":"19497","type":"HelpTool"},{"attributes":{"items":[{"id":"19520","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"19473","subtype":"Figure","type":"Plot"}},"id":"19519","type":"Legend"},{"attributes":{},"id":"19495","type":"SaveTool"},{"attributes":{"formatter":{"id":"19514","type":"BasicTickFormatter"},"plot":{"id":"19473","subtype":"Figure","type":"Plot"},"ticker":{"id":"19488","type":"BasicTicker"}},"id":"19487","type":"LinearAxis"},{"attributes":{"source":{"id":"19471","type":"ColumnDataSource"}},"id":"19512","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"19473","subtype":"Figure","type":"Plot"},"ticker":{"id":"19488","type":"BasicTicker"}},"id":"19491","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19500","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"19471","type":"ColumnDataSource"},"glyph":{"id":"19509","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19510","type":"VBar"},"selection_glyph":null,"view":{"id":"19512","type":"CDSView"}},"id":"19511","type":"GlyphRenderer"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"19507","type":"CategoricalColorMapper"},{"attributes":{},"id":"19528","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19527","type":"Selection"},"selection_policy":{"id":"19528","type":"UnionRenderers"}},"id":"19471","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"19483","type":"CategoricalAxis"}],"left":[{"id":"19487","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"19483","type":"CategoricalAxis"},{"id":"19486","type":"Grid"},{"id":"19487","type":"LinearAxis"},{"id":"19491","type":"Grid"},{"id":"19500","type":"BoxAnnotation"},{"id":"19519","type":"Legend"},{"id":"19511","type":"GlyphRenderer"}],"title":{"id":"19472","type":"Title"},"toolbar":{"id":"19498","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19475","type":"FactorRange"},"x_scale":{"id":"19479","type":"CategoricalScale"},"y_range":{"id":"19477","type":"DataRange1d"},"y_scale":{"id":"19481","type":"LinearScale"}},"id":"19473","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19510","type":"VBar"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"19511","type":"GlyphRenderer"}]},"id":"19520","type":"LegendItem"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"19472","type":"Title"},{"attributes":{"overlay":{"id":"19500","type":"BoxAnnotation"}},"id":"19494","type":"BoxZoomTool"},{"attributes":{},"id":"19527","type":"Selection"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"19475","type":"FactorRange"},{"attributes":{},"id":"19493","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":9,"start":0},"id":"19477","type":"DataRange1d"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"19507","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19509","type":"VBar"},{"attributes":{},"id":"19492","type":"PanTool"},{"attributes":{},"id":"19479","type":"CategoricalScale"},{"attributes":{},"id":"19516","type":"CategoricalTickFormatter"},{"attributes":{},"id":"19481","type":"LinearScale"},{"attributes":{"formatter":{"id":"19516","type":"CategoricalTickFormatter"},"plot":{"id":"19473","subtype":"Figure","type":"Plot"},"ticker":{"id":"19484","type":"CategoricalTicker"}},"id":"19483","type":"CategoricalAxis"},{"attributes":{},"id":"19496","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19492","type":"PanTool"},{"id":"19493","type":"WheelZoomTool"},{"id":"19494","type":"BoxZoomTool"},{"id":"19495","type":"SaveTool"},{"id":"19496","type":"ResetTool"},{"id":"19497","type":"HelpTool"}]},"id":"19498","type":"Toolbar"},{"attributes":{},"id":"19488","type":"BasicTicker"},{"attributes":{},"id":"19484","type":"CategoricalTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"19473","subtype":"Figure","type":"Plot"},"ticker":{"id":"19484","type":"CategoricalTicker"}},"id":"19486","type":"Grid"}],"root_ids":["19473"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"52c9a347-0dda-4494-ad9f-8bacc3745d16","roots":{"19473":"566a9358-c557-4ff6-a1e4-97a108c9e8b9"}}];
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