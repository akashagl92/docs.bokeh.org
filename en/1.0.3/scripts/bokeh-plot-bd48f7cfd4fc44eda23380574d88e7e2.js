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
      };var element = document.getElementById("00914ec8-27dd-41db-aa00-2446dca21f42");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '00914ec8-27dd-41db-aa00-2446dca21f42' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e1ef3f77-b745-4549-b033-326c89472985":{"roots":{"references":[{"attributes":{"active_drag":{"id":"18842","type":"PolyEditTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18811","type":"PanTool"},{"id":"18812","type":"WheelZoomTool"},{"id":"18813","type":"BoxZoomTool"},{"id":"18814","type":"SaveTool"},{"id":"18815","type":"ResetTool"},{"id":"18816","type":"HelpTool"},{"id":"18841","type":"PolyDrawTool"},{"id":"18842","type":"PolyEditTool"}]},"id":"18817","type":"Toolbar"},{"attributes":{},"id":"18852","type":"Selection"},{"attributes":{},"id":"18855","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"xs":[[1,2,3]],"ys":[[3,5,2]]},"selected":{"id":"18854","type":"Selection"},"selection_policy":{"id":"18855","type":"UnionRenderers"}},"id":"18831","type":"ColumnDataSource"},{"attributes":{},"id":"18815","type":"ResetTool"},{"attributes":{},"id":"18816","type":"HelpTool"},{"attributes":{"renderers":[{"id":"18829","type":"GlyphRenderer"},{"id":"18834","type":"GlyphRenderer"}],"vertex_renderer":null},"id":"18841","type":"PolyDrawTool"},{"attributes":{"renderers":[{"id":"18829","type":"GlyphRenderer"},{"id":"18834","type":"GlyphRenderer"}],"vertex_renderer":{"id":"18839","type":"GlyphRenderer"}},"id":"18842","type":"PolyEditTool"},{"attributes":{"source":{"id":"18836","type":"ColumnDataSource"}},"id":"18840","type":"CDSView"},{"attributes":{"formatter":{"id":"18849","type":"BasicTickFormatter"},"plot":{"id":"18791","subtype":"Figure","type":"Plot"},"ticker":{"id":"18802","type":"BasicTicker"}},"id":"18801","type":"LinearAxis"},{"attributes":{},"id":"18857","type":"UnionRenderers"},{"attributes":{},"id":"18799","type":"LinearScale"},{"attributes":{},"id":"18849","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"xs":[],"ys":[]},"selected":{"id":"18852","type":"Selection"},"selection_policy":{"id":"18853","type":"UnionRenderers"}},"id":"18826","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18831","type":"ColumnDataSource"},"glyph":{"id":"18832","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18833","type":"Patches"},"selection_glyph":null,"view":{"id":"18835","type":"CDSView"}},"id":"18834","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":10},"id":"18793","type":"Range1d"},{"attributes":{"plot":{"id":"18791","subtype":"Figure","type":"Plot"},"ticker":{"id":"18802","type":"BasicTicker"}},"id":"18805","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[],"y":[]},"selected":{"id":"18856","type":"Selection"},"selection_policy":{"id":"18857","type":"UnionRenderers"}},"id":"18836","type":"ColumnDataSource"},{"attributes":{},"id":"18814","type":"SaveTool"},{"attributes":{},"id":"18811","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18828","type":"Patches"},{"attributes":{"formatter":{"id":"18847","type":"BasicTickFormatter"},"plot":{"id":"18791","subtype":"Figure","type":"Plot"},"ticker":{"id":"18807","type":"BasicTicker"}},"id":"18806","type":"LinearAxis"},{"attributes":{},"id":"18847","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"18836","type":"ColumnDataSource"},"glyph":{"id":"18837","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18838","type":"Circle"},"selection_glyph":null,"view":{"id":"18840","type":"CDSView"}},"id":"18839","type":"GlyphRenderer"},{"attributes":{},"id":"18812","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"green"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18832","type":"Patches"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18827","type":"Patches"},{"attributes":{},"id":"18807","type":"BasicTicker"},{"attributes":{"callback":null,"end":10},"id":"18795","type":"Range1d"},{"attributes":{},"id":"18797","type":"LinearScale"},{"attributes":{"overlay":{"id":"18819","type":"BoxAnnotation"}},"id":"18813","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"18791","subtype":"Figure","type":"Plot"},"ticker":{"id":"18807","type":"BasicTicker"}},"id":"18810","type":"Grid"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18837","type":"Circle"},{"attributes":{},"id":"18853","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18833","type":"Patches"},{"attributes":{"data_source":{"id":"18826","type":"ColumnDataSource"},"glyph":{"id":"18827","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18828","type":"Patches"},"selection_glyph":null,"view":{"id":"18830","type":"CDSView"}},"id":"18829","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18831","type":"ColumnDataSource"}},"id":"18835","type":"CDSView"},{"attributes":{"source":{"id":"18826","type":"ColumnDataSource"}},"id":"18830","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18838","type":"Circle"},{"attributes":{},"id":"18856","type":"Selection"},{"attributes":{"plot":null,"text":"Poly Edit Tool"},"id":"18790","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18819","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"18801","type":"LinearAxis"}],"left":[{"id":"18806","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18801","type":"LinearAxis"},{"id":"18805","type":"Grid"},{"id":"18806","type":"LinearAxis"},{"id":"18810","type":"Grid"},{"id":"18819","type":"BoxAnnotation"},{"id":"18829","type":"GlyphRenderer"},{"id":"18834","type":"GlyphRenderer"},{"id":"18839","type":"GlyphRenderer"}],"title":{"id":"18790","type":"Title"},"toolbar":{"id":"18817","type":"Toolbar"},"x_range":{"id":"18793","type":"Range1d"},"x_scale":{"id":"18797","type":"LinearScale"},"y_range":{"id":"18795","type":"Range1d"},"y_scale":{"id":"18799","type":"LinearScale"}},"id":"18791","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18854","type":"Selection"},{"attributes":{},"id":"18802","type":"BasicTicker"}],"root_ids":["18791"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"e1ef3f77-b745-4549-b033-326c89472985","roots":{"18791":"00914ec8-27dd-41db-aa00-2446dca21f42"}}];
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