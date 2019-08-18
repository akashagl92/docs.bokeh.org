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
      };var element = document.getElementById("fc36bdfa-0a7b-4514-977c-d04a0d1e6e51");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fc36bdfa-0a7b-4514-977c-d04a0d1e6e51' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"01aa331e-aaee-4067-b8fb-48146ecb000d":{"roots":{"references":[{"attributes":{},"id":"16354","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"16308","subtype":"Figure","type":"Plot"},"ticker":{"id":"16324","type":"BasicTicker"}},"id":"16327","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":12},"x":{"field":"x"},"y":{"field":"y"}},"id":"16345","type":"Circle"},{"attributes":{"fill_color":{"field":"y","transform":{"id":"16305","type":"LinearColorMapper"}},"line_color":{"field":"y","transform":{"id":"16305","type":"LinearColorMapper"}},"size":{"units":"screen","value":12},"x":{"field":"x"},"y":{"field":"y"}},"id":"16344","type":"Circle"},{"attributes":{"data_source":{"id":"16306","type":"ColumnDataSource"},"glyph":{"id":"16344","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16345","type":"Circle"},"selection_glyph":null,"view":{"id":"16347","type":"CDSView"}},"id":"16346","type":"GlyphRenderer"},{"attributes":{},"id":"16324","type":"BasicTicker"},{"attributes":{},"id":"16328","type":"PanTool"},{"attributes":{},"id":"16329","type":"WheelZoomTool"},{"attributes":{"high":10,"low":1,"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"16305","type":"LinearColorMapper"},{"attributes":{"overlay":{"id":"16336","type":"BoxAnnotation"}},"id":"16330","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5,7,8,9,10],"y":[1,2,3,4,5,7,8,9,10]},"selected":{"id":"16357","type":"Selection"},"selection_policy":{"id":"16356","type":"UnionRenderers"}},"id":"16306","type":"ColumnDataSource"},{"attributes":{},"id":"16331","type":"SaveTool"},{"attributes":{"below":[{"id":"16318","type":"LinearAxis"}],"left":[{"id":"16323","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16318","type":"LinearAxis"},{"id":"16322","type":"Grid"},{"id":"16323","type":"LinearAxis"},{"id":"16327","type":"Grid"},{"id":"16336","type":"BoxAnnotation"},{"id":"16346","type":"GlyphRenderer"},{"id":"16348","type":"ColorBar"}],"right":[{"id":"16348","type":"ColorBar"}],"title":{"id":"16307","type":"Title"},"toolbar":{"id":"16334","type":"Toolbar"},"x_range":{"id":"16310","type":"DataRange1d"},"x_scale":{"id":"16314","type":"LinearScale"},"y_range":{"id":"16312","type":"DataRange1d"},"y_scale":{"id":"16316","type":"LinearScale"}},"id":"16308","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16332","type":"ResetTool"},{"attributes":{},"id":"16352","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Linear Color Map Based on Y"},"id":"16307","type":"Title"},{"attributes":{},"id":"16333","type":"HelpTool"},{"attributes":{"callback":null},"id":"16310","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16328","type":"PanTool"},{"id":"16329","type":"WheelZoomTool"},{"id":"16330","type":"BoxZoomTool"},{"id":"16331","type":"SaveTool"},{"id":"16332","type":"ResetTool"},{"id":"16333","type":"HelpTool"}]},"id":"16334","type":"Toolbar"},{"attributes":{"callback":null},"id":"16312","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16336","type":"BoxAnnotation"},{"attributes":{},"id":"16316","type":"LinearScale"},{"attributes":{},"id":"16356","type":"UnionRenderers"},{"attributes":{},"id":"16314","type":"LinearScale"},{"attributes":{"source":{"id":"16306","type":"ColumnDataSource"}},"id":"16347","type":"CDSView"},{"attributes":{},"id":"16355","type":"BasicTicker"},{"attributes":{"formatter":{"id":"16352","type":"BasicTickFormatter"},"plot":{"id":"16308","subtype":"Figure","type":"Plot"},"ticker":{"id":"16319","type":"BasicTicker"}},"id":"16318","type":"LinearAxis"},{"attributes":{"color_mapper":{"id":"16305","type":"LinearColorMapper"},"formatter":{"id":"16354","type":"BasicTickFormatter"},"location":[0,0],"plot":{"id":"16308","subtype":"Figure","type":"Plot"},"ticker":{"id":"16355","type":"BasicTicker"},"width":8},"id":"16348","type":"ColorBar"},{"attributes":{},"id":"16319","type":"BasicTicker"},{"attributes":{},"id":"16350","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"16308","subtype":"Figure","type":"Plot"},"ticker":{"id":"16319","type":"BasicTicker"}},"id":"16322","type":"Grid"},{"attributes":{},"id":"16357","type":"Selection"},{"attributes":{"formatter":{"id":"16350","type":"BasicTickFormatter"},"plot":{"id":"16308","subtype":"Figure","type":"Plot"},"ticker":{"id":"16324","type":"BasicTicker"}},"id":"16323","type":"LinearAxis"}],"root_ids":["16308"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"01aa331e-aaee-4067-b8fb-48146ecb000d","roots":{"16308":"fc36bdfa-0a7b-4514-977c-d04a0d1e6e51"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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