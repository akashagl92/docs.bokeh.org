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
      };var element = document.getElementById("b404ed9d-ca87-4643-9856-183b90925045");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b404ed9d-ca87-4643-9856-183b90925045' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ef8ee70d-24b8-4902-8d67-3350a46f9b07":{"roots":{"references":[{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"26497","subtype":"Figure","type":"Plot"},"ticker":{"id":"26512","type":"BasicTicker"}},"id":"26515","type":"Grid"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"26497","subtype":"Figure","type":"Plot"},"ticker":{"id":"26507","type":"BasicTicker"}},"id":"26510","type":"Grid"},{"attributes":{},"id":"26519","type":"SaveTool"},{"attributes":{"overlay":{"id":"26524","type":"BoxAnnotation"}},"id":"26518","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":800},"id":"26500","type":"Range1d"},{"attributes":{},"id":"26521","type":"HelpTool"},{"attributes":{},"id":"26544","type":"UnionRenderers"},{"attributes":{},"id":"26507","type":"BasicTicker"},{"attributes":{},"id":"26517","type":"WheelZoomTool"},{"attributes":{},"id":"26520","type":"ResetTool"},{"attributes":{"formatter":{"id":"26540","type":"BasicTickFormatter"},"plot":{"id":"26497","subtype":"Figure","type":"Plot"},"ticker":{"id":"26507","type":"BasicTicker"}},"id":"26506","type":"LinearAxis"},{"attributes":{"callback":null,"end":19},"id":"26498","type":"Range1d"},{"attributes":{"callback":null,"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE9AAAAAAAAAOkAAAAAAAABSQAAAAAAAAFVAAAAAAACAS0AAAAAAAAA2QAAAAAAAQFRAAAAAAACASkAAAAAAAIBMQAAAAAAAAFdAAAAAAAAAKkAAAAAAAMBRQAAAAAAAAChAAAAAAADAVUAAAAAAAMBRQAAAAAAAAFFAAAAAAAAAVkAAAAAAAAA9QAAAAAAAADlAAAAAAADAUUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAUUAAAAAAAAA5QAAAAAAAAD1AAAAAAAAAVkAAAAAAAABRQAAAAAAAwFFAAAAAAADAVUAAAAAAAAAoQAAAAAAAwFFAAAAAAAAAKkAAAAAAAABXQAAAAAAAgExAAAAAAACASkAAAAAAAEBUQAAAAAAAADZAAAAAAACAS0AAAAAAAABVQAAAAAAAAFJAAAAAAAAAOkAAAAAAAABPQAAAAAAAgGBAAAAAAACATUAAAAAAAKBjQAAAAAAAAF9AAAAAAAAAXEAAAAAAAABDQAAAAAAAgF9AAAAAAABAX0AAAAAAAEBjQAAAAAAA4GFAAAAAAABAUUAAAAAAAABZQAAAAAAAAFNAAAAAAADAWkAAAAAAAIBhQAAAAAAAIGFAAAAAAAAgZUAAAAAAAEBZQAAAAAAAgE5AAAAAAAAAXEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAXEAAAAAAAIBOQAAAAAAAQFlAAAAAAAAgZUAAAAAAACBhQAAAAAAAgGFAAAAAAADAWkAAAAAAAABTQAAAAAAAAFlAAAAAAABAUUAAAAAAAOBhQAAAAAAAQGNAAAAAAABAX0AAAAAAAIBfQAAAAAAAAENAAAAAAAAAXEAAAAAAAABfQAAAAAAAoGNAAAAAAACATUAAAAAAAIBgQAAAAAAAQGxAAAAAAABAVUAAAAAAAOBnQAAAAAAAoGlAAAAAAADgY0AAAAAAAABQQAAAAAAAoGNAAAAAAACAY0AAAAAAACBmQAAAAAAAgG1AAAAAAAAAVEAAAAAAAGBlQAAAAAAAAGFAAAAAAABgYUAAAAAAAKBsQAAAAAAAoGpAAAAAAAAAZ0AAAAAAAEBkQAAAAAAAQGJAAAAAAADAYkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAYkAAAAAAAEBiQAAAAAAAQGRAAAAAAAAAZ0AAAAAAAKBqQAAAAAAAoGxAAAAAAABgYUAAAAAAAABhQAAAAAAAYGVAAAAAAAAAVEAAAAAAAIBtQAAAAAAAIGZAAAAAAACAY0AAAAAAAKBjQAAAAAAAAFBAAAAAAADgY0AAAAAAAKBpQAAAAAAA4GdAAAAAAABAVUAAAAAAAEBsQAAAAAAAAHRAAAAAAACgZEAAAAAAAOBxQAAAAAAAYGxAAAAAAADAa0AAAAAAAOBgQAAAAAAAoGhAAAAAAAAgaUAAAAAAACBoQAAAAAAA4G5AAAAAAAAgYEAAAAAAAEBnQAAAAAAAoGdAAAAAAACAakAAAAAAAEBuQAAAAAAAkHFAAAAAAAAAcUAAAAAAAGBmQAAAAAAAAGlAAAAAAADAZkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAZkAAAAAAAABpQAAAAAAAYGZAAAAAAAAAcUAAAAAAAJBxQAAAAAAAQG5AAAAAAACAakAAAAAAAKBnQAAAAAAAQGdAAAAAAAAgYEAAAAAAAOBuQAAAAAAAIGhAAAAAAAAgaUAAAAAAAKBoQAAAAAAA4GBAAAAAAADAa0AAAAAAAGBsQAAAAAAA4HFAAAAAAACgZEAAAAAAAAB0QAAAAAAAEHdAAAAAAABAa0AAAAAAAJB0QAAAAAAAEHNAAAAAAADgc0AAAAAAAABpQAAAAAAAQG5AAAAAAACwcEAAAAAAAKBpQAAAAAAAkHRAAAAAAACAYkAAAAAAAKBoQAAAAAAAAHJAAAAAAACgbUAAAAAAAHBzQAAAAAAAUHZAAAAAAAAgc0AAAAAAAABuQAAAAAAAsHJAAAAAAACQcUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACQcUAAAAAAALByQAAAAAAAAG5AAAAAAAAgc0AAAAAAAFB2QAAAAAAAcHNAAAAAAACgbUAAAAAAAAByQAAAAAAAoGhAAAAAAACAYkAAAAAAAJB0QAAAAAAAoGlAAAAAAACwcEAAAAAAAEBuQAAAAAAAAGlAAAAAAADgc0AAAAAAABBzQAAAAAAAkHRAAAAAAABAa0AAAAAAABB3QAAAAAAAIHxAAAAAAACAbUAAAAAAANB3QAAAAAAAIHlAAAAAAADwdUAAAAAAADByQAAAAAAA4HJAAAAAAABgckAAAAAAAIByQAAAAAAAsHVAAAAAAABAZEAAAAAAAKBtQAAAAAAAgHZAAAAAAADgcUAAAAAAAKB4QAAAAAAAUHlAAAAAAABgdkAAAAAAAMByQAAAAAAA4HNAAAAAAACAc0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACAc0AAAAAAAOBzQAAAAAAAwHJAAAAAAABgdkAAAAAAAFB5QAAAAAAAoHhAAAAAAADgcUAAAAAAAIB2QAAAAAAAoG1AAAAAAABAZEAAAAAAALB1QAAAAAAAgHJAAAAAAABgckAAAAAAAOByQAAAAAAAMHJAAAAAAADwdUAAAAAAACB5QAAAAAAA0HdAAAAAAACAbUAAAAAAACB8QAAAAAAACIBAAAAAAACgcEAAAAAAAEB5QAAAAAAAwHlAAAAAAAAwekAAAAAAAJB0QAAAAAAA4HRAAAAAAACQdkAAAAAAAGB3QAAAAAAAQHlAAAAAAADgb0AAAAAAAOBvQAAAAAAAUHxAAAAAAAAQdUAAAAAAAFB6QAAAAAAAIH1AAAAAAADQd0AAAAAAAIB0QAAAAAAAkHZAAAAAAABAd0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABAd0AAAAAAAJB2QAAAAAAAgHRAAAAAAADQd0AAAAAAACB9QAAAAAAAUHpAAAAAAAAQdUAAAAAAAFB8QAAAAAAA4G9AAAAAAADgb0AAAAAAAEB5QAAAAAAAYHdAAAAAAACQdkAAAAAAAOB0QAAAAAAAkHRAAAAAAAAwekAAAAAAAMB5QAAAAAAAQHlAAAAAAACgcEAAAAAAAAiAQAAAAAAASIJAAAAAAAAwdkAAAAAAAFB8QAAAAAAAkH5AAAAAAAAgfUAAAAAAALB6QAAAAAAAoHlAAAAAAACAekAAAAAAALB7QAAAAAAA4HxAAAAAAADgcEAAAAAAALBwQAAAAAAAIH9AAAAAAACgd0AAAAAAACiAQAAAAAAAYH9AAAAAAADgeEAAAAAAAKB4QAAAAAAAUHdAAAAAAAAwe0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAwe0AAAAAAAFB3QAAAAAAAoHhAAAAAAADgeEAAAAAAAGB/QAAAAAAAKIBAAAAAAACgd0AAAAAAACB/QAAAAAAAsHBAAAAAAADgcEAAAAAAAOB8QAAAAAAAsHtAAAAAAACAekAAAAAAAKB5QAAAAAAAsHpAAAAAAAAgfUAAAAAAAJB+QAAAAAAAUHxAAAAAAAAwdkAAAAAAAEiCQAAAAAAAkIRAAAAAAACweUAAAAAAAKB9QAAAAAAA4H9AAAAAAABIgUAAAAAAAEiAQAAAAAAAUHpAAAAAAAAAf0AAAAAAAACAQAAAAAAAUIFAAAAAAACgckAAAAAAADB2QAAAAAAAYIJAAAAAAABgekAAAAAAAMiAQAAAAAAAWIJAAAAAAABwfEAAAAAAAFB7QAAAAAAAoHxAAAAAAABIgEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABIgEAAAAAAAKB8QAAAAAAAUHtAAAAAAABwfEAAAAAAAFiCQAAAAAAAyIBAAAAAAABgekAAAAAAAGCCQAAAAAAAMHZAAAAAAACgckAAAAAAAFCBQAAAAAAAAIBAAAAAAAAAf0AAAAAAAFB6QAAAAAAASIBAAAAAAABIgUAAAAAAAOB/QAAAAAAAoH1AAAAAAACweUAAAAAAAJCEQAAAAAAAeIdAAAAAAAAwe0AAAAAAALCBQAAAAAAAeIBAAAAAAADAgkAAAAAAABiBQAAAAAAAUHtAAAAAAABIgkAAAAAAAEiBQAAAAAAAwIJAAAAAAABAdEAAAAAAAKB5QAAAAAAAGIRAAAAAAAAQf0AAAAAAADiBQAAAAAAAOIRAAAAAAAAQfkAAAAAAADCAQAAAAAAA0H5AAAAAAADYgkA=","dtype":"float64","shape":[40]}]},"selected":{"id":"26543","type":"Selection"},"selection_policy":{"id":"26544","type":"UnionRenderers"}},"id":"26531","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"26506","type":"LinearAxis"}],"left":[{"id":"26511","type":"LinearAxis"}],"renderers":[{"id":"26506","type":"LinearAxis"},{"id":"26510","type":"Grid"},{"id":"26511","type":"LinearAxis"},{"id":"26515","type":"Grid"},{"id":"26524","type":"BoxAnnotation"},{"id":"26534","type":"GlyphRenderer"}],"title":{"id":"26536","type":"Title"},"toolbar":{"id":"26522","type":"Toolbar"},"x_range":{"id":"26498","type":"Range1d"},"x_scale":{"id":"26502","type":"LinearScale"},"y_range":{"id":"26500","type":"Range1d"},"y_scale":{"id":"26504","type":"LinearScale"}},"id":"26497","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"26533","type":"Patches"},{"attributes":{},"id":"26502","type":"LinearScale"},{"attributes":{"formatter":{"id":"26538","type":"BasicTickFormatter"},"plot":{"id":"26497","subtype":"Figure","type":"Plot"},"ticker":{"id":"26512","type":"BasicTicker"}},"id":"26511","type":"LinearAxis"},{"attributes":{"source":{"id":"26531","type":"ColumnDataSource"}},"id":"26535","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"26532","type":"Patches"},{"attributes":{"data_source":{"id":"26531","type":"ColumnDataSource"},"glyph":{"id":"26532","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26533","type":"Patches"},"selection_glyph":null,"view":{"id":"26535","type":"CDSView"}},"id":"26534","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26516","type":"PanTool"},{"id":"26517","type":"WheelZoomTool"},{"id":"26518","type":"BoxZoomTool"},{"id":"26519","type":"SaveTool"},{"id":"26520","type":"ResetTool"},{"id":"26521","type":"HelpTool"}]},"id":"26522","type":"Toolbar"},{"attributes":{},"id":"26543","type":"Selection"},{"attributes":{"plot":null,"text":""},"id":"26536","type":"Title"},{"attributes":{},"id":"26540","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26524","type":"BoxAnnotation"},{"attributes":{},"id":"26538","type":"BasicTickFormatter"},{"attributes":{},"id":"26512","type":"BasicTicker"},{"attributes":{},"id":"26516","type":"PanTool"},{"attributes":{},"id":"26504","type":"LinearScale"}],"root_ids":["26497"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"ef8ee70d-24b8-4902-8d67-3350a46f9b07","roots":{"26497":"b404ed9d-ca87-4643-9856-183b90925045"}}];
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