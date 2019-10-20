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
      };var element = document.getElementById("624d6f60-8498-4e20-b329-993a70365a51");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '624d6f60-8498-4e20-b329-993a70365a51' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"97d704cf-7933-4c98-874f-49eddbf02397":{"roots":{"references":[{"attributes":{"callback":null},"id":"3029","type":"HoverTool"},{"attributes":{},"id":"2998","type":"ResetTool"},{"attributes":{},"id":"3030","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"2977","subtype":"Figure","type":"Plot"},"ticker":{"id":"2992","type":"BasicTicker"}},"id":"2995","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3031","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3038","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2999","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3028","type":"BoxSelectTool"},{"id":"3029","type":"HoverTool"},{"id":"3030","type":"ResetTool"}]},"id":"3033","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"2999","type":"BoxAnnotation"}},"id":"2996","type":"BoxSelectTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]},"selected":{"id":"3049","type":"Selection"},"selection_policy":{"id":"3048","type":"UnionRenderers"}},"id":"2974","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3039","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3006","type":"Circle"},{"attributes":{},"id":"3046","type":"BasicTickFormatter"},{"attributes":{"booleans":[false,false,true,true,true]},"id":"2975","type":"BooleanFilter"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3040","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2996","type":"BoxSelectTool"},{"id":"2997","type":"HoverTool"},{"id":"2998","type":"ResetTool"}]},"id":"3001","type":"Toolbar"},{"attributes":{"children":[{"id":"2977","subtype":"Figure","type":"Plot"},{"id":"3011","subtype":"Figure","type":"Plot"}]},"id":"3062","type":"Row"},{"attributes":{"callback":null,"overlay":{"id":"3031","type":"BoxAnnotation"}},"id":"3028","type":"BoxSelectTool"},{"attributes":{},"id":"3048","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2974","type":"ColumnDataSource"},"glyph":{"id":"3038","type":"Circle"},"hover_glyph":{"id":"3040","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"3039","type":"Circle"},"selection_glyph":null,"view":{"id":"2976","type":"CDSView"}},"id":"3041","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3007","type":"Circle"},{"attributes":{"below":[{"id":"3018","type":"LinearAxis"}],"left":[{"id":"3023","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3018","type":"LinearAxis"},{"id":"3022","type":"Grid"},{"id":"3023","type":"LinearAxis"},{"id":"3027","type":"Grid"},{"id":"3031","type":"BoxAnnotation"},{"id":"3041","type":"GlyphRenderer"}],"title":{"id":"3052","type":"Title"},"toolbar":{"id":"3033","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2978","type":"DataRange1d"},"x_scale":{"id":"3014","type":"LinearScale"},"y_range":{"id":"2980","type":"DataRange1d"},"y_scale":{"id":"3016","type":"LinearScale"}},"id":"3011","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"3062","type":"Row"}]},"id":"3063","type":"Column"},{"attributes":{"callback":null},"id":"2978","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3008","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"3042","type":"Title"},{"attributes":{"filters":[{"id":"2975","type":"BooleanFilter"}],"source":{"id":"2974","type":"ColumnDataSource"}},"id":"2976","type":"CDSView"},{"attributes":{"data_source":{"id":"2974","type":"ColumnDataSource"},"glyph":{"id":"3006","type":"Circle"},"hover_glyph":{"id":"3008","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"3007","type":"Circle"},"selection_glyph":null,"view":{"id":"3010","type":"CDSView"}},"id":"3009","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"2980","type":"DataRange1d"},{"attributes":{},"id":"3044","type":"BasicTickFormatter"},{"attributes":{},"id":"2982","type":"LinearScale"},{"attributes":{},"id":"3049","type":"Selection"},{"attributes":{"source":{"id":"2974","type":"ColumnDataSource"}},"id":"3010","type":"CDSView"},{"attributes":{},"id":"2984","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"3052","type":"Title"},{"attributes":{"formatter":{"id":"3056","type":"BasicTickFormatter"},"plot":{"id":"3011","subtype":"Figure","type":"Plot"},"ticker":{"id":"3019","type":"BasicTicker"}},"id":"3018","type":"LinearAxis"},{"attributes":{},"id":"3014","type":"LinearScale"},{"attributes":{"formatter":{"id":"3046","type":"BasicTickFormatter"},"plot":{"id":"2977","subtype":"Figure","type":"Plot"},"ticker":{"id":"2987","type":"BasicTicker"}},"id":"2986","type":"LinearAxis"},{"attributes":{},"id":"3054","type":"BasicTickFormatter"},{"attributes":{},"id":"3016","type":"LinearScale"},{"attributes":{},"id":"2987","type":"BasicTicker"},{"attributes":{},"id":"3056","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"2977","subtype":"Figure","type":"Plot"},"ticker":{"id":"2987","type":"BasicTicker"}},"id":"2990","type":"Grid"},{"attributes":{},"id":"3024","type":"BasicTicker"},{"attributes":{"tools":[{"id":"2996","type":"BoxSelectTool"},{"id":"2997","type":"HoverTool"},{"id":"2998","type":"ResetTool"},{"id":"3028","type":"BoxSelectTool"},{"id":"3029","type":"HoverTool"},{"id":"3030","type":"ResetTool"}]},"id":"3064","type":"ProxyToolbar"},{"attributes":{},"id":"3019","type":"BasicTicker"},{"attributes":{"formatter":{"id":"3044","type":"BasicTickFormatter"},"plot":{"id":"2977","subtype":"Figure","type":"Plot"},"ticker":{"id":"2992","type":"BasicTicker"}},"id":"2991","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"3064","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"3065","type":"ToolbarBox"},{"attributes":{},"id":"2992","type":"BasicTicker"},{"attributes":{"below":[{"id":"2986","type":"LinearAxis"}],"left":[{"id":"2991","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2986","type":"LinearAxis"},{"id":"2990","type":"Grid"},{"id":"2991","type":"LinearAxis"},{"id":"2995","type":"Grid"},{"id":"2999","type":"BoxAnnotation"},{"id":"3009","type":"GlyphRenderer"}],"title":{"id":"3042","type":"Title"},"toolbar":{"id":"3001","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2978","type":"DataRange1d"},"x_scale":{"id":"2982","type":"LinearScale"},"y_range":{"id":"2980","type":"DataRange1d"},"y_scale":{"id":"2984","type":"LinearScale"}},"id":"2977","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"3011","subtype":"Figure","type":"Plot"},"ticker":{"id":"3024","type":"BasicTicker"}},"id":"3027","type":"Grid"},{"attributes":{"plot":{"id":"3011","subtype":"Figure","type":"Plot"},"ticker":{"id":"3019","type":"BasicTicker"}},"id":"3022","type":"Grid"},{"attributes":{"children":[{"id":"3065","type":"ToolbarBox"},{"id":"3063","type":"Column"}]},"id":"3066","type":"Column"},{"attributes":{"callback":null},"id":"2997","type":"HoverTool"},{"attributes":{"formatter":{"id":"3054","type":"BasicTickFormatter"},"plot":{"id":"3011","subtype":"Figure","type":"Plot"},"ticker":{"id":"3024","type":"BasicTicker"}},"id":"3023","type":"LinearAxis"}],"root_ids":["3066"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"97d704cf-7933-4c98-874f-49eddbf02397","roots":{"3066":"624d6f60-8498-4e20-b329-993a70365a51"}}];
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