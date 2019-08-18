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
      };var element = document.getElementById("11f2f6c9-47f8-4d7c-b686-acced6356200");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '11f2f6c9-47f8-4d7c-b686-acced6356200' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"29eb0f66-dc69-48a4-bfe4-a4ef8a37cd72":{"roots":{"references":[{"attributes":{},"id":"b9316a87-78d9-43fa-a993-f0a47abbb68a","type":"Selection"},{"attributes":{},"id":"2153cd91-b34a-47de-be1b-4cb94c97a805","type":"ResetTool"},{"attributes":{},"id":"baf04f96-3baa-452d-82ec-e6a9c4a610ec","type":"BasicTicker"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"19f7aba0-91e9-4af5-bd89-4279c3954ca3","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe41b88e-6188-4990-b259-e793c11505eb","type":"BasicTicker"}},"id":"a23287f6-9af1-4ea3-870d-69c09dd64872","type":"Grid"},{"attributes":{"source":{"id":"d0dbde54-835a-42fd-97f7-47d43b781dcf","type":"ColumnDataSource"}},"id":"a0e50e6a-d756-4685-9617-4894df7023b6","type":"CDSView"},{"attributes":{},"id":"2af2747b-beed-4197-9f5c-f48fe4d552b5","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADlAAAAAAAAAQ0AAAAAAAAA1QAAAAAAAwFVAAAAAAAAASkAAAAAAAIBBQAAAAAAAAEBAAAAAAAAAQkAAAAAAAABRQAAAAAAAAEJAAAAAAACASUAAAAAAAABWQAAAAAAAADxAAAAAAAAAMEAAAAAAAMBWQAAAAAAAAE9AAAAAAAAANkAAAAAAAABMQAAAAAAAADJAAAAAAACAUkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACAUkAAAAAAAAAyQAAAAAAAAExAAAAAAAAANkAAAAAAAABPQAAAAAAAwFZAAAAAAAAAMEAAAAAAAAA8QAAAAAAAAFZAAAAAAACASUAAAAAAAABCQAAAAAAAAFFAAAAAAAAAQkAAAAAAAABAQAAAAAAAgEFAAAAAAAAASkAAAAAAAMBVQAAAAAAAADVAAAAAAAAAQ0AAAAAAAAA5QAAAAAAAgF1AAAAAAADAYEAAAAAAAIBRQAAAAAAAgGVAAAAAAADAW0AAAAAAAMBYQAAAAAAAwFxAAAAAAACAWkAAAAAAAEBdQAAAAAAAAF5AAAAAAABAYEAAAAAAACBnQAAAAAAAwF9AAAAAAADAW0AAAAAAAGBmQAAAAAAAQF5AAAAAAAAASEAAAAAAAIBgQAAAAAAAgElAAAAAAAAgY0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAgY0AAAAAAAIBJQAAAAAAAgGBAAAAAAAAASEAAAAAAAEBeQAAAAAAAYGZAAAAAAADAW0AAAAAAAMBfQAAAAAAAIGdAAAAAAABAYEAAAAAAAABeQAAAAAAAQF1AAAAAAACAWkAAAAAAAMBcQAAAAAAAwFhAAAAAAADAW0AAAAAAAIBlQAAAAAAAgFFAAAAAAADAYEAAAAAAAIBdQAAAAAAAoGlAAAAAAACAY0AAAAAAAMBUQAAAAAAAYHBAAAAAAADAaEAAAAAAAIBdQAAAAAAAIGdAAAAAAABAX0AAAAAAAKBhQAAAAAAAwGpAAAAAAAAgaEAAAAAAAMBtQAAAAAAAYGRAAAAAAACgYEAAAAAAAIBvQAAAAAAAYGdAAAAAAABAUEAAAAAAAABrQAAAAAAAIGBAAAAAAAAAZkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAZkAAAAAAACBgQAAAAAAAAGtAAAAAAABAUEAAAAAAAGBnQAAAAAAAgG9AAAAAAACgYEAAAAAAAGBkQAAAAAAAwG1AAAAAAAAgaEAAAAAAAMBqQAAAAAAAoGFAAAAAAABAX0AAAAAAACBnQAAAAAAAgF1AAAAAAADAaEAAAAAAAGBwQAAAAAAAwFRAAAAAAACAY0AAAAAAAKBpQAAAAAAAQG5AAAAAAACAZkAAAAAAAMBZQAAAAAAAEHFAAAAAAAAwcEAAAAAAAEBqQAAAAAAAcHFAAAAAAABAakAAAAAAACBnQAAAAAAAMHNAAAAAAADgbEAAAAAAABB1QAAAAAAAwGdAAAAAAACgaUAAAAAAAMByQAAAAAAAIGtAAAAAAABAU0AAAAAAAIByQAAAAAAAAGxAAAAAAABgakA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABgakAAAAAAAABsQAAAAAAAgHJAAAAAAABAU0AAAAAAACBrQAAAAAAAwHJAAAAAAACgaUAAAAAAAMBnQAAAAAAAEHVAAAAAAADgbEAAAAAAADBzQAAAAAAAIGdAAAAAAABAakAAAAAAAHBxQAAAAAAAQGpAAAAAAAAwcEAAAAAAABBxQAAAAAAAwFlAAAAAAACAZkAAAAAAAEBuQAAAAAAAEHRAAAAAAADgakAAAAAAAKBhQAAAAAAAwHFAAAAAAADAckAAAAAAAEBxQAAAAAAAsHVAAAAAAADgckAAAAAAAABtQAAAAAAA8HVAAAAAAAAAc0AAAAAAAOB2QAAAAAAAEHBAAAAAAABgckAAAAAAAPBzQAAAAAAAwG5AAAAAAABAZUAAAAAAAPB2QAAAAAAA8HJAAAAAAAAgcUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAgcUAAAAAAAPByQAAAAAAA8HZAAAAAAABAZUAAAAAAAMBuQAAAAAAA8HNAAAAAAABgckAAAAAAABBwQAAAAAAA4HZAAAAAAAAAc0AAAAAAAPB1QAAAAAAAAG1AAAAAAADgckAAAAAAALB1QAAAAAAAQHFAAAAAAADAckAAAAAAAMBxQAAAAAAAoGFAAAAAAADgakAAAAAAABB0QAAAAAAAEHdAAAAAAACwckAAAAAAAIBjQAAAAAAAIHZAAAAAAABAdkAAAAAAAFBzQAAAAAAAwHZAAAAAAACgd0AAAAAAAIByQAAAAAAAAHpAAAAAAADAdkAAAAAAAFB6QAAAAAAAoHNAAAAAAAAAdUAAAAAAADB2QAAAAAAAIHVAAAAAAADAZ0AAAAAAADB4QAAAAAAAcHVAAAAAAABAckA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABAckAAAAAAAHB1QAAAAAAAMHhAAAAAAADAZ0AAAAAAACB1QAAAAAAAMHZAAAAAAAAAdUAAAAAAAKBzQAAAAAAAUHpAAAAAAADAdkAAAAAAAAB6QAAAAAAAgHJAAAAAAACgd0AAAAAAAMB2QAAAAAAAUHNAAAAAAABAdkAAAAAAACB2QAAAAAAAgGNAAAAAAACwckAAAAAAABB3QAAAAAAA0HlAAAAAAACAd0AAAAAAAEBuQAAAAAAAQHlAAAAAAACAeUAAAAAAAFB4QAAAAAAAQHtAAAAAAACwfEAAAAAAACB3QAAAAAAAEH1AAAAAAACQeEAAAAAAAFB9QAAAAAAA8HRAAAAAAAAQekAAAAAAABB5QAAAAAAA8HhAAAAAAAAAcEAAAAAAAIB9QAAAAAAAEHtAAAAAAADgdUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADgdUAAAAAAABB7QAAAAAAAgH1AAAAAAAAAcEAAAAAAAPB4QAAAAAAAEHlAAAAAAAAQekAAAAAAAPB0QAAAAAAAUH1AAAAAAACQeEAAAAAAABB9QAAAAAAAIHdAAAAAAACwfEAAAAAAAEB7QAAAAAAAUHhAAAAAAACAeUAAAAAAAEB5QAAAAAAAQG5AAAAAAACAd0AAAAAAANB5QAAAAAAA4HxAAAAAAADAfEAAAAAAAMBzQAAAAAAAAHtAAAAAAABQfUAAAAAAABB6QAAAAAAAgH5AAAAAAACwfUAAAAAAAHB4QAAAAAAAOIFAAAAAAACgfkAAAAAAAOiAQAAAAAAAoHpAAAAAAAAAfUAAAAAAAFB+QAAAAAAAAHpAAAAAAADwc0AAAAAAAGCAQAAAAAAAwHxAAAAAAABwd0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABwd0AAAAAAAMB8QAAAAAAAYIBAAAAAAADwc0AAAAAAAAB6QAAAAAAAUH5AAAAAAAAAfUAAAAAAAKB6QAAAAAAA6IBAAAAAAACgfkAAAAAAADiBQAAAAAAAcHhAAAAAAACwfUAAAAAAAIB+QAAAAAAAEHpAAAAAAABQfUAAAAAAAAB7QAAAAAAAwHNAAAAAAADAfEAAAAAAAOB8QAAAAAAAuIBAAAAAAACQgEAAAAAAAJB5QAAAAAAA4H1AAAAAAADAgEAAAAAAAGB9QAAAAAAAQIBAAAAAAAAwgUAAAAAAAAB+QAAAAAAA6IJAAAAAAAD4gUAAAAAAADiBQAAAAAAAgH5AAAAAAABQfkAAAAAAAAiAQAAAAAAAgH5AAAAAAAAAekAAAAAAADiCQAAAAAAAeIBAAAAAAACAe0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACAe0AAAAAAAHiAQAAAAAAAOIJAAAAAAAAAekAAAAAAAIB+QAAAAAAACIBAAAAAAABQfkAAAAAAAIB+QAAAAAAAOIFAAAAAAAD4gUAAAAAAAOiCQAAAAAAAAH5AAAAAAAAwgUAAAAAAAECAQAAAAAAAYH1AAAAAAADAgEAAAAAAAOB9QAAAAAAAkHlAAAAAAACQgEAAAAAAALiAQAAAAAAAiIFAAAAAAAAAgkAAAAAAANB9QAAAAAAAMH9AAAAAAAB4gkAAAAAAADCBQAAAAAAAcIJAAAAAAAAAhEAAAAAAAHB/QAAAAAAAYIVAAAAAAADghEAAAAAAALCDQAAAAAAAkIFAAAAAAAAggkAAAAAAALiAQAAAAAAAcH9AAAAAAACQe0AAAAAAABiFQAAAAAAAUIJAAAAAAAAQfUA=","dtype":"float64","shape":[40]}]},"selected":{"id":"b9316a87-78d9-43fa-a993-f0a47abbb68a","type":"Selection"},"selection_policy":{"id":"2af2747b-beed-4197-9f5c-f48fe4d552b5","type":"UnionRenderers"}},"id":"d0dbde54-835a-42fd-97f7-47d43b781dcf","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"c3b68ca4-4c09-472d-848b-ccc551d4b094","type":"Patches"},{"attributes":{"overlay":{"id":"d344d541-c8c3-491f-b8ca-47f65469b5ec","type":"BoxAnnotation"}},"id":"98970a3b-3a06-4bd3-85d5-7e56eb71f41d","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":19},"id":"0b8ab41c-b483-4f8e-9df3-f98041c5f8b7","type":"Range1d"},{"attributes":{"callback":null,"end":800},"id":"a30e27e0-27e9-4a38-bbf2-e001a2cf2350","type":"Range1d"},{"attributes":{},"id":"2f368375-d0c0-4292-bebb-262dc49555a3","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"c20c3a7b-b139-4b44-b41c-db5f9e7d2b4c","type":"Patches"},{"attributes":{},"id":"b368b61a-a34f-4761-825a-f29a53588bab","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"2df9d6c7-a75c-410b-a2ca-6fac93523c27","type":"Title"},{"attributes":{},"id":"fa3338ec-2612-4493-9d7d-71b707ca34c8","type":"LinearScale"},{"attributes":{},"id":"ed7083a8-bcd9-473c-a686-f8ae1dbc3151","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"babb04c0-f089-4b4f-8cc9-2ccd3cb542b6","type":"PanTool"},{"id":"50fb0bab-576a-433f-93cc-daf2a4039953","type":"WheelZoomTool"},{"id":"98970a3b-3a06-4bd3-85d5-7e56eb71f41d","type":"BoxZoomTool"},{"id":"2f368375-d0c0-4292-bebb-262dc49555a3","type":"SaveTool"},{"id":"2153cd91-b34a-47de-be1b-4cb94c97a805","type":"ResetTool"},{"id":"b368b61a-a34f-4761-825a-f29a53588bab","type":"HelpTool"}]},"id":"3c84583f-8e77-4202-8ad0-770407285e71","type":"Toolbar"},{"attributes":{"data_source":{"id":"d0dbde54-835a-42fd-97f7-47d43b781dcf","type":"ColumnDataSource"},"glyph":{"id":"c3b68ca4-4c09-472d-848b-ccc551d4b094","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c20c3a7b-b139-4b44-b41c-db5f9e7d2b4c","type":"Patches"},"selection_glyph":null,"view":{"id":"a0e50e6a-d756-4685-9617-4894df7023b6","type":"CDSView"}},"id":"93af9a6c-8dfd-4a85-9a9e-ba597716012c","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"c6fa8215-4cde-454d-9422-539d32eb0043","type":"LinearAxis"}],"left":[{"id":"ec5352e5-ae87-4aca-b5df-c082cbac3a25","type":"LinearAxis"}],"renderers":[{"id":"c6fa8215-4cde-454d-9422-539d32eb0043","type":"LinearAxis"},{"id":"5baaa98b-a39b-4133-ae79-7f40acee669c","type":"Grid"},{"id":"ec5352e5-ae87-4aca-b5df-c082cbac3a25","type":"LinearAxis"},{"id":"a23287f6-9af1-4ea3-870d-69c09dd64872","type":"Grid"},{"id":"d344d541-c8c3-491f-b8ca-47f65469b5ec","type":"BoxAnnotation"},{"id":"93af9a6c-8dfd-4a85-9a9e-ba597716012c","type":"GlyphRenderer"}],"title":{"id":"2df9d6c7-a75c-410b-a2ca-6fac93523c27","type":"Title"},"toolbar":{"id":"3c84583f-8e77-4202-8ad0-770407285e71","type":"Toolbar"},"x_range":{"id":"0b8ab41c-b483-4f8e-9df3-f98041c5f8b7","type":"Range1d"},"x_scale":{"id":"55b1966a-a91d-4ee4-9ab6-2115670eff11","type":"LinearScale"},"y_range":{"id":"a30e27e0-27e9-4a38-bbf2-e001a2cf2350","type":"Range1d"},"y_scale":{"id":"fa3338ec-2612-4493-9d7d-71b707ca34c8","type":"LinearScale"}},"id":"19f7aba0-91e9-4af5-bd89-4279c3954ca3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"50fb0bab-576a-433f-93cc-daf2a4039953","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d344d541-c8c3-491f-b8ca-47f65469b5ec","type":"BoxAnnotation"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"19f7aba0-91e9-4af5-bd89-4279c3954ca3","subtype":"Figure","type":"Plot"},"ticker":{"id":"baf04f96-3baa-452d-82ec-e6a9c4a610ec","type":"BasicTicker"}},"id":"5baaa98b-a39b-4133-ae79-7f40acee669c","type":"Grid"},{"attributes":{},"id":"fe41b88e-6188-4990-b259-e793c11505eb","type":"BasicTicker"},{"attributes":{},"id":"55b1966a-a91d-4ee4-9ab6-2115670eff11","type":"LinearScale"},{"attributes":{},"id":"d2f5014b-8e9d-4a2a-ae1d-70f1b75dadf5","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"d2f5014b-8e9d-4a2a-ae1d-70f1b75dadf5","type":"BasicTickFormatter"},"plot":{"id":"19f7aba0-91e9-4af5-bd89-4279c3954ca3","subtype":"Figure","type":"Plot"},"ticker":{"id":"baf04f96-3baa-452d-82ec-e6a9c4a610ec","type":"BasicTicker"}},"id":"c6fa8215-4cde-454d-9422-539d32eb0043","type":"LinearAxis"},{"attributes":{"formatter":{"id":"ed7083a8-bcd9-473c-a686-f8ae1dbc3151","type":"BasicTickFormatter"},"plot":{"id":"19f7aba0-91e9-4af5-bd89-4279c3954ca3","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe41b88e-6188-4990-b259-e793c11505eb","type":"BasicTicker"}},"id":"ec5352e5-ae87-4aca-b5df-c082cbac3a25","type":"LinearAxis"},{"attributes":{},"id":"babb04c0-f089-4b4f-8cc9-2ccd3cb542b6","type":"PanTool"}],"root_ids":["19f7aba0-91e9-4af5-bd89-4279c3954ca3"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"29eb0f66-dc69-48a4-bfe4-a4ef8a37cd72","roots":{"19f7aba0-91e9-4af5-bd89-4279c3954ca3":"11f2f6c9-47f8-4d7c-b686-acced6356200"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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