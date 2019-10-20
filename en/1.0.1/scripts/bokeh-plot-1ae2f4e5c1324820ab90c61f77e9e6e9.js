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
      };var element = document.getElementById("af398d2c-9633-4bef-993f-86d4834e7a28");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'af398d2c-9633-4bef-993f-86d4834e7a28' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"69278ac7-61d4-4731-a858-9e5348e3dd99":{"roots":{"references":[{"attributes":{"data_source":{"id":"18822","type":"ColumnDataSource"},"glyph":{"id":"18823","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18824","type":"Patches"},"selection_glyph":null,"view":{"id":"18826","type":"CDSView"}},"id":"18825","type":"GlyphRenderer"},{"attributes":{},"id":"18798","type":"BasicTicker"},{"attributes":{"plot":{"id":"18787","subtype":"Figure","type":"Plot"},"ticker":{"id":"18798","type":"BasicTicker"}},"id":"18801","type":"Grid"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18833","type":"Circle"},{"attributes":{"source":{"id":"18832","type":"ColumnDataSource"}},"id":"18836","type":"CDSView"},{"attributes":{"formatter":{"id":"18846","type":"BasicTickFormatter"},"plot":{"id":"18787","subtype":"Figure","type":"Plot"},"ticker":{"id":"18803","type":"BasicTicker"}},"id":"18802","type":"LinearAxis"},{"attributes":{"below":[{"id":"18797","type":"LinearAxis"}],"left":[{"id":"18802","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18797","type":"LinearAxis"},{"id":"18801","type":"Grid"},{"id":"18802","type":"LinearAxis"},{"id":"18806","type":"Grid"},{"id":"18815","type":"BoxAnnotation"},{"id":"18825","type":"GlyphRenderer"},{"id":"18830","type":"GlyphRenderer"},{"id":"18835","type":"GlyphRenderer"}],"title":{"id":"18786","type":"Title"},"toolbar":{"id":"18813","type":"Toolbar"},"x_range":{"id":"18789","type":"Range1d"},"x_scale":{"id":"18793","type":"LinearScale"},"y_range":{"id":"18791","type":"Range1d"},"y_scale":{"id":"18795","type":"LinearScale"}},"id":"18787","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18803","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"18787","subtype":"Figure","type":"Plot"},"ticker":{"id":"18803","type":"BasicTicker"}},"id":"18806","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[],"y":[]},"selected":{"id":"18852","type":"Selection"},"selection_policy":{"id":"18853","type":"UnionRenderers"}},"id":"18832","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18827","type":"ColumnDataSource"},"glyph":{"id":"18828","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18829","type":"Patches"},"selection_glyph":null,"view":{"id":"18831","type":"CDSView"}},"id":"18830","type":"GlyphRenderer"},{"attributes":{"renderers":[{"id":"18825","type":"GlyphRenderer"},{"id":"18830","type":"GlyphRenderer"}],"vertex_renderer":{"id":"18835","type":"GlyphRenderer"}},"id":"18838","type":"PolyEditTool"},{"attributes":{"data_source":{"id":"18832","type":"ColumnDataSource"},"glyph":{"id":"18833","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18834","type":"Circle"},"selection_glyph":null,"view":{"id":"18836","type":"CDSView"}},"id":"18835","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18823","type":"Patches"},{"attributes":{},"id":"18849","type":"UnionRenderers"},{"attributes":{},"id":"18852","type":"Selection"},{"attributes":{"callback":null,"data":{"xs":[],"ys":[]},"selected":{"id":"18848","type":"Selection"},"selection_policy":{"id":"18849","type":"UnionRenderers"}},"id":"18822","type":"ColumnDataSource"},{"attributes":{},"id":"18808","type":"WheelZoomTool"},{"attributes":{},"id":"18846","type":"BasicTickFormatter"},{"attributes":{"active_drag":{"id":"18838","type":"PolyEditTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18807","type":"PanTool"},{"id":"18808","type":"WheelZoomTool"},{"id":"18809","type":"BoxZoomTool"},{"id":"18810","type":"SaveTool"},{"id":"18811","type":"ResetTool"},{"id":"18812","type":"HelpTool"},{"id":"18837","type":"PolyDrawTool"},{"id":"18838","type":"PolyEditTool"}]},"id":"18813","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18834","type":"Circle"},{"attributes":{},"id":"18811","type":"ResetTool"},{"attributes":{},"id":"18850","type":"Selection"},{"attributes":{},"id":"18853","type":"UnionRenderers"},{"attributes":{"renderers":[{"id":"18825","type":"GlyphRenderer"},{"id":"18830","type":"GlyphRenderer"}],"vertex_renderer":null},"id":"18837","type":"PolyDrawTool"},{"attributes":{},"id":"18810","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18824","type":"Patches"},{"attributes":{"plot":null,"text":"Poly Edit Tool"},"id":"18786","type":"Title"},{"attributes":{"overlay":{"id":"18815","type":"BoxAnnotation"}},"id":"18809","type":"BoxZoomTool"},{"attributes":{"source":{"id":"18827","type":"ColumnDataSource"}},"id":"18831","type":"CDSView"},{"attributes":{},"id":"18812","type":"HelpTool"},{"attributes":{},"id":"18851","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"green"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18828","type":"Patches"},{"attributes":{"callback":null,"end":10},"id":"18789","type":"Range1d"},{"attributes":{},"id":"18848","type":"Selection"},{"attributes":{"callback":null,"data":{"xs":[[1,2,3]],"ys":[[3,5,2]]},"selected":{"id":"18850","type":"Selection"},"selection_policy":{"id":"18851","type":"UnionRenderers"}},"id":"18827","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":10},"id":"18791","type":"Range1d"},{"attributes":{},"id":"18793","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18815","type":"BoxAnnotation"},{"attributes":{},"id":"18795","type":"LinearScale"},{"attributes":{},"id":"18844","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"18844","type":"BasicTickFormatter"},"plot":{"id":"18787","subtype":"Figure","type":"Plot"},"ticker":{"id":"18798","type":"BasicTicker"}},"id":"18797","type":"LinearAxis"},{"attributes":{"source":{"id":"18822","type":"ColumnDataSource"}},"id":"18826","type":"CDSView"},{"attributes":{},"id":"18807","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18829","type":"Patches"}],"root_ids":["18787"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"69278ac7-61d4-4731-a858-9e5348e3dd99","roots":{"18787":"af398d2c-9633-4bef-993f-86d4834e7a28"}}];
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