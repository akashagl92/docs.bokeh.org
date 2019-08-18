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
      };var element = document.getElementById("660b7c74-f4a5-461f-a953-4e5a978c95db");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '660b7c74-f4a5-461f-a953-4e5a978c95db' but no matching script tag was found. ")
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
                    var docs_json = {"c6630789-3887-482a-8492-c153056c2ff3":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"d575a659-af6d-49b1-a81b-dba20e60f6d5","type":"Title"},{"attributes":{},"id":"2a718732-ffd2-4eeb-80fd-6f68e8717684","type":"LinearScale"},{"attributes":{},"id":"d8f64a01-28c0-469b-857d-13b6749a3654","type":"SaveTool"},{"attributes":{},"id":"7e14287b-a738-4f30-a341-f9eaf8a482a0","type":"BasicTicker"},{"attributes":{},"id":"d06d5790-7548-4afe-8b26-fcb77d5c951c","type":"BasicTickFormatter"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"8464666d-ba9c-4351-bb77-0bea9286e969","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e14287b-a738-4f30-a341-f9eaf8a482a0","type":"BasicTicker"}},"id":"5d59f2d7-9079-47f3-8beb-5ebea5d10986","type":"Grid"},{"attributes":{},"id":"9413207c-cb6f-4183-8314-0a880ca5a676","type":"ResetTool"},{"attributes":{"formatter":{"id":"4b1101ea-f00d-42b1-9e81-141884cb93d6","type":"BasicTickFormatter"},"plot":{"id":"8464666d-ba9c-4351-bb77-0bea9286e969","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e14287b-a738-4f30-a341-f9eaf8a482a0","type":"BasicTicker"}},"id":"a031647c-0eca-49db-9f11-527eb1ec3e52","type":"LinearAxis"},{"attributes":{"below":[{"id":"a031647c-0eca-49db-9f11-527eb1ec3e52","type":"LinearAxis"}],"left":[{"id":"4fe34571-e354-4640-a6c0-9945864473fa","type":"LinearAxis"}],"renderers":[{"id":"a031647c-0eca-49db-9f11-527eb1ec3e52","type":"LinearAxis"},{"id":"5d59f2d7-9079-47f3-8beb-5ebea5d10986","type":"Grid"},{"id":"4fe34571-e354-4640-a6c0-9945864473fa","type":"LinearAxis"},{"id":"6ea54d10-510f-4d9f-98b7-cb2a0e84d6d4","type":"Grid"},{"id":"4e9dde14-da03-4576-aecb-e7f5bfc48bc4","type":"BoxAnnotation"},{"id":"c1bbad70-53aa-4335-ae73-70414ae491d8","type":"GlyphRenderer"}],"title":{"id":"d575a659-af6d-49b1-a81b-dba20e60f6d5","type":"Title"},"toolbar":{"id":"efde540b-bcc4-490f-bb0a-4f53cd793045","type":"Toolbar"},"x_range":{"id":"dc03f7ea-c415-4e68-9cb9-0cf1c829e745","type":"Range1d"},"x_scale":{"id":"d02f4bc6-41b8-4fe3-bfa3-6c9c18865257","type":"LinearScale"},"y_range":{"id":"fee1e738-9a71-42f5-9753-3e36a4e75af8","type":"Range1d"},"y_scale":{"id":"2a718732-ffd2-4eeb-80fd-6f68e8717684","type":"LinearScale"}},"id":"8464666d-ba9c-4351-bb77-0bea9286e969","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"d06d5790-7548-4afe-8b26-fcb77d5c951c","type":"BasicTickFormatter"},"plot":{"id":"8464666d-ba9c-4351-bb77-0bea9286e969","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4276bf7-b064-4f5c-b6ee-7190477ca040","type":"BasicTicker"}},"id":"4fe34571-e354-4640-a6c0-9945864473fa","type":"LinearAxis"},{"attributes":{},"id":"05cb76c3-0303-4dfc-b9a9-8e1b8a4abd2c","type":"HelpTool"},{"attributes":{},"id":"be609758-3bd8-4e3d-8601-3adebd51c8a6","type":"PanTool"},{"attributes":{},"id":"e4276bf7-b064-4f5c-b6ee-7190477ca040","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["xs","ys","fill_color"],"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFhAAAAAAACAQkAAAAAAAIBYQAAAAAAAAE1AAAAAAAAATEAAAAAAAABTQAAAAAAAAElAAAAAAABAVEAAAAAAAABFQAAAAAAAgFZAAAAAAACAT0AAAAAAAAA1QAAAAAAAADZAAAAAAADAWEAAAAAAAAAmQAAAAAAAgEZAAAAAAAAASEAAAAAAAAAyQAAAAAAAgElAAAAAAAAAQkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAQkAAAAAAAIBJQAAAAAAAADJAAAAAAAAASEAAAAAAAIBGQAAAAAAAACZAAAAAAADAWEAAAAAAAAA2QAAAAAAAADVAAAAAAACAT0AAAAAAAIBWQAAAAAAAAEVAAAAAAABAVEAAAAAAAABJQAAAAAAAAFNAAAAAAAAATEAAAAAAAABNQAAAAAAAgFhAAAAAAACAQkAAAAAAAEBYQAAAAAAAwFtAAAAAAAAAYEAAAAAAAEBlQAAAAAAAgFhAAAAAAADAYUAAAAAAAKBjQAAAAAAAgFZAAAAAAABAWUAAAAAAAMBRQAAAAAAAoGVAAAAAAADAVUAAAAAAAMBYQAAAAAAAAFtAAAAAAABAZUAAAAAAAABDQAAAAAAAQFJAAAAAAABAYUAAAAAAAMBZQAAAAAAAYGJAAAAAAAAAXEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAXEAAAAAAAGBiQAAAAAAAwFlAAAAAAABAYUAAAAAAAEBSQAAAAAAAAENAAAAAAABAZUAAAAAAAABbQAAAAAAAwFhAAAAAAADAVUAAAAAAAKBlQAAAAAAAwFFAAAAAAABAWUAAAAAAAIBWQAAAAAAAoGNAAAAAAADAYUAAAAAAAIBYQAAAAAAAQGVAAAAAAAAAYEAAAAAAAMBbQAAAAAAAQGhAAAAAAABAZ0AAAAAAAEBoQAAAAAAA4GdAAAAAAABAZUAAAAAAAOBrQAAAAAAAIGJAAAAAAACAYUAAAAAAAABhQAAAAAAA4GpAAAAAAAAgYEAAAAAAAIBmQAAAAAAAQGlAAAAAAADgaEAAAAAAAIBfQAAAAAAAQFlAAAAAAAAgZUAAAAAAAGBhQAAAAAAAAG5AAAAAAACgYkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACgYkAAAAAAAABuQAAAAAAAYGFAAAAAAAAgZUAAAAAAAEBZQAAAAAAAgF9AAAAAAADgaEAAAAAAAEBpQAAAAAAAgGZAAAAAAAAgYEAAAAAAAOBqQAAAAAAAAGFAAAAAAACAYUAAAAAAACBiQAAAAAAA4GtAAAAAAABAZUAAAAAAAOBnQAAAAAAAQGhAAAAAAABAZ0AAAAAAAEBoQAAAAAAAEHFAAAAAAADgbEAAAAAAAABrQAAAAAAAoHFAAAAAAAAAbUAAAAAAAKByQAAAAAAAIG5AAAAAAABgaUAAAAAAACBoQAAAAAAAIG5AAAAAAAAAY0AAAAAAAMBwQAAAAAAAoG1AAAAAAAAgbkAAAAAAAOBpQAAAAAAA4GNAAAAAAABwcEAAAAAAAKBoQAAAAAAAQHRAAAAAAADAaUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAaUAAAAAAAEB0QAAAAAAAoGhAAAAAAABwcEAAAAAAAOBjQAAAAAAA4GlAAAAAAAAgbkAAAAAAAKBtQAAAAAAAwHBAAAAAAAAAY0AAAAAAACBuQAAAAAAAIGhAAAAAAABgaUAAAAAAACBuQAAAAAAAoHJAAAAAAAAAbUAAAAAAAKBxQAAAAAAAAGtAAAAAAADgbEAAAAAAABBxQAAAAAAA8HZAAAAAAAAQckAAAAAAANBxQAAAAAAAsHNAAAAAAADwckAAAAAAANB4QAAAAAAAYHNAAAAAAADQckAAAAAAAKBqQAAAAAAAgHBAAAAAAABAZEAAAAAAAIB0QAAAAAAAsHJAAAAAAAAgcEAAAAAAAABzQAAAAAAA4GhAAAAAAADgcUAAAAAAAMBqQAAAAAAAwHVAAAAAAACQckA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACQckAAAAAAAMB1QAAAAAAAwGpAAAAAAADgcUAAAAAAAOBoQAAAAAAAAHNAAAAAAAAgcEAAAAAAALByQAAAAAAAgHRAAAAAAABAZEAAAAAAAIBwQAAAAAAAoGpAAAAAAADQckAAAAAAAGBzQAAAAAAA0HhAAAAAAADwckAAAAAAALBzQAAAAAAA0HFAAAAAAAAQckAAAAAAAPB2QAAAAAAAkHxAAAAAAACwdUAAAAAAANByQAAAAAAAUHVAAAAAAACQd0AAAAAAAGB7QAAAAAAAAHdAAAAAAABgdkAAAAAAAOBsQAAAAAAAIHFAAAAAAADgbkAAAAAAAGB4QAAAAAAAsHdAAAAAAACQcUAAAAAAADB2QAAAAAAAwG1AAAAAAABgdUAAAAAAAIBwQAAAAAAAgHtAAAAAAADAeEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAeEAAAAAAAIB7QAAAAAAAgHBAAAAAAABgdUAAAAAAAMBtQAAAAAAAMHZAAAAAAACQcUAAAAAAALB3QAAAAAAAYHhAAAAAAADgbkAAAAAAACBxQAAAAAAA4GxAAAAAAABgdkAAAAAAAAB3QAAAAAAAYHtAAAAAAACQd0AAAAAAAFB1QAAAAAAA0HJAAAAAAACwdUAAAAAAAJB8QAAAAAAAkH1AAAAAAAAgekAAAAAAAPB3QAAAAAAAcHZAAAAAAADwe0AAAAAAAHB9QAAAAAAAAHpAAAAAAABQe0AAAAAAACBzQAAAAAAAIHdAAAAAAADAcEAAAAAAAAB7QAAAAAAA0HxAAAAAAAAAdEAAAAAAADB8QAAAAAAAgG9AAAAAAADgdkAAAAAAANB0QAAAAAAAYH1AAAAAAABgfkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABgfkAAAAAAAGB9QAAAAAAA0HRAAAAAAADgdkAAAAAAAIBvQAAAAAAAMHxAAAAAAAAAdEAAAAAAANB8QAAAAAAAAHtAAAAAAADAcEAAAAAAACB3QAAAAAAAIHNAAAAAAABQe0AAAAAAAAB6QAAAAAAAcH1AAAAAAADwe0AAAAAAAHB2QAAAAAAA8HdAAAAAAAAgekAAAAAAAJB9QAAAAAAAQIBAAAAAAACwe0AAAAAAAMB5QAAAAAAAIHpAAAAAAABwfkAAAAAAAGiBQAAAAAAAEIBAAAAAAADQf0AAAAAAAOB2QAAAAAAAsHpAAAAAAADAckAAAAAAAEB/QAAAAAAAYH5AAAAAAADQdkAAAAAAAFB/QAAAAAAAcHJAAAAAAACQeUAAAAAAAAB3QAAAAAAAsIBAAAAAAAAggUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAggUAAAAAAALCAQAAAAAAAAHdAAAAAAACQeUAAAAAAAHByQAAAAAAAUH9AAAAAAADQdkAAAAAAAGB+QAAAAAAAQH9AAAAAAADAckAAAAAAALB6QAAAAAAA4HZAAAAAAADQf0AAAAAAABCAQAAAAAAAaIFAAAAAAABwfkAAAAAAACB6QAAAAAAAwHlAAAAAAACwe0AAAAAAAECAQAAAAAAAKINAAAAAAAAYgEAAAAAAAFB+QAAAAAAAQH9AAAAAAACogEAAAAAAALCDQAAAAAAACIFAAAAAAACwgEAAAAAAANB3QAAAAAAA0HxAAAAAAABQeEAAAAAAAFCAQAAAAAAAQH9AAAAAAABAfEAAAAAAAFiAQAAAAAAAEHZAAAAAAADgekAAAAAAAHB4QAAAAAAASINAAAAAAADog0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADog0AAAAAAAEiDQAAAAAAAcHhAAAAAAADgekAAAAAAABB2QAAAAAAAWIBAAAAAAABAfEAAAAAAAEB/QAAAAAAAUIBAAAAAAABQeEAAAAAAANB8QAAAAAAA0HdAAAAAAACwgEAAAAAAAAiBQAAAAAAAsINAAAAAAACogEAAAAAAAEB/QAAAAAAAUH5AAAAAAAAYgEAAAAAAACiDQAAAAAAAOIRAAAAAAADggkAAAAAAAEiBQAAAAAAAmIJAAAAAAACQgUAAAAAAADCGQAAAAAAA2IJAAAAAAACAgUAAAAAAAKB5QAAAAAAAAIBAAAAAAABgfkAAAAAAAOiAQAAAAAAA4IFAAAAAAADQfkAAAAAAAFiCQAAAAAAAAHhAAAAAAAAIgEAAAAAAAHB6QAAAAAAAwIVAAAAAAAAghkA=","dtype":"float64","shape":[40]}]}},"id":"d677e860-b4f6-4514-a0f7-ca691249534c","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4e9dde14-da03-4576-aecb-e7f5bfc48bc4","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":800},"id":"fee1e738-9a71-42f5-9753-3e36a4e75af8","type":"Range1d"},{"attributes":{},"id":"4b1101ea-f00d-42b1-9e81-141884cb93d6","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"8464666d-ba9c-4351-bb77-0bea9286e969","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4276bf7-b064-4f5c-b6ee-7190477ca040","type":"BasicTicker"}},"id":"6ea54d10-510f-4d9f-98b7-cb2a0e84d6d4","type":"Grid"},{"attributes":{"callback":null,"end":19},"id":"dc03f7ea-c415-4e68-9cb9-0cf1c829e745","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"4235c628-aa55-4f04-b9c5-572cb7d1d970","type":"Patches"},{"attributes":{"source":{"id":"d677e860-b4f6-4514-a0f7-ca691249534c","type":"ColumnDataSource"}},"id":"767cadc0-6646-430e-8311-e2518c8c1c77","type":"CDSView"},{"attributes":{"data_source":{"id":"d677e860-b4f6-4514-a0f7-ca691249534c","type":"ColumnDataSource"},"glyph":{"id":"a45cb670-632a-4e55-bd31-c4ef625f25bb","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4235c628-aa55-4f04-b9c5-572cb7d1d970","type":"Patches"},"selection_glyph":null,"view":{"id":"767cadc0-6646-430e-8311-e2518c8c1c77","type":"CDSView"}},"id":"c1bbad70-53aa-4335-ae73-70414ae491d8","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"a45cb670-632a-4e55-bd31-c4ef625f25bb","type":"Patches"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"be609758-3bd8-4e3d-8601-3adebd51c8a6","type":"PanTool"},{"id":"d4896df9-e689-4819-ac15-90c31d7ce30a","type":"WheelZoomTool"},{"id":"66510d2f-fa11-41c7-ba97-5c357b1a8a96","type":"BoxZoomTool"},{"id":"d8f64a01-28c0-469b-857d-13b6749a3654","type":"SaveTool"},{"id":"9413207c-cb6f-4183-8314-0a880ca5a676","type":"ResetTool"},{"id":"05cb76c3-0303-4dfc-b9a9-8e1b8a4abd2c","type":"HelpTool"}]},"id":"efde540b-bcc4-490f-bb0a-4f53cd793045","type":"Toolbar"},{"attributes":{},"id":"d02f4bc6-41b8-4fe3-bfa3-6c9c18865257","type":"LinearScale"},{"attributes":{},"id":"d4896df9-e689-4819-ac15-90c31d7ce30a","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"4e9dde14-da03-4576-aecb-e7f5bfc48bc4","type":"BoxAnnotation"}},"id":"66510d2f-fa11-41c7-ba97-5c357b1a8a96","type":"BoxZoomTool"}],"root_ids":["8464666d-ba9c-4351-bb77-0bea9286e969"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"c6630789-3887-482a-8492-c153056c2ff3","elementid":"660b7c74-f4a5-461f-a953-4e5a978c95db","modelid":"8464666d-ba9c-4351-bb77-0bea9286e969"}];
                
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
