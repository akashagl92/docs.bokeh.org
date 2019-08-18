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
      };var element = document.getElementById("9a2bb5ec-e965-4ab1-994b-8e6b0ebc95d8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9a2bb5ec-e965-4ab1-994b-8e6b0ebc95d8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e0dd368c-9fdc-4a07-a141-639f8be04725":{"roots":{"references":[{"attributes":{"callback":null,"end":10},"id":"18790","type":"Range1d"},{"attributes":{"source":{"id":"18823","type":"ColumnDataSource"}},"id":"18827","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18835","type":"Circle"},{"attributes":{},"id":"18845","type":"BasicTickFormatter"},{"attributes":{},"id":"18851","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18823","type":"ColumnDataSource"},"glyph":{"id":"18824","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18825","type":"Patches"},"selection_glyph":null,"view":{"id":"18827","type":"CDSView"}},"id":"18826","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":10},"id":"18792","type":"Range1d"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18834","type":"Circle"},{"attributes":{},"id":"18794","type":"LinearScale"},{"attributes":{},"id":"18850","type":"Selection"},{"attributes":{},"id":"18796","type":"LinearScale"},{"attributes":{"callback":null,"data":{"xs":[],"ys":[]},"selected":{"id":"18850","type":"Selection"},"selection_policy":{"id":"18849","type":"UnionRenderers"}},"id":"18823","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"18845","type":"BasicTickFormatter"},"plot":{"id":"18788","subtype":"Figure","type":"Plot"},"ticker":{"id":"18799","type":"BasicTicker"}},"id":"18798","type":"LinearAxis"},{"attributes":{},"id":"18849","type":"UnionRenderers"},{"attributes":{},"id":"18799","type":"BasicTicker"},{"attributes":{"plot":{"id":"18788","subtype":"Figure","type":"Plot"},"ticker":{"id":"18799","type":"BasicTicker"}},"id":"18802","type":"Grid"},{"attributes":{},"id":"18847","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"18847","type":"BasicTickFormatter"},"plot":{"id":"18788","subtype":"Figure","type":"Plot"},"ticker":{"id":"18804","type":"BasicTicker"}},"id":"18803","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18830","type":"Patches"},{"attributes":{},"id":"18804","type":"BasicTicker"},{"attributes":{"renderers":[{"id":"18826","type":"GlyphRenderer"},{"id":"18831","type":"GlyphRenderer"}],"vertex_renderer":null},"id":"18838","type":"PolyDrawTool"},{"attributes":{"source":{"id":"18828","type":"ColumnDataSource"}},"id":"18832","type":"CDSView"},{"attributes":{},"id":"18854","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"18788","subtype":"Figure","type":"Plot"},"ticker":{"id":"18804","type":"BasicTicker"}},"id":"18807","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[],"y":[]},"selected":{"id":"18854","type":"Selection"},"selection_policy":{"id":"18853","type":"UnionRenderers"}},"id":"18833","type":"ColumnDataSource"},{"attributes":{},"id":"18853","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"green"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18829","type":"Patches"},{"attributes":{"data_source":{"id":"18828","type":"ColumnDataSource"},"glyph":{"id":"18829","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18830","type":"Patches"},"selection_glyph":null,"view":{"id":"18832","type":"CDSView"}},"id":"18831","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18824","type":"Patches"},{"attributes":{},"id":"18852","type":"Selection"},{"attributes":{"callback":null,"data":{"xs":[[1,2,3]],"ys":[[3,5,2]]},"selected":{"id":"18852","type":"Selection"},"selection_policy":{"id":"18851","type":"UnionRenderers"}},"id":"18828","type":"ColumnDataSource"},{"attributes":{},"id":"18808","type":"PanTool"},{"attributes":{"renderers":[{"id":"18826","type":"GlyphRenderer"},{"id":"18831","type":"GlyphRenderer"}],"vertex_renderer":{"id":"18836","type":"GlyphRenderer"}},"id":"18839","type":"PolyEditTool"},{"attributes":{},"id":"18811","type":"SaveTool"},{"attributes":{"overlay":{"id":"18816","type":"BoxAnnotation"}},"id":"18810","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18816","type":"BoxAnnotation"},{"attributes":{"active_drag":{"id":"18839","type":"PolyEditTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18808","type":"PanTool"},{"id":"18809","type":"WheelZoomTool"},{"id":"18810","type":"BoxZoomTool"},{"id":"18811","type":"SaveTool"},{"id":"18812","type":"ResetTool"},{"id":"18813","type":"HelpTool"},{"id":"18838","type":"PolyDrawTool"},{"id":"18839","type":"PolyEditTool"}]},"id":"18814","type":"Toolbar"},{"attributes":{"data_source":{"id":"18833","type":"ColumnDataSource"},"glyph":{"id":"18834","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18835","type":"Circle"},"selection_glyph":null,"view":{"id":"18837","type":"CDSView"}},"id":"18836","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"18798","type":"LinearAxis"}],"left":[{"id":"18803","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18798","type":"LinearAxis"},{"id":"18802","type":"Grid"},{"id":"18803","type":"LinearAxis"},{"id":"18807","type":"Grid"},{"id":"18816","type":"BoxAnnotation"},{"id":"18826","type":"GlyphRenderer"},{"id":"18831","type":"GlyphRenderer"},{"id":"18836","type":"GlyphRenderer"}],"title":{"id":"18787","type":"Title"},"toolbar":{"id":"18814","type":"Toolbar"},"x_range":{"id":"18790","type":"Range1d"},"x_scale":{"id":"18794","type":"LinearScale"},"y_range":{"id":"18792","type":"Range1d"},"y_scale":{"id":"18796","type":"LinearScale"}},"id":"18788","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18809","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18825","type":"Patches"},{"attributes":{},"id":"18812","type":"ResetTool"},{"attributes":{"plot":null,"text":"Poly Edit Tool"},"id":"18787","type":"Title"},{"attributes":{},"id":"18813","type":"HelpTool"},{"attributes":{"source":{"id":"18833","type":"ColumnDataSource"}},"id":"18837","type":"CDSView"}],"root_ids":["18788"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"e0dd368c-9fdc-4a07-a141-639f8be04725","roots":{"18788":"9a2bb5ec-e965-4ab1-994b-8e6b0ebc95d8"}}];
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