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
      };var element = document.getElementById("5c7c9402-b599-4f5f-9995-c14c365fe55a");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5c7c9402-b599-4f5f-9995-c14c365fe55a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"91b3d74d-28ba-48ac-bb9d-c45403ae0160":{"roots":{"references":[{"attributes":{"data_source":{"id":"27371","type":"ColumnDataSource"},"glyph":{"id":"27372","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27373","type":"Circle"},"selection_glyph":null,"view":{"id":"27375","type":"CDSView"}},"id":"27374","type":"GlyphRenderer"},{"attributes":{},"id":"27457","type":"UnionRenderers"},{"attributes":{"below":[{"id":"27385","type":"LinearAxis"}],"center":[{"id":"27389","type":"Grid"},{"id":"27394","type":"Grid"}],"left":[{"id":"27390","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27411","type":"GlyphRenderer"}],"title":{"id":"27460","type":"Title"},"toolbar":{"id":"27401","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27377","type":"DataRange1d"},"x_scale":{"id":"27381","type":"LinearScale"},"y_range":{"id":"27379","type":"DataRange1d"},"y_scale":{"id":"27383","type":"LinearScale"}},"id":"27376","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27420","type":"LinearScale"},{"attributes":{"callback":null},"id":"27377","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27447","type":"Square"},{"attributes":{"children":[[{"id":"27339","subtype":"Figure","type":"Plot"},0,0],[{"id":"27376","subtype":"Figure","type":"Plot"},0,1],[{"id":"27413","subtype":"Figure","type":"Plot"},1,0]]},"id":"27480","type":"GridBox"},{"attributes":{"source":{"id":"27408","type":"ColumnDataSource"}},"id":"27412","type":"CDSView"},{"attributes":{"tools":[{"id":"27358","type":"PanTool"},{"id":"27359","type":"WheelZoomTool"},{"id":"27360","type":"BoxZoomTool"},{"id":"27361","type":"SaveTool"},{"id":"27362","type":"ResetTool"},{"id":"27363","type":"HelpTool"},{"id":"27395","type":"PanTool"},{"id":"27396","type":"WheelZoomTool"},{"id":"27397","type":"BoxZoomTool"},{"id":"27398","type":"SaveTool"},{"id":"27399","type":"ResetTool"},{"id":"27400","type":"HelpTool"},{"id":"27432","type":"PanTool"},{"id":"27433","type":"WheelZoomTool"},{"id":"27434","type":"BoxZoomTool"},{"id":"27435","type":"SaveTool"},{"id":"27436","type":"ResetTool"},{"id":"27437","type":"HelpTool"}]},"id":"27481","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27410","type":"Triangle"},{"attributes":{},"id":"27383","type":"LinearScale"},{"attributes":{"source":{"id":"27371","type":"ColumnDataSource"}},"id":"27375","type":"CDSView"},{"attributes":{"callback":null},"id":"27414","type":"DataRange1d"},{"attributes":{},"id":"27358","type":"PanTool"},{"attributes":{"data_source":{"id":"27445","type":"ColumnDataSource"},"glyph":{"id":"27446","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27447","type":"Square"},"selection_glyph":null,"view":{"id":"27449","type":"CDSView"}},"id":"27448","type":"GlyphRenderer"},{"attributes":{},"id":"27477","type":"UnionRenderers"},{"attributes":{},"id":"27395","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27358","type":"PanTool"},{"id":"27359","type":"WheelZoomTool"},{"id":"27360","type":"BoxZoomTool"},{"id":"27361","type":"SaveTool"},{"id":"27362","type":"ResetTool"},{"id":"27363","type":"HelpTool"}]},"id":"27364","type":"Toolbar"},{"attributes":{},"id":"27436","type":"ResetTool"},{"attributes":{"source":{"id":"27445","type":"ColumnDataSource"}},"id":"27449","type":"CDSView"},{"attributes":{},"id":"27432","type":"PanTool"},{"attributes":{"ticker":{"id":"27386","type":"BasicTicker"}},"id":"27389","type":"Grid"},{"attributes":{},"id":"27462","type":"BasicTickFormatter"},{"attributes":{},"id":"27452","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"27423","type":"BasicTicker"}},"id":"27426","type":"Grid"},{"attributes":{"callback":null},"id":"27379","type":"DataRange1d"},{"attributes":{"below":[{"id":"27348","type":"LinearAxis"}],"center":[{"id":"27352","type":"Grid"},{"id":"27357","type":"Grid"}],"left":[{"id":"27353","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27374","type":"GlyphRenderer"}],"title":{"id":"27450","type":"Title"},"toolbar":{"id":"27364","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27340","type":"DataRange1d"},"x_scale":{"id":"27344","type":"LinearScale"},"y_range":{"id":"27342","type":"DataRange1d"},"y_scale":{"id":"27346","type":"LinearScale"}},"id":"27339","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27361","type":"SaveTool"},{"attributes":{},"id":"27428","type":"BasicTicker"},{"attributes":{},"id":"27346","type":"LinearScale"},{"attributes":{"data_source":{"id":"27408","type":"ColumnDataSource"},"glyph":{"id":"27409","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27410","type":"Triangle"},"selection_glyph":null,"view":{"id":"27412","type":"CDSView"}},"id":"27411","type":"GlyphRenderer"},{"attributes":{},"id":"27418","type":"LinearScale"},{"attributes":{"ticker":{"id":"27349","type":"BasicTicker"}},"id":"27352","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"27391","type":"BasicTicker"}},"id":"27394","type":"Grid"},{"attributes":{"formatter":{"id":"27462","type":"BasicTickFormatter"},"ticker":{"id":"27391","type":"BasicTicker"}},"id":"27390","type":"LinearAxis"},{"attributes":{"formatter":{"id":"27452","type":"BasicTickFormatter"},"ticker":{"id":"27354","type":"BasicTicker"}},"id":"27353","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"27428","type":"BasicTicker"}},"id":"27431","type":"Grid"},{"attributes":{},"id":"27362","type":"ResetTool"},{"attributes":{},"id":"27423","type":"BasicTicker"},{"attributes":{},"id":"27363","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27395","type":"PanTool"},{"id":"27396","type":"WheelZoomTool"},{"id":"27397","type":"BoxZoomTool"},{"id":"27398","type":"SaveTool"},{"id":"27399","type":"ResetTool"},{"id":"27400","type":"HelpTool"}]},"id":"27401","type":"Toolbar"},{"attributes":{},"id":"27381","type":"LinearScale"},{"attributes":{},"id":"27435","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27478","type":"BoxAnnotation"},{"attributes":{},"id":"27386","type":"BasicTicker"},{"attributes":{},"id":"27391","type":"BasicTicker"},{"attributes":{"overlay":{"id":"27478","type":"BoxAnnotation"}},"id":"27434","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"27466","type":"Selection"},"selection_policy":{"id":"27467","type":"UnionRenderers"}},"id":"27408","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"27470","type":"Title"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27372","type":"Circle"},{"attributes":{},"id":"27396","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"27464","type":"BasicTickFormatter"},"ticker":{"id":"27386","type":"BasicTicker"}},"id":"27385","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"27476","type":"Selection"},"selection_policy":{"id":"27477","type":"UnionRenderers"}},"id":"27445","type":"ColumnDataSource"},{"attributes":{},"id":"27354","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27446","type":"Square"},{"attributes":{"formatter":{"id":"27472","type":"BasicTickFormatter"},"ticker":{"id":"27428","type":"BasicTicker"}},"id":"27427","type":"LinearAxis"},{"attributes":{"overlay":{"id":"27458","type":"BoxAnnotation"}},"id":"27360","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"27416","type":"DataRange1d"},{"attributes":{},"id":"27467","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"27468","type":"BoxAnnotation"}},"id":"27397","type":"BoxZoomTool"},{"attributes":{},"id":"27398","type":"SaveTool"},{"attributes":{},"id":"27399","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27373","type":"Circle"},{"attributes":{},"id":"27433","type":"WheelZoomTool"},{"attributes":{},"id":"27359","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"27342","type":"DataRange1d"},{"attributes":{"below":[{"id":"27422","type":"LinearAxis"}],"center":[{"id":"27426","type":"Grid"},{"id":"27431","type":"Grid"}],"left":[{"id":"27427","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27448","type":"GlyphRenderer"}],"title":{"id":"27470","type":"Title"},"toolbar":{"id":"27438","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27414","type":"DataRange1d"},"x_scale":{"id":"27418","type":"LinearScale"},"y_range":{"id":"27416","type":"DataRange1d"},"y_scale":{"id":"27420","type":"LinearScale"}},"id":"27413","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27349","type":"BasicTicker"},{"attributes":{},"id":"27400","type":"HelpTool"},{"attributes":{"formatter":{"id":"27474","type":"BasicTickFormatter"},"ticker":{"id":"27423","type":"BasicTicker"}},"id":"27422","type":"LinearAxis"},{"attributes":{},"id":"27476","type":"Selection"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27409","type":"Triangle"},{"attributes":{},"id":"27464","type":"BasicTickFormatter"},{"attributes":{},"id":"27472","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"27481","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"27482","type":"ToolbarBox"},{"attributes":{},"id":"27474","type":"BasicTickFormatter"},{"attributes":{},"id":"27466","type":"Selection"},{"attributes":{},"id":"27344","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"27456","type":"Selection"},"selection_policy":{"id":"27457","type":"UnionRenderers"}},"id":"27371","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27458","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27468","type":"BoxAnnotation"},{"attributes":{},"id":"27456","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"27354","type":"BasicTicker"}},"id":"27357","type":"Grid"},{"attributes":{"formatter":{"id":"27454","type":"BasicTickFormatter"},"ticker":{"id":"27349","type":"BasicTicker"}},"id":"27348","type":"LinearAxis"},{"attributes":{"callback":null},"id":"27340","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27432","type":"PanTool"},{"id":"27433","type":"WheelZoomTool"},{"id":"27434","type":"BoxZoomTool"},{"id":"27435","type":"SaveTool"},{"id":"27436","type":"ResetTool"},{"id":"27437","type":"HelpTool"}]},"id":"27438","type":"Toolbar"},{"attributes":{"text":""},"id":"27460","type":"Title"},{"attributes":{},"id":"27437","type":"HelpTool"},{"attributes":{"children":[{"id":"27482","type":"ToolbarBox"},{"id":"27480","type":"GridBox"}]},"id":"27483","type":"Column"},{"attributes":{},"id":"27454","type":"BasicTickFormatter"},{"attributes":{"text":""},"id":"27450","type":"Title"}],"root_ids":["27483"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"91b3d74d-28ba-48ac-bb9d-c45403ae0160","roots":{"27483":"5c7c9402-b599-4f5f-9995-c14c365fe55a"}}];
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