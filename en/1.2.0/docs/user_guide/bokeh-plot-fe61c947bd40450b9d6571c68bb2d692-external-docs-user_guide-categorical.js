(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("676413f7-8234-4841-b1d1-79d81bda9752");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '676413f7-8234-4841-b1d1-79d81bda9752' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"e80bf300-f66f-4d41-a167-35ba18d6d7f8":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"20049","type":"BoxAnnotation"},{"attributes":{"items":[{"id":"20051","type":"LegendItem"}],"location":"top_center","orientation":"horizontal"},"id":"20050","type":"Legend"},{"attributes":{"overlay":{"id":"20049","type":"BoxAnnotation"}},"id":"20027","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"20004","type":"ColumnDataSource"},"glyph":{"id":"20040","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20041","type":"VBar"},"selection_glyph":null,"view":{"id":"20043","type":"CDSView"}},"id":"20042","type":"GlyphRenderer"},{"attributes":{},"id":"20021","type":"BasicTicker"},{"attributes":{},"id":"20026","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20057","type":"Selection"},"selection_policy":{"id":"20058","type":"UnionRenderers"}},"id":"20004","type":"ColumnDataSource"},{"attributes":{},"id":"20029","type":"ResetTool"},{"attributes":{},"id":"20030","type":"HelpTool"},{"attributes":{"callback":null,"end":9,"start":0},"id":"20010","type":"DataRange1d"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"20038","type":"CategoricalColorMapper"},{"attributes":{"formatter":{"id":"20047","type":"CategoricalTickFormatter"},"ticker":{"id":"20017","type":"CategoricalTicker"}},"id":"20016","type":"CategoricalAxis"},{"attributes":{},"id":"20045","type":"BasicTickFormatter"},{"attributes":{},"id":"20057","type":"Selection"},{"attributes":{},"id":"20012","type":"CategoricalScale"},{"attributes":{"text":"Fruit Counts"},"id":"20006","type":"Title"},{"attributes":{"formatter":{"id":"20045","type":"BasicTickFormatter"},"ticker":{"id":"20021","type":"BasicTicker"}},"id":"20020","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"20021","type":"BasicTicker"}},"id":"20024","type":"Grid"},{"attributes":{"grid_line_color":null,"ticker":{"id":"20017","type":"CategoricalTicker"}},"id":"20019","type":"Grid"},{"attributes":{},"id":"20047","type":"CategoricalTickFormatter"},{"attributes":{},"id":"20028","type":"SaveTool"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"20008","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20041","type":"VBar"},{"attributes":{},"id":"20014","type":"LinearScale"},{"attributes":{},"id":"20017","type":"CategoricalTicker"},{"attributes":{},"id":"20025","type":"PanTool"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"20042","type":"GlyphRenderer"}]},"id":"20051","type":"LegendItem"},{"attributes":{"below":[{"id":"20016","type":"CategoricalAxis"}],"center":[{"id":"20019","type":"Grid"},{"id":"20024","type":"Grid"},{"id":"20050","type":"Legend"}],"left":[{"id":"20020","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"20042","type":"GlyphRenderer"}],"title":{"id":"20006","type":"Title"},"toolbar":{"id":"20031","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20008","type":"FactorRange"},"x_scale":{"id":"20012","type":"CategoricalScale"},"y_range":{"id":"20010","type":"DataRange1d"},"y_scale":{"id":"20014","type":"LinearScale"}},"id":"20005","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"20038","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20040","type":"VBar"},{"attributes":{},"id":"20058","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20025","type":"PanTool"},{"id":"20026","type":"WheelZoomTool"},{"id":"20027","type":"BoxZoomTool"},{"id":"20028","type":"SaveTool"},{"id":"20029","type":"ResetTool"},{"id":"20030","type":"HelpTool"}]},"id":"20031","type":"Toolbar"},{"attributes":{"source":{"id":"20004","type":"ColumnDataSource"}},"id":"20043","type":"CDSView"}],"root_ids":["20005"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"e80bf300-f66f-4d41-a167-35ba18d6d7f8","roots":{"20005":"676413f7-8234-4841-b1d1-79d81bda9752"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();