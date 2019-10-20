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
      };var element = document.getElementById("f33bc2b1-5952-41db-8fb8-4af40c5d0c13");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f33bc2b1-5952-41db-8fb8-4af40c5d0c13' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9533c86b-4b52-4d0e-8779-075345e4f34e":{"roots":{"references":[{"attributes":{"below":[{"id":"26503","type":"LinearAxis"}],"left":[{"id":"26508","type":"LinearAxis"}],"renderers":[{"id":"26503","type":"LinearAxis"},{"id":"26507","type":"Grid"},{"id":"26508","type":"LinearAxis"},{"id":"26512","type":"Grid"},{"id":"26521","type":"BoxAnnotation"},{"id":"26531","type":"GlyphRenderer"}],"title":{"id":"26534","type":"Title"},"toolbar":{"id":"26519","type":"Toolbar"},"x_range":{"id":"26495","type":"Range1d"},"x_scale":{"id":"26499","type":"LinearScale"},"y_range":{"id":"26497","type":"Range1d"},"y_scale":{"id":"26501","type":"LinearScale"}},"id":"26494","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26521","type":"BoxAnnotation"},{"attributes":{},"id":"26504","type":"BasicTicker"},{"attributes":{},"id":"26518","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26513","type":"PanTool"},{"id":"26514","type":"WheelZoomTool"},{"id":"26515","type":"BoxZoomTool"},{"id":"26516","type":"SaveTool"},{"id":"26517","type":"ResetTool"},{"id":"26518","type":"HelpTool"}]},"id":"26519","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"26529","type":"Patches"},{"attributes":{},"id":"26499","type":"LinearScale"},{"attributes":{},"id":"26517","type":"ResetTool"},{"attributes":{"source":{"id":"26528","type":"ColumnDataSource"}},"id":"26532","type":"CDSView"},{"attributes":{"formatter":{"id":"26536","type":"BasicTickFormatter"},"plot":{"id":"26494","subtype":"Figure","type":"Plot"},"ticker":{"id":"26504","type":"BasicTicker"}},"id":"26503","type":"LinearAxis"},{"attributes":{"overlay":{"id":"26521","type":"BoxAnnotation"}},"id":"26515","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"26528","type":"ColumnDataSource"},"glyph":{"id":"26529","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26530","type":"Patches"},"selection_glyph":null,"view":{"id":"26532","type":"CDSView"}},"id":"26531","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"26534","type":"Title"},{"attributes":{},"id":"26501","type":"LinearScale"},{"attributes":{},"id":"26513","type":"PanTool"},{"attributes":{},"id":"26541","type":"Selection"},{"attributes":{},"id":"26538","type":"BasicTickFormatter"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"26494","subtype":"Figure","type":"Plot"},"ticker":{"id":"26504","type":"BasicTicker"}},"id":"26507","type":"Grid"},{"attributes":{},"id":"26514","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"26530","type":"Patches"},{"attributes":{},"id":"26540","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"26538","type":"BasicTickFormatter"},"plot":{"id":"26494","subtype":"Figure","type":"Plot"},"ticker":{"id":"26509","type":"BasicTicker"}},"id":"26508","type":"LinearAxis"},{"attributes":{},"id":"26516","type":"SaveTool"},{"attributes":{},"id":"26509","type":"BasicTicker"},{"attributes":{},"id":"26536","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":19},"id":"26495","type":"Range1d"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"26494","subtype":"Figure","type":"Plot"},"ticker":{"id":"26509","type":"BasicTicker"}},"id":"26512","type":"Grid"},{"attributes":{"callback":null,"end":800},"id":"26497","type":"Range1d"},{"attributes":{"callback":null,"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgE1AAAAAAAAAP0AAAAAAAABUQAAAAAAAwFhAAAAAAABAVEAAAAAAAAAwQAAAAAAAAEZAAAAAAACAU0AAAAAAAABPQAAAAAAAAEtAAAAAAACAVUAAAAAAAEBTQAAAAAAAgFJAAAAAAAAAUUAAAAAAAIBNQAAAAAAAAEhAAAAAAACAUEAAAAAAAAAqQAAAAAAAgEVAAAAAAAAAQUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAQUAAAAAAAIBFQAAAAAAAACpAAAAAAACAUEAAAAAAAABIQAAAAAAAgE1AAAAAAAAAUUAAAAAAAIBSQAAAAAAAQFNAAAAAAACAVUAAAAAAAABLQAAAAAAAAE9AAAAAAACAU0AAAAAAAABGQAAAAAAAADBAAAAAAABAVEAAAAAAAMBYQAAAAAAAAFRAAAAAAAAAP0AAAAAAAIBNQAAAAAAAwF5AAAAAAADAWUAAAAAAAKBkQAAAAAAAAGNAAAAAAABgYUAAAAAAAIBFQAAAAAAAwF9AAAAAAABAYEAAAAAAAABkQAAAAAAAAFVAAAAAAAAAYkAAAAAAAGBlQAAAAAAAoGRAAAAAAACAWkAAAAAAAIBaQAAAAAAAgFNAAAAAAAAgYUAAAAAAAEBYQAAAAAAAwFdAAAAAAACAUkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACAUkAAAAAAAMBXQAAAAAAAQFhAAAAAAAAgYUAAAAAAAIBTQAAAAAAAgFpAAAAAAACAWkAAAAAAAKBkQAAAAAAAYGVAAAAAAAAAYkAAAAAAAABVQAAAAAAAAGRAAAAAAABAYEAAAAAAAMBfQAAAAAAAgEVAAAAAAABgYUAAAAAAAABjQAAAAAAAoGRAAAAAAADAWUAAAAAAAMBeQAAAAAAAAGZAAAAAAAAAZkAAAAAAAOBuQAAAAAAA4GZAAAAAAAAgakAAAAAAAIBfQAAAAAAAgGlAAAAAAACAakAAAAAAAABqQAAAAAAAoGNAAAAAAABAZ0AAAAAAAKBpQAAAAAAAQG1AAAAAAADgZEAAAAAAAGBgQAAAAAAAwGNAAAAAAACAY0AAAAAAAABoQAAAAAAAwF5AAAAAAACAWUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACAWUAAAAAAAMBeQAAAAAAAAGhAAAAAAACAY0AAAAAAAMBjQAAAAAAAYGBAAAAAAADgZEAAAAAAAEBtQAAAAAAAoGlAAAAAAABAZ0AAAAAAAKBjQAAAAAAAAGpAAAAAAACAakAAAAAAAIBpQAAAAAAAgF9AAAAAAAAgakAAAAAAAOBmQAAAAAAA4G5AAAAAAAAAZkAAAAAAAABmQAAAAAAAYGdAAAAAAAAAbUAAAAAAAIBwQAAAAAAAoG5AAAAAAADAa0AAAAAAAOBiQAAAAAAAgG1AAAAAAAAgcUAAAAAAANBwQAAAAAAAIGtAAAAAAAAgbkAAAAAAAKBuQAAAAAAAwHBAAAAAAACgakAAAAAAAKBsQAAAAAAAAGxAAAAAAABAbkAAAAAAADByQAAAAAAA4GNAAAAAAABgZ0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABgZ0AAAAAAAOBjQAAAAAAAMHJAAAAAAABAbkAAAAAAAABsQAAAAAAAoGxAAAAAAACgakAAAAAAAMBwQAAAAAAAoG5AAAAAAAAgbkAAAAAAACBrQAAAAAAA0HBAAAAAAAAgcUAAAAAAAIBtQAAAAAAA4GJAAAAAAADAa0AAAAAAAKBuQAAAAAAAgHBAAAAAAAAAbUAAAAAAAGBnQAAAAAAAIGlAAAAAAADAb0AAAAAAAKBzQAAAAAAAMHVAAAAAAACAbUAAAAAAAEBpQAAAAAAAoHRAAAAAAACQdUAAAAAAAMB0QAAAAAAAEHJAAAAAAAAwckAAAAAAADBwQAAAAAAAwHVAAAAAAACAc0AAAAAAAKBzQAAAAAAAAG9AAAAAAADwc0AAAAAAACB3QAAAAAAAAGhAAAAAAADAbEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAbEAAAAAAAABoQAAAAAAAIHdAAAAAAADwc0AAAAAAAABvQAAAAAAAoHNAAAAAAACAc0AAAAAAAMB1QAAAAAAAMHBAAAAAAAAwckAAAAAAABByQAAAAAAAwHRAAAAAAACQdUAAAAAAAKB0QAAAAAAAQGlAAAAAAACAbUAAAAAAADB1QAAAAAAAoHNAAAAAAADAb0AAAAAAACBpQAAAAAAAAGtAAAAAAADAcUAAAAAAALB0QAAAAAAA0HhAAAAAAADgdEAAAAAAAMBuQAAAAAAA0HZAAAAAAABAeEAAAAAAABB6QAAAAAAAAHhAAAAAAACQdkAAAAAAACB1QAAAAAAA0HlAAAAAAAAgeUAAAAAAALB5QAAAAAAA8HNAAAAAAACwd0AAAAAAAMB5QAAAAAAAgHBAAAAAAAAQdEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAQdEAAAAAAAIBwQAAAAAAAwHlAAAAAAACwd0AAAAAAAPBzQAAAAAAAsHlAAAAAAAAgeUAAAAAAANB5QAAAAAAAIHVAAAAAAACQdkAAAAAAAAB4QAAAAAAAEHpAAAAAAABAeEAAAAAAANB2QAAAAAAAwG5AAAAAAADgdEAAAAAAANB4QAAAAAAAsHRAAAAAAADAcUAAAAAAAABrQAAAAAAAsHJAAAAAAACgckAAAAAAAPB4QAAAAAAAMH5AAAAAAAAQd0AAAAAAANByQAAAAAAAcHpAAAAAAAAAfUAAAAAAAJB7QAAAAAAA4HtAAAAAAACge0AAAAAAAHB3QAAAAAAAcH1AAAAAAABwekAAAAAAADB+QAAAAAAAIHVAAAAAAADgeEAAAAAAADB/QAAAAAAA0HRAAAAAAABweEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABweEAAAAAAANB0QAAAAAAAMH9AAAAAAADgeEAAAAAAACB1QAAAAAAAMH5AAAAAAABwekAAAAAAAHB9QAAAAAAAcHdAAAAAAACge0AAAAAAAOB7QAAAAAAAkHtAAAAAAAAAfUAAAAAAAHB6QAAAAAAA0HJAAAAAAAAQd0AAAAAAADB+QAAAAAAA8HhAAAAAAACgckAAAAAAALByQAAAAAAAYHhAAAAAAAAAdkAAAAAAAMB+QAAAAAAAmIBAAAAAAADgeUAAAAAAADB0QAAAAAAAcHxAAAAAAACAf0AAAAAAAICAQAAAAAAAmIBAAAAAAACgf0AAAAAAACB7QAAAAAAAwH9AAAAAAABQfEAAAAAAAFCBQAAAAAAA4HhAAAAAAAAwe0AAAAAAAICCQAAAAAAAcHZAAAAAAADAekA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAekAAAAAAAHB2QAAAAAAAgIJAAAAAAAAwe0AAAAAAAOB4QAAAAAAAUIFAAAAAAABQfEAAAAAAAMB/QAAAAAAAIHtAAAAAAACgf0AAAAAAAJiAQAAAAAAAgIBAAAAAAACAf0AAAAAAAHB8QAAAAAAAMHRAAAAAAADgeUAAAAAAAJiAQAAAAAAAwH5AAAAAAAAAdkAAAAAAAGB4QAAAAAAAwHxAAAAAAABAekAAAAAAAJCAQAAAAAAAMIJAAAAAAACAfEAAAAAAAAB1QAAAAAAA4H5AAAAAAADYgkAAAAAAAPiAQAAAAAAACIFAAAAAAAAAgUAAAAAAADB+QAAAAAAAOIJAAAAAAADggEAAAAAAAIiCQAAAAAAAQH1AAAAAAAAgfkAAAAAAAPiDQAAAAAAA0HlAAAAAAABQfEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABQfEAAAAAAANB5QAAAAAAA+INAAAAAAAAgfkAAAAAAAEB9QAAAAAAAiIJAAAAAAADggEAAAAAAADiCQAAAAAAAMH5AAAAAAAAAgUAAAAAAAAiBQAAAAAAA+IBAAAAAAADYgkAAAAAAAOB+QAAAAAAAAHVAAAAAAACAfEAAAAAAADCCQAAAAAAAkIBAAAAAAABAekAAAAAAAMB8QAAAAAAAuIBAAAAAAACgfUAAAAAAAGiBQAAAAAAAiIRAAAAAAADwfUAAAAAAAFB4QAAAAAAAyIBAAAAAAACQhEAAAAAAAOiCQAAAAAAA2INAAAAAAAAwgkAAAAAAAMiBQAAAAAAAKINAAAAAAADQgkAAAAAAACCFQAAAAAAAEH9AAAAAAABgf0AAAAAAAMiFQAAAAAAAsH9AAAAAAABwf0A=","dtype":"float64","shape":[40]}]},"selected":{"id":"26541","type":"Selection"},"selection_policy":{"id":"26540","type":"UnionRenderers"}},"id":"26528","type":"ColumnDataSource"}],"root_ids":["26494"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"9533c86b-4b52-4d0e-8779-075345e4f34e","roots":{"26494":"f33bc2b1-5952-41db-8fb8-4af40c5d0c13"}}];
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