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
      };var element = document.getElementById("bb291ded-1342-4a29-95d3-100856e8b626");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bb291ded-1342-4a29-95d3-100856e8b626' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"112d2c07-d93a-4597-8447-8bf1a46efb50":{"roots":{"references":[{"attributes":{"formatter":{"id":"16608","type":"NumeralTickFormatter"},"plot":{"id":"16567","subtype":"Figure","type":"Plot"},"ticker":{"id":"16582","type":"BasicTicker"}},"id":"16581","type":"LinearAxis"},{"attributes":{"callback":null},"id":"16570","type":"DataRange1d"},{"attributes":{"below":[{"id":"16576","type":"LinearAxis"}],"left":[{"id":"16581","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"16576","type":"LinearAxis"},{"id":"16580","type":"Grid"},{"id":"16581","type":"LinearAxis"},{"id":"16585","type":"Grid"},{"id":"16594","type":"BoxAnnotation"},{"id":"16604","type":"GlyphRenderer"}],"title":{"id":"16611","type":"Title"},"toolbar":{"id":"16592","type":"Toolbar"},"x_range":{"id":"16568","type":"DataRange1d"},"x_scale":{"id":"16572","type":"LinearScale"},"y_range":{"id":"16570","type":"DataRange1d"},"y_scale":{"id":"16574","type":"LinearScale"}},"id":"16567","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16594","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"16616","type":"Selection"},"selection_policy":{"id":"16615","type":"UnionRenderers"}},"id":"16601","type":"ColumnDataSource"},{"attributes":{},"id":"16591","type":"HelpTool"},{"attributes":{"callback":null},"id":"16568","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"16611","type":"Title"},{"attributes":{},"id":"16582","type":"BasicTicker"},{"attributes":{},"id":"16574","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16602","type":"Circle"},{"attributes":{},"id":"16587","type":"WheelZoomTool"},{"attributes":{"source":{"id":"16601","type":"ColumnDataSource"}},"id":"16605","type":"CDSView"},{"attributes":{},"id":"16586","type":"PanTool"},{"attributes":{"format":"0.0%"},"id":"16606","type":"NumeralTickFormatter"},{"attributes":{"format":"$0.00"},"id":"16608","type":"NumeralTickFormatter"},{"attributes":{},"id":"16577","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16603","type":"Circle"},{"attributes":{},"id":"16615","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16586","type":"PanTool"},{"id":"16587","type":"WheelZoomTool"},{"id":"16588","type":"BoxZoomTool"},{"id":"16589","type":"SaveTool"},{"id":"16590","type":"ResetTool"},{"id":"16591","type":"HelpTool"}]},"id":"16592","type":"Toolbar"},{"attributes":{"plot":{"id":"16567","subtype":"Figure","type":"Plot"},"ticker":{"id":"16577","type":"BasicTicker"}},"id":"16580","type":"Grid"},{"attributes":{"overlay":{"id":"16594","type":"BoxAnnotation"}},"id":"16588","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"16606","type":"NumeralTickFormatter"},"plot":{"id":"16567","subtype":"Figure","type":"Plot"},"ticker":{"id":"16577","type":"BasicTicker"}},"id":"16576","type":"LinearAxis"},{"attributes":{},"id":"16590","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"16567","subtype":"Figure","type":"Plot"},"ticker":{"id":"16582","type":"BasicTicker"}},"id":"16585","type":"Grid"},{"attributes":{"data_source":{"id":"16601","type":"ColumnDataSource"},"glyph":{"id":"16602","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16603","type":"Circle"},"selection_glyph":null,"view":{"id":"16605","type":"CDSView"}},"id":"16604","type":"GlyphRenderer"},{"attributes":{},"id":"16572","type":"LinearScale"},{"attributes":{},"id":"16589","type":"SaveTool"},{"attributes":{},"id":"16616","type":"Selection"}],"root_ids":["16567"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"112d2c07-d93a-4597-8447-8bf1a46efb50","roots":{"16567":"bb291ded-1342-4a29-95d3-100856e8b626"}}];
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