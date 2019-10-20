(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("d34ed2f7-48ea-4833-b17f-880e8fda7d39");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd34ed2f7-48ea-4833-b17f-880e8fda7d39' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"e41f0c46-cbdc-4377-9764-77fa591012a5":{"roots":{"references":[{"attributes":{},"id":"ae507e5c-ee9d-428d-bd49-400734581f72","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"4666c845-90fe-4879-81cb-9a5e678eec61","type":"BoxAnnotation"},"plot":{"id":"7fb9f399-2a6e-44e6-9603-21de0c4c0a96","subtype":"Figure","type":"Plot"}},"id":"f2406e55-3081-42bf-bab0-f13425de07b8","type":"BoxZoomTool"},{"attributes":{},"id":"fdb1aeb2-c6da-4081-9d1e-1a0f874f20b5","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b9c4f005-124a-4c6c-a148-89d017625d77","type":"PanTool"},{"id":"74bd2d3d-c91a-4523-b8bb-e1e621e73d58","type":"WheelZoomTool"},{"id":"f2406e55-3081-42bf-bab0-f13425de07b8","type":"BoxZoomTool"},{"id":"249f365e-18a4-4691-ae24-ac696bd2ed40","type":"SaveTool"},{"id":"edcd4c1b-a7b0-4771-92bb-32243cc132ba","type":"ResetTool"},{"id":"8f31aa3b-1f30-4cc7-94dd-2b5a900959fe","type":"HelpTool"}]},"id":"9ff2bc2b-2fb2-4863-b296-7a0bf59473ba","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["xs","ys","fill_color"],"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEBAAAAAAACASkAAAAAAAABFQAAAAAAAAD9AAAAAAAAASkAAAAAAAMBUQAAAAAAAgEhAAAAAAAAAMkAAAAAAAIBHQAAAAAAAQFVAAAAAAADAWEAAAAAAAAAqQAAAAAAAgEFAAAAAAACAREAAAAAAAAA4QAAAAAAAwFNAAAAAAADAUkAAAAAAAIBRQAAAAAAAADJAAAAAAACASUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACASUAAAAAAAAAyQAAAAAAAgFFAAAAAAADAUkAAAAAAAMBTQAAAAAAAADhAAAAAAACAREAAAAAAAIBBQAAAAAAAACpAAAAAAADAWEAAAAAAAEBVQAAAAAAAgEdAAAAAAAAAMkAAAAAAAIBIQAAAAAAAwFRAAAAAAAAASkAAAAAAAAA/QAAAAAAAAEVAAAAAAACASkAAAAAAAIBAQAAAAAAAgE9AAAAAAAAAVUAAAAAAAIBKQAAAAAAAgElAAAAAAABAVUAAAAAAAEBmQAAAAAAAoGFAAAAAAACAT0AAAAAAAMBRQAAAAAAAQGVAAAAAAACgYEAAAAAAAIBJQAAAAAAAIGBAAAAAAACAUUAAAAAAAIBbQAAAAAAAgFpAAAAAAADAWkAAAAAAAABVQAAAAAAAAFJAAAAAAADgYEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADgYEAAAAAAAABSQAAAAAAAAFVAAAAAAADAWkAAAAAAAIBaQAAAAAAAgFtAAAAAAACAUUAAAAAAACBgQAAAAAAAgElAAAAAAACgYEAAAAAAAEBlQAAAAAAAwFFAAAAAAACAT0AAAAAAAKBhQAAAAAAAQGZAAAAAAABAVUAAAAAAAIBJQAAAAAAAgEpAAAAAAAAAVUAAAAAAAIBPQAAAAAAAQFhAAAAAAACAXkAAAAAAAKBhQAAAAAAAwFlAAAAAAAAAWkAAAAAAAMBuQAAAAAAAYGVAAAAAAADgY0AAAAAAAMBeQAAAAAAAAGhAAAAAAACAZkAAAAAAAKBhQAAAAAAAIGJAAAAAAACAYUAAAAAAACBiQAAAAAAAQF1AAAAAAABgY0AAAAAAAIBaQAAAAAAAwF1AAAAAAABAYkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABAYkAAAAAAAMBdQAAAAAAAgFpAAAAAAABgY0AAAAAAAEBdQAAAAAAAIGJAAAAAAACAYUAAAAAAACBiQAAAAAAAoGFAAAAAAACAZkAAAAAAAABoQAAAAAAAwF5AAAAAAADgY0AAAAAAAGBlQAAAAAAAwG5AAAAAAAAAWkAAAAAAAMBZQAAAAAAAoGFAAAAAAACAXkAAAAAAAEBYQAAAAAAAwFxAAAAAAAAAY0AAAAAAAGBrQAAAAAAAwF9AAAAAAABAXUAAAAAAAPBzQAAAAAAA4GpAAAAAAABgbUAAAAAAAMBmQAAAAAAAIGtAAAAAAADAaUAAAAAAAMBlQAAAAAAA4GxAAAAAAAAgaEAAAAAAAGBtQAAAAAAAwGdAAAAAAADAZEAAAAAAAGBkQAAAAAAAoGZAAAAAAADgZUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADgZUAAAAAAAKBmQAAAAAAAYGRAAAAAAADAZEAAAAAAAMBnQAAAAAAAYG1AAAAAAAAgaEAAAAAAAOBsQAAAAAAAwGVAAAAAAADAaUAAAAAAACBrQAAAAAAAwGZAAAAAAABgbUAAAAAAAOBqQAAAAAAA8HNAAAAAAABAXUAAAAAAAMBfQAAAAAAAYGtAAAAAAAAAY0AAAAAAAMBcQAAAAAAAIGhAAAAAAABgaUAAAAAAAGBxQAAAAAAAAGhAAAAAAADAYUAAAAAAAOB4QAAAAAAAgHBAAAAAAAAwcUAAAAAAAEBtQAAAAAAAMHJAAAAAAACAbkAAAAAAAKBsQAAAAAAAcHFAAAAAAABwcEAAAAAAAKByQAAAAAAAYG5AAAAAAACAakAAAAAAAIBtQAAAAAAA4G5AAAAAAACgbUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACgbUAAAAAAAOBuQAAAAAAAgG1AAAAAAACAakAAAAAAAGBuQAAAAAAAoHJAAAAAAABwcEAAAAAAAHBxQAAAAAAAoGxAAAAAAACAbkAAAAAAADByQAAAAAAAQG1AAAAAAAAwcUAAAAAAAIBwQAAAAAAA4HhAAAAAAADAYUAAAAAAAABoQAAAAAAAYHFAAAAAAABgaUAAAAAAACBoQAAAAAAAYGxAAAAAAAAAa0AAAAAAAJBzQAAAAAAA4GxAAAAAAADgZ0AAAAAAANB+QAAAAAAAEHZAAAAAAAAQdUAAAAAAAIBwQAAAAAAAkHVAAAAAAABQdUAAAAAAAFBxQAAAAAAAoHVAAAAAAAAgc0AAAAAAALB3QAAAAAAAkHRAAAAAAABQcEAAAAAAAPByQAAAAAAA8HNAAAAAAACgckA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACgckAAAAAAAPBzQAAAAAAA8HJAAAAAAABQcEAAAAAAAJB0QAAAAAAAsHdAAAAAAAAgc0AAAAAAAKB1QAAAAAAAUHFAAAAAAABQdUAAAAAAAJB1QAAAAAAAgHBAAAAAAAAQdUAAAAAAABB2QAAAAAAA0H5AAAAAAADgZ0AAAAAAAOBsQAAAAAAAkHNAAAAAAAAAa0AAAAAAAGBsQAAAAAAA8HFAAAAAAAAgcEAAAAAAACB4QAAAAAAAkHNAAAAAAADgaUAAAAAAAHCCQAAAAAAA4HZAAAAAAADgdUAAAAAAAGBzQAAAAAAAAHdAAAAAAACAeEAAAAAAADB0QAAAAAAAUHpAAAAAAAAQdEAAAAAAACB5QAAAAAAA0HlAAAAAAACgcUAAAAAAANB2QAAAAAAAYHZAAAAAAACgdkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACgdkAAAAAAAGB2QAAAAAAA0HZAAAAAAACgcUAAAAAAANB5QAAAAAAAIHlAAAAAAAAQdEAAAAAAAFB6QAAAAAAAMHRAAAAAAACAeEAAAAAAAAB3QAAAAAAAYHNAAAAAAADgdUAAAAAAAOB2QAAAAAAAcIJAAAAAAADgaUAAAAAAAJBzQAAAAAAAIHhAAAAAAAAgcEAAAAAAAPBxQAAAAAAAoHJAAAAAAACgdEAAAAAAAMB4QAAAAAAAsHdAAAAAAACQcEAAAAAAAAiDQAAAAAAAsHhAAAAAAACgdkAAAAAAAHB3QAAAAAAA4HdAAAAAAACwfUAAAAAAAOB1QAAAAAAA0H9AAAAAAAAQdUAAAAAAANB8QAAAAAAAcH5AAAAAAAAgdUAAAAAAAHB5QAAAAAAA8HtAAAAAAADQe0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADQe0AAAAAAAPB7QAAAAAAAcHlAAAAAAAAgdUAAAAAAAHB+QAAAAAAA0HxAAAAAAAAQdUAAAAAAANB/QAAAAAAA4HVAAAAAAACwfUAAAAAAAOB3QAAAAAAAcHdAAAAAAACgdkAAAAAAALB4QAAAAAAACINAAAAAAACQcEAAAAAAALB3QAAAAAAAwHhAAAAAAACgdEAAAAAAAKByQAAAAAAAIHVAAAAAAAAgeEAAAAAAAKB6QAAAAAAAcHtAAAAAAABAckAAAAAAAFiEQAAAAAAA0HxAAAAAAACQeUAAAAAAALB4QAAAAAAAIHpAAAAAAABggUAAAAAAAOB5QAAAAAAA+IJAAAAAAAAAe0AAAAAAAFCBQAAAAAAAmIFAAAAAAACAeEAAAAAAAOB7QAAAAAAAEH5AAAAAAABQgEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABQgEAAAAAAABB+QAAAAAAA4HtAAAAAAACAeEAAAAAAAJiBQAAAAAAAUIFAAAAAAAAAe0AAAAAAAPiCQAAAAAAA4HlAAAAAAABggUAAAAAAACB6QAAAAAAAsHhAAAAAAACQeUAAAAAAANB8QAAAAAAAWIRAAAAAAABAckAAAAAAAHB7QAAAAAAAoHpAAAAAAAAgeEAAAAAAACB1QAAAAAAAQHlAAAAAAACQeUAAAAAAAEiAQAAAAAAAYH9AAAAAAADQdEAAAAAAAPCEQAAAAAAAYIFAAAAAAADgfUAAAAAAAKB9QAAAAAAAMHxAAAAAAABwhEAAAAAAAPB9QAAAAAAAWIVAAAAAAABAfUAAAAAAADiEQAAAAAAAOINAAAAAAABAekAAAAAAADiAQAAAAAAA8IBAAAAAAACwgkA=","dtype":"float64","shape":[40]}]}},"id":"f7c84931-7ce7-43c4-8e68-f5cd5a8482a5","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"7fb9f399-2a6e-44e6-9603-21de0c4c0a96","subtype":"Figure","type":"Plot"}},"id":"edcd4c1b-a7b0-4771-92bb-32243cc132ba","type":"ResetTool"},{"attributes":{"formatter":{"id":"ae507e5c-ee9d-428d-bd49-400734581f72","type":"BasicTickFormatter"},"plot":{"id":"7fb9f399-2a6e-44e6-9603-21de0c4c0a96","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb11de02-ee6d-485f-ad1a-3b2d066cb26d","type":"BasicTicker"}},"id":"0a89eeb1-4cb5-4e2a-bc75-af59d8c91d8a","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"47f64926-c392-44aa-8794-3976fb6da2ec","type":"Patches"},{"attributes":{"plot":{"id":"7fb9f399-2a6e-44e6-9603-21de0c4c0a96","subtype":"Figure","type":"Plot"}},"id":"249f365e-18a4-4691-ae24-ac696bd2ed40","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"47c02e2b-4ad9-43d9-a45d-54d0294ea83f","type":"Title"},{"attributes":{"data_source":{"id":"f7c84931-7ce7-43c4-8e68-f5cd5a8482a5","type":"ColumnDataSource"},"glyph":{"id":"47f64926-c392-44aa-8794-3976fb6da2ec","type":"Patches"},"hover_glyph":null,"nonselection_glyph":{"id":"6f61414a-21a5-4de6-b6fa-abba5bf97427","type":"Patches"},"selection_glyph":null},"id":"afe779b0-429a-4f3e-b13f-de018b0311fd","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7fb9f399-2a6e-44e6-9603-21de0c4c0a96","subtype":"Figure","type":"Plot"}},"id":"74bd2d3d-c91a-4523-b8bb-e1e621e73d58","type":"WheelZoomTool"},{"attributes":{},"id":"562a7fcb-abc7-46af-ae48-bf22f8711f0a","type":"ToolEvents"},{"attributes":{"formatter":{"id":"9861420f-29fb-4d46-8800-538fdf888d1a","type":"BasicTickFormatter"},"plot":{"id":"7fb9f399-2a6e-44e6-9603-21de0c4c0a96","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdb1aeb2-c6da-4081-9d1e-1a0f874f20b5","type":"BasicTicker"}},"id":"7fe8de53-5faa-41b6-9625-b324c8fc3719","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"6f61414a-21a5-4de6-b6fa-abba5bf97427","type":"Patches"},{"attributes":{},"id":"9861420f-29fb-4d46-8800-538fdf888d1a","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"7fb9f399-2a6e-44e6-9603-21de0c4c0a96","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb11de02-ee6d-485f-ad1a-3b2d066cb26d","type":"BasicTicker"}},"id":"201d968e-d899-421f-a7a0-2b477a9fd638","type":"Grid"},{"attributes":{"callback":null,"end":800},"id":"9e64465b-789f-415d-8398-94fd62dc43ad","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4666c845-90fe-4879-81cb-9a5e678eec61","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"7fe8de53-5faa-41b6-9625-b324c8fc3719","type":"LinearAxis"}],"left":[{"id":"0a89eeb1-4cb5-4e2a-bc75-af59d8c91d8a","type":"LinearAxis"}],"renderers":[{"id":"7fe8de53-5faa-41b6-9625-b324c8fc3719","type":"LinearAxis"},{"id":"b0cda98f-2f4b-4c52-b484-237fc93e23d2","type":"Grid"},{"id":"0a89eeb1-4cb5-4e2a-bc75-af59d8c91d8a","type":"LinearAxis"},{"id":"201d968e-d899-421f-a7a0-2b477a9fd638","type":"Grid"},{"id":"4666c845-90fe-4879-81cb-9a5e678eec61","type":"BoxAnnotation"},{"id":"afe779b0-429a-4f3e-b13f-de018b0311fd","type":"GlyphRenderer"}],"title":{"id":"47c02e2b-4ad9-43d9-a45d-54d0294ea83f","type":"Title"},"tool_events":{"id":"562a7fcb-abc7-46af-ae48-bf22f8711f0a","type":"ToolEvents"},"toolbar":{"id":"9ff2bc2b-2fb2-4863-b296-7a0bf59473ba","type":"Toolbar"},"x_range":{"id":"b792736c-5599-4a1f-8d35-7d391091f866","type":"Range1d"},"y_range":{"id":"9e64465b-789f-415d-8398-94fd62dc43ad","type":"Range1d"}},"id":"7fb9f399-2a6e-44e6-9603-21de0c4c0a96","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"7fb9f399-2a6e-44e6-9603-21de0c4c0a96","subtype":"Figure","type":"Plot"}},"id":"8f31aa3b-1f30-4cc7-94dd-2b5a900959fe","type":"HelpTool"},{"attributes":{},"id":"bb11de02-ee6d-485f-ad1a-3b2d066cb26d","type":"BasicTicker"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"7fb9f399-2a6e-44e6-9603-21de0c4c0a96","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdb1aeb2-c6da-4081-9d1e-1a0f874f20b5","type":"BasicTicker"}},"id":"b0cda98f-2f4b-4c52-b484-237fc93e23d2","type":"Grid"},{"attributes":{"plot":{"id":"7fb9f399-2a6e-44e6-9603-21de0c4c0a96","subtype":"Figure","type":"Plot"}},"id":"b9c4f005-124a-4c6c-a148-89d017625d77","type":"PanTool"},{"attributes":{"callback":null,"end":19},"id":"b792736c-5599-4a1f-8d35-7d391091f866","type":"Range1d"}],"root_ids":["7fb9f399-2a6e-44e6-9603-21de0c4c0a96"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"e41f0c46-cbdc-4377-9764-77fa591012a5","elementid":"d34ed2f7-48ea-4833-b17f-880e8fda7d39","modelid":"7fb9f399-2a6e-44e6-9603-21de0c4c0a96"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
