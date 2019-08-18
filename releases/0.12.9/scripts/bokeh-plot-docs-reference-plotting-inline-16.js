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
      };var element = document.getElementById("1b0a84a1-33b3-4ca6-9ee6-56bfa8e3c8c3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1b0a84a1-33b3-4ca6-9ee6-56bfa8e3c8c3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"55a99f2d-f54e-4e8a-9818-a657c70a15c4":{"roots":{"references":[{"attributes":{},"id":"7a478371-3da4-409c-a2a2-cb8c1ae82d21","type":"BasicTicker"},{"attributes":{},"id":"3ccfba1c-bbeb-43b2-8ae2-2aa107181bba","type":"LinearScale"},{"attributes":{"data_source":{"id":"d20e1653-9612-4fd7-8d9c-b52665dba445","type":"ColumnDataSource"},"glyph":{"id":"afb5ec4d-e3a3-4c95-b4e7-4c4a162d4067","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"66b68fed-5436-439f-ba00-44651366ba8a","type":"Quad"},"selection_glyph":null,"view":{"id":"d625ecba-9da7-4d4e-a8cb-b0c1674b62ae","type":"CDSView"}},"id":"8dfa02bb-ee23-46ae-8668-36ad1c25000a","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"76d1b0c1-8c19-42e7-9b15-eb5bee4081e6","type":"BasicTickFormatter"},"plot":{"id":"73e92f76-1799-432d-beb1-d4a0f3473282","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7705ae9-5136-4b30-95b4-6d66f756bee0","type":"BasicTicker"}},"id":"7215c859-0af3-4d5e-95a1-664b8c302480","type":"LinearAxis"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"66b68fed-5436-439f-ba00-44651366ba8a","type":"Quad"},{"attributes":{},"id":"6da55102-34f3-4f9c-aa43-2679d936c331","type":"SaveTool"},{"attributes":{"overlay":{"id":"d93ec765-7516-4ea1-b151-ea62cd1638e5","type":"BoxAnnotation"}},"id":"af37dd4b-794c-4b58-8d67-083574baeed3","type":"BoxZoomTool"},{"attributes":{},"id":"986fcdb2-fc42-4c86-ba13-485c831737a0","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"7215c859-0af3-4d5e-95a1-664b8c302480","type":"LinearAxis"}],"left":[{"id":"a6c8e604-1761-4200-813d-ad818cf00ed5","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7215c859-0af3-4d5e-95a1-664b8c302480","type":"LinearAxis"},{"id":"3f26fb49-b54b-4871-9de8-0a53146b21be","type":"Grid"},{"id":"a6c8e604-1761-4200-813d-ad818cf00ed5","type":"LinearAxis"},{"id":"424b25d8-620d-4f85-87a1-a646eb555f93","type":"Grid"},{"id":"d93ec765-7516-4ea1-b151-ea62cd1638e5","type":"BoxAnnotation"},{"id":"8dfa02bb-ee23-46ae-8668-36ad1c25000a","type":"GlyphRenderer"}],"title":{"id":"74cc9d55-0437-41cb-8158-95dc0856aac9","type":"Title"},"toolbar":{"id":"dcb9aba9-b442-4b84-bc4f-d2706a5b1dfa","type":"Toolbar"},"x_range":{"id":"72e05d59-e6d7-4881-a75c-2dc03b211d2f","type":"DataRange1d"},"x_scale":{"id":"ebae6045-45ca-4c1e-ac4d-420c96b450a0","type":"LinearScale"},"y_range":{"id":"9a38170b-7b41-47c5-8260-18d5ebc93593","type":"DataRange1d"},"y_scale":{"id":"3ccfba1c-bbeb-43b2-8ae2-2aa107181bba","type":"LinearScale"}},"id":"73e92f76-1799-432d-beb1-d4a0f3473282","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d93ec765-7516-4ea1-b151-ea62cd1638e5","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"72e05d59-e6d7-4881-a75c-2dc03b211d2f","type":"DataRange1d"},{"attributes":{"source":{"id":"d20e1653-9612-4fd7-8d9c-b52665dba445","type":"ColumnDataSource"}},"id":"d625ecba-9da7-4d4e-a8cb-b0c1674b62ae","type":"CDSView"},{"attributes":{"plot":{"id":"73e92f76-1799-432d-beb1-d4a0f3473282","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7705ae9-5136-4b30-95b4-6d66f756bee0","type":"BasicTicker"}},"id":"3f26fb49-b54b-4871-9de8-0a53146b21be","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"74cc9d55-0437-41cb-8158-95dc0856aac9","type":"Title"},{"attributes":{},"id":"f7705ae9-5136-4b30-95b4-6d66f756bee0","type":"BasicTicker"},{"attributes":{},"id":"9332a539-169b-448d-b00a-867b96fbba4c","type":"HelpTool"},{"attributes":{},"id":"5504d814-b4f5-4556-bacc-753dd729116a","type":"PanTool"},{"attributes":{},"id":"76d1b0c1-8c19-42e7-9b15-eb5bee4081e6","type":"BasicTickFormatter"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"afb5ec4d-e3a3-4c95-b4e7-4c4a162d4067","type":"Quad"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5504d814-b4f5-4556-bacc-753dd729116a","type":"PanTool"},{"id":"986fcdb2-fc42-4c86-ba13-485c831737a0","type":"WheelZoomTool"},{"id":"af37dd4b-794c-4b58-8d67-083574baeed3","type":"BoxZoomTool"},{"id":"6da55102-34f3-4f9c-aa43-2679d936c331","type":"SaveTool"},{"id":"339a790c-5647-4fce-a750-8b9baebfe863","type":"ResetTool"},{"id":"9332a539-169b-448d-b00a-867b96fbba4c","type":"HelpTool"}]},"id":"dcb9aba9-b442-4b84-bc4f-d2706a5b1dfa","type":"Toolbar"},{"attributes":{},"id":"ebae6045-45ca-4c1e-ac4d-420c96b450a0","type":"LinearScale"},{"attributes":{},"id":"99b43cb1-84ce-4b0f-ae91-a4ea197f95a7","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"9a38170b-7b41-47c5-8260-18d5ebc93593","type":"DataRange1d"},{"attributes":{},"id":"339a790c-5647-4fce-a750-8b9baebfe863","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"73e92f76-1799-432d-beb1-d4a0f3473282","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a478371-3da4-409c-a2a2-cb8c1ae82d21","type":"BasicTicker"}},"id":"424b25d8-620d-4f85-87a1-a646eb555f93","type":"Grid"},{"attributes":{"formatter":{"id":"99b43cb1-84ce-4b0f-ae91-a4ea197f95a7","type":"BasicTickFormatter"},"plot":{"id":"73e92f76-1799-432d-beb1-d4a0f3473282","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a478371-3da4-409c-a2a2-cb8c1ae82d21","type":"BasicTicker"}},"id":"a6c8e604-1761-4200-813d-ad818cf00ed5","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["left","right","top","bottom"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"d20e1653-9612-4fd7-8d9c-b52665dba445","type":"ColumnDataSource"}],"root_ids":["73e92f76-1799-432d-beb1-d4a0f3473282"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"55a99f2d-f54e-4e8a-9818-a657c70a15c4","elementid":"1b0a84a1-33b3-4ca6-9ee6-56bfa8e3c8c3","modelid":"73e92f76-1799-432d-beb1-d4a0f3473282"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
