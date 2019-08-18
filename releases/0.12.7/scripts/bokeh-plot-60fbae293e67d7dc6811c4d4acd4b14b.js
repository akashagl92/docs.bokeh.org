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
      };var element = document.getElementById("0d044dfd-6b51-4f87-8753-7ae28b7dbcc6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0d044dfd-6b51-4f87-8753-7ae28b7dbcc6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"e7b183f1-ef9a-4170-88b4-5a9fa44bc26d":{"roots":{"references":[{"attributes":{},"id":"ed766da8-0729-4134-a40c-e16d10936b3e","type":"PanTool"},{"attributes":{},"id":"fc752a76-f11b-42cf-9b80-1d935b878cf1","type":"ResetTool"},{"attributes":{},"id":"39ad5c21-ffac-4880-837f-f10487ae5078","type":"BasicTicker"},{"attributes":{},"id":"f0f8aa32-1603-440e-8a95-87aa935197a7","type":"WheelZoomTool"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"401d6a96-5b08-4a4c-9e06-096ba22bfa3d","subtype":"Figure","type":"Plot"},"ticker":{"id":"39ad5c21-ffac-4880-837f-f10487ae5078","type":"BasicTicker"}},"id":"9bbb46ab-08a6-4804-a57c-50961c629716","type":"Grid"},{"attributes":{"callback":null,"column_names":["xs","ys","fill_color"],"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgE5AAAAAAAAATEAAAAAAAABLQAAAAAAAgEFAAAAAAACAQ0AAAAAAAEBQQAAAAAAAwFdAAAAAAADAU0AAAAAAAIBCQAAAAAAAAD9AAAAAAAAATkAAAAAAAIBSQAAAAAAAAEVAAAAAAAAAOkAAAAAAAABDQAAAAAAAwFZAAAAAAADAUkAAAAAAAAA9QAAAAAAAAExAAAAAAAAARkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAARkAAAAAAAABMQAAAAAAAAD1AAAAAAADAUkAAAAAAAMBWQAAAAAAAAENAAAAAAAAAOkAAAAAAAABFQAAAAAAAgFJAAAAAAAAATkAAAAAAAAA/QAAAAAAAgEJAAAAAAADAU0AAAAAAAMBXQAAAAAAAQFBAAAAAAACAQ0AAAAAAAIBBQAAAAAAAAEtAAAAAAAAATEAAAAAAAIBOQAAAAAAAAFxAAAAAAAAAWEAAAAAAAMBaQAAAAAAAwFlAAAAAAAAAUEAAAAAAACBkQAAAAAAAIGdAAAAAAABgZEAAAAAAAABPQAAAAAAAQFZAAAAAAABAU0AAAAAAACBjQAAAAAAAAGFAAAAAAADAW0AAAAAAAEBSQAAAAAAAQF1AAAAAAAAAYEAAAAAAAEBZQAAAAAAAgGFAAAAAAAAAUkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAUkAAAAAAAIBhQAAAAAAAQFlAAAAAAAAAYEAAAAAAAEBdQAAAAAAAQFJAAAAAAADAW0AAAAAAAABhQAAAAAAAIGNAAAAAAABAU0AAAAAAAEBWQAAAAAAAAE9AAAAAAABgZEAAAAAAACBnQAAAAAAAIGRAAAAAAAAAUEAAAAAAAMBZQAAAAAAAwFpAAAAAAAAAWEAAAAAAAABcQAAAAAAAIGJAAAAAAAAAX0AAAAAAAABkQAAAAAAAYGhAAAAAAADAU0AAAAAAAGBoQAAAAAAAgGlAAAAAAAAgZkAAAAAAAIBYQAAAAAAAwGRAAAAAAAAgZEAAAAAAAGBuQAAAAAAAgGhAAAAAAADgYUAAAAAAAIBhQAAAAAAAwGVAAAAAAABgaEAAAAAAAGBjQAAAAAAAwGpAAAAAAABAWkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABAWkAAAAAAAMBqQAAAAAAAYGNAAAAAAABgaEAAAAAAAMBlQAAAAAAAgGFAAAAAAADgYUAAAAAAAIBoQAAAAAAAYG5AAAAAAAAgZEAAAAAAAMBkQAAAAAAAgFhAAAAAAAAgZkAAAAAAAIBpQAAAAAAAYGhAAAAAAADAU0AAAAAAAGBoQAAAAAAAAGRAAAAAAAAAX0AAAAAAACBiQAAAAAAAwGxAAAAAAAAgZUAAAAAAAGBlQAAAAAAAQHFAAAAAAABAVkAAAAAAAIBsQAAAAAAAcHBAAAAAAADgaEAAAAAAAEBjQAAAAAAAYG9AAAAAAABgbkAAAAAAAPB0QAAAAAAAwGtAAAAAAABAZEAAAAAAACBrQAAAAAAAwG1AAAAAAADAcEAAAAAAAOBmQAAAAAAAYGxAAAAAAACAZ0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACAZ0AAAAAAAGBsQAAAAAAA4GZAAAAAAADAcEAAAAAAAMBtQAAAAAAAIGtAAAAAAABAZEAAAAAAAMBrQAAAAAAA8HRAAAAAAABgbkAAAAAAAGBvQAAAAAAAQGNAAAAAAADgaEAAAAAAAHBwQAAAAAAAgGxAAAAAAABAVkAAAAAAAEBxQAAAAAAAYGVAAAAAAAAgZUAAAAAAAMBsQAAAAAAAoHJAAAAAAADAaEAAAAAAAGBvQAAAAAAAYHdAAAAAAAAAW0AAAAAAAABuQAAAAAAAoHNAAAAAAAAgckAAAAAAAABoQAAAAAAAAHFAAAAAAACgcEAAAAAAAMB5QAAAAAAAkHFAAAAAAADAZUAAAAAAAEBxQAAAAAAA4HRAAAAAAABgdEAAAAAAAABsQAAAAAAAgG5AAAAAAADQcEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADQcEAAAAAAAIBuQAAAAAAAAGxAAAAAAABgdEAAAAAAAOB0QAAAAAAAQHFAAAAAAADAZUAAAAAAAJBxQAAAAAAAwHlAAAAAAACgcEAAAAAAAABxQAAAAAAAAGhAAAAAAAAgckAAAAAAAKBzQAAAAAAAAG5AAAAAAAAAW0AAAAAAAGB3QAAAAAAAYG9AAAAAAADAaEAAAAAAAKByQAAAAAAAMHdAAAAAAAAgb0AAAAAAAHBxQAAAAAAAEHxAAAAAAACAX0AAAAAAAOBvQAAAAAAAYHhAAAAAAAAgeEAAAAAAAABrQAAAAAAA0HNAAAAAAADAc0AAAAAAAKB6QAAAAAAAMHNAAAAAAACAaUAAAAAAANB2QAAAAAAAIHhAAAAAAAAAd0AAAAAAABBxQAAAAAAAMHFAAAAAAADwckA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADwckAAAAAAADBxQAAAAAAAEHFAAAAAAAAAd0AAAAAAACB4QAAAAAAA0HZAAAAAAACAaUAAAAAAADBzQAAAAAAAoHpAAAAAAADAc0AAAAAAANBzQAAAAAAAAGtAAAAAAAAgeEAAAAAAAGB4QAAAAAAA4G9AAAAAAACAX0AAAAAAABB8QAAAAAAAcHFAAAAAAAAgb0AAAAAAADB3QAAAAAAAsHpAAAAAAACAckAAAAAAAKB0QAAAAAAAIH1AAAAAAACAY0AAAAAAADBxQAAAAAAAIH1AAAAAAAAQe0AAAAAAAHBxQAAAAAAAoHlAAAAAAACAeEAAAAAAAAB9QAAAAAAAEHVAAAAAAAAgbUAAAAAAAEB7QAAAAAAAcHtAAAAAAABgekAAAAAAAOB1QAAAAAAA0HNAAAAAAAAgeEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAgeEAAAAAAANBzQAAAAAAA4HVAAAAAAABgekAAAAAAAHB7QAAAAAAAQHtAAAAAAAAgbUAAAAAAABB1QAAAAAAAAH1AAAAAAACAeEAAAAAAAKB5QAAAAAAAcHFAAAAAAAAQe0AAAAAAACB9QAAAAAAAMHFAAAAAAACAY0AAAAAAACB9QAAAAAAAoHRAAAAAAACAckAAAAAAALB6QAAAAAAACIBAAAAAAAAQd0AAAAAAAJB6QAAAAAAAWIBAAAAAAAAgZkAAAAAAAJB1QAAAAAAAGIBAAAAAAADgfkAAAAAAALBzQAAAAAAA8HxAAAAAAABQfEAAAAAAAAB+QAAAAAAAUHZAAAAAAACgb0AAAAAAAICAQAAAAAAAYIBAAAAAAACwfkAAAAAAAJB7QAAAAAAAMHVAAAAAAADAeUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAeUAAAAAAADB1QAAAAAAAkHtAAAAAAACwfkAAAAAAAGCAQAAAAAAAgIBAAAAAAACgb0AAAAAAAFB2QAAAAAAAAH5AAAAAAABQfEAAAAAAAPB8QAAAAAAAsHNAAAAAAADgfkAAAAAAABiAQAAAAAAAkHVAAAAAAAAgZkAAAAAAAFiAQAAAAAAAkHpAAAAAAAAQd0AAAAAAAAiAQAAAAAAAIIFAAAAAAABgfEAAAAAAADCAQAAAAAAAeIFAAAAAAACgZ0AAAAAAAFB2QAAAAAAAsIJAAAAAAABggUAAAAAAAOB3QAAAAAAAMH5AAAAAAACQgEAAAAAAAGCBQAAAAAAAkHdAAAAAAACAcEAAAAAAACCBQAAAAAAAwIJAAAAAAAD4gEAAAAAAABB/QAAAAAAAwHpAAAAAAACAekA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACAekAAAAAAAMB6QAAAAAAAEH9AAAAAAAD4gEAAAAAAAMCCQAAAAAAAIIFAAAAAAACAcEAAAAAAAJB3QAAAAAAAYIFAAAAAAACQgEAAAAAAADB+QAAAAAAA4HdAAAAAAABggUAAAAAAALCCQAAAAAAAUHZAAAAAAACgZ0AAAAAAAHiBQAAAAAAAMIBAAAAAAABgfEAAAAAAACCBQAAAAAAAQINAAAAAAABYgEAAAAAAAIiCQAAAAAAAOIJAAAAAAACAakAAAAAAAMB5QAAAAAAAgIVAAAAAAAAIhEAAAAAAAKB9QAAAAAAAIIFAAAAAAADwgEAAAAAAAHiCQAAAAAAAAHlAAAAAAADQdEAAAAAAAPiDQAAAAAAAKIVAAAAAAABog0AAAAAAANCBQAAAAAAAEH9AAAAAAABwfkA=","dtype":"float64","shape":[40]}]}},"id":"bf4317d4-b748-4d62-bd0a-49b27401f291","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"7253cfd5-3b52-403b-8cc5-cb47c384185c","type":"BoxAnnotation"}},"id":"7338e8a5-251d-4a04-b767-962465276a64","type":"BoxZoomTool"},{"attributes":{},"id":"bba0fc2d-604b-4d4b-90d5-bd093b040d16","type":"HelpTool"},{"attributes":{"callback":null,"end":19},"id":"7c2f1265-7e37-40bd-9b87-dd8693dc125d","type":"Range1d"},{"attributes":{},"id":"44a6e857-009d-4e36-9728-16ca96fda65d","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18f73b91-2188-4c48-95a2-aeae4075379f","type":"Patches"},{"attributes":{},"id":"00142f1e-ec26-48fb-9fc3-ed04be900175","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"2713ecaa-67d2-461b-aa4e-8f51062bbc59","type":"LinearAxis"}],"left":[{"id":"a2b1733f-a46b-4c9b-a3ff-6e236e1d332b","type":"LinearAxis"}],"renderers":[{"id":"2713ecaa-67d2-461b-aa4e-8f51062bbc59","type":"LinearAxis"},{"id":"a8d051ca-c646-4245-a32f-594c60a72ff2","type":"Grid"},{"id":"a2b1733f-a46b-4c9b-a3ff-6e236e1d332b","type":"LinearAxis"},{"id":"9bbb46ab-08a6-4804-a57c-50961c629716","type":"Grid"},{"id":"7253cfd5-3b52-403b-8cc5-cb47c384185c","type":"BoxAnnotation"},{"id":"90a4dc26-42f7-45ff-9e1a-3b162d56f389","type":"GlyphRenderer"}],"title":{"id":"b66102c4-35c3-44b1-87dc-945603d50c96","type":"Title"},"toolbar":{"id":"02a3432f-cd24-4ad4-a82b-11ba987db5e3","type":"Toolbar"},"x_range":{"id":"7c2f1265-7e37-40bd-9b87-dd8693dc125d","type":"Range1d"},"x_scale":{"id":"e7557f2b-bb81-4c89-9e3e-dd9cfa2ad942","type":"LinearScale"},"y_range":{"id":"ec3f59e1-f7a3-4e8c-8b32-30e944ce3e62","type":"Range1d"},"y_scale":{"id":"1c3b1d13-cfb5-43d7-bbf4-d06f6ea6238d","type":"LinearScale"}},"id":"401d6a96-5b08-4a4c-9e06-096ba22bfa3d","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"bf4317d4-b748-4d62-bd0a-49b27401f291","type":"ColumnDataSource"},"glyph":{"id":"3c02037a-4536-46fe-b642-11e4a483e6a3","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18f73b91-2188-4c48-95a2-aeae4075379f","type":"Patches"},"selection_glyph":null,"view":{"id":"141e944e-03fc-415f-8387-1f3372085a2d","type":"CDSView"}},"id":"90a4dc26-42f7-45ff-9e1a-3b162d56f389","type":"GlyphRenderer"},{"attributes":{},"id":"3825cd78-58d0-4703-b52c-bf41453b6b80","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ed766da8-0729-4134-a40c-e16d10936b3e","type":"PanTool"},{"id":"f0f8aa32-1603-440e-8a95-87aa935197a7","type":"WheelZoomTool"},{"id":"7338e8a5-251d-4a04-b767-962465276a64","type":"BoxZoomTool"},{"id":"a0f803cd-2237-4e5c-b0ea-cf65120d4bd1","type":"SaveTool"},{"id":"fc752a76-f11b-42cf-9b80-1d935b878cf1","type":"ResetTool"},{"id":"bba0fc2d-604b-4d4b-90d5-bd093b040d16","type":"HelpTool"}]},"id":"02a3432f-cd24-4ad4-a82b-11ba987db5e3","type":"Toolbar"},{"attributes":{"source":{"id":"bf4317d4-b748-4d62-bd0a-49b27401f291","type":"ColumnDataSource"}},"id":"141e944e-03fc-415f-8387-1f3372085a2d","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"b66102c4-35c3-44b1-87dc-945603d50c96","type":"Title"},{"attributes":{"formatter":{"id":"44a6e857-009d-4e36-9728-16ca96fda65d","type":"BasicTickFormatter"},"plot":{"id":"401d6a96-5b08-4a4c-9e06-096ba22bfa3d","subtype":"Figure","type":"Plot"},"ticker":{"id":"39ad5c21-ffac-4880-837f-f10487ae5078","type":"BasicTicker"}},"id":"a2b1733f-a46b-4c9b-a3ff-6e236e1d332b","type":"LinearAxis"},{"attributes":{},"id":"e7557f2b-bb81-4c89-9e3e-dd9cfa2ad942","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"3c02037a-4536-46fe-b642-11e4a483e6a3","type":"Patches"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"401d6a96-5b08-4a4c-9e06-096ba22bfa3d","subtype":"Figure","type":"Plot"},"ticker":{"id":"3825cd78-58d0-4703-b52c-bf41453b6b80","type":"BasicTicker"}},"id":"a8d051ca-c646-4245-a32f-594c60a72ff2","type":"Grid"},{"attributes":{},"id":"1c3b1d13-cfb5-43d7-bbf4-d06f6ea6238d","type":"LinearScale"},{"attributes":{"formatter":{"id":"00142f1e-ec26-48fb-9fc3-ed04be900175","type":"BasicTickFormatter"},"plot":{"id":"401d6a96-5b08-4a4c-9e06-096ba22bfa3d","subtype":"Figure","type":"Plot"},"ticker":{"id":"3825cd78-58d0-4703-b52c-bf41453b6b80","type":"BasicTicker"}},"id":"2713ecaa-67d2-461b-aa4e-8f51062bbc59","type":"LinearAxis"},{"attributes":{"callback":null,"end":800},"id":"ec3f59e1-f7a3-4e8c-8b32-30e944ce3e62","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7253cfd5-3b52-403b-8cc5-cb47c384185c","type":"BoxAnnotation"},{"attributes":{},"id":"a0f803cd-2237-4e5c-b0ea-cf65120d4bd1","type":"SaveTool"}],"root_ids":["401d6a96-5b08-4a4c-9e06-096ba22bfa3d"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"e7b183f1-ef9a-4170-88b4-5a9fa44bc26d","elementid":"0d044dfd-6b51-4f87-8753-7ae28b7dbcc6","modelid":"401d6a96-5b08-4a4c-9e06-096ba22bfa3d"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
