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
      };var element = document.getElementById("f789f6d1-4628-4ea3-91cd-cd61e3be1225");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f789f6d1-4628-4ea3-91cd-cd61e3be1225' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"ac320613-f7a0-436c-ac8c-3b9380c45191":{"roots":{"references":[{"attributes":{},"id":"7323","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7310","type":"HoverTool"}]},"id":"7311","type":"Toolbar"},{"attributes":{"end_angle":{"expr":{"id":"7314","type":"CumSum"},"units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.4},"start_angle":{"expr":{"id":"7313","type":"CumSum"},"units":"rad"},"x":{"value":0},"y":{"value":1}},"id":"7318","type":"Wedge"},{"attributes":{"callback":null,"start":-0.5},"id":"7292","type":"Range1d"},{"attributes":{},"id":"7325","type":"BasicTickFormatter"},{"attributes":{},"id":"7301","type":"BasicTicker"},{"attributes":{},"id":"7306","type":"BasicTicker"},{"attributes":{"axis_label":null,"formatter":{"id":"7325","type":"BasicTickFormatter"},"ticker":{"id":"7301","type":"BasicTicker"},"visible":false},"id":"7300","type":"LinearAxis"},{"attributes":{},"id":"7298","type":"LinearScale"},{"attributes":{"grid_line_color":null,"ticker":{"id":"7301","type":"BasicTicker"}},"id":"7304","type":"Grid"},{"attributes":{"text":"Pie Chart"},"id":"7290","type":"Title"},{"attributes":{"axis_label":null,"formatter":{"id":"7323","type":"BasicTickFormatter"},"ticker":{"id":"7306","type":"BasicTicker"},"visible":false},"id":"7305","type":"LinearAxis"},{"attributes":{},"id":"7334","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"angle":{"__ndarray__":"eQLEMwAC9z+3V8R09kHrP+QcmNXVFeo/hZ74ygF34j8vDs2tzcrZP1vToA6tntg/iJh0b4xy1z93BYbhOoTUPzmtw/IJwtI/0I8to/kr0j/Qjy2j+SvSP/xUAQTZ/9A/","dtype":"float64","shape":[12]},"color":["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0"],"country":["United States","United Kingdom","Japan","China","Germany","India","Italy","Australia","Brazil","France","Taiwan","Spain"],"index":[0,1,2,3,4,5,6,7,8,9,10,11],"value":[157,93,89,63,44,42,40,35,32,31,31,29]},"selected":{"id":"7333","type":"Selection"},"selection_policy":{"id":"7334","type":"UnionRenderers"}},"id":"7315","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"7327","type":"LegendItem"}]},"id":"7326","type":"Legend"},{"attributes":{},"id":"7296","type":"LinearScale"},{"attributes":{"field":"angle","include_zero":true},"id":"7313","type":"CumSum"},{"attributes":{},"id":"7333","type":"Selection"},{"attributes":{"callback":null},"id":"7294","type":"DataRange1d"},{"attributes":{"label":{"field":"country"},"renderers":[{"id":"7319","type":"GlyphRenderer"}]},"id":"7327","type":"LegendItem"},{"attributes":{"dimension":1,"grid_line_color":null,"ticker":{"id":"7306","type":"BasicTicker"}},"id":"7309","type":"Grid"},{"attributes":{"below":[{"id":"7300","type":"LinearAxis"}],"center":[{"id":"7304","type":"Grid"},{"id":"7309","type":"Grid"},{"id":"7326","type":"Legend"}],"left":[{"id":"7305","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"7319","type":"GlyphRenderer"}],"title":{"id":"7290","type":"Title"},"toolbar":{"id":"7311","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7292","type":"Range1d"},"x_scale":{"id":"7296","type":"LinearScale"},"y_range":{"id":"7294","type":"DataRange1d"},"y_scale":{"id":"7298","type":"LinearScale"}},"id":"7289","subtype":"Figure","type":"Plot"},{"attributes":{"field":"angle"},"id":"7314","type":"CumSum"},{"attributes":{"end_angle":{"expr":{"id":"7314","type":"CumSum"},"units":"rad"},"fill_color":{"field":"color"},"line_color":{"value":"white"},"radius":{"units":"data","value":0.4},"start_angle":{"expr":{"id":"7313","type":"CumSum"},"units":"rad"},"x":{"value":0},"y":{"value":1}},"id":"7317","type":"Wedge"},{"attributes":{"callback":null,"tooltips":"@country: @value"},"id":"7310","type":"HoverTool"},{"attributes":{"source":{"id":"7315","type":"ColumnDataSource"}},"id":"7320","type":"CDSView"},{"attributes":{"data_source":{"id":"7315","type":"ColumnDataSource"},"glyph":{"id":"7317","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7318","type":"Wedge"},"selection_glyph":null,"view":{"id":"7320","type":"CDSView"}},"id":"7319","type":"GlyphRenderer"}],"root_ids":["7289"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"ac320613-f7a0-436c-ac8c-3b9380c45191","roots":{"7289":"f789f6d1-4628-4ea3-91cd-cd61e3be1225"}}];
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
        
        
        }
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