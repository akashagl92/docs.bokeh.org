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
      };var element = document.getElementById("7ac5c54a-cb14-4132-8793-9520d0cc3469");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7ac5c54a-cb14-4132-8793-9520d0cc3469' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8de9a4e6-19ec-4906-8d78-1ee86b960a3a":{"roots":{"references":[{"attributes":{"items":[{"id":"10539","type":"LegendItem"},{"id":"10540","type":"LegendItem"}],"plot":{"id":"10500","subtype":"Figure","type":"Plot"}},"id":"10541","type":"Legend"},{"attributes":{},"id":"10547","type":"BasicTickFormatter"},{"attributes":{},"id":"10510","type":"BasicTicker"},{"attributes":{},"id":"10507","type":"LinearScale"},{"attributes":{},"id":"10520","type":"WheelZoomTool"},{"attributes":{"index":1,"label":{"value":"red"},"renderers":[{"id":"10537","type":"GlyphRenderer"}]},"id":"10540","type":"LegendItem"},{"attributes":{"data_source":{"id":"10534","type":"ColumnDataSource"},"glyph":{"id":"10535","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10536","type":"MultiLine"},"selection_glyph":null,"view":{"id":"10538","type":"CDSView"}},"id":"10537","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"10500","subtype":"Figure","type":"Plot"},"ticker":{"id":"10515","type":"BasicTicker"}},"id":"10518","type":"Grid"},{"attributes":{},"id":"10519","type":"PanTool"},{"attributes":{},"id":"10549","type":"UnionRenderers"},{"attributes":{"plot":{"id":"10500","subtype":"Figure","type":"Plot"},"ticker":{"id":"10510","type":"BasicTicker"}},"id":"10513","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10519","type":"PanTool"},{"id":"10520","type":"WheelZoomTool"},{"id":"10521","type":"BoxZoomTool"},{"id":"10522","type":"SaveTool"},{"id":"10523","type":"ResetTool"},{"id":"10524","type":"HelpTool"}]},"id":"10525","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"10527","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"10543","type":"Title"},{"attributes":{},"id":"10522","type":"SaveTool"},{"attributes":{"callback":null,"data":{"line_color":["orange","red"],"xs":[[1,2,3],[1,2,3]],"ys":[[1,3,2],[3,4,3]]},"selected":{"id":"10550","type":"Selection"},"selection_policy":{"id":"10549","type":"UnionRenderers"}},"id":"10534","type":"ColumnDataSource"},{"attributes":{"source":{"id":"10534","type":"ColumnDataSource"}},"id":"10538","type":"CDSView"},{"attributes":{},"id":"10505","type":"LinearScale"},{"attributes":{"index":0,"label":{"value":"orange"},"renderers":[{"id":"10537","type":"GlyphRenderer"}]},"id":"10539","type":"LegendItem"},{"attributes":{"overlay":{"id":"10527","type":"BoxAnnotation"}},"id":"10521","type":"BoxZoomTool"},{"attributes":{},"id":"10515","type":"BasicTicker"},{"attributes":{},"id":"10523","type":"ResetTool"},{"attributes":{},"id":"10524","type":"HelpTool"},{"attributes":{"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"10535","type":"MultiLine"},{"attributes":{"formatter":{"id":"10547","type":"BasicTickFormatter"},"plot":{"id":"10500","subtype":"Figure","type":"Plot"},"ticker":{"id":"10515","type":"BasicTicker"}},"id":"10514","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"10536","type":"MultiLine"},{"attributes":{"callback":null},"id":"10501","type":"DataRange1d"},{"attributes":{"formatter":{"id":"10545","type":"BasicTickFormatter"},"plot":{"id":"10500","subtype":"Figure","type":"Plot"},"ticker":{"id":"10510","type":"BasicTicker"}},"id":"10509","type":"LinearAxis"},{"attributes":{"callback":null},"id":"10503","type":"DataRange1d"},{"attributes":{},"id":"10550","type":"Selection"},{"attributes":{},"id":"10545","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"10509","type":"LinearAxis"}],"left":[{"id":"10514","type":"LinearAxis"}],"renderers":[{"id":"10509","type":"LinearAxis"},{"id":"10513","type":"Grid"},{"id":"10514","type":"LinearAxis"},{"id":"10518","type":"Grid"},{"id":"10527","type":"BoxAnnotation"},{"id":"10537","type":"GlyphRenderer"},{"id":"10541","type":"Legend"}],"title":{"id":"10543","type":"Title"},"toolbar":{"id":"10525","type":"Toolbar"},"x_range":{"id":"10501","type":"DataRange1d"},"x_scale":{"id":"10505","type":"LinearScale"},"y_range":{"id":"10503","type":"DataRange1d"},"y_scale":{"id":"10507","type":"LinearScale"}},"id":"10500","subtype":"Figure","type":"Plot"}],"root_ids":["10500"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"8de9a4e6-19ec-4906-8d78-1ee86b960a3a","roots":{"10500":"7ac5c54a-cb14-4132-8793-9520d0cc3469"}}];
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