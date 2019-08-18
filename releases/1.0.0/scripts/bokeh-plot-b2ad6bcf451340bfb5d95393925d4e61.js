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
      };var element = document.getElementById("249770c9-3380-492b-b0cf-bebe9447c2c0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '249770c9-3380-492b-b0cf-bebe9447c2c0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"294af3cd-ab6a-4050-a943-10e6ac4fd3a5":{"roots":{"references":[{"attributes":{},"id":"26498","type":"LinearScale"},{"attributes":{},"id":"26516","type":"ResetTool"},{"attributes":{},"id":"26503","type":"BasicTicker"},{"attributes":{"callback":null,"end":800},"id":"26496","type":"Range1d"},{"attributes":{"callback":null,"end":19},"id":"26494","type":"Range1d"},{"attributes":{},"id":"26540","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"26527","type":"ColumnDataSource"},"glyph":{"id":"26528","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26529","type":"Patches"},"selection_glyph":null,"view":{"id":"26531","type":"CDSView"}},"id":"26530","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"26520","type":"BoxAnnotation"}},"id":"26514","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"26535","type":"BasicTickFormatter"},"plot":{"id":"26493","subtype":"Figure","type":"Plot"},"ticker":{"id":"26503","type":"BasicTicker"}},"id":"26502","type":"LinearAxis"},{"attributes":{},"id":"26537","type":"BasicTickFormatter"},{"attributes":{},"id":"26515","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"26529","type":"Patches"},{"attributes":{"plot":null,"text":""},"id":"26533","type":"Title"},{"attributes":{"callback":null,"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFRAAAAAAADAVEAAAAAAAAA+QAAAAAAAADhAAAAAAAAALkAAAAAAAABWQAAAAAAAADRAAAAAAAAAM0AAAAAAAABBQAAAAAAAAEdAAAAAAACARkAAAAAAAIBCQAAAAAAAgEpAAAAAAAAAVkAAAAAAAABKQAAAAAAAQFJAAAAAAAAAKEAAAAAAAAA0QAAAAAAAAD1AAAAAAAAAT0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAT0AAAAAAAAA9QAAAAAAAADRAAAAAAAAAKEAAAAAAAEBSQAAAAAAAAEpAAAAAAAAAVkAAAAAAAIBKQAAAAAAAgEJAAAAAAACARkAAAAAAAABHQAAAAAAAAEFAAAAAAAAAM0AAAAAAAAA0QAAAAAAAAFZAAAAAAAAALkAAAAAAAAA4QAAAAAAAAD5AAAAAAADAVEAAAAAAAABUQAAAAAAAoGNAAAAAAADgYEAAAAAAAABIQAAAAAAAwFZAAAAAAABAU0AAAAAAAKBlQAAAAAAAgFlAAAAAAADAUUAAAAAAAABSQAAAAAAAQF9AAAAAAACATUAAAAAAAIBVQAAAAAAAgFBAAAAAAADAXkAAAAAAAABQQAAAAAAAAFVAAAAAAACAR0AAAAAAAEBVQAAAAAAAgF5AAAAAAADAVkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAVkAAAAAAAIBeQAAAAAAAQFVAAAAAAACAR0AAAAAAAABVQAAAAAAAAFBAAAAAAADAXkAAAAAAAIBQQAAAAAAAgFVAAAAAAACATUAAAAAAAEBfQAAAAAAAAFJAAAAAAADAUUAAAAAAAIBZQAAAAAAAoGVAAAAAAABAU0AAAAAAAMBWQAAAAAAAAEhAAAAAAADgYEAAAAAAAKBjQAAAAAAAgGVAAAAAAADAa0AAAAAAAEBUQAAAAAAAoGFAAAAAAADAZEAAAAAAAPBwQAAAAAAAwGFAAAAAAACAYkAAAAAAAMBdQAAAAAAAQGhAAAAAAAAgYUAAAAAAAEBcQAAAAAAAQFtAAAAAAACgYkAAAAAAAOBgQAAAAAAAwFdAAAAAAACAXkAAAAAAAMBiQAAAAAAAYGtAAAAAAAAAXUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAXUAAAAAAAGBrQAAAAAAAwGJAAAAAAACAXkAAAAAAAMBXQAAAAAAA4GBAAAAAAACgYkAAAAAAAEBbQAAAAAAAQFxAAAAAAAAgYUAAAAAAAEBoQAAAAAAAwF1AAAAAAACAYkAAAAAAAMBhQAAAAAAA8HBAAAAAAADAZEAAAAAAAKBhQAAAAAAAQFRAAAAAAADAa0AAAAAAAIBlQAAAAAAAYG1AAAAAAACgckAAAAAAAMBaQAAAAAAAQGNAAAAAAADAbkAAAAAAAHByQAAAAAAAoGRAAAAAAADAZkAAAAAAACBgQAAAAAAAYHBAAAAAAACAbUAAAAAAAOBpQAAAAAAAQF9AAAAAAADgZkAAAAAAAEBkQAAAAAAAwGRAAAAAAACgZEAAAAAAAEBrQAAAAAAAMHFAAAAAAABgaEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABgaEAAAAAAADBxQAAAAAAAQGtAAAAAAACgZEAAAAAAAMBkQAAAAAAAQGRAAAAAAADgZkAAAAAAAEBfQAAAAAAA4GlAAAAAAACAbUAAAAAAAGBwQAAAAAAAIGBAAAAAAADAZkAAAAAAAKBkQAAAAAAAcHJAAAAAAADAbkAAAAAAAEBjQAAAAAAAwFpAAAAAAACgckAAAAAAAGBtQAAAAAAAkHBAAAAAAABgc0AAAAAAACBgQAAAAAAAIGlAAAAAAACAdEAAAAAAAIB1QAAAAAAAYGZAAAAAAAAga0AAAAAAACBqQAAAAAAAwHVAAAAAAAAQcUAAAAAAAEBwQAAAAAAA4GpAAAAAAAAAcEAAAAAAAIBtQAAAAAAAYG5AAAAAAABAaUAAAAAAAEBtQAAAAAAAIHZAAAAAAAAgb0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAgb0AAAAAAACB2QAAAAAAAQG1AAAAAAABAaUAAAAAAAGBuQAAAAAAAgG1AAAAAAAAAcEAAAAAAAOBqQAAAAAAAQHBAAAAAAAAQcUAAAAAAAMB1QAAAAAAAIGpAAAAAAAAga0AAAAAAAGBmQAAAAAAAgHVAAAAAAACAdEAAAAAAACBpQAAAAAAAIGBAAAAAAABgc0AAAAAAAJBwQAAAAAAAIHRAAAAAAABgdUAAAAAAAOBkQAAAAAAA8HFAAAAAAACAeUAAAAAAAHB6QAAAAAAAoG9AAAAAAABQcEAAAAAAAOBsQAAAAAAAkHdAAAAAAAAgckAAAAAAAAB1QAAAAAAAgG1AAAAAAAAQdkAAAAAAAKBxQAAAAAAAsHBAAAAAAADgcUAAAAAAAMBxQAAAAAAAcHdAAAAAAADAcEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAcEAAAAAAAHB3QAAAAAAAwHFAAAAAAADgcUAAAAAAALBwQAAAAAAAoHFAAAAAAAAQdkAAAAAAAIBtQAAAAAAAAHVAAAAAAAAgckAAAAAAAJB3QAAAAAAA4GxAAAAAAABQcEAAAAAAAKBvQAAAAAAAcHpAAAAAAACAeUAAAAAAAPBxQAAAAAAA4GRAAAAAAABgdUAAAAAAACB0QAAAAAAAsHhAAAAAAAAge0AAAAAAAABsQAAAAAAA0HZAAAAAAADAfUAAAAAAAHB9QAAAAAAAcHRAAAAAAACAckAAAAAAAPBxQAAAAAAAsHtAAAAAAADgd0AAAAAAAKB1QAAAAAAAoHNAAAAAAABAe0AAAAAAAHB2QAAAAAAAAHRAAAAAAABgdkAAAAAAAOB2QAAAAAAA0HhAAAAAAADgckA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADgckAAAAAAANB4QAAAAAAA4HZAAAAAAABgdkAAAAAAAAB0QAAAAAAAcHZAAAAAAABAe0AAAAAAAKBzQAAAAAAAoHVAAAAAAADgd0AAAAAAALB7QAAAAAAA8HFAAAAAAACAckAAAAAAAHB0QAAAAAAAcH1AAAAAAADAfUAAAAAAANB2QAAAAAAAAGxAAAAAAAAge0AAAAAAALB4QAAAAAAAAH5AAAAAAAAAf0AAAAAAAOByQAAAAAAAEHxAAAAAAADwf0AAAAAAAACBQAAAAAAAoHVAAAAAAACAc0AAAAAAAGB3QAAAAAAAgH1AAAAAAACgeUAAAAAAADB3QAAAAAAAAHVAAAAAAADQfEAAAAAAAJB6QAAAAAAAcHZAAAAAAAAQe0AAAAAAAFB6QAAAAAAA0HtAAAAAAABAd0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABAd0AAAAAAANB7QAAAAAAAUHpAAAAAAAAQe0AAAAAAAHB2QAAAAAAAkHpAAAAAAADQfEAAAAAAAAB1QAAAAAAAMHdAAAAAAACgeUAAAAAAAIB9QAAAAAAAYHdAAAAAAACAc0AAAAAAAKB1QAAAAAAAAIFAAAAAAADwf0AAAAAAABB8QAAAAAAA4HJAAAAAAAAAf0AAAAAAAAB+QAAAAAAA8H9AAAAAAAAIgEAAAAAAAIB0QAAAAAAAMIBAAAAAAADYgUAAAAAAAICCQAAAAAAAkHtAAAAAAADQd0AAAAAAAFB6QAAAAAAAkIFAAAAAAABQe0AAAAAAAPB3QAAAAAAA0HhAAAAAAABwgUAAAAAAAOB9QAAAAAAAEHxAAAAAAACgfEAAAAAAAOB8QAAAAAAA+IBAAAAAAAAQeUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAQeUAAAAAAAPiAQAAAAAAA4HxAAAAAAACgfEAAAAAAABB8QAAAAAAA4H1AAAAAAABwgUAAAAAAANB4QAAAAAAA8HdAAAAAAABQe0AAAAAAAJCBQAAAAAAAUHpAAAAAAADQd0AAAAAAAJB7QAAAAAAAgIJAAAAAAADYgUAAAAAAADCAQAAAAAAAgHRAAAAAAAAIgEAAAAAAAPB/QAAAAAAA6IJAAAAAAACwgEAAAAAAAOB4QAAAAAAAoIBAAAAAAAAwg0AAAAAAALCDQAAAAAAAIIBAAAAAAABgeUAAAAAAADB+QAAAAAAA4IJAAAAAAAA4gEAAAAAAABB8QAAAAAAAMHxAAAAAAAAwg0AAAAAAAKiAQAAAAAAAgH1AAAAAAAAwfkAAAAAAACiAQAAAAAAAsINAAAAAAACAe0A=","dtype":"float64","shape":[40]}]},"selected":{"id":"26539","type":"Selection"},"selection_policy":{"id":"26540","type":"UnionRenderers"}},"id":"26527","type":"ColumnDataSource"},{"attributes":{},"id":"26513","type":"WheelZoomTool"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"26493","subtype":"Figure","type":"Plot"},"ticker":{"id":"26503","type":"BasicTicker"}},"id":"26506","type":"Grid"},{"attributes":{},"id":"26512","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"26528","type":"Patches"},{"attributes":{},"id":"26508","type":"BasicTicker"},{"attributes":{},"id":"26500","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26520","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"26502","type":"LinearAxis"}],"left":[{"id":"26507","type":"LinearAxis"}],"renderers":[{"id":"26502","type":"LinearAxis"},{"id":"26506","type":"Grid"},{"id":"26507","type":"LinearAxis"},{"id":"26511","type":"Grid"},{"id":"26520","type":"BoxAnnotation"},{"id":"26530","type":"GlyphRenderer"}],"title":{"id":"26533","type":"Title"},"toolbar":{"id":"26518","type":"Toolbar"},"x_range":{"id":"26494","type":"Range1d"},"x_scale":{"id":"26498","type":"LinearScale"},"y_range":{"id":"26496","type":"Range1d"},"y_scale":{"id":"26500","type":"LinearScale"}},"id":"26493","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"26537","type":"BasicTickFormatter"},"plot":{"id":"26493","subtype":"Figure","type":"Plot"},"ticker":{"id":"26508","type":"BasicTicker"}},"id":"26507","type":"LinearAxis"},{"attributes":{"source":{"id":"26527","type":"ColumnDataSource"}},"id":"26531","type":"CDSView"},{"attributes":{},"id":"26517","type":"HelpTool"},{"attributes":{},"id":"26535","type":"BasicTickFormatter"},{"attributes":{},"id":"26539","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26512","type":"PanTool"},{"id":"26513","type":"WheelZoomTool"},{"id":"26514","type":"BoxZoomTool"},{"id":"26515","type":"SaveTool"},{"id":"26516","type":"ResetTool"},{"id":"26517","type":"HelpTool"}]},"id":"26518","type":"Toolbar"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"26493","subtype":"Figure","type":"Plot"},"ticker":{"id":"26508","type":"BasicTicker"}},"id":"26511","type":"Grid"}],"root_ids":["26493"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"294af3cd-ab6a-4050-a943-10e6ac4fd3a5","roots":{"26493":"249770c9-3380-492b-b0cf-bebe9447c2c0"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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