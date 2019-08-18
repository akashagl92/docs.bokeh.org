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
      };var element = document.getElementById("a15c5b58-360a-40dd-a9a2-6cd73aa15090");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a15c5b58-360a-40dd-a9a2-6cd73aa15090' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"04016254-5026-407b-b125-4d5230a1ce17":{"roots":{"references":[{"attributes":{},"id":"26498","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"26533","type":"Title"},{"attributes":{},"id":"26513","type":"WheelZoomTool"},{"attributes":{},"id":"26539","type":"Selection"},{"attributes":{"formatter":{"id":"26537","type":"BasicTickFormatter"},"plot":{"id":"26493","subtype":"Figure","type":"Plot"},"ticker":{"id":"26508","type":"BasicTicker"}},"id":"26507","type":"LinearAxis"},{"attributes":{"overlay":{"id":"26520","type":"BoxAnnotation"}},"id":"26514","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":19},"id":"26494","type":"Range1d"},{"attributes":{},"id":"26517","type":"HelpTool"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"26493","subtype":"Figure","type":"Plot"},"ticker":{"id":"26508","type":"BasicTicker"}},"id":"26511","type":"Grid"},{"attributes":{"below":[{"id":"26502","type":"LinearAxis"}],"left":[{"id":"26507","type":"LinearAxis"}],"renderers":[{"id":"26502","type":"LinearAxis"},{"id":"26506","type":"Grid"},{"id":"26507","type":"LinearAxis"},{"id":"26511","type":"Grid"},{"id":"26520","type":"BoxAnnotation"},{"id":"26530","type":"GlyphRenderer"}],"title":{"id":"26533","type":"Title"},"toolbar":{"id":"26518","type":"Toolbar"},"x_range":{"id":"26494","type":"Range1d"},"x_scale":{"id":"26498","type":"LinearScale"},"y_range":{"id":"26496","type":"Range1d"},"y_scale":{"id":"26500","type":"LinearScale"}},"id":"26493","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26537","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26512","type":"PanTool"},{"id":"26513","type":"WheelZoomTool"},{"id":"26514","type":"BoxZoomTool"},{"id":"26515","type":"SaveTool"},{"id":"26516","type":"ResetTool"},{"id":"26517","type":"HelpTool"}]},"id":"26518","type":"Toolbar"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"26493","subtype":"Figure","type":"Plot"},"ticker":{"id":"26503","type":"BasicTicker"}},"id":"26506","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"26528","type":"Patches"},{"attributes":{},"id":"26500","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26520","type":"BoxAnnotation"},{"attributes":{},"id":"26515","type":"SaveTool"},{"attributes":{"callback":null,"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD1AAAAAAAAAMkAAAAAAAIBQQAAAAAAAQFhAAAAAAAAAT0AAAAAAAAA9QAAAAAAAADBAAAAAAAAAPUAAAAAAAABGQAAAAAAAgFNAAAAAAAAANEAAAAAAAMBWQAAAAAAAAERAAAAAAADAVEAAAAAAAABMQAAAAAAAgEJAAAAAAAAAMkAAAAAAAAA8QAAAAAAAQFNAAAAAAAAAJkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAJkAAAAAAAEBTQAAAAAAAADxAAAAAAAAAMkAAAAAAAIBCQAAAAAAAAExAAAAAAADAVEAAAAAAAABEQAAAAAAAwFZAAAAAAAAANEAAAAAAAIBTQAAAAAAAAEZAAAAAAAAAPUAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAT0AAAAAAAEBYQAAAAAAAgFBAAAAAAAAAMkAAAAAAAAA9QAAAAAAAwFNAAAAAAACATUAAAAAAAIBkQAAAAAAAwGZAAAAAAACgY0AAAAAAAIBOQAAAAAAAgEFAAAAAAABAXEAAAAAAAMBbQAAAAAAA4GFAAAAAAACAQ0AAAAAAAKBiQAAAAAAAgE1AAAAAAACAWUAAAAAAAMBZQAAAAAAAwF9AAAAAAABAUEAAAAAAAIBXQAAAAAAAAGRAAAAAAAAAP0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAP0AAAAAAAABkQAAAAAAAgFdAAAAAAABAUEAAAAAAAMBfQAAAAAAAwFlAAAAAAACAWUAAAAAAAIBNQAAAAAAAoGJAAAAAAACAQ0AAAAAAAOBhQAAAAAAAwFtAAAAAAABAXEAAAAAAAIBBQAAAAAAAgE5AAAAAAACgY0AAAAAAAMBmQAAAAAAAgGRAAAAAAACATUAAAAAAAMBTQAAAAAAAgGNAAAAAAACAVEAAAAAAACBpQAAAAAAAQGhAAAAAAADAb0AAAAAAAKBhQAAAAAAAQF1AAAAAAADAY0AAAAAAAMBgQAAAAAAAwGtAAAAAAAAAYEAAAAAAAIBmQAAAAAAAgFJAAAAAAADAYUAAAAAAAEBeQAAAAAAAIGpAAAAAAAAAX0AAAAAAAMBbQAAAAAAAIG5AAAAAAACAUkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACAUkAAAAAAACBuQAAAAAAAwFtAAAAAAAAAX0AAAAAAACBqQAAAAAAAQF5AAAAAAADAYUAAAAAAAIBSQAAAAAAAgGZAAAAAAAAAYEAAAAAAAMBrQAAAAAAAwGBAAAAAAADAY0AAAAAAAEBdQAAAAAAAoGFAAAAAAADAb0AAAAAAAEBoQAAAAAAAIGlAAAAAAACAVEAAAAAAAIBjQAAAAAAAIGtAAAAAAACAW0AAAAAAAGBsQAAAAAAAoG5AAAAAAACwdUAAAAAAAOBjQAAAAAAAQGFAAAAAAABAaUAAAAAAAOBoQAAAAAAAMHJAAAAAAABAZkAAAAAAAKBoQAAAAAAA4GBAAAAAAABgY0AAAAAAACBnQAAAAAAAYGxAAAAAAABgakAAAAAAAEBmQAAAAAAAIHVAAAAAAABgZEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABgZEAAAAAAACB1QAAAAAAAQGZAAAAAAABgakAAAAAAAGBsQAAAAAAAIGdAAAAAAABgY0AAAAAAAOBgQAAAAAAAoGhAAAAAAABAZkAAAAAAADByQAAAAAAA4GhAAAAAAABAaUAAAAAAAEBhQAAAAAAA4GNAAAAAAACwdUAAAAAAAKBuQAAAAAAAYGxAAAAAAACAW0AAAAAAACBrQAAAAAAAMHBAAAAAAABAZUAAAAAAAKBxQAAAAAAAAHVAAAAAAABgeEAAAAAAAEBoQAAAAAAAgGdAAAAAAADwcEAAAAAAACBrQAAAAAAAIHNAAAAAAABQcUAAAAAAABBxQAAAAAAAQGRAAAAAAABgZ0AAAAAAAKBrQAAAAAAAAHFAAAAAAADAbEAAAAAAAGBoQAAAAAAAYHhAAAAAAABAa0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABAa0AAAAAAAGB4QAAAAAAAYGhAAAAAAADAbEAAAAAAAABxQAAAAAAAoGtAAAAAAABgZ0AAAAAAAEBkQAAAAAAAEHFAAAAAAABQcUAAAAAAACBzQAAAAAAAIGtAAAAAAADwcEAAAAAAAIBnQAAAAAAAQGhAAAAAAABgeEAAAAAAAAB1QAAAAAAAoHFAAAAAAABAZUAAAAAAADBwQAAAAAAAAHJAAAAAAACAZ0AAAAAAAABzQAAAAAAAcHdAAAAAAAAQfEAAAAAAAMBpQAAAAAAAwGxAAAAAAADAckAAAAAAAABtQAAAAAAAMHlAAAAAAACAckAAAAAAAAB3QAAAAAAAoG1AAAAAAABgb0AAAAAAAHBxQAAAAAAAUHNAAAAAAABwc0AAAAAAAMBvQAAAAAAAoH1AAAAAAAAgckA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAgckAAAAAAAKB9QAAAAAAAwG9AAAAAAABwc0AAAAAAAFBzQAAAAAAAcHFAAAAAAABgb0AAAAAAAKBtQAAAAAAAAHdAAAAAAACAckAAAAAAADB5QAAAAAAAAG1AAAAAAADAckAAAAAAAMBsQAAAAAAAwGlAAAAAAAAQfEAAAAAAAHB3QAAAAAAAAHNAAAAAAACAZ0AAAAAAAAByQAAAAAAA8HRAAAAAAADQcUAAAAAAABB4QAAAAAAAEHlAAAAAAACogEAAAAAAAOBsQAAAAAAAoG9AAAAAAAAAeEAAAAAAAABxQAAAAAAAwHxAAAAAAAAwd0AAAAAAAHB4QAAAAAAAMHFAAAAAAADAcEAAAAAAAEByQAAAAAAAgHZAAAAAAADAeEAAAAAAANBwQAAAAAAAwH5AAAAAAADgckA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADgckAAAAAAAMB+QAAAAAAA0HBAAAAAAADAeEAAAAAAAIB2QAAAAAAAQHJAAAAAAADAcEAAAAAAADBxQAAAAAAAcHhAAAAAAAAwd0AAAAAAAMB8QAAAAAAAAHFAAAAAAAAAeEAAAAAAAKBvQAAAAAAA4GxAAAAAAACogEAAAAAAABB5QAAAAAAAEHhAAAAAAADQcUAAAAAAAPB0QAAAAAAAUHhAAAAAAACAd0AAAAAAACB5QAAAAAAA0H5AAAAAAAB4gUAAAAAAAIBwQAAAAAAAkHBAAAAAAABAeUAAAAAAAPB1QAAAAAAA8H1AAAAAAADwekAAAAAAACB5QAAAAAAAcHJAAAAAAABgdkAAAAAAABB4QAAAAAAAUHhAAAAAAAAgfUAAAAAAAEB0QAAAAAAAMIJAAAAAAABwdEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABwdEAAAAAAADCCQAAAAAAAQHRAAAAAAAAgfUAAAAAAAFB4QAAAAAAAEHhAAAAAAABgdkAAAAAAAHByQAAAAAAAIHlAAAAAAADwekAAAAAAAPB9QAAAAAAA8HVAAAAAAABAeUAAAAAAAJBwQAAAAAAAgHBAAAAAAAB4gUAAAAAAANB+QAAAAAAAIHlAAAAAAACAd0AAAAAAAFB4QAAAAAAA0HpAAAAAAABwfUAAAAAAAOB9QAAAAAAAcIJAAAAAAAAQg0AAAAAAAJByQAAAAAAAoHZAAAAAAABwekAAAAAAACB4QAAAAAAA4H9AAAAAAADAfkAAAAAAADB6QAAAAAAAgHdAAAAAAACAekAAAAAAAAB8QAAAAAAAEH1AAAAAAACggUAAAAAAAOB0QAAAAAAAQINAAAAAAAAweUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAweUAAAAAAAECDQAAAAAAA4HRAAAAAAACggUAAAAAAABB9QAAAAAAAAHxAAAAAAACAekAAAAAAAIB3QAAAAAAAMHpAAAAAAADAfkAAAAAAAOB/QAAAAAAAIHhAAAAAAABwekAAAAAAAKB2QAAAAAAAkHJAAAAAAAAQg0AAAAAAAHCCQAAAAAAA4H1AAAAAAABwfUAAAAAAANB6QAAAAAAAMH1AAAAAAAB4gUAAAAAAAFiAQAAAAAAAUIRAAAAAAAB4g0AAAAAAAEB3QAAAAAAAIHlAAAAAAACwf0AAAAAAACB6QAAAAAAAqIJAAAAAAACYgEAAAAAAACB/QAAAAAAAMHlAAAAAAACwfEAAAAAAAIB9QAAAAAAAoIBAAAAAAAD4g0AAAAAAAMB5QAAAAAAA8IRAAAAAAAAQe0A=","dtype":"float64","shape":[40]}]},"selected":{"id":"26539","type":"Selection"},"selection_policy":{"id":"26540","type":"UnionRenderers"}},"id":"26527","type":"ColumnDataSource"},{"attributes":{},"id":"26516","type":"ResetTool"},{"attributes":{},"id":"26535","type":"BasicTickFormatter"},{"attributes":{},"id":"26503","type":"BasicTicker"},{"attributes":{"formatter":{"id":"26535","type":"BasicTickFormatter"},"plot":{"id":"26493","subtype":"Figure","type":"Plot"},"ticker":{"id":"26503","type":"BasicTicker"}},"id":"26502","type":"LinearAxis"},{"attributes":{"data_source":{"id":"26527","type":"ColumnDataSource"},"glyph":{"id":"26528","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26529","type":"Patches"},"selection_glyph":null,"view":{"id":"26531","type":"CDSView"}},"id":"26530","type":"GlyphRenderer"},{"attributes":{"source":{"id":"26527","type":"ColumnDataSource"}},"id":"26531","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"26529","type":"Patches"},{"attributes":{},"id":"26540","type":"UnionRenderers"},{"attributes":{},"id":"26508","type":"BasicTicker"},{"attributes":{},"id":"26512","type":"PanTool"},{"attributes":{"callback":null,"end":800},"id":"26496","type":"Range1d"}],"root_ids":["26493"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"04016254-5026-407b-b125-4d5230a1ce17","roots":{"26493":"a15c5b58-360a-40dd-a9a2-6cd73aa15090"}}];
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