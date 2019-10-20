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
      };var element = document.getElementById("1c0ed97b-7ff5-4717-baa2-a621166e87d2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1c0ed97b-7ff5-4717-baa2-a621166e87d2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"b3ebf0f4-f82f-43d3-9428-b8aef2e1e1a5":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2999","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"2986","type":"LinearAxis"}],"left":[{"id":"2991","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2986","type":"LinearAxis"},{"id":"2990","type":"Grid"},{"id":"2991","type":"LinearAxis"},{"id":"2995","type":"Grid"},{"id":"2999","type":"BoxAnnotation"},{"id":"3009","type":"GlyphRenderer"}],"title":{"id":"3043","type":"Title"},"toolbar":{"id":"3001","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2978","type":"DataRange1d"},"x_scale":{"id":"2982","type":"LinearScale"},"y_range":{"id":"2980","type":"DataRange1d"},"y_scale":{"id":"2984","type":"LinearScale"}},"id":"2977","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2998","type":"ResetTool"},{"attributes":{},"id":"3047","type":"BasicTickFormatter"},{"attributes":{},"id":"3030","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"3011","subtype":"Figure","type":"Plot"},"ticker":{"id":"3024","type":"BasicTicker"}},"id":"3027","type":"Grid"},{"attributes":{"filters":[{"id":"2975","type":"BooleanFilter"}],"source":{"id":"2974","type":"ColumnDataSource"}},"id":"2976","type":"CDSView"},{"attributes":{},"id":"3016","type":"LinearScale"},{"attributes":{},"id":"3049","type":"Selection"},{"attributes":{},"id":"3024","type":"BasicTicker"},{"attributes":{"booleans":[false,false,true,true,true]},"id":"2975","type":"BooleanFilter"},{"attributes":{"callback":null,"renderers":"auto"},"id":"3029","type":"HoverTool"},{"attributes":{"below":[{"id":"3018","type":"LinearAxis"}],"left":[{"id":"3023","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3018","type":"LinearAxis"},{"id":"3022","type":"Grid"},{"id":"3023","type":"LinearAxis"},{"id":"3027","type":"Grid"},{"id":"3031","type":"BoxAnnotation"},{"id":"3041","type":"GlyphRenderer"}],"title":{"id":"3053","type":"Title"},"toolbar":{"id":"3033","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2978","type":"DataRange1d"},"x_scale":{"id":"3014","type":"LinearScale"},"y_range":{"id":"2980","type":"DataRange1d"},"y_scale":{"id":"3016","type":"LinearScale"}},"id":"3011","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3050","type":"UnionRenderers"},{"attributes":{"callback":null,"overlay":{"id":"2999","type":"BoxAnnotation"}},"id":"2996","type":"BoxSelectTool"},{"attributes":{"formatter":{"id":"3047","type":"BasicTickFormatter"},"plot":{"id":"2977","subtype":"Figure","type":"Plot"},"ticker":{"id":"2992","type":"BasicTicker"}},"id":"2991","type":"LinearAxis"},{"attributes":{"formatter":{"id":"3055","type":"BasicTickFormatter"},"plot":{"id":"3011","subtype":"Figure","type":"Plot"},"ticker":{"id":"3019","type":"BasicTicker"}},"id":"3018","type":"LinearAxis"},{"attributes":{"plot":{"id":"3011","subtype":"Figure","type":"Plot"},"ticker":{"id":"3019","type":"BasicTicker"}},"id":"3022","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2996","type":"BoxSelectTool"},{"id":"2997","type":"HoverTool"},{"id":"2998","type":"ResetTool"}]},"id":"3001","type":"Toolbar"},{"attributes":{},"id":"2984","type":"LinearScale"},{"attributes":{"children":[{"id":"2977","subtype":"Figure","type":"Plot"},{"id":"3011","subtype":"Figure","type":"Plot"}]},"id":"3062","type":"Row"},{"attributes":{"plot":null,"text":""},"id":"3053","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3007","type":"Circle"},{"attributes":{"callback":null,"renderers":"auto"},"id":"2997","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3039","type":"Circle"},{"attributes":{},"id":"3019","type":"BasicTicker"},{"attributes":{"formatter":{"id":"3045","type":"BasicTickFormatter"},"plot":{"id":"2977","subtype":"Figure","type":"Plot"},"ticker":{"id":"2987","type":"BasicTicker"}},"id":"2986","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3028","type":"BoxSelectTool"},{"id":"3029","type":"HoverTool"},{"id":"3030","type":"ResetTool"}]},"id":"3033","type":"Toolbar"},{"attributes":{},"id":"3055","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2974","type":"ColumnDataSource"},"glyph":{"id":"3038","type":"Circle"},"hover_glyph":{"id":"3040","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"3039","type":"Circle"},"selection_glyph":null,"view":{"id":"2976","type":"CDSView"}},"id":"3041","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3006","type":"Circle"},{"attributes":{},"id":"2987","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3008","type":"Circle"},{"attributes":{},"id":"3057","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"2977","subtype":"Figure","type":"Plot"},"ticker":{"id":"2987","type":"BasicTicker"}},"id":"2990","type":"Grid"},{"attributes":{"toolbar":{"id":"3064","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"3065","type":"ToolbarBox"},{"attributes":{},"id":"2992","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3038","type":"Circle"},{"attributes":{"callback":null},"id":"2980","type":"DataRange1d"},{"attributes":{"children":[{"id":"3065","type":"ToolbarBox"},{"id":"3063","type":"Column"}]},"id":"3066","type":"Column"},{"attributes":{"callback":null,"overlay":{"id":"3031","type":"BoxAnnotation"}},"id":"3028","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"2978","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3031","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]},"selected":{"id":"3049","type":"Selection"},"selection_policy":{"id":"3050","type":"UnionRenderers"}},"id":"2974","type":"ColumnDataSource"},{"attributes":{},"id":"2982","type":"LinearScale"},{"attributes":{"source":{"id":"2974","type":"ColumnDataSource"}},"id":"3010","type":"CDSView"},{"attributes":{"children":[{"id":"3062","type":"Row"}]},"id":"3063","type":"Column"},{"attributes":{"data_source":{"id":"2974","type":"ColumnDataSource"},"glyph":{"id":"3006","type":"Circle"},"hover_glyph":{"id":"3008","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"3007","type":"Circle"},"selection_glyph":null,"view":{"id":"3010","type":"CDSView"}},"id":"3009","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"2977","subtype":"Figure","type":"Plot"},"ticker":{"id":"2992","type":"BasicTicker"}},"id":"2995","type":"Grid"},{"attributes":{},"id":"3014","type":"LinearScale"},{"attributes":{"formatter":{"id":"3057","type":"BasicTickFormatter"},"plot":{"id":"3011","subtype":"Figure","type":"Plot"},"ticker":{"id":"3024","type":"BasicTicker"}},"id":"3023","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3040","type":"Circle"},{"attributes":{"tools":[{"id":"2996","type":"BoxSelectTool"},{"id":"2997","type":"HoverTool"},{"id":"2998","type":"ResetTool"},{"id":"3028","type":"BoxSelectTool"},{"id":"3029","type":"HoverTool"},{"id":"3030","type":"ResetTool"}]},"id":"3064","type":"ProxyToolbar"},{"attributes":{"plot":null,"text":""},"id":"3043","type":"Title"},{"attributes":{},"id":"3045","type":"BasicTickFormatter"}],"root_ids":["3066"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"b3ebf0f4-f82f-43d3-9428-b8aef2e1e1a5","roots":{"3066":"1c0ed97b-7ff5-4717-baa2-a621166e87d2"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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