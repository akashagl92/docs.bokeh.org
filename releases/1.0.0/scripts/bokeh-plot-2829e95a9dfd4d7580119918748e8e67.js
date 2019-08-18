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
      };var element = document.getElementById("084452a1-e9e5-4e45-a9e0-0b8565f70f12");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '084452a1-e9e5-4e45-a9e0-0b8565f70f12' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"02bf18ba-07d0-4edd-bf4f-14a5d3356ceb":{"roots":{"references":[{"attributes":{},"id":"1089","type":"ResetTool"},{"attributes":{},"id":"1090","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"1103","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1085","type":"PanTool"},{"id":"1086","type":"WheelZoomTool"},{"id":"1087","type":"BoxZoomTool"},{"id":"1088","type":"SaveTool"},{"id":"1089","type":"ResetTool"},{"id":"1090","type":"HelpTool"}]},"id":"1091","type":"Toolbar"},{"attributes":{"callback":null,"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"1120","type":"Selection"},"selection_policy":{"id":"1121","type":"UnionRenderers"}},"id":"1064","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1093","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"1076","type":"CategoricalAxis"}],"left":[{"id":"1080","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"1076","type":"CategoricalAxis"},{"id":"1079","type":"Grid"},{"id":"1080","type":"LinearAxis"},{"id":"1084","type":"Grid"},{"id":"1093","type":"BoxAnnotation"},{"id":"1112","type":"Legend"},{"id":"1104","type":"GlyphRenderer"}],"title":{"id":"1065","type":"Title"},"toolbar":{"id":"1091","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1068","type":"FactorRange"},"x_scale":{"id":"1072","type":"CategoricalScale"},"y_range":{"id":"1070","type":"DataRange1d"},"y_scale":{"id":"1074","type":"LinearScale"}},"id":"1066","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"1093","type":"BoxAnnotation"}},"id":"1087","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"1065","type":"Title"},{"attributes":{"data_source":{"id":"1064","type":"ColumnDataSource"},"glyph":{"id":"1102","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1103","type":"VBar"},"selection_glyph":null,"view":{"id":"1105","type":"CDSView"}},"id":"1104","type":"GlyphRenderer"},{"attributes":{},"id":"1086","type":"WheelZoomTool"},{"attributes":{"source":{"id":"1064","type":"ColumnDataSource"}},"id":"1105","type":"CDSView"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"1068","type":"FactorRange"},{"attributes":{},"id":"1108","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"end":9,"start":0},"id":"1070","type":"DataRange1d"},{"attributes":{},"id":"1072","type":"CategoricalScale"},{"attributes":{"items":[{"id":"1113","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"1066","subtype":"Figure","type":"Plot"}},"id":"1112","type":"Legend"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1066","subtype":"Figure","type":"Plot"},"ticker":{"id":"1077","type":"CategoricalTicker"}},"id":"1079","type":"Grid"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"1100","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"1102","type":"VBar"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"1104","type":"GlyphRenderer"}]},"id":"1113","type":"LegendItem"},{"attributes":{},"id":"1074","type":"LinearScale"},{"attributes":{"formatter":{"id":"1108","type":"CategoricalTickFormatter"},"plot":{"id":"1066","subtype":"Figure","type":"Plot"},"ticker":{"id":"1077","type":"CategoricalTicker"}},"id":"1076","type":"CategoricalAxis"},{"attributes":{},"id":"1110","type":"BasicTickFormatter"},{"attributes":{},"id":"1085","type":"PanTool"},{"attributes":{},"id":"1077","type":"CategoricalTicker"},{"attributes":{},"id":"1120","type":"Selection"},{"attributes":{},"id":"1121","type":"UnionRenderers"},{"attributes":{},"id":"1088","type":"SaveTool"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"1100","type":"CategoricalColorMapper"},{"attributes":{"formatter":{"id":"1110","type":"BasicTickFormatter"},"plot":{"id":"1066","subtype":"Figure","type":"Plot"},"ticker":{"id":"1081","type":"BasicTicker"}},"id":"1080","type":"LinearAxis"},{"attributes":{},"id":"1081","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"1066","subtype":"Figure","type":"Plot"},"ticker":{"id":"1081","type":"BasicTicker"}},"id":"1084","type":"Grid"}],"root_ids":["1066"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"02bf18ba-07d0-4edd-bf4f-14a5d3356ceb","roots":{"1066":"084452a1-e9e5-4e45-a9e0-0b8565f70f12"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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