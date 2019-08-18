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
      };var element = document.getElementById("c5cefc5c-a576-416a-a9a6-2dbab77bc049");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c5cefc5c-a576-416a-a9a6-2dbab77bc049' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"432b7eb5-30c6-4eca-872e-ff0fc6943ea6":{"roots":{"references":[{"attributes":{},"id":"26540","type":"BasicTickFormatter"},{"attributes":{},"id":"26516","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26524","type":"BoxAnnotation"},{"attributes":{},"id":"26542","type":"UnionRenderers"},{"attributes":{"callback":null,"end":800},"id":"26500","type":"Range1d"},{"attributes":{},"id":"26502","type":"LinearScale"},{"attributes":{},"id":"26504","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"26532","type":"Patches"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"26533","type":"Patches"},{"attributes":{"callback":null,"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADVAAAAAAAAASkAAAAAAAIBPQAAAAAAAAElAAAAAAABAUEAAAAAAAAA4QAAAAAAAQFdAAAAAAAAAQUAAAAAAAMBXQAAAAAAAwFFAAAAAAAAATkAAAAAAAIBCQAAAAAAAAEZAAAAAAAAATkAAAAAAAABDQAAAAAAAgEtAAAAAAADAV0AAAAAAAEBWQAAAAAAAgENAAAAAAAAAWEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAWEAAAAAAAIBDQAAAAAAAQFZAAAAAAADAV0AAAAAAAIBLQAAAAAAAAENAAAAAAAAATkAAAAAAAABGQAAAAAAAgEJAAAAAAAAATkAAAAAAAMBRQAAAAAAAwFdAAAAAAAAAQUAAAAAAAEBXQAAAAAAAADhAAAAAAABAUEAAAAAAAABJQAAAAAAAgE9AAAAAAAAASkAAAAAAAAA1QAAAAAAAgEtAAAAAAABAWUAAAAAAAEBhQAAAAAAAwF1AAAAAAABAWUAAAAAAAIBXQAAAAAAAoGZAAAAAAADAX0AAAAAAAKBlQAAAAAAAYGNAAAAAAACAWEAAAAAAAIBJQAAAAAAAAExAAAAAAAAAY0AAAAAAAIBUQAAAAAAAQGJAAAAAAACAXEAAAAAAAABhQAAAAAAAQF9AAAAAAABgYEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABgYEAAAAAAAEBfQAAAAAAAAGFAAAAAAACAXEAAAAAAAEBiQAAAAAAAgFRAAAAAAAAAY0AAAAAAAABMQAAAAAAAgElAAAAAAACAWEAAAAAAAGBjQAAAAAAAoGVAAAAAAADAX0AAAAAAAKBmQAAAAAAAgFdAAAAAAABAWUAAAAAAAMBdQAAAAAAAQGFAAAAAAABAWUAAAAAAAIBLQAAAAAAAwGJAAAAAAADgZUAAAAAAAOBpQAAAAAAAwGZAAAAAAAAAYkAAAAAAAEBbQAAAAAAA4G1AAAAAAADAZkAAAAAAAEBpQAAAAAAA4G1AAAAAAAAgYUAAAAAAACBgQAAAAAAAgFFAAAAAAABAbUAAAAAAAMBXQAAAAAAAgG5AAAAAAACAaEAAAAAAAMBqQAAAAAAAIGtAAAAAAADAYkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAYkAAAAAAACBrQAAAAAAAwGpAAAAAAACAaEAAAAAAAIBuQAAAAAAAwFdAAAAAAABAbUAAAAAAAIBRQAAAAAAAIGBAAAAAAAAgYUAAAAAAAOBtQAAAAAAAQGlAAAAAAADAZkAAAAAAAOBtQAAAAAAAQFtAAAAAAAAAYkAAAAAAAMBmQAAAAAAA4GlAAAAAAADgZUAAAAAAAMBiQAAAAAAAoGpAAAAAAAAgakAAAAAAAEBvQAAAAAAAQGtAAAAAAAAgbkAAAAAAAEBmQAAAAAAA0HRAAAAAAACAakAAAAAAAMBsQAAAAAAAMHRAAAAAAACAZUAAAAAAAEBoQAAAAAAAAFpAAAAAAACAbkAAAAAAAIBfQAAAAAAAoHBAAAAAAACAcEAAAAAAAOBxQAAAAAAAkHJAAAAAAADAaEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAaEAAAAAAAJByQAAAAAAA4HFAAAAAAACAcEAAAAAAAKBwQAAAAAAAgF9AAAAAAACAbkAAAAAAAABaQAAAAAAAQGhAAAAAAACAZUAAAAAAADB0QAAAAAAAwGxAAAAAAACAakAAAAAAANB0QAAAAAAAQGZAAAAAAAAgbkAAAAAAAEBrQAAAAAAAQG9AAAAAAAAgakAAAAAAAKBqQAAAAAAAIHNAAAAAAACwcEAAAAAAAMB1QAAAAAAA4HBAAAAAAACwcUAAAAAAAMBrQAAAAAAA8HZAAAAAAAAAbkAAAAAAADB0QAAAAAAAoHdAAAAAAADAbEAAAAAAAEBvQAAAAAAAwGJAAAAAAABwdEAAAAAAACBqQAAAAAAAMHVAAAAAAADgcUAAAAAAAGB2QAAAAAAAUHdAAAAAAABgakA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABgakAAAAAAAFB3QAAAAAAAYHZAAAAAAADgcUAAAAAAADB1QAAAAAAAIGpAAAAAAABwdEAAAAAAAMBiQAAAAAAAQG9AAAAAAADAbEAAAAAAAKB3QAAAAAAAMHRAAAAAAAAAbkAAAAAAAPB2QAAAAAAAwGtAAAAAAACwcUAAAAAAAOBwQAAAAAAAwHVAAAAAAACwcEAAAAAAACBzQAAAAAAAYHhAAAAAAAAQckAAAAAAAFB3QAAAAAAAcHRAAAAAAADAckAAAAAAACBzQAAAAAAAMHlAAAAAAAAwdUAAAAAAAIB1QAAAAAAAIHtAAAAAAADgcUAAAAAAAJBzQAAAAAAAIGVAAAAAAADgeEAAAAAAAMBvQAAAAAAAgHpAAAAAAABgdkAAAAAAAPB5QAAAAAAAkHxAAAAAAAAwcEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAwcEAAAAAAAJB8QAAAAAAA8HlAAAAAAABgdkAAAAAAAIB6QAAAAAAAwG9AAAAAAADgeEAAAAAAACBlQAAAAAAAkHNAAAAAAADgcUAAAAAAACB7QAAAAAAAgHVAAAAAAAAwdUAAAAAAADB5QAAAAAAAIHNAAAAAAADAckAAAAAAAHB0QAAAAAAAUHdAAAAAAAAQckAAAAAAAGB4QAAAAAAA0HpAAAAAAADQc0AAAAAAADB6QAAAAAAAgHVAAAAAAACgdEAAAAAAAKB4QAAAAAAAoHxAAAAAAADQd0AAAAAAAJB4QAAAAAAAcH1AAAAAAADAdkAAAAAAAOB3QAAAAAAAgGpAAAAAAAAwfUAAAAAAAOBxQAAAAAAAcHxAAAAAAABwfEAAAAAAAPB+QAAAAAAA4IBAAAAAAAAQdkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAQdkAAAAAAAOCAQAAAAAAA8H5AAAAAAABwfEAAAAAAAHB8QAAAAAAA4HFAAAAAAAAwfUAAAAAAAIBqQAAAAAAA4HdAAAAAAADAdkAAAAAAAHB9QAAAAAAAkHhAAAAAAADQd0AAAAAAAKB8QAAAAAAAoHhAAAAAAACgdEAAAAAAAIB1QAAAAAAAMHpAAAAAAADQc0AAAAAAANB6QAAAAAAAMHxAAAAAAADgdkAAAAAAAIB8QAAAAAAA4HhAAAAAAACQeUAAAAAAACB6QAAAAAAAAIBAAAAAAAAweUAAAAAAAJB8QAAAAAAAyIBAAAAAAAAAekAAAAAAANB5QAAAAAAAQG9AAAAAAACIgEAAAAAAAHB2QAAAAAAAEIFAAAAAAADYgEAAAAAAAGCCQAAAAAAAUINAAAAAAACAe0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACAe0AAAAAAAFCDQAAAAAAAYIJAAAAAAADYgEAAAAAAABCBQAAAAAAAcHZAAAAAAACIgEAAAAAAAEBvQAAAAAAA0HlAAAAAAAAAekAAAAAAAMiAQAAAAAAAkHxAAAAAAAAweUAAAAAAAACAQAAAAAAAIHpAAAAAAACQeUAAAAAAAOB4QAAAAAAAgHxAAAAAAADgdkAAAAAAADB8QAAAAAAAMIFAAAAAAADQeEAAAAAAAACAQAAAAAAAwHlAAAAAAAAwf0AAAAAAAKB8QAAAAAAAYIBAAAAAAABQf0AAAAAAAMB/QAAAAAAAiIFAAAAAAAAAgEAAAAAAAFB8QAAAAAAAYHVAAAAAAABgg0AAAAAAAJB8QAAAAAAAGIRAAAAAAADIgkAAAAAAAIiEQAAAAAAA4INAAAAAAADwfUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADwfUAAAAAAAOCDQAAAAAAAiIRAAAAAAADIgkAAAAAAABiEQAAAAAAAkHxAAAAAAABgg0AAAAAAAGB1QAAAAAAAUHxAAAAAAAAAgEAAAAAAAIiBQAAAAAAAwH9AAAAAAABQf0AAAAAAAGCAQAAAAAAAoHxAAAAAAAAwf0AAAAAAAMB5QAAAAAAAAIBAAAAAAADQeEAAAAAAADCBQAAAAAAAqIFAAAAAAACQe0AAAAAAAMiCQAAAAAAAcH5AAAAAAAA4gkAAAAAAADiBQAAAAAAAeINAAAAAAAA4gkAAAAAAALiAQAAAAAAAQINAAAAAAADggEAAAAAAALB9QAAAAAAA8HhAAAAAAADQhUAAAAAAALB/QAAAAAAAgIVAAAAAAABYg0AAAAAAALiFQAAAAAAAaIZAAAAAAADYgEA=","dtype":"float64","shape":[40]}]},"selected":{"id":"26543","type":"Selection"},"selection_policy":{"id":"26542","type":"UnionRenderers"}},"id":"26531","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"26531","type":"ColumnDataSource"},"glyph":{"id":"26532","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26533","type":"Patches"},"selection_glyph":null,"view":{"id":"26535","type":"CDSView"}},"id":"26534","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"26538","type":"BasicTickFormatter"},"plot":{"id":"26497","subtype":"Figure","type":"Plot"},"ticker":{"id":"26512","type":"BasicTicker"}},"id":"26511","type":"LinearAxis"},{"attributes":{},"id":"26520","type":"ResetTool"},{"attributes":{},"id":"26543","type":"Selection"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"26497","subtype":"Figure","type":"Plot"},"ticker":{"id":"26512","type":"BasicTicker"}},"id":"26515","type":"Grid"},{"attributes":{"formatter":{"id":"26540","type":"BasicTickFormatter"},"plot":{"id":"26497","subtype":"Figure","type":"Plot"},"ticker":{"id":"26507","type":"BasicTicker"}},"id":"26506","type":"LinearAxis"},{"attributes":{},"id":"26512","type":"BasicTicker"},{"attributes":{"below":[{"id":"26506","type":"LinearAxis"}],"left":[{"id":"26511","type":"LinearAxis"}],"renderers":[{"id":"26506","type":"LinearAxis"},{"id":"26510","type":"Grid"},{"id":"26511","type":"LinearAxis"},{"id":"26515","type":"Grid"},{"id":"26524","type":"BoxAnnotation"},{"id":"26534","type":"GlyphRenderer"}],"title":{"id":"26536","type":"Title"},"toolbar":{"id":"26522","type":"Toolbar"},"x_range":{"id":"26498","type":"Range1d"},"x_scale":{"id":"26502","type":"LinearScale"},"y_range":{"id":"26500","type":"Range1d"},"y_scale":{"id":"26504","type":"LinearScale"}},"id":"26497","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"26531","type":"ColumnDataSource"}},"id":"26535","type":"CDSView"},{"attributes":{},"id":"26519","type":"SaveTool"},{"attributes":{},"id":"26507","type":"BasicTicker"},{"attributes":{"callback":null,"end":19},"id":"26498","type":"Range1d"},{"attributes":{"plot":null,"text":""},"id":"26536","type":"Title"},{"attributes":{},"id":"26538","type":"BasicTickFormatter"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"26497","subtype":"Figure","type":"Plot"},"ticker":{"id":"26507","type":"BasicTicker"}},"id":"26510","type":"Grid"},{"attributes":{"overlay":{"id":"26524","type":"BoxAnnotation"}},"id":"26518","type":"BoxZoomTool"},{"attributes":{},"id":"26521","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26516","type":"PanTool"},{"id":"26517","type":"WheelZoomTool"},{"id":"26518","type":"BoxZoomTool"},{"id":"26519","type":"SaveTool"},{"id":"26520","type":"ResetTool"},{"id":"26521","type":"HelpTool"}]},"id":"26522","type":"Toolbar"},{"attributes":{},"id":"26517","type":"WheelZoomTool"}],"root_ids":["26497"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"432b7eb5-30c6-4eca-872e-ff0fc6943ea6","roots":{"26497":"c5cefc5c-a576-416a-a9a6-2dbab77bc049"}}];
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